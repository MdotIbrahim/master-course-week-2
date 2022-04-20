//activity 1 - string backwards

const stringBackwards = (text) => {
    let newText = "";
    for (let i = text.length - 1; i >= 0; i--) {
        newText += text[i];
        // console.log(newText)
    }
    return newText;
}

const stringBackwards2 = (text) => {
    return text.split("").reverse().join("");

}
let string = "hello";

console.log(stringBackwards(string));
console.log(stringBackwards2(string));

// activity 2 - display 3rd item in second list.

let shoppingList = [["pizza", "chocolate", "apple"], ["coke", "fanta", "7up"] , ["pen", "pencil", "ruler"]];

console.log(shoppingList[1][2]);

let shoppingList2 = shoppingList[0].concat(shoppingList[1], shoppingList[2]); //join the lists into one (makes more sense if the original list wasnt nested.)

console.log(shoppingList2[5]);

//activity 3 -

const dataChecker = (string, rank) => {
    if (string == "codenation" && rank == 1) {
        return `${string} is rank number ${rank}.`;
    } 
    else if (string == "codenation" && rank != 1) {
        return `${string} is not first but is rank number ${rank}.`;
    } 
    else {
        return `${string} is rank number ${rank} but is not codenation.`;
    }

}

console.log(dataChecker("codenation", 1));
console.log(dataChecker("codenation", 2));
console.log(dataChecker("example", 2));