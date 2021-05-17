class Stone{
	constructor(x,y){
	 var options={
		 restitution:0.8,
		 friction:0.9,
		 density:12
	 }
		this.width=20;
	    this.body=Bodies.rectangle(x,y,this.width,this.width);
		World.add(world, this.body);
	}
	display(){
		var stoneposition=this.body.position;
		push();
		translate(stoneposition.x,stoneposition.y);
		strokeWeight(3);
        stroke('white');
        fill('red');
		rectMode(CENTER);
        rect(0, 0, this.width, this.height);
		pop();
	}
}
