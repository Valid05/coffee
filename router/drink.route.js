const {Router} = require('express')
const { drinkController } = require('../controller/drink.controller')

const router = Router()

router.get('/drink', drinkController.getDrink)
router.get('/drink/inStock', drinkController.getDrinksInStock)
router.get('/drink/:id', drinkController.getOneDrinkById)
router.post('/drink', drinkController.addDrink)
router.delete('/drink/:id',drinkController.deleteDrinkById)
router.patch('/drink/:id',drinkController.editDrink)

module.exports = router