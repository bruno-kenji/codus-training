function gameStart() {	
	for(row=0;row<20;row++)for(x=0;x<32;x++)$(row+","+x).style.background='#f1f1f1';
	snk.Body=[[8,0],[8,0],[8,0],[8,0],[8,1]];
	snk.dir=1;
	snk.points=0;
	Stage=0;
	spawnFood();
	$('menu').innerHTML="Stage "+Stage;
	movement();
}

function stageIncrease() {
	Stage++;
	speeds[Stage];
	$('menu').innerHTML="Stage "+Stage;
}

function spawnFood() {
	do {
		x=Math.floor(Math.random()*20);
		y=Math.floor(Math.random()*32);
		var flag=false;
		for(n=0;n<snk.Body.length;n++) {
			if(snk.Body[n][0]==x&&snk.Body[n][1]==y) {
			flag=true;
			}
		}
	}
	while(flag);
	$(x+","+y).style.background='red url(https://s3.amazonaws.com/profile_photos/14464850469542.vPUKNFAoqcAHYnKvw0XG_60x60.png) no-repeat 45% 37%';
	Food=[x,y];
	stageIncrease();
}

function directionInput(arrowDirection) {
	switch(arrowDirection) {
		case 37: 
			if(snk.Head()[1]!=snk.Body[snk.Body.length-2][1]+1) {
				snk.dir=3; 
			}
			break;
		case 38: 
			if(snk.Head()[0]!=snk.Body[snk.Body.length-2][0]+1) {
				snk.dir=0; 
			}
			break;
		case 39: 
			if(snk.Head()[1]!=snk.Body[snk.Body.length-2][1]-1) {
				snk.dir=1; 
			}
			break;
		case 40: 
			if(snk.Head()[0]!=snk.Body[snk.Body.length-2][0]-1) {
				snk.dir=2;
			}
			break;
	}
}
function movement() {
	snk.fade();
	snk.desloca();
	snk.move();
	snk.eatAndGrow();
	snk.draw();
	flag=false;
	for(n=0;n<snk.Body.length-1;n++) {
		if(snk.Head()[0]==snk.Body[n][0]&&snk.Head()[1]==snk.Body[n][1]) {
			flag=1;
		}
	}
	if(!flag)setTimeout("movement()",Stage<21?speeds[Stage]:30);
	else
	{	if(flag==1)
		{	totalpoints+=snk.points*10+((Stage-1)*6);
			$('menu').innerHTML="Game finish.<br>"+"Did "+snk.points+" points.<br><br>"+"<input type=button value=Start onclick='gameStart();'>";
			Stage=0;
			totalpoints=0;
		}
		else	
		{	Stage=1;
			totalpoints+=snk.points*10+((Stage-1)*6);
			gameStart();
		}
	}
}

$=function(e) {
	return(document.getElementById(e));
};
grid="<table align=center cellpadding=0 cellspacing=0 style='border:2px solid #000000;'><tr>";
for(row=0;row<20;row++) {
	for(x=0;x<32;x++) {
		grid+="<td id='"+row+","+x+"'>&nbsp;</td>"+(x==31?"</tr><tr>":"")
	};
};
grid+="</tr></table>";
$('main').innerHTML=grid;


snakes=function(c) {
	this.Color=c;
	this.bodyPiece=function(x) {
		return($(this.Body[x][0]+","+this.Body[x][1]))
	};
	this.fade=function() {
		if(this.bodyPiece(0)!=this.bodyPiece(this.Body.length-2)) {
			this.bodyPiece(0).style.background='#f1f1f1'
		}
	};
	this.desloca=function()
	{	for(n=0;n<this.Body.length-1;n++)
		{	this.Body[n][0]=this.Body[n+1][0];
			this.Body[n][1]=this.Body[n+1][1];
		}
	};
	this.eatAndGrow=function()
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
var snk=new snakes('#333');
var Food;
var Stage=0;
var speeds=[200,180,165,150,135,120,120,110,100,95,90,85,80,75,70,65,60,55,50,45,40,35];
var totalpoints=0;