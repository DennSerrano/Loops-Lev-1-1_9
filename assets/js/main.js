//Lev1_1_js-vertiefung_loops_for-loop_hello-world
let text = "";
for (let i = 1; i < 11; i++) {
    text += "Hallo Welt " + i + "<br>";
}
console.log(text)
console.log(`%c ------------Break Brak------------`, `color:tomato; background:#fff;`)

for (let i = 1; i < 11; i++) {
    console.log("Hello World " + i)
}

// let text2 = "";

// for (let i = 0; i < 5; i++) {
//     text2 += "The number is " + i + "<br>";
// }
console.log(`%c ------------Break Brak------------`, `color:tomato; background:#fff;`)

//Lev1_2_js-vertiefung_loops_for-loop-array
let numArray = [];
for (let i = 0; i < 11; i++) {
    numArray.push(i)
}
console.log(numArray)

console.log(`%c ------------Break Brak------------`, `color:tomato; background:#fff;`)

//Lev1_4_js-vertiefung_loops_for-loop_namen

let nameArray = ["Georg", "Anass", "Elaine", "Hakan", "Sam", "Kim", "Sergio"]

for (let i = 0; i < 1; i++) {
    console.log(nameArray)
}
console.log(`%c ------------Break Brak------------`, `color:tomato; background:#fff;`)
//Lev1_7_js-vertiefung_loops_do_while
let i = 0
do {
    let num4 = "The number is "
    console.log(num4 + i)
    i++
} while (i <= 5)

console.log(`%c ------------Break Brake------------`, `color:tomato;`)


//Lev1_6_js-vertiefung_loops_for-loop-array

let retArray = []

for (let i = 0; i < 100; i++) {
    retArray.push(`image_${i}.jpg`)
}
console.log(retArray)

//Lev1_8_js-vertiefung_loops_do_while

let geradeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let k = 0;
do {
    let gerade = Number(geradeArray[k]) % 2;
    if (gerade == 0) {
        console.log(Number(geradeArray[k]))
    }
    k++
} while (k <= 20)

//Lev1_9_js-vertiefung_loops_mit_input_word
let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']


let check = () => {
    let input = document.getElementById("input").value
    let output = document.getElementById("output")
    for (let i = 0; i < words.length; i++) {
        if (Number(words[i].length) == Number(input)) {
            output.innerHTML = words[i]
        }
    }
}