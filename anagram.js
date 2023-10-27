//anagrams means check if two word contain the same letter


var firstWord = "Mary";
var secondWord = "Army";

//first step convert all letter to lower case
firstWord = firstWord.toLocaleLowerCase();
secondWord = secondWord.toLocaleLowerCase();

//2 step

var firstArr = firstWord.split("")
var secondArr = secondWord.split("")

//first check if 2 word have differnt length or not
if( firstArr.length != secondArr.length){
    document.write("<br>"+ "not anagrams")
}else{
    //if match we sort the word sort a to Z
    firstArr.sort()
    secondArr.sort()
    var indicator = 0 // keep track we found match or not
    for(i=0; i<firstArr.length; i++){
        //if condition - now compare every alphabet
        if (firstArr[i] != secondArr[i]){
            //if we donot find the match- we check every alphabet
            document.write("<br>"+ "not anagrams")
            indicator = 1// her we not find match so stop
            break;
        }
    }
    if (indicator== 0){
        // if == o means all letter match
        document.write("<br>"+ "anagrams")
    }
}