var cube = document.querySelector('.cuboid');
var nodelist = cube.querySelectorAll ('.cuboid_side');
var up_btn = document.getElementById('up');
var down_btn = document.getElementById('down');
var left_btn = document.getElementById('left');
var right_btn = document.getElementById('right');

var text_wood = document.getElementById('wood');
var text_diamond = document.getElementById('diamond');
var text_ruby = document.getElementById('ruby');
var text_rock = document.getElementById('rock');
var text_cube = document.getElementById('cube');

var inc = 2;
var updateAngle = "";
var id_x = 0;
var id_y = 0;
var x = -20;
var y = -20;
var dir_dec = 0;

up_btn.addEventListener('mousedown', up_press);
up_btn.addEventListener('mouseup', release);
down_btn.addEventListener('mousedown', down_press);
down_btn.addEventListener('mouseup', release);
left_btn.addEventListener('mousedown', left_press);
left_btn.addEventListener('mouseup', release);
right_btn.addEventListener('mousedown', right_press);
right_btn.addEventListener('mouseup', release);

text_cube.addEventListener('click', function(){
  for(var value of nodelist.values()) {
    value.style = "";
  }
});
text_wood.addEventListener('click', function(){
  for(var value of nodelist.values()) {
    value.style = "background-image: url('texture_wood.jpg'); background-size: cover; opacity: 1;";
  }
});
text_diamond.addEventListener('click', function(){
  for(var value of nodelist.values()) {
    value.style = "background-image: url('texture_diamond.jpg'); background-size: cover;";
  }
});
text_ruby.addEventListener('click', function(){
  for(var value of nodelist.values()) {
    value.style = "background-image: url('texture_ruby.jpg'); background-size: cover;";
  }
});
text_rock.addEventListener('click', function(){
  for(var value of nodelist.values()) {
    value.style = "background-image: url('texture_rock.jpg'); background-size: cover; opacity: 1;";
  }
});

function release(){
  cancelAnimationFrame(id_x);
  cancelAnimationFrame(id_y);
}

function up_press(){
  dir_dec = 0;
  requestAnimationFrame(rotateX);
}

function down_press(){
  dir_dec = 1;
  requestAnimationFrame(rotateX);
}

function left_press(){
  dir_dec = 0;
  requestAnimationFrame(rotateY);
}

function right_press(){
  dir_dec = 1;
  requestAnimationFrame(rotateY);
}

function moveCube(op){
  if(x >= 360) x = 0;
  if(y >= 360) y = 0;

  if(op){
    inc = -Math.abs(inc);
    if(dir_dec){
      inc = Math.abs(inc);
    }
    if((Math.abs(x) >= 90 && Math.abs(x) < 270)){
      inc = -inc;
    }
    y += inc;
  }else{
    inc = Math.abs(inc);
    if(dir_dec){
      inc = -Math.abs(inc);
    }
    x += inc;
  }
  updateAngle = "transform: rotateX(" + x + "deg)";
  updateAngle += "rotateY(" + y + "deg);";
  console.log("x: " + x + " y: " + y);
}

function rotateX(){
  moveCube(0);
  cube.style = updateAngle;
  id_x = requestAnimationFrame(rotateX);
}

function rotateY(){
  moveCube(1);
  cube.style = updateAngle;
  id_y = requestAnimationFrame(rotateY);
}
