function init(){
    var canvas = document.getElementById('mycanvas');
    W = H = canvas.width = canvas.height = 1000;
    pen = canvas.getContext('2d'); //to draw object
    cs = 66; //cell size is 50
    snake = {
        init_len: 5,
        color: "blue",
        cells: [],
        direction: "right",


        createSnake: function(){
            for(var i=this.init_len; i>0;i--){
                this.cells.push({x:i,y:0});
            }
        },
        drwaSnake:function(){
            for(var i=0;i<this.cells.length;i++){
                pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs,cs-2,cs-2); //cs -2 to see the distinction between 2 boxes
            }
        }
};

snake.createSnake();

}

function draw(){
    snake.drwaSnake();

}

function update(){

}

function gameloop(){
    draw();
    update();
}

init();

var f = setInterval(gameloop,100);