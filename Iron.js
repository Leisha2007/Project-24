class Iron{
	constructor(x,y){
	 var options={
		 restitution:0.8,
		 friction:3,
		 density:30
     }
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x,y,this.width,this.width);
	    World.add(world, this.body)
        display()
    }
}
