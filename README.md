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

There are a few scripts that this fauce