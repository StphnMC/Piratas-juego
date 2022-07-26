class Bola{
    constructor(x,y){
        var opciones={isStatic:true};
        this.x=x;
        this.y=y;
        this.diametro=30;
        this.body=Bodies.circle(this.x,this.y,this.diametro,opciones);
        this.img=loadImage("./assets/cannonball.png");
        World.add(world,this.body)

    }
    display(){
        push();
        imageMode(CENTER);
        image(this.img,this.x,this.y,this.diametro,this.diametro);
        pop();
    }
    disparar(){
        var nuevo_angulo = canon.angle-28;
        nuevo_angulo=nuevo_angulo*(3.14/180);
        var velocidad = p5.Vector.fromAngle(nuevo_angulo);
        velocidad.mult(0.5);
        Matter.Body.setStatic(this.body,false);
        //Matter.Body.setVelocity(this.body,{x:velocidad.x*180/3.14,y:velocidad.y*180/3.14});
        Matter.Body.setVelocity(this.body,{x:30,y:50});
    }
}