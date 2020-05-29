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
        drawSnake:function(){
            for(var i=0;i<this.cells.length;i++){
                pen.fillStyle = this.color;
                pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs,cs-2,cs-2); //cs -2 to see the distinction between 2 boxes
            }
        },
        updateSnake: function(){
            console.log("Updating snake");

            //extract cell from the last of the array
            this.cells.pop();
            var headX = this.cells[0].x;
            var headY = this.cells[0].y;

            var X = headX + 1;
            var Y = headY;
            this.cells.unshift({x:X,y:Y})
        }
};

snake.createSnake();

}

function draw(){

    //erase the old frame
    pen.clearRect(0,0,W,H)

    snake.drawSnake();

}

function update(){
    snake.updateSnake();
}

function gameloop(){
    draw();
    update();
}

init();

var f = setInterval(gameloop,100);