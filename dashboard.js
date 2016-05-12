

$( document ).ready(function() {

    $( window ).load(function() { 

var pixels = 40,
	textJump = 270,
	demo = document.getElementById("demo"),
	$wedges = $("#wedges circle"),
	$dataText = $("#theText text"),
	pieColors = [
	["#067780", "#ED8F11", "#4D0202", "#8a3d28", "#020303"],
	["#7C4E71", "#53345A", "#182C42", "#1A4B4B", "#1D6153"],
	["#94c356", "#46a4cc", "#50a39e", "#a63e4b", "#253042"],
	["#01BD8D", "#5DC094", "#DCCF8B", "#C8902F", "#7F4600"]
	],
	dataCaptions = [ 
	["are underappreciated at work", "are fueled completely by coffee", "say it's not a bug, it's a feature", "sleep only 17 minutes per night", "never take a real vacation"],
	["actually happened", "happen in rural diner parking lots", "are the result of a bad burrito", "are attributable to alcohol", "are complete hoaxes"],
	["will 'misplace' their invoice", "call on Friday with a deadline of Monday", "have a friend that 'knows' about design", "would like their website to 'pop' more", "will want their logo to be bigger"],
	["the neighbor's cat", "their reflection in a mirror", "all delivery personnel", "vacuum cleaners", "as Dug from Up would say: 'Squirrel!'"],
	],
	chartTitles = ["Website Developers", "Alien Abductions: The Made Up Data", "Made Up Facts About Your Clients", "Percentage of Dogs That Will Bark At:"],
	$dataType = $(".dataType"),
	starts = [0,0,0,0,0],
	ends = [0,0,0,0,100],
	$dragger = $(".dragger"),
	$legendColors = $("#legendColors rect"),
	$legendText = $("#legendText text"),
	$lines = $("#theLines line"),
	$dragBounds = $(".dragBounds"),
	$data = $(".data"),
	value = 5,
	startData = [5,9,13,18],
	master = 100-(startData[0] + startData[1] + startData[2] + startData[3] ),
	rotationArray = [],
	startX = [],
	testVar = 0,
	startSum = 0,
	dessert = "cold",
	clickToggle = 1,
	$controls = $("#controlPanel"),	
	regularBorder = "#B8ABA4", // non active button border
	activeBorder = "#29abe2"; // currently selected option


TweenMax.set([$lines,"#fixedLine"], {transformOrigin:"50% 100%"});
TweenMax.set([$wedges, $dataText, "#masterWrap", "#bakingCircle"], {svgOrigin:"500 550"});
TweenMax.set([$dataText, $legendText, "#dataTitle"], {autoAlpha:0});
TweenMax.set($dataType[0], {borderColor:activeBorder}); // highlight initial settings as active buttons
TweenMax.set([$controls, demo], {transformOrigin:"center", xPercent:-50, autoAlpha:1});
$("#dataTitle")[0].textContent = chartTitles[0];

$wedges.each(function(i, element) {
    TweenMax.set(this, {drawSVG:0, stroke:pieColors[0][i]})
});

// figure the starting rotational start and end points
for (i=1; i<5; i++) {
	startSum += startData[i-1];
	starts[i] = startSum;
	ends[i-1] = startSum;
}

// set the initial line rotations
$lines.each(function(index, element) {
	testVar += startData[index]*3.6;
	rotationArray[index] = testVar;
    TweenMax.set(this, {rotation:testVar})
});

//set the text for the start data
$data.each(function(i, element) {
   this.innerHTML = startData[i].toFixed(1)+"%"; 
   TweenMax.set(this, {backgroundColor:pieColors[0][i]});
});

//set the initial legends colors 
$legendText.each(function(i, element) {
   this.textContent = dataCaptions[0][i];
});

$( ".finalData" ).html( master.toFixed(1)+"%" );
 TweenMax.set(".finalData", {backgroundColor:pieColors[0][4]});

$legendColors.each(function(i, element) {
    TweenMax.set(this, {fill:pieColors[0][i], transformOrigin:"center", scale:0})
});



//let's make some draggables

$dragger.each(function(i, element) {
    startX[i] = (startData[i]-value)*10;
	TweenMax.set(this, {x:startX[i]});
	Draggable.create(this, {
	type:"x",
	bounds: $dragBounds[i],

	onDrag: function() {
		startData[i] = parseFloat(((this.x)/10+value).toFixed(2));
		master = 100-(startData[0] + startData[1] + startData[2] + startData[3] );
		$( ".finalData" ).html( master.toFixed(1)+"%" );
		$data[i].innerHTML = startData[i].toFixed(1)+"%";
		change = ((this.x - startX[i])*0.36);
		  for (j=i; j<=3; j++) {
				TweenMax.set($lines[j], {rotation: rotationArray[j] + change})
			  }
		
			},  // end of onDrag
			
	onDragEnd: function() {
		startX[i] = this.x;
		startSum = 0;
		for (j=i; j<=3; j++) {
				rotationArray[j] = rotationArray[j] + change;
			  }
			  
		for (k=1; k<5; k++) {
			startSum += startData[k-1];
			//console.log(startSum, typeof(startSum))
			starts[k] = startSum;
			ends[k-1] = startSum;
				}
		  
		}, // end of onDragEnd			
		
		});  // end draggable create

});// end dragger each





// draw the stroke that creates the wedges
// figure the center of the wedge and move outward on the correct angle
function theWedgesAnim() {

$wedges.each(function(i, element) {
		var	d = (starts[i] + ends[i] )*3.6/2,
			distanceX = Math.cos(d*Math.PI/180)*pixels,
			distanceY = Math.sin(d*Math.PI/180)*pixels,
			tl = new TimelineMax();
		
		tl.fromTo(this, 1.5, {drawSVG:"0% 0%"}, { drawSVG: (starts[i]+"% ") + (ends[i]+"%"), ease:Expo.easeOut});
		tl.to(this, 0.5, {x:distanceX, y:distanceY, ease:Power4.easeOut});


		if(i==$wedges.length-1) tl.vars.onComplete = part2;
		 
	});

// throw the text onto the wedges
function part2() {
	$dataText.each(function(i, element) {
	var	d = (starts[i] + ends[i] )*3.6/2,
		distanceX = Math.cos(d*Math.PI/180)*textJump,
		distanceY = Math.sin(d*Math.PI/180)*textJump,
		
		tl = new TimelineMax();
		this.textContent = (ends[i] - starts[i]).toFixed()+"%";
		if(ends[i] - starts[i] < 10) TweenMax.set(this, {fontSize:28});
		tl.to(this, 0.5, {x:distanceX, y:distanceY, autoAlpha: 1, rotation:90, delay:i*0.05, ease:Back.easeOut})
		
		if(i==$dataText.length-1) tl.vars.onComplete = part3;
	});	// end data text each

} // end part 2 function

// fade in the legend 
function part3() {
	
	TweenMax.to([$legendText, "#dataTitle"], 0.5, {autoAlpha:1, onComplete:function() {
		clickToggle=1;
		$("#run").html("Clear<span>to try again</span>");
		}});
	$legendColors.each(function(i, element) {
		TweenMax.to(this, 0.5, {scale:1})
		});	// end legend rect each

} // end part 3 function

} // end wedges animation



//erase the wedges and go back to the diagram
function backLines() {
	TweenMax.fromTo("#bakingCircleMask", 1, {drawSVG:"0% 0%"}, {drawSVG:"0% 100%", ease:Expo.easeOut, onComplete:function() {
		clickToggle=1;
		$("#run").html("Bake<span>the pie(chart)</span>");
		TweenMax.set("#cover", {autoAlpha:0});
		}})	
	TweenMax.to("#sizeMatic", 0.75, {autoAlpha:1})
	TweenMax.to($legendColors, 0.5, {scale:0})
	TweenMax.to([$legendText, "#dataTitle"], 0.5, {autoAlpha:0});
	TweenMax.set([$lines,"#fixedLine"], {autoAlpha:1, rotation:0})

	$lines.each(function(i, element) {
	  TweenMax.to(this, 1,{rotation:rotationArray[i],ease:Expo.easeOut})
	});
} // end backLines




//change the data theme and highlight the active button
$dataType.click(function() {
	
	var t = $(this).index();
	$("#dataTitle")[0].textContent = chartTitles[t];
	TweenMax.set(".finalData", {backgroundColor:pieColors[t][4]});
	TweenMax.set($dataType,{borderColor:regularBorder});
	TweenMax.set(this, {borderColor:activeBorder});	
	for (m=0; m<5; m++) {
	if(m<4)TweenMax.set($data[m], {backgroundColor:pieColors[t][m]});
	TweenMax.set($legendColors[m], {fill:pieColors[t][m]});	
	TweenMax.set($wedges[m], {stroke:pieColors[t][m]});
	$legendText[m].textContent = dataCaptions[t][m];
	}
})



//master run button

$("#run").on("click", function() {
		if (clickToggle === 1)  {
			clickToggle = 0;
		if (dessert === "cold") {
		dessert = "hot";
		TweenMax.set("#cover", {autoAlpha:1});
		
		tl = new TimelineMax({onComplete:theWedgesAnim});
			tl.to([$lines,"#fixedLine"], 1.5, {rotation:360, ease:Expo.easeIn})
			  .to("#sizeMatic", 0.75, {autoAlpha:0},0)
			  .fromTo("#bakingCircleMask", 1.5, {drawSVG:"0% 100%"}, {drawSVG:"100% 100%", ease:Expo.easeIn},0)	
			  .set([$lines,"#fixedLine"], {autoAlpha:0})
		} 
		
		else {
			dessert = "cold";
		
			tl = new TimelineMax({onComplete:backLines});
			tl.to($dataText, 0.3, {autoAlpha:0})
			tl.to ($wedges, 0.5, {x:0, y:0, ease:Expo.easeInOut})
			tl.to ($wedges, 1, {drawSVG:"100% 100%", ease:Expo.easeIn})	
			tl.set($dataText, {rotation:0, x:0, y:0, fontSize:44})
			
		} // end else 

		} // end toggle check
		
	}) // end master Run button




// size the SVG to fit with the control panel
function sizeAll() {
	var h = window.innerHeight,
		w = window.innerWidth;
		
	if ( w > (h-300)*1.8) {
		TweenMax.set(demo, {height:h-300, width:(h-300)*1.8});
		TweenMax.set($controls, {y:h-290});	
		} 
		
	else {
		TweenMax.set(demo, {y:0, width:w-10, height:w/1.8});
		TweenMax.set($controls, {y:w/1.8+10});	
		}
}

$(window).resize(sizeAll);

sizeAll();

	// end window load
	}); 


// end doc ready
}); 
