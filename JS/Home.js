let triFunction = document.getElementById("triangle");
triFunction.addEventListener("mouseenter", function ( event ) {
    event.target.style.border = 'border-right: 50px solid red';

    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
    
    // This handler will be executed every time the cursor
    // is moved over a different list item
    triangle.addEventListener("mouseover", function( event ) {
      // highlight the mouseover target
      event.target.style.color = "orange";
    
      // reset the color after a short delay
      setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);