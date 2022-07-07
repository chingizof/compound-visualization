let startSum = 2000000 
let period = 20 //сколько лет инвестирует
let periodicSum = 2000000

//https://www.nerdwallet.com/banking/calculator/compound-interest-calculator  
//for reference

const calculateBalance = (startSum, periodicSum,  period, apr) => {
    apr = apr/100
    period *= 12
    let sum = 0;
    sum += startSum * (1+apr/12)**(period)
    for (let i = 1; i < period; i++) {
        sum += periodicSum * (1 + apr/12)**(i)
    }
    return sum
}


let balance5apr = calculateBalance(startSum, periodicSum, period, 5)
let balance10apr = calculateBalance(startSum, periodicSum, period, 10)
let balance15apr = calculateBalance(startSum, periodicSum, period, 15)
let  balance20apr = calculateBalance(startSum, periodicSum, period, 20)

let items = [{ name: 'Big Mac', price: 2 },
{ name: 'Flip Flops', price: 3 },
{ name: 'Coca-Cola Pack', price: 5 },
{ name: 'Movie Tickets', price: 12 },
{ name: 'Book', price: 15 },
{ name: 'Lobster Dinner', price: 45 },
{ name: 'Video Game', price: 60 },
{ name: 'Amazon Echo', price: 99 },
{ name: '1 Year Netflix', price: 100 },
{ name: 'Air Jordans', price: 125 },
{ name: 'Airpods', price: 199 },
{ name: 'Gaming Console', price: 299 },
{ name: 'Drone', price: 350 },
{ name: 'Smartphone', price: 700 },
{ name: 'Bike', price: 800 },
{ name: 'Puppy', price: 1500 },
{ name: 'Iphone X', price: 2000 },
{ name: 'Horse', price: 2500 },
{ name: 'Acre of Farmland', price: 3000 },
{ name: 'Designer Handbag', price: 5500 },
{ name: 'Hot Tub', price: 6000 },
{ name: 'Luxury Wine', price: 7000 },
{ name: 'Diamond Ring', price: 10000 },
{ name: 'Rolex', price: 15000 },
{ name: 'Tesla', price: 75000 },
{ name: 'Monster Truck', price: 150000 },
{ name: 'Ferrari', price: 250000 },
{ name: 'Single Family Home', price: 300000 },
{ name: 'Gold Bar', price: 700000 },
{ name: 'McDonalds Franchise', price: 1500000 },
{ name: 'house in california', price: 4000000 },
{ name: 'Yacht', price: 7500000 },
{ name: 'M1 Abrams Tank', price: 8000000 },
{ name: 'Formula 1 Car', price: 15000000 },
{ name: 'Apache Helicopter', price: 31000000 },
{ name: 'Mansion', price: 45000000 },
{ name: 'Make a movie', price: 100000000 },
{ name: 'Boeing 747', price: 148000000 },
{ name: 'Mona Lisa', price: 780000000 },
{ name: 'Skyscraper', price: 850000000 },
{ name: 'Cruise Ship', price: 930000000 },
{ name: 'NBA Team', price: 2120000000 }]

// let items = [
//     {
//         name: "NBA Team",
//         price: 2120000000, //2.1 Bil
//     },
//     {
//         name: "Cruise Ship",
//         price: 930000000, //930 Mil
//     },
//     {
//         name: "Skyscraper",
//         price: 850000000, //850 Mil
//     },
//     {
//         name: "Mona Lisa",
//         price: 780000000, //2.1 Bil
//     },
//     {
//         name: "Boeing 747",
//         price: 148000000, //148 Mil
//     },
//     {
//         name: "Make a movie",
//         price: 100000000, //100 Mil
//     },
//     {
//         name: "Mansion",
//         price: 45000000, //45 Mil
//     },
//     {
//         name: "Apache Helicopter",
//         price: 31000000, //31 Mil
//     },
//     {
//         name: "Formula 1 Car",
//         price: 15000000, //15 Mil
//     },
//     {
//         name: "M1 Abrams Tank",
//         price: 8000000, //8 mil
//     },
//     {
//         name: "Yacht",
//         price: 7500000,
//     },
//     {
//         name: "house in california",
//         price: 4000000, //1.6 mil
//     },
//     {
//         name: "McDonalds Franchise",
//         price: 1500000, //1.5 mil
//     },
//     {
//         name: "Gold Bar",
//         price: 700000, //700k
//     },
//     {
//         name: "Single Family Home",
//         price: 300000, //300k
//     },
//     {
//         name: "Ferrari",
//         price: 250000,
//     },
//     {
//         name: "Monster Truck",
//         price: 150000,
//     },
//     {
//         name: "Tesla",
//         price: 75000,
//     },
//     {
//         name: "Rolex",
//         price: 15000,
//     },
//     {
//         name: "Diamond Ring",
//         price: 10000, //10k
//     },
//     {
//         name: "Luxury Wine",
//         price: 7000, //7k
//     },
//     {
//         name: "Hot Tub",
//         price: 6000, 
//     },
//     {
//         name: "Designer Handbag",
//         price: 5500, 
//     },
//     {
//         name: "Acre of Farmland",
//         price: 3000, 
//     },
//     {
//         name: "Horse",
//         price: 2500, 
//     },
//     {
//         name: "Iphone X",
//         price: 2000, 
//     },
//     {
//         name: "Puppy",
//         price: 1500, 
//     },
//     {
//         name: "Bike",
//         price: 800, 
//     },
//     {
//         name: "Smartphone",
//         price: 700, 
//     },
//     {
//         name: "Drone",
//         price: 350, 
//     },
//     {
//         name: "Gaming Console",
//         price: 299, 
//     },
//     {
//         name: "Airpods",
//         price: 199, 
//     },
//     {
//         name: "Air Jordans",
//         price: 125, 
//     },
//     {
//         name: "1 Year Netflix",
//         price: 100, 
//     },
//     {
//         name: "Amazon Echo",
//         price: 99, 
//     },
//     {
//         name: "Video Game",
//         price: 60, 
//     },
//     {
//         name: "Lobster Dinner",
//         price: 45, 
//     },
//     {
//         name: "Book",
//         price: 15, 
//     },
//     {
//         name: "Movie Tickets",
//         price: 12, 
//     },
//     {
//         name: "Coca-Cola Pack",
//         price: 5,
//     },
//     {
//         name: "Flip Flops",
//         price: 3, 
//     },
//     {
//         name: "Big Mac",
//         price: 2, 
//     },
// ]

let currentBalance = balance20apr

console.log("Starting sum: ", startSum, "invest every month: ", periodicSum, "for ", period, " years")
console.log("if invested for 5% apr: ", balance5apr)
console.log("if invested for 10% apr: ", balance10apr)
console.log("if invested for 15% apr: ", balance15apr)
console.log("if invested for 20% apr: ", balance20apr)
console.log("=================")
console.log("current Balance: ", currentBalance)

const calculateAssets = (currentBalance) => {
    for (let i=0; i<items.length; i++) {
        items[i].count = Math.floor(currentBalance / items[i].price)
        currentBalance -= items[i].price * items[i].count
        console.log(items[i].name, items[i].count)
    }
}

calculateAssets(currentBalance)
