var canvas = document.getElementById('jeu');
if (canvas.getContext) {  
  var ctx = canvas.getContext('2d');
    
  ctx.fillStyle = '#d9d9d9';
  ctx.fillRect(0, 0, 500, 1000);

  ctx.fillStyle = '#f2f2f2';
  ctx.fillRect(500, 00, 500, 1000);

} 
  const img = new Image();

  img.onload = () => {
    ctx.drawImage(img, 425, 300, 150, 150);
    ctx.rectfill(0,0,100,100);
  }
  img.src = '/images/1c.gif'


 

