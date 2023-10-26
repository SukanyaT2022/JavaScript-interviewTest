//1. Given a string, reverse each word in the sentence
var string = "Welcome to this Javascript Guide!";
// step 1 split sentence
var arr = string.split(" ")
document.write (arr)
arr.reverse() // reverse the word
document.write ("<br>" + arr)

//reverse each letter use loop
var str = " "
for(i = 0; i< arr.length ; i++){
str = str + (arr[i].split("").reverse().join(""))+ " "
//above we split each word to each latter and reverse and join

}
document.write("<br>" + str)