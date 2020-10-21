var primes_map = {};
primes_map['a']= 2;
primes_map['b']= 3;
primes_map['c']= 5;
primes_map['d']= 7;
primes_map['e']= 11;
primes_map['f']= 13;
primes_map['g']= 17;
primes_map['h']= 19;
primes_map['i']= 23;
primes_map['j']= 29;
primes_map['k']= 31;
primes_map['l']= 37;
primes_map['m']= 41;
primes_map['n']= 43;
primes_map['o']= 47;
primes_map['p']= 53;
primes_map['q']= 59;
primes_map['r']= 61;
primes_map['s']= 67;
primes_map['t']= 71;
primes_map['u']= 73;
primes_map['v']= 79;
primes_map['w']= 83;
primes_map['x']= 89;
primes_map['y']= 97;
primes_map['z']= 101;

function convertToUnicodeAndSum(s, i) {
    let j = i + s.length - 1;
    let key = 1;
    for (let k = i; k <= j; k++) {
        key = (primes_map[ s[k] ] * key) % 1000000007;
    }
    return key;
}

function substrInUnicode(map, x, s) {
    for (let i = 0; i < s.length - x; i++){
        let substr = s.slice(i, i + x);
        let sum = convertToUnicodeAndSum(substr, i);
        console.log(substr, sum);
        map[sum] = map[sum] ? ++map[sum] : 1
    }
    return map;
}

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    let count = 0;
    let map = {};
    for (let i = 1; i <= s.length; i++){
        substrInUnicode(map, i, s);
    }
    for (let key in map) {
        if(map[key] > 1){
            count += ((map[key] ) * (map[key] - 1)) / 2
        }
    }
    console.log(map);
    return count;
}


console.log(sherlockAndAnagrams('cdcd'));