function myCustomValidator(
  $el,      /* jQuery element to validate */
  required, /* is the element required according to the `[required]` attribute */
  parent    /* parent of the jQuery element `$el` */
) {
  if (!required) return true;
  var from = $('#'+$el.attr('data-greater-than')).val(),
      to = $el.val();
  return (parseInt(to) > parseInt(from));
}

// Set default options
Foundation.Abide.defaults.patterns['qrl_address'] = /^(Q|q)[0-9a-zA-Z]{7