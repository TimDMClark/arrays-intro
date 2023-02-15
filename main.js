//Exercise One
const fruits = ['Banana', 'Orange', 'Apple', 'Watermelon', 'Blueberry'];

console.log(fruits)

//Exercise Two
const dishes = [
    "Dinner plate", "Water glass", "Salad bowl",
    "Dinner plate", "Wine glass", "Spoon",
    "Spoon", "Fork", "Salad bowl", "Whiskey glass",
    "Fork", "Spoon", "Fork"
];

/*
    Declare three variables to store the string value
    of a glass in the array. Use the correct index to
    get the right value.
*/

const dirtyWhiskeyGlass = dishes[9];
const dirtyWaterGlass = dishes[1];
const dirtyWineGlass = dishes[4];

console.log("I am cleaning the following glasses:");

// Put each variable in one of the parenthesis below
console.log(dirtyWhiskeyGlass);
console.log(dirtyWaterGlass);
console.log(dirtyWineGlass);