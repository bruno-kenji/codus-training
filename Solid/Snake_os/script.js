function gameStart() {	
	for(row=0;row<20;row++)for(x=0;x<32;x++)$(row+","+x).style.background='#f1f1f1';
	snk1.Body=[[8,0],[8,0],[8,0],[8,0],[8,1]];
	snk2.Body=[[12,31],[12,31],[12,31],[12,31],[12,30]];
	snk1.dir=1;
	snk2.dir=3;
	snk1.points=0;
	snk2.points=0
	spawnFood();
	$('menu').innerHTML="Stage "+Stage;
	movement();
}

function spawnFood() {
	do {
		x=Math.floor(Math.random()*20);
		y=Math.floor(Math.random()*32);
		var flag=false;
		for(n=0;n<snk1.Body.length;n++) {
			if(snk1.Body[n][0]==x&&snk1.Body[n][1]==y) {
			flag=true;
			}
		}
		for(n=0;n<snk2.Body.length;n++) {
			if(snk2.Body[n][0]==x&&snk2.Body[n][1]==y) {
			flag=true;
			}
		}
	} 
	while(flag);
	$(x+","+y).style.background='red url(https://s3.amazonaws.com/profile_photos/14464850469542.vPUKNFAoqcAHYnKvw0XG_60x60.png) no-repeat center center';
	Food=[x,y];
}

function directionInput(arrowDirection) {
	switch(arrowDirection) {
		case 37: 
			if(snk1.Head()[1]!=snk1.Body[snk1.Body.length-2][1]+1) {
				snk1.dir=3; 
			}
			break;
		case 38: 
			if(snk1.Head()[0]!=snk1.Body[snk1.Body.length-2][0]+1) {
				snk1.dir=0; 
			}
			break;
		case 39: 
			if(snk1.Head()[1]!=snk1.Body[snk1.Body.length-2][1]-1) {
				snk1.dir=1; 
			}
			break;
		case 40: 
			if(snk1.Head()[0]!=snk1.Body[snk1.Body.length-2][0]-1) {
				snk1.dir=2; 
			}
			break;
	}
}
function movement() {
	snk1.fade();
	snk2.fade();
	snk1.desloca();
	snk2.desloca();
	if(snk2.dir==1||snk2.dir==3) {
		if(Food[0]!=snk2.Head()[0])
		if(Food[1]==snk2.Head()[1])
			snk2.dir=((Math.abs(Food[0]-snk2.Head()[0])<10==Food[0]<snk2.Head()[0])?0:2);
	}
	else {
		if(Food[1]!=snk2.Head()[1])
		if(Food[0]==snk2.Head()[0])
			snk2.dir=((Math.abs(Food[1]-snk2.Head()[1])<16==Food[1]<snk2.Head()[1])?3:1);
	}
	var flag=false;
	if(snk2.dir==1||snk2.dir==3) { 
		for(x=0;x<snk1.Body.length;x++)if(snk1.Body[x][0]==snk2.Head()[0]&&Math.abs(snk1.Body[x][1]-snk2.Head()[1])==1)flag=true;
		if(flag)snk2.dir=((Math.abs(Food[0]-snk2.Head()[0])<10==Food[0]<snk2.Head()[0])?0:2);
	}
	else
	{	for(x=0;x<snk1.Body.length;x++)if(snk1.Body[x][1]==snk2.Head()[1]&&Math.abs(snk1.Body[x][0]-snk2.Head()[0])==1)flag=true;
		if(flag)snk2.dir=((Math.abs(Food[1]-snk2.Head()[1])<16==Food[1]<snk2.Head()[1])?3:1);
	}
	snk1.move();
	snk2.move();
	snk1.eat();
	snk2.eat();
	snk1.draw();
	snk2.draw();
	flag=false;
	for(n=0;n<snk1.Body.length-1;n++)
	{	if(snk1.Head()[0]==snk1.Body[n][0]&&snk1.Head()[1]==snk1.Body[n][1]) flag=1;
		if(snk2.Head()[0]==snk1.Body[n][0]&&snk2.Head()[1]==snk1.Body[n][1]) flag=2;
	}
	for(n=0;n<snk2.Body.length-1;n++)
	{	if(snk1.Head()[0]==snk2.Body[n][0]&&snk1.Head()[1]==snk2.Body[n][1]) flag=1;
		if(snk2.Head()[0]==snk2.Body[n][0]&&snk2.Head()[1]==snk2.Body[n][1]) flag=2;
	}
	if(!flag)setTimeout("movement()",Stage<9?speeds[Stage]:50);
	else
	{	if(flag==1||snk1.points<snk2.points)
		{	totalpoints+=snk1.points*10+((Stage-1)*6);
			$('menu').innerHTML="Game over.<br>"+(flag==1?"":"Did "+snk1.points+" points against "+snk2.points+" points from enemy snake.<br>")+"<input type=button value=start onclick='gameStart();'>";
			Stage=1;
			totalpoints=0;
		}
		else
		{	Stage++;
			totalpoints+=snk1.points*10+((Stage-1)*6);
			gameStart();
		}
	}
}
$=function(e){return(document.getElementById(e));};
text="<table align=center cellpadding=0 cellspacing=0 style='border:2px solid #000000;'><tr>";
for(row=0;row<20;row++)for(x=0;x<32;x++)text+="<td id='"+row+","+x+"'>&nbsp;</td>"+(x==31?"</tr><tr>":"");
text+="</tr></table>";
$('main').innerHTML=text;
snakes=function(c)
{	this.Color=c;
	this.bodyPiece=function(x){return($(this.Body[x][0]+","+this.Body[x][1]));};
	this.fade=function(){if(this.bodyPiece(0)!=this.bodyPiece(this.Body.length-2))this.bodyPiece(0).style.background='#f1f1f1';};
	this.desloca=function()
	{	for(n=0;n<this.Body.length-1;n++)
		{	this.Body[n][0]=this.Body[n+1][0];
			this.Body[n][1]=this.Body[n+1][1];
		}
	};
	this.eat=function()
	{	if(this.Head()[0]==Food[0]&&this.Head()[1]==Food[1])
		{	spawnFood();
			this.Body.splice(0,0,[this.Body[this.Body.length-2][0],this.Body[this.Body.length-2][1]]);
			this.points++;
		}
	};
	this.move=function()
	{	var val=this.Head();
		switch(this.dir)
		{	case 3:val[1]--; break;
			case 0:val[0]--; break;
			case 1:val[1]++; break;
			case 2:val[0]++; break;
		}
		if(val[1]==-1)val[1]=31;
		if(val[1]==32)val[1]=0;
		if(val[0]==-1)val[0]=19;
		if(val[0]==20)val[0]=0;
		this.Body[this.Body.length-1]=[val[0],val[1]];
	};
	this.draw=function()
	{	this.bodyPiece(this.Body.length-1).style.background=this.Color;
	};
	this.Head=function()
	{	return this.Body[this.Body.length-1];
	};
};
var snk1=new snakes("#999");
var snk2=new snakes("#666");
var Food;
var Stage=1;
var speeds=["",200,180,160,140,120,100,80,75];
var totalpoints=0;