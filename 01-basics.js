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
function findLongestWord(string) {
    let word = string.split(' ');
    let longWord = word[0];
    for (let i = 0; i < word.length; i += 1) {


        if (word[i].length > longWord.length) {
            longWord = word[i];
        }

    }
    return longWord;
    // Change code below this line



    // Change code above this line
}
findLongestWord("The quick brown fox jumped over the lazy dog")