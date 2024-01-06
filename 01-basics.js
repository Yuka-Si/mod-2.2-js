// const add = function (x, y) {

//     console.log(x);
//     console.log(y);
//     console.log('Виконується функція add');

//     return x + y;


// };
// const r1 = add(5, 3);
// console.log(r1);

// add(2, 3);

// function slugify(title) {
//     // Change code below this line
//     let slug = title.toLowerCase().split(" ").join('-');
//     console.log(slug);
//     return slug;


//     // Change code above this line
// 
// slugify("English for developer"
// function filterArray(numbers, value) {

//     let newArray = [];
//     for (let number of numbers) {
//         if (number > value) {
//             newArray.push(number);
//         }
//     }


//     // Change code below this line


//     return newArray;
//     // Change code above this line
// }

// filterArray([12, 24, 8, 41, 76], 20)

const goods = {
    apples: 6,
    grapes: 3,
    bread: 4,
    cheese: 7,
};

const values = Object.values(goods); // [6, 3, 4, 7]

let total = 0;

for (const value of values) {
    total += value;
}

console.log(total); // 20
