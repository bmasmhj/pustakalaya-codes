// multiple cars >  
//       brand , model , year, color 

let cars = [
    {
        brand: "Toyota",
        model: "Camry",
        year: 2020,
        color: "blue"
    },
    {
        brand: "Honda",
        model: "Civic",
        year: 2019,
        color: "red"
    },
    {
        brand: "Ford",
        model: "Mustang",
        year: 2021,
        color: "black"
    },
    {
        brand: "Chevrolet",
        model: "Malibu",
        year: 2018,
        color: "white"
    }
]

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i].brand);
//     console.log(cars[i].model);
//     console.log(cars[i].year);
//     console.log(cars[i].color);
// }


//  array push and pop 
console.log("Before Push", cars);
//  array ma data halnu 
cars.push({
    brand: "Nissan",
    model: "Altima",
    year: 2022,
    color: "silver"
});
console.log("After Push" , cars);
cars.pop();
console.log("After Pop", cars);