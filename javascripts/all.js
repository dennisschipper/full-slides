document.addEventListener("DOMContentLoaded", function(event) {





  (function(){

    // Let's add some funtionality for adding and removing classes
    var removeClass = function(item, classToRemove){
      var classes = item.className.split(" ");
      if ( classes.indexOf(classToRemove) > -1 ) {
        classes.splice(classes.indexOf(classToRemove), 1)
        item.className = classes.join(" ");
      }
    }


    var toggleClass = function(item, toggle){
      var classes = item.className.split(" ")
      if ( classes.indexOf(toggle) > -1 ) {
        removeClass(item, toggle)
      } else {
        for (var i = 0; i < stompySlides.length; i++) {
          removeClass(stompySlides[i], toggle)
        }

        item.className = item.className + " " + toggle
      }
    };




    var stompyButtons = Array.prototype.slice.call(document.querySelectorAll(".stompy-controls a"))
    var stompySlides = Array.prototype.slice.call(document.querySelectorAll(".stompy-slides li"))



    for (var i = 0; i < stompyButtons.length; i++) {
      stompyButtons[i].addEventListener("click", function(event){
        event.preventDefault();
        var slide = stompySlides[stompyButtons.indexOf(this)];
        toggleClass(slide, "active")
      })
    }
  })();






});
