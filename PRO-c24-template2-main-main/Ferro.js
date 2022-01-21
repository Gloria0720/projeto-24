class Ferro{
    constructor(x,y){
    var options = {
        'restitution':0.8,
        'friction':3,
        'density':30
    }
    this.body = Matter.Bodies.rectangle(x,y, 50, 50, options)
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);
}
display()
	{
			var Ferropos=this.body.position;		
			push()
			translate(Ferropos.x, Ferropos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
            rect(0, 0, this.width, this.height);
		
			pop()
	}

}
