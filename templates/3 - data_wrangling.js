// Data Wrangling


// Boucler pour crééer un tableau data à partir d'un csv

var data =[];

csv.forEach(function(d, i) {

data.push({

x : parseFloat(d.x),
y: parseFloat(d.y),
type: d.type,
index: i

})
});
