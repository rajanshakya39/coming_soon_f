function randomRange(min, max){
  return Math.random() * (max - min) + min;
}

$('path').each(function(){
  $this = $(this);
  TweenMax.fromTo($this, randomRange(2, 5), {drawSVG: "0%"}, {drawSVG: "100%", ease: Power1.easeInOut, delay: randomRange(1,3)});
})