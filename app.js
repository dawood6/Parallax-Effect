var scrollPos = 0;
window.addEventListener("scroll", function () {
  if (document.body.getBoundingClientRect().top > scrollPos) console.log("up");
  else console.log("dowm");
  scrollPos = document.body.getBoundingClientRect().top;
});
