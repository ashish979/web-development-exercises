var a=["a","b","c","d","e","f"];
k=2;
n=a.length;
string="";
for(var i=0;i<n-k+1;i++){
	for(var j=i;j<i+k;j++){
		string+=a[j];
	}
	console.log(string);
	string="";
	}


function combinations(a, k) {
	var i, j, combs, x, y;
	
	if (k > a.length || k <= 0) {
		return [];
	}
	
	if (k == a.length) {
		return [a];
	}
	
	if (k == 1) {
		combs = [];
		for (i = 0; i < a.length; i++) {
			combs.push([a[i]]);
		}
		return combs;
	}
	
	combs = [];
	for (i = 0; i < a.length - k + 1; i++) {
		x = a.slice(i, i+1);
		y = combinations(a.slice(i + 1), k - 1);
		for (j = 0; j < y.length; j++) {
			combs.push(x.concat(y[j]));
		}
	}
	return combs;
}
 