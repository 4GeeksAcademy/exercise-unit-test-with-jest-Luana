// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// This is my function that sums two numbers
const sum = (a, b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7, 3))

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    // 1 euro =1,07 dollar
    // 0,93 euro=1 dollar
    // // 1 dollar ?euro
    let euro = valueInDollar / oneEuroIs.USD
    console.log(euro)
    // 0,93* 156,5=145,545
    let valueInYen = euro * oneEuroIs.JPY;
    console.log(valueInYen)
    return valueInYen;
}

fromDollarToYen(1)

const fromYenToPound = function (valueInYen) {
    // 1 euro =1,07 dollar
    // 0,93 euro=1 dollar
    // // 1 dollar ?euro
    let euro = valueInYen / oneEuroIs.JPY
    console.log(euro)
    // 0,93* 156,5=145,545
    let valueInPounds = euro * oneEuroIs.GBP;
    console.log(valueInPounds)
    return valueInPounds;
}

fromYenToPound(1)
// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };