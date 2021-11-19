// Import Express
const express = require('express')
const router = express.Router()

// สร้าง Method ในการทำงาน Server
router.get('',(req,res)=>{
    res.render('pages/backend/dashboard',
    { 
        title: 'Dashboard', 
        heading:'Dashboard',
        layout: './layouts/backend'
    }
    )
})


module.exports = router