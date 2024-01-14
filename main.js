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



// String13 *******************************************
// let str = prompt()
// console.log(`son: ${str}`);
// let son = ''
// let S = 0;
// for (let i of str) {
//     console.log(son);
//     if (i === '-') {
//         S = S - Number('son')
//         console.log(S = S + Number('son'));
//         son = ''
//         console.log(i);
//     } else if (i === '+') {
//         S = S + Number('son')
//         console.log(S = S + Number('son'));
//         console.log(i);
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
let S1 = prompt('S1')
console.log(S1);
let S2 = prompt('S2')
console.log(S2);
let s = 0
let length2 = S2.length
for (let i=0; i<S1.length; i++) {
    if (S1.slice(i, i+length2) === S2) {
        s++
    }
}
console.log(s);



