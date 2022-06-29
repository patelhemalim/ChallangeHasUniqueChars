// Write your code below


function hasuniqechars(word){
    let uniqChars = new Set([])
    for(let i = 0 ; i < word.length ; i++){
        uniqChars.add(word[i])
}
return uniqChars.size === word.length
}

console.log(hasuniqechars("Lalaloopsi"))
console.log(hasuniqechars("power"))




