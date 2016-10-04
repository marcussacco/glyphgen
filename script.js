function draw() {
  //grain is basically level of detail. lower = blockier.
  var grain = 10;
  var blockout = Math.random();
  var canvas = document.getElementById('canvas');
  var w = canvas.width;
  var h = canvas.width;
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(116,175,191)";
    ctx.fillRect(0,0,w,h);

    function pokeOut(){
      var posX = 0;
      var posY = 0;
      ctx.fillStyle = "white";

      for(var y=0; y<grain; y++){
        for(var x=0; x<grain; x++){
          if(blockout < .2){
            ctx.fillRect(posX,posY,w/grain,h/grain);
            ctx.fillRect(w-posX-w/grain,posY,w/grain,h/grain);
            posX += w/grain;
          }else{
            posX += w/grain;
          }
          blockout = Math.random();
        }
        posY += h/grain;
        posX = 0;
      }
    }
  }
  pokeOut();
}

draw();

document.body.onkeyup = function(e){
  if(e.keyCode == 32){
    draw();
  }
}
