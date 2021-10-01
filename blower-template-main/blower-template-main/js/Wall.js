class Wall{

    constructor(x,y,width,height){

        var options={
            isStatic:true
        }

        this.x=x;
        this.y=y;


        this.height=height;
        this.width=width;
        
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

    }

    display(){

        fill("#8d6e63");
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);

    }





}