var canvas = new fabric.Canvas("mycanvas");
block_img_width = 30;
block_img_height = 30;
player_x = 10;
player_y = 10;
var block_object = "";
var player_object = "";
function player_upadte() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
         top:player_y,
         left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
      keypresed = e.keyCode;
      console.log(keypresed);
      if (e.shiftKey == true && keypresed == '80'){
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
           document.getElementById("current_width").innerHTML = block_img_width;
           document.getElementById("current _height").innerHTML = block_img_height;
      }
      if (e.shiftKey == true && keypresed == '77'){
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
           document.getElementById("current_width").innerHTML = block_img_width;
           document.getElementById("current _height").innerHTML = block_img_height;
      }
      if (keypresed == '38'){
        up();
      }
      if (keypresed == '40'){
        down();
      }
      if (keypresed == '37'){
        left();
      }
      if (keypresed == '39'){
        right();
      }
      if (keypresed == '87'){
        new_image("wall.jpg");
      }
      if (keypresed == '71'){
        new_image("ground.png");
      }
      if (keypresed == '76'){
        new_image("light_green.png");
      }
      if (keypresed == '84'){
        new_image("trunk.jpg");
      }
      if (keypresed == '82'){
        new_image("roof.jpg");
      }
      if (keypresed == '89'){
        new_image("yellow_wall.png");
      }
      if (keypresed == '68'){
        new_image("dark_green.png");
      }
      if (keypresed == '85'){
        new_image("unique.png");
      }
      if (keypresed == '67'){
        new_image("cloud.jpg");
      }
}
function up(){
  if (player_y >= 0 ){
    player_y = player_y - block_img_height;
    canvas.remove(player_object);
    player_upadte();
  }
}
function down(){
  if (player_y <= 450 ){
    player_y = player_y + block_img_height;
    canvas.remove(player_object);
    player_update();
  }
}
function left(){
  if(player_x >= 0){
    player_x = player_x - block_img_width;
    canvas.remove(player_object);
    player_upadte();
  }
}
function right(){
  if(player_x <= 850){
    player_x = player_x + block_img_width;
    canvas.remove(player_object);
    player_upadte();
  }
}