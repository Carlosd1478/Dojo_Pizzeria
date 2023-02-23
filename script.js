function pizzaOven(crust, sauce, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

// var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
// console.log(s1);

// var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
// console.log(p2);

// var p3 = pizzaOven("hand tossed", "marinara", ["mozzarella"], ["pineapple", "ham", "onions"]);
// console.log(p3);

// var p4 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
// console.log(p4);



function randomPizza() {
    var len = pizza.length - 1;
    var roll = Math.ceil(Math.random() * len);
    console.log(pizza[roll])
}

var pizza = [
    "Meat lovers",
    "Pepperoni.",
    "Cheese.",
    "Mushroom.",
    "Mushroom and onions.",
];
randomPizza();
