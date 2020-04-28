window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop < 120 || document.documentElement.scrollTop === 120 ) {
    document.getElementById("myh1").className = "slideUp";
  } else  {
    document.getElementById("myh1").className = "";
  } if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350 ) {
    document.getElementById("myh1").className = "animation";
  }
}