window.onload = (event) => {
  setInterval(function(){
  var R = Number(Math.floor(Math.random()*255)).toString(16);
  var G = Number(Math.floor(Math.random()*255)).toString(16);
  var B = Number(Math.floor(Math.random()*255)).toString(16);
  document.getElementById('a').style.backgroundColor="#"+R+G+B;
  document.body.style.backgroundColor="#"+R+G+B;
  }, 1000);
}