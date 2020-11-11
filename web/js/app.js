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
Foundation.Abide.defaults.patterns['qrl_address'] = /^(Q|q)[0-9a-zA-Z]{78}$/;
Foundation.Abide.defaults.validators['greater_than'] = myCustomValidator;

$( '#addressForm' ).submit(function( event ) {
  event.preventDefault();
  var form = $( this );

// Post Function for submit button after coinhive
  $.ajax({
    type: 'POST',
    url: '/php/main.php',
    data: form.serialize(),
    dataType: 'json',
    success: function( resp ) {
      console.log( resp );
      success = resp.success;
      if (success) {
        console.log( "Success value is: "+success );
      } else {
        console.log( "Success value is: "+success );   
      }

      console.log( "data Submitted through POST" );
  //alert the user of the goings on here...
      if (success === true) {
        document.getElementById("CoinhiveDiv").innerHTML = 
        "<div class='callout success'>" + 
        "<h1>SUCCESS!</h1>"+
        "<h5>Your Address Has Been Submitted!</h5>"+
        "<p>You will receive a paymen