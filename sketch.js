let singleBall;//single ball
let ballsArray=[];
let ballFunc;//call the addBalls func

function addBalls(){
    let r=Math.round(Math.random()*255)
    let g=Math.round(Math.random()*255)
    let b=Math.round(Math.random()*255)
    singleBall = new createBalls(r,g,b)
    ballsArray.push(singleBall)
}

function mousePressed(){
    ballFunc = new addBalls();
}

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background('black')
    //draw balls
    console.log(ballsArray.length)
    for (i=0; i < ballsArray.length ; i++) {
        let ball= ballsArray[i];
        ball.display();
        ball.rebote();
        for (let j = 0; j < ballsArray.length; j++) {
            if (i != j && ballsArray[i].collide(ballsArray[j])) {
                ball.changeDirection();
            }
        }
    }

    /*ballsArray.forEach(singleBall => {
        singleBall.collide(singleBall);
    });*/
}

