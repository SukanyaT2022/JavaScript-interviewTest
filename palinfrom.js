//9. Palindrome Problem means if word Anna if we revert it still the same word ana
// check if palindrome

var word = "racecar"
//step 1 change all letter to lower case
word = word.toLowerCase()
//step 2 splite word
var arr = word.split("")
//the reverse
arr.reverse()
//the join back-- put together gain
var newWord = arr.join("")
if(word == newWord){
   document.write("<br>"+"Palinfrom") 
}else{
    document.write("<br>"+"Not Palinfrom") 
}