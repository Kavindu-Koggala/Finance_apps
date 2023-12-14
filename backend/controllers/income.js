
const IncomeSchema = require("../models/incomeModel")
//const { param } = require("../routes/transactions")

exports.addIncome = async (req, res) => {
    //console.log(req.body);

    const { title, amount, category, description, date} = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })
    

   try {
        //validations
        if(!title || !category || !description || !date ){
            return res.status(400).json({message: 'All fields are required'})
        }
        if(amount <= 0 || !amount == 'number'){
            return res.status(400).json({message: 'Amount must be positive number'})
        }
        await income.save()
        res.status(200).json({message: 'Income added'})
        
    } catch (error) {
        res.status(500).json({message: 'Server ERROR'})
        
    }

    console.log(income)
}

exports.getIncome = async (req, res) =>{
    try {
        const income = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
        
    } catch (error) {
        res.status(500).json({message: 'Server ERROR'})
        
    }
}

exports.deleteIncome = async (req, res) =>{
   const {id} = req.params;
   IncomeSchema.findByIdAndDelete(id)
   .then((income) =>{
    res.status(200).json({message: 'Income Deleted'})
   })
   .catch((err) =>{
    res.status(500).json({message: 'Server ERROR'})
   })
}