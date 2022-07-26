class Canon{
    constructor(x,y,width,height,angle){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.angle=angle;

    }
    display(){
        if (keyIsDown(83)&&this.angle<70){
            this.angle+=1.5;
        }
        if (keyIsDown(87)&&this.angle>-40){
            this.angle-=1.5;
        }
        
        push();
        translate(this.x,this.y);  //se mueven el pundo donde se ubican 0 en x, y
        rotate(this.angle);
        imageMode(CENTER);
        image(caon2,0,0,this.width,this.height);
        pop();
        image(caon,70,20,200,200);

    }
}
