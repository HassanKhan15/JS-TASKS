// 1. Write a JavaScript function that reverse a number.

// var num = +prompt("REVERSE THE NUMBER YOU WANT:")

// function revNum(){

//     num = num.toString().split("").reverse().join("");

//     if (num.endsWith("-")) {
//         num = "-" + num;
//         return parseInt(num);
//     }
//     else{
//         return parseInt(num); 
//     }
    
    
// }

// console.log(revNum());

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?

// var inputString = prompt("ENTER ANY STRING TO CHECK WETHER IT IS PALINDROME OR NOT ?");

// function PalindromeStr(){

// inputString = inputString.toLowerCase();

// reverseString = inputString.split("").reverse().join("");

// if (inputString === reverseString) {
//     console.log(inputString + " is a Palindrome Word!");
// } else {
//     console.log(inputString + " is not a Palindrome Word!");
// }

// }

// PalindromeStr();

// 3. Write a JavaScript function that generates all combinations of a string.

// function combStr(string)
// {
// var subString = [];
//   for (var x = 0, y=1; x < string.length; x++,y++) 
//   {
//    subString[x]=string.substring(x, y);
//     }
// var combine = [];
// var temp= "";
// var slent = Math.pow(2, subString.length);

// for (var i = 0; i < slent ; i++)
// {
//     temp= "";
//     for (var j=0;j<subString.length;j++) {
//         if ((i & Math.pow(2,j))){ 
//             temp += subString[j];
//         }
//     }
//     if (temp !== "")
//     {
//         combine.push(temp);
//     }
// }
//   document.write(combine.join("\n </br>"));
// }

// combStr("cat");

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.

// function alphabeticOrder(passedStr)
//   {
// return passedStr.split('').sort().join('');
//   }
// document.write(alphabeticOrder("hassan"));


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// function capitilize(input)
// {
//   var passedStr = input.split(' ');
//   var updatedStr = [];
    
//   for(var i = 0; i < passedStr.length; i++){
//     updatedStr.push(passedStr[i].charAt(0).toUpperCase()+passedStr[i].slice(1));
//   }
//   return updatedStr.join(' ');
// }
// document.write(capitilize("hello! hassan khan"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

// function find_longest_word(str)
// {
    
//    var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word("Hello! Hassan Khan"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// document.write(vowel_count("Hello! Hassan Khan"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

// function test_prime(n)
// {

//   if (n===1)
//   {
//     return false;
//   }
//   else if(n === 2)
//   {
//     return true;
//   }else
//   {
//     for(var x = 2; x < n; x++)
//     {
//       if(n % x === 0)
//       {
//         return false;
//       }
//     }
//     return true;  
//   }
// }

// document.write(test_prime(15));


// 9. Write a JavaScript function which accepts an argument and returns the type.

// function detect_data_type(value)
// {
// var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
// if (typeof value === "object" || typeof value === "function") 
//     {
//      for (x = 0, len = dtypes.length; x < len; x++) 
//      {
//             if (value instanceof dtypes[x])
//             {
//                 return dtypes[x];
//             }
//       }
//     }
    
//     return typeof value;
// }
// document.write(detect_data_type(15));
// document.write(detect_data_type('Hassan Khan'));
// document.write(detect_data_type(true));

// 10. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

// function Second_Greatest_Lowest(arr_num)
// {
//   arr_num.sort(function(x,y)
//            {
//            return x-y;
//            });
//   var uniqa = [arr_num[0]];
//   var result = [];
  
//   for(var j=1; j < arr_num.length; j++)
//   {
//     if(arr_num[j-1] !== arr_num[j])
//     {
//       uniqa.push(arr_num[j]);
//     }
//   }
//     result.push(uniqa[1],uniqa[uniqa.length-2]);
//   return result.join(',');
//   }

// document.write(Second_Greatest_Lowest([01,03,15,20]));

