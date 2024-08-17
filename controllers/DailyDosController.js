const DailyDosModel = require('../model/DailyDosModel')
const DailydoModel = require('../model/DailyDosModel')

module.exports.getDailyDos = async (req,res) => {
    const DailyDos = await DailydoModel.find()
    res.send(DailyDos)
}

module.exports.saveDailyDo = async (req,res) => {
    const { text } = req.body

    DailydoModel.create({text}).then((data) => {
        console.log("Added Successfully...");
        res.send(data);
    })
}

module.exports.updateDailyDos = async (req,res) => {
    const { _id, text} = req.body;

    DailyDosModel.findByIdAndUpdate(_id, {text})
    .then(() => res.send("Updated Successfully..."))
    .catch((err) => console.log(err))
}

module.exports.deleteDailyDos = async (req,res) => {
    const { _id} = req.body;

    DailyDosModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err))
}