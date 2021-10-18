var picswall ={
	"1":{
		"title": "Nicki Minaj",
		"img":"nicki minaj.jpg"
	},
	"2":{
		"title":"Rihanna",
		"img":"riri.jpg"
	},
	"3":{
		"title":"Beyonce",
		"img": "beyonce.jpg"
	},
	"4":{
		"title":"SZA",
		"img": "sza.jpg"
	},
	"5":{
		"title":"Aaliyah",
		"img": "aaliyah.jpg"
	},
	"6":{
		"title":"Saweetie",
		"img": "saweetie.jpg"
	},
	"7":{
		"title":"Rico Nasty",
		"img": "rico.jpg"
	},
	"8":{
		"title":"Kehlani",
		"img": "kehlani.jpg"
	},
	"9":{
		"title":"Selena Gomez",
		"img": "selena gomez.jpg"
	},
	"10":{
		"title":"Ariana Grande",
		"img": "ariana grande.jpg"
	},
	"11":{
		"title":"Flo Milli",
		"img": "flo milli.jpg"
	},
	"12":{
		"title":"Dua Lipa",
		"img": "dua lipa.jpg"
	},
	"13":{
		"title":"Halsey",
		"img": "halsey.jpg"
	},
	"14":{
		"title":"Zendaya",
		"img": "zendaya.jpg"
	},
	"15":{
		"title":"Bella Hadid",
		"img": "bella hadid.jpg"
	},
	"16":{
		"title":"Irina Shayk",
		"img": "irina shayk.jpg"
	},
};
console.log(picswall);
var out ='';
for (var key in picswall){
	out+='<img src="'+picswall[key].img+'" width=250px height=400px>';
}
document.getElementById('picsOut').innerHTML = out;