// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

// ********************************
// MANAGE HEALTHY START VOUCHERS (VERSION 1)
// ********************************

// Capture NHSMail address (Login)
router.post('/v1/nhs-login', function (req, res) {

    var nhsLogin = req.session.data['nhs-mail-address']
  
    if (nhsLogin === ""){
      req.session.data['nhs-mail-address'] = "joe.bloggs@nhs.net";
      res.redirect('/v1/index')
    }
    else if (nhsLogin) {
      res.redirect('/v1/index')
    }
    else {
      res.redirect('/v1/index')
    }
    
})

// New application