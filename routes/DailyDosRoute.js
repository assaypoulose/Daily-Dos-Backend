const {Router} = require("express")
const { getDailyDos, saveDailyDo, updateDailyDos, deleteDailyDos } = require('../controllers/DailyDosController')

const router = Router()

router.get('/', getDailyDos)
router.post('/save', saveDailyDo)
router.post('/update', updateDailyDos)
router.post('/delete', deleteDailyDos)

module.exports = router;