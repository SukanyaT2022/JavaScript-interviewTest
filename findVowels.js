
var vowels = ['a', 'e', 'i', 'o', 'u']

var checkVowels = "aunty"
var count = 0
for (i=0; i<checkVowels.length; i++){
    if (vowels.includes(checkVowels[i])){
        //check if word includ vowal a e i o u
        count = count + 1
        //if found vowals increase by 1
    }

}
document.write("<br>" + count)