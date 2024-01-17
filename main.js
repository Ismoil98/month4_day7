// String1
// function printBigLetters(n) {
//     if(n>=1 && n<=26) {
//         for(let i=1; i<=n; i++) {
//             console.log(String.fromCharCode(i+64));
//         }
//     } else {
//         alert('noto\'g\'ri son kiritildi')
//     }
// }

// let n = +prompt('1<=n<=26 oraliqda son kiriting')
// printBigLetters(n)



// String2
// function ifNumberOrLetter(n) {
//     if((n.charCodeAt() >= 48) && (n.charCodeAt() <= 57)) {
//         console.log(n.charCodeAt());
//         console.log('digit');
//     } else if((n.charCodeAt() >= 65) && (n.charCodeAt() <= 90) || (n.charCodeAt() >= 97) && (n.charCodeAt() <= 122)) {
//         console.log(n.charCodeAt());
//         console.log('lotin');
//     } else {
//         console.log('0');
//     }
// }
// let n = prompt('n=')
// ifNumberOrLetter(n)



// String3 
// 1-usul
// function printStringFirstLast(n) {
//     console.log(n[0]);
//     console.log(n.charCodeAt(0));
//     console.log(n[n.length-1]);
//     console.log(n.charCodeAt(n.length-1));
// }
// let n = prompt('n=')
// console.log(n);
// printStringFirstLast(n)

// 2-usul
// let str = 'Hello World!'
// console.log(str);
// console.log(str[0]);
// console.log(str.charCodeAt(0));
// console.log(str[str.length-1]);
// console.log(str.charCodeAt(str.length-1));



// String4
// let n = +prompt('n=')
// let belgi = prompt('belgi:')
// let str = ''
// str = str.padStart(n,belgi)
// console.log(str);



// String5
// let str = prompt()
// console.log(str);
// arr = str.split("");
// arr = arr.reverse();
// str = arr.join("")
// console.log(str);



// String6
// let str = prompt('String')
// let n = +prompt('n')
// function getStringStars(str, n) {
//     let belgi = '*'
//     for (let i=2; i<=n; i++) {
//         belgi += '*';
//     }
//     arr = str.split("");
//     str = arr.join(belgi)
//     return(str)
// }
// let x = getStringStars(str, n)
// console.log(x);



// String7
// let str = prompt('String')
// console.log(str);
// let s = 0;
// for (let i of str) {
//     if (!isNaN(i)) {
//         s ++
//     }
// }
// console.log(s);



// String8
// function isLetters(str) {
//     let s = 0
//     for (let i of str) {
//         if(((i.charCodeAt() >= 1072) && (i.charCodeAt() <= 1103)) || ((i.charCodeAt() >= 97) && (i.charCodeAt() <= 122))) {
//             console.log(i.charCodeAt());
//             s ++
//         }
//     }
//     return s
// }
// let str = prompt('n=')
// let x = isLetters(str)
// console.log(x);



// String9
// let str = prompt()
// console.log(str);
// str = str.toLowerCase()
// console.log(str);



// String10
// let str = +prompt('n=')
// if (Number.isInteger(str)) {
//     console.log('Integer');
// } else if (!isNaN(str)) {
//     console.log('Float');
// } else {
//     console.log('0');
// }


// String11
// let str = +prompt('n=')
// if (Number.isInteger(str)) {
//     console.log('Integer');
// } else if (!isNaN(str)) {
//     console.log('Float');
// } else {
//     console.log('0');
// }



// String12
// let strN = prompt('n=')
// console.log(strN);
// let arrN = strN.split('')
// arrN = arrN.reverse()
// strN = arrN.join('')
// console.log(strN);



// String13 *
// let str = prompt()
// console.log(`son: ${str}`);
// let son
// let S = 0;
// for (let i of str) {
//     if (i === '-') {
//         S = Number(S) - Number('son')
//         son = ''
//     } else if (i === '+') {
//         S = Number(S) + Number('son')
//     } else {
//         son += i
//     }
// }
// console.log(S);



// String14
// let N1 = +prompt("N1")
// let N2 = +prompt("N2")
// let S1 = prompt('S1')
// let S2 = prompt('S2')
// console.log(S1);
// console.log(S2);
// let S3 = ''
// S3 = S1.slice(0,N1)
// S3 += S2.slice((S2.length)-N2, S2.length)
// console.log(S3);



// String15
// let c = prompt("С: ")
// let s = prompt('S: ')
// let newS = ''
// for (let i of s) {
//     if(i == c) {
//         newS += c+i
//     } else {
//         newS += i
//     }
// }
// console.log(newS);



// String16
// let c = prompt("С: ")
// let s = prompt('S: ')
// console.log(s);
// let newS = ''
// for (let i=0; i<s.length-1; i++) {
//     if(s[i] == c) {
//         newS += s[i-1]
//     }
// }
// console.log(newS);



// String17
// let S1 = prompt('S1')
// console.log(S1);
// let S2 = prompt('S2')
// console.log(S2);
// let s = 0
// let length2 = S2.length
// for (let i=0; i<S1.length; i++) {
//     if (S1.slice(i, i+length2) === S2) {
//         s++
//     }
// }
// console.log(s);



// String18
// let S1 = prompt('S1')
// console.log(S1);
// let S2 = prompt('S2')
// console.log(S2);
// let s = ''
// let length2 = S2.length
// for (let i=0; i<S1.length; i++) {
//     if (S1.slice(i, i+length2) === S2) {
//         s = S1.slice(0, i)
//         s = s + S1.slice(i+S2.length, S1.length)
//         i=S1.length
//     }
// }
// console.log(s);



// String19
// let S1 = prompt('S1')
// console.log(S1);
// let S2 = prompt('S2')
// console.log(S2);
// let s = ''
// let counter = 0;
// let length2 = S2.length
// for (let i=0; i<S1.length; i++) {
//     counter ++
//     if (S1.slice(i, i+length2) === S2) {
//         s = s + S1.slice(i-counter, i)
//         i= i+S2.length
//         counter = 0
//     }
// }
// s = s +S1.slice(S1.length-counter-1, S1.length)
// console.log(s);



// String20
// let S1 = prompt('S1')
// console.log(S1);
// let S2 = prompt('S2')
// console.log(S2);
// let S3 = prompt('S3')
// console.log(S3);
// let newS = 0
// let length2 = S2.length
// for (let i=0; i<S1.length; i++) {
//     if (S1.slice(i, i+length2) === S2) {
//         newS = S1.slice(0,i) + S3 + S1.slice(i+length2, S1.length)
//         i = S1.length
//     }
// }
// console.log(newS);



// String21
// let S1 = prompt('S1')
// console.log(S1);
// let S2 = prompt('S2')
// console.log(S2);
// let S3 = prompt('S3')
// console.log(S3);
// let newS = 0
// let length2 = S2.length
// for (let i=0; i<S1.length; i++) {
//     if (S1.slice(i, i+length2) === S2) {
//         newS = S1.slice(0,i) + S3 + S1.slice(i+length2, S1.length)
//     }
// }
// console.log(newS);



// String22
// let str = prompt('str: ')
// console.log(str);
// let arr = str.split(" ")
// let s = 0
// for (let i of arr) {
//     if (i[0] === i[i.length-1]) {
//         console.log(i);
//         s ++
//     }
// }
// console.log(s);



// String23
// let str = prompt('str: ')
// let arr = str.split(" ")
// let s = 0
// let CountA
// for (let i of arr) {
//     CountA = 0
//     for(let j=0; j<i.length; j++) {
//         if (i[j] === 'A') {
//             CountA ++
//         }
//     }
//     if (CountA >=2) {
//         console.log(i);
//         s++
//     }
// }
// console.log(s);



// String24
// let str = prompt('str: ')
// let arr = str.split(" ")
// let max = arr[0]
// let CountA = 0
// function getMaxOfString(str) {
//     for (let i of arr) {
//         if (i.length > max.length) {
//             max = i
//         }
//     }
//     return max
// }
// let x = getMaxOfString(arr)
// console.log(x);



// String25
// let str = prompt('str: ')
// let arr = str.split(" ")
// str = arr.join('. ')
// console.log(str);



// String26
// let str = prompt('str: ')
// let arr = str.split(" ") 
// let changer = []
// let restarter = ''
// let newStr = ''
// for (let i of arr) {
//     changer = i[0];
//     restarter = changer.toUpperCase()
//     i = restarter + i.slice(1, i.length)
//     newStr = newStr + i + " "
// }
// console.log(newStr);



// String27
// let arrSyb = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"]
// let str = prompt('str: ')
// let arr = str.split("") 
// let s = 0
// for (let i=0; i<arr.length; i++) {
//     for (let j of arrSyb) {
//         if (j === arr[i]) {
//             s ++
//         }
//     }
// }
// console.log(s);



// String28
// let str = 'D:/Qudrat_c++/books/My_book.exe'
// console.log(str);
// str = str.split("").reverse().join("")
// let NumberEnd = 0
// let NumberStert = 0
// for (let i=0; i<str.length-1; i++) {
//     if (str[i] === '.') {
//         NumberStert = i+1
//     }
//     if (str[i] === '/') {
//         NumberEnd = i
//         i = str.length
//     }
// }
// let result = (str.slice(NumberStert, NumberEnd)).split("").reverse().join("")
// console.log(result);



// String29
// let str = 'D:/Qudrat_c++/books/My_book.exe'
// for (let i=0; i<str.length-1; i++) {
//     if (str[i] === '.') {
//         console.log(str.slice(i, str.length));
//     }
// }



// String30
// let str = 'D:/Qudrat_c++/books/My_book.exe'
// console.log(str);
// let reStr = str.split("").reverse().join("")
// function StartIndex (reStr) {
//     for (let i=0; i<reStr.length-1; i++) 
//             if (reStr[i] === '/') {
//                 return i+2
//             }
//         }
// let starter = StartIndex(reStr)
// function EndIndex (reStr, starter) {
//     for(let i=starter; i<reStr.length-1; i++) {
//         if (reStr[i] === '/') {
//         return i
//         }
//     }
// }
// let ender = EndIndex(reStr, starter)
// console.log((reStr.slice(starter-1, ender)).split("").reverse().join(""));




// Ajoyib funksiya
// function reverse(s){
//     return s.split("").reverse().join("");
// }