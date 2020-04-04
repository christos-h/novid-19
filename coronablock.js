(function () {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  console.log('got here corona')
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  console.log('got here after if')

  console.log( $( "div" ).get( 0 ) );

  console.log("after get")

  // select relevant elements
  var elements = $('div');

  console.log('got here after element');
  // go through the elements and find the one with the value
  

  elements.each(function (index, domElement) {
    var $element = $(domElement);
    console.log('got here in iterator')
    // does the element have the text we're looking for?
    if ($element.includes("you")) {
      $element.hide();
      // hide the element with jQuery
      return false;
      // jump out of the each
    }
  });



  // browser.tabs.executeScript({ file: "jquery-3.4.1.min.js" })
  //   .then(removeContent)
  //   .catch(reportExecuteScriptError);

  console.log('got here aftert exec')
})();

