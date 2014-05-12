////////// CITY DATA EXAMPLE //////////
var citydata = [
	
	{	
			name: "Berlin",	// city name
			rank: 1,				// rank based on city population
			popu: 3460725,	// population within city administrative boundaries
			dens: 3899,			// population density per sq km
			blnd: "Berlin",	// Bundesland ("state")
			stst: true,			// Stadtstaaten ("city-state")
			id: "BER"
		},
	
	{
		name: "Hamburg",
		rank: 2,
		popu: 1786448,
		dens: 2366,
		blnd: "Hamburg",
		stst: true,
		id: "HAM"
	},

	{
		name: "Munich",
		rank: 3,
		popu: 1353186,
		dens: 4355,
		blnd: "Bavaria",
		stst: false,
		id: "MUC"
  },

	{
		name: "Cologne",
		rank: 4,
		popu: 1007119,
		dens: 2486,
		blnd: "North Rhine-Westphalia",
		stst: false,
		id: "KLN"
	},
	
	{
			name: "Frankfurt",
			rank: 5,
			popu: 679664,
			dens: 2737,
			blnd: "Hesse",
			stst: false,
			id: "FRA"
	}
]


console.log(citydata.map(function(city){ return city.name }))
	/* returns ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"] */

console.log(["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"].map(function(thecityof) {return "The city of " + thecityof;}))
	/* returns ["The city of Berlin", "The city of Hamburg", "The city of Munich", "The city of Cologne", "The city of Frankfurt"] */


console.log(["The city of Berlin", "The city of Hamburg", "The city of Munich", "The city of Cologne", "The city of Frankfurt"].map
	(function(popof) {return popof + " has a population of ";}))
	/* returns ["The city of Berlin has a population of ", "The city of Hamburg has a population of ", "The city of Munich has a population of ", 
	"The city of Cologne has a population of ", "The city of Frankfurt has a population of "] */

console.log(citydata.map(function(crank){ return crank.rank }))
	/* returns [1, 2, 3, 4, 5] */

console.log([1, 2, 3, 4, 5].map(function(ranknum){return rnum = "is ranked number " + ranknum; }))
	/* returns ["is ranked number 1", "is ranked number 2", "is ranked number 3", "is ranked number 4", "is ranked number 5"] */

console.log(citydata.map(function(popul){ return popul.popu }))
	/* returns [3460725, 1786448, 1353186, 1007119, 679664] */

var totalpop =[3460725, 1786448, 1353186, 1007119, 679664];

console.log(totalpop.reduce(function(a, b){return a+b;}))
	/* returns 8287142 */

var sumP = 8287142

function getavg (t, lgth) {
	return t / lgth
}

console.log(getavg (sumP, totalpop.length))
	/* returns 1657428.4 */

console.log(citydata.map(function(density){return density.dens}))
	/* returns [3899, 2366, 4355, 2486, 2737] */

var totaldens = [3899, 2366, 4355, 2486, 2737]

console.log(totaldens.reduce(function(a, b){return a+b;}))
/* returns 15843  */

var sumPD = 15843

console.log(getavg (sumPD, totaldens.length))
/* returns 3168.6 */


////////// PENS EXAMPLE //////////

var pens = [
{
color: "black",
inkColor: "black",
grip: true,
size: 5
},
{
color: "pink",
inkColor: "black",
grip: false,
size: 2
},
{
color: "green",
inkColor: "blue",
grip: true,
size: 10
},
{
color: "red",
inkColor: "red",
grip: true,
size: 4
}
]

var colorarray = pens.map (function (cl) {return cl.color;} )
var howManyColors = colorarray.length
console.log("There are " + howManyColors + " different colors of pens: " + colorarray[0] + ", " + colorarray[1] + ", " + colorarray[2] + " and " 
	+ colorarray[3] + ".")

var inkarray = pens.map (function (ic) {return ic.inkColor;} )
var howManyInks = inkarray.length

var howManyGrips = pens.map(function (gp) {return gp.grip;} )
var gripYes = howManyGrips.reduce (function (a, b) {return a + b;})
function gprct (a, b) {return a / b.length}
var gripPRCT = gprct (gripYes, howManyGrips)
var gpercentage = gripPRCT.toString();
var perctext = gpercentage.slice(2,4)
console.log("There are " + howManyGrips.length + " different pens; of those, " + perctext + "% of them have grips.")

var sizearray = pens.map (function (sz) {return sz.size;} )
var addallsize = sizearray.reduce (function (a, b) {return a + b;} )
console.log("The average pen length is " + getavg (addallsize, sizearray.length) + " inches." )

var sizearray1UP = []
sizearray.forEach(function(a) {sizearray1UP.push(a+1);});
/* typing "sizearray1UP" in the console returns an new array [6, 3, 11, 5]  where the values in the array are each increased by 1 */

////////// FOR EACH LOOPS -- basically a .map that does anything you tell it to in the nested function(s); can only be used with arrays //////////

var randoma = [7, 79, 50, 84, 32, 34]

// randoma.forEach(function (a) {
// 		if (a < 50)
// 				{alert(a + " is less than 50.");}
// 		if (a == 50)
// 				{alert(a + " is equal to 50.");}
// 		if (a > 50)
// 			{alert(a + " is greater than 50.");}
// });

randoma.forEach(function (a) {
		if (a < 50)
				{console.log(a + " is less than 50.");}
		if (a == 50)
				{console.log(a + " is equal to 50.");}
		if (a > 50)
			{console.log(a + " is greater than 50.");}
});

randoma.forEach(function (a) {
		if (a < 50)
				{console.log(a + " is less than 50.");}
		if (a == 50)
				{console.log(a + " is equal to 50.");}
		if (a > 50)
			{console.log(a + " is greater than 50.");}
});

var textarray = ["a", "b", "c", "d", "e"]

textarray.forEach(function (x) {
		if (x == "a")
				{console.log("The word alphabet starts with the letter " + x +".");}
		else
				{console.log("The word alphabet does not starts with the letter " + x +".");}	
});

// citydata.forEach(function cstate (a) {
// 		if (a == "Berlin" || "Hamburg")
// 			{console.log(citydata[0].blnd+ " is a city-state.")}
// 	});

// citydata.forEach(function (a) {
// 		if (a == true)
// 			{alert(a + " is a city-state.")}
// 		else
// 			{alert(a + " is NOT a city-state.")}
// 	});

// citydata.forEach(function (a) {
// 		if (a == "Berlin" || "Hamburg")
// 			{console.log(citydata[0].blnd+ " is a city-state.")}
// 		if (a != "Berlin" || "Hamburg")
// 			{console.log(citydata[0].blnd+ " is NOT a city-state.")}
// 	});

var sizearray1UP = []
sizearray.forEach(function (a) {sizearray1UP.push(a+1);});
/* typing "sizearray1UP" in the console returns an new array [6, 3, 11, 5]  where the values in the array are each increased by 1 */

var cityCityState = []
citydata.forEach(function (a) {cityCityState.push(a);});

var thingy = []
pens.forEach(function (a) {thingy.push(a+1);});