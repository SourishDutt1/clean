class Paper{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.7,
			friction:0.5,
			density:2.0

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, 20, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

            push()
           
			translate(paperpos.x, paperpos.y);
			ellipseMode(RADIUS);
			//strokeWeight(4);
			fill("blue")
			ellipse(0,0,20);
			pop()
			
	}

}