const express = require('express')
const router = express.Router()
const expenses = [{
    id: 1,
    type: "cloths",
    item: "shirt",
    price: 200
}]

router.get('/expenses', (req,res) => {
    res.send(expenses)
})

router.post('/expenses', (req, res) =>{
    const newExpense = req.body
    newExpense.id = expenses.length + 1
    expenses.push(newExpense)
    res.send(expenses)
})

router.delete('/expenses', (req, res)=>{
    const id = req.body.id
    const expenseIndex = expenses.findIndex(expense => id === expense.id)
    expenses.splice(expenseIndex, 1)
    res.send(expenses)
})

router.put('/expenses', (req,res) =>{
    const updatedTransaction = req.body
    const expenseIndex = expenses.findIndex(expense => updatedTransaction.id === expense.id)
    expenses.splice(expenseIndex, 1, updatedTransaction)
    res.send(expenses)
})

module.exports = router