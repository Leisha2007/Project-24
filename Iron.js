class Iron{
	constructor(x,y){
	 var options={
		 restitution:0.8,
		 friction:3,
		 density:30
     }
		this.width=20;
		this.body=Bodies.rectangle(x,y,this.width,this.width);
	    World.add(world, this.body);
    }
	display(){
		var ironposition=this.body.position;
		push();
		translate(ironposition.x,ironposition.y);
		strokeWeight(3);
        stroke('white');
        fill('black');
		rectMode(CENTER);
        rect(0, 0, this.width, this.height);
		pop();
	}
}
