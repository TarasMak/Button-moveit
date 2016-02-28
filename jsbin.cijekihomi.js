function moveIt(buttom){
  var x=Math.floor(Math.random() * 350);
  var y=Math.floor(Math.random() * 650);
  
  buttom.style.left=x + "px";
  buttom.style.top=y + "px";
  buttom.style.color = "green";
  
}