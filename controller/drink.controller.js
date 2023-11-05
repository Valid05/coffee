const Drink = require('../model/Drink.model');

module.exports.drinkController = {
    addDrink: (req, res)=>{
    Drink.create({
        name: req.body.name,
        price: req.body.price,
        inStock: req.body.inStock,
        coffeine: req.body.coffeine,
        volume: req.body.volume,
        discription: req.body.discription
    }).then((data) => {
        res.json(data)
    })
    .catch((error)=>{
        res.json("Ошибка при добавление напитка")
    })
},
getDrink: (req, res)=>{
    Drinks.find({},{name:1, price:1})
    .then((data)=>
        res.json(data))

    .catch((error)=>
        res.json(error))
},
getOneDrinkById: (req, res) =>{
    Drinks.findById(req.params.id)
    .then((data)=>
        res.json(data))

    .catch((error)=>
        res.json(error))
},
getDrinksInStock: (req, res)=> {
    Drinks.find({inStock: true})
    .then((data)=>
        res.json(data))

    .catch((error)=>
        res.json(error))
},
deleteDrinkById: (req,res)=>{
    Drinks.findByIdAndDelete(req.params.id)
    .then((data)=>
        res.json(data))

    .catch((error)=>
        res.json(error))
},
editDrink: (req,res)=>{
    Drinks.findByIdAndUpdate(req.params.id)
    .then((data)=>
        res.json(data))

    .catch((error)=>
        res.json(error))
}
}