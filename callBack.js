//Please explain what a callback function is and give a simple example.
//A callback function is a function that is passed as an argument to another function and executed after an operation completes. 


// function modifyArray(arr, callback) { 
//  //arr is array and callback is function
//     arr.push(100); 
    
//     callback(); 
//     } 
//     var arr = [1, 2, 3, 4, 5];
//     modifyArray(arr, function() { console.log("array has been modified", arr); });

    function welcome(callback) { 
        //arr is array and callback is function
        document.write("hello")
        //    welcome work on welcome and then call callback( ) work on world

           callback(); 
           } 
         
          welcome(function() { document.write('world') });