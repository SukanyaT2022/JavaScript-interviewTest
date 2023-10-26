//How would you check if a number is an integer? - interger means whole number such as 1 4 5

var arr2 = [2.2, 3, 4.5,"pet", 6, 7.4, 8, 10, "hello"]
// method one
// function checkWholeNumber(){
//     for (i=0; i<arr2.length; i++){
//         var str = " " + arr2[i]
//         if (str.indexOf(".") == -1)
//         //if find whole number use ==
//         //if fine 2.5 use != we use indexof() to check if . is found or not--
//     //if not -1 means . is not there
//         document.write("<br>" + arr2[i])
//     }
// }
// checkWholeNumber()

// method 2
function checkWholeNumber(){
    for (i=0; i<arr2.length; i++){
      
        if (arr2[i]% 1 == 0)
        //if aar2 check by devide % by 1 --the remainder is o 
    // unless decimal number like 2.3 can not get result 0
        document.write("<br>" + arr2[i])
    }
}
checkWholeNumber()