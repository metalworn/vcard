# QRL-Faucet

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/9e84757acf4144f19e818a5b2a698a0a)](https://app.codacy.com/app/fr1t2/Quantum_Resistant_Ledger-Faucet?utm_source=github.com&utm_medium=referral&utm_content=fr1t2/Quantum_Resistant_Ledger-Faucet&utm_campaign=Badge_Grade_Settings)

This is the software running the QRL Faucet hosted over at https://faucet.qrl.tips configured to give away coins once a day to any valid QRL address.

The faucet interfaces with the gRPC wallet running on a full node server side. The WalletAPI has been developed to utilize slave transactions by default.

Please see below for installation instructions if you want to host a faucet your self.

> This software is provided to the public AS-IS with no guarantee. Server hardening and best practice is recommended.

## Overview

The server is broken up into a few parts to simplify the operation and security. There is extensive setup and configuration that must be completed before this will work, and is no way a simple setup.

The site is built as a static php/HTML site that can be hosted from any modern web server. I chose apache2 as it is most familiar to me. Nginx would be another option.

Installation and configuration of a web server is out of scope for these instructions.

### QRL Node

This is required to transact on the QRL network. You will need to sync a full node.

### Scripting

There are a few scripts that this faucet relies on. Most live in the `/script` directory however the Web server needs to have access to the php scripts so they live in the web root.

### PHP

The `/web/php/` directory contains getInfo.php and main.php.

`main.php` is the script that the user will `$POST` to. It collects the QRL address, time submitted, IP address *(hashed)* and commits it to the mySQL database. 

> At the top of the `main.php` file are user configurable settings that must be configured for the faucet to work.

See below for configuration details.

`/web/php/getInfo.php` is used to gather information from the user that submitted the request for QRL. This grabs the submitted IP address and verifies it has not been submitted within the last 24 hrs. `/web/php/getInfo.php` is called by the `/web/php/main.php` script to validate an IP.

We accept a POST from the website to enter a valid QRL address and hashed IP address into the database with a time stamp.

### Database

MySQL database is used to store and track the faucet operations. Instructions can be found below


## Installation

This instruction assumes a clean installation of Ubuntu 16.04. You will want to set this up on a reliable server connected to a stable network connection with a static IP address for simplicity.

1. [Install Packages](#1---install-packages)
2. [Install Software](#2---install-software)
   1. [QRL](#qrl)
   2. [QRL State](#qrl-state)
   3. [GoLang](#golang)
   4. [Faucet](#faucet)
3. [Config](#3---config)
   1. [Start QRL](#start-qrl)
   2. [start qrl_walletd](#start-qrl_walletd)
   3. [Start The API](#start-the-api)
   4. [Create Wallet](#create-qrl-wallet)
   5. [Setup Database](#setup-database)
   6. [COnfigure The Site](#configure-the-site)
4. [Automate](#4---sutomate)
   1. [Cron Job](#cron-job)
5. [Finish Up](#5---finish-up)

**Basic Install Process Outline**

- Start QRL Node
   - Fully sy