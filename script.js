TinyTurtle.apply(window);

penStyle = 'green'; 

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}

function triangle(){
    right(45);
    forward(35);
    right(90);
    forward(35);
    right(135);
    forward(50);
}

function house(){
    square();
    triangle();
}

function pentagon(){
    for(var i = 0; i <= 5; i++){
    forward(40);
    right(72);
    }
}

function hexagon(){
    for(var i = 0; i <= 6; i++){
    forward(20);
    right(60);
    }
}

function circle(){
    for(var i = 0; i <= 360; i++){
        forward(1);
        right(90);
        forward(1);
        left(90);
    }
}
// Type your function call below
//square();
//triangle();
//house();
//pentagon();
//hexagon();
circle();
