class Stone{
	constructor(x,y){
	 var options={
		 restitution:0.8,
		 friction:0.9,
		 density:12
	 }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.reactangle(x,y,this.width,this.width);
		World.add(world, this.body);
        display()
	}
}