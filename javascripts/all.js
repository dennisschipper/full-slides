document.addEventListener("DOMContentLoaded", function(event) {
  // Find the content element
  function findStompyContent(attrib) {
    x = attrib.getAttribute("data-stompy")
    document.querySelectorAll(".stompy-content[data-stompy=" + x + "]")[0].style.top = "0px"
    document.querySelectorAll(".stompy-content[data-stompy=" + x + "]")[0].style.left = "0px"
  }

  // Find the hide button
  function hideStompyContent(attrib) {
    x = attrib.getAttribute("data-stompy")
    document.querySelectorAll(".stompy-content[data-stompy=" + x + "]")[0].style.top = ""
    document.querySelectorAll(".stompy-content[data-stompy=" + x + "]")[0].style.left = ""
  }

  // Set the open click event
  var stompyButtons = document.querySelectorAll(".stompy-open");
  for (var i = 0; i < stompyButtons.length; i++) {
    stompyButtons[i].addEventListener("click", function(event){
      event.preventDefault;
      findStompyContent(event.target)
    })
  }

  // Set the hide click event
  var stompyHideButtons = document.querySelectorAll(".stompy-hide");
  for (var i = 0; i < stompyHideButtons.length; i++) {
    stompyHideButtons[i].addEventListener("click", function(event){
      event.preventDefault;
      hideStompyContent(event.target)
    })
  }
})
;
