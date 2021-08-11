window.onload = (event) => {
  setInterval(function(){
  var R = Number(Math.floor(Math.random()*255)).toString(16);
  var X = Number(Math.abs((parseInt(R,16))-50)).toString(16);
  var G = Number(Math.floor(Math.random()*255)).toString(16);
  var Y = Number(Math.abs((parseInt(G,16))-50)).toString(16);
  var B = Number(Math.floor(Math.random()*255)).toString(16);
  var Z = Number(Math.abs((parseInt(B,16))-50)).toString(16);
  if (2==2){
    document.getElementById('a').style.backgroundColor="#"+R+G+B;
    document.body.style.backgroundColor="#"+X+Y+Z;
  }}, 2000);
}