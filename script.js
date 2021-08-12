window.onload = (event) => {
  setInterval(function(){
  var R = Number(Math.floor(Math.random()*255)).toString(16);
  var G = Number(Math.floor(Math.random()*255)).toString(16);
  var B = Number(Math.floor(Math.random()*255)).toString(16);
  document.querySelector('div').style.backgroundColor= document.body.style.backgroundColor="#"+R+G+B;
  document.querySelector("meta[name=theme-color]").setAttribute("content","#"+R+G+B);
  }, 1000);
}
function fullscreen()
{document.documentElement.requestFullscreen();}