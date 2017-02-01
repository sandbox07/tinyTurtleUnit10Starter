TinyTurtle.apply(window);

penStyle = 'green'; 

function triangle(x){
    right(45);
    forward(x);
    right(90);
    forward(x);
    right(135);
    forward(x);
}

function house(y){
    square(y);
    triangle(y);
}

function pentagon(w){
    for(var i = 0; i <= 5; i++){
    forward(w);
    right(72);
    }
}

function hexagon(v){
    for(var i = 0; i <= 6; i++){
    forward(v);
    right(60);
    }
}

function square(width) {
    forward(width);
    right(90);
    forward(width);
    right(90);
    forward(width);
    right(90);
    forward(width);
    right(90);
}

function rotatedSquare(width, angle){
    for(var i=0; i<(width/10); i ++){
        square(width-(10*i));
        left(angle);
        //change by even and odd
    }
}

function shape(size, angle){
    for(var i = 0; i < (360/angle); i++){
        forward(size);
        right(angle);
}
}
//rotatedSquare(70, 50);
shape(20, 67);
// Type your function call below
/*square(10);
triangle(15);
house(18);
pentagon(20);
hexagon(30);*/