var arr = [1,1,2,2,3,3,3,5]
var dict = {}
i=0
while (i<arr.length){
    if (dict[arr[i]]){
        dict[arr[i]]++
    }
    else {
        dict[arr[i]] = 1
    }
    i++
}

console.log(dict);