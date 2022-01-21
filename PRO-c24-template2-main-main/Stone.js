class Stone{
    constructor(x,y,r){
    var options = {
        'restitution':0.8,
        'friction':0.9,
        'density':12
    }
    this.body = Matter.Bodies.circle(x,y,r,options)
    World.add(world, this.body);
    this.r = r;
}
display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r, this.r);

			pop()
	}

}

 