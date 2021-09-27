var arr = [1,1,2,2,3,3,3,5]
var dict = {}

for (i=0; i<arr.length; i++){
    if (dict[arr[i]]){
        dict[arr[i]]++
    }
    else {
        dict[arr[i]] = 1
    }
}

console.log(dict);