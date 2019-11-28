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

// ********************************
// MANAGE HEALTHY START VOUCHERS (VERSION 2)
// ********************************

// Capture NHSMail address (Login)
router.post('/v2/nhs-login', function (req, res) {

  var nhsLogin = req.session.data['nhs-mail-address']

  if (nhsLogin === ""){
    req.session.data['nhs-mail-address'] = "joe.bloggs@nhs.net";
    res.redirect('/v2/home')
  }
  else if (nhsLogin) {
    res.redirect('/v2/home')
  }
  else {
    res.redirect('/v2/home')
  }
  
})

// Find address

router.post('/v2/find-address', function (req, res) {

  var name = req.session.data['1']
  var dob = req.session.data['2']
  var NI = req.session.data['3']
  var houseNumber = req.session.data['4']
  var postcode = req.session.data['5']

  if (postcode) {
    res.redirect('/v2/add-applicant-step1-1')
  }
  else {
    res.redirect('/v2/add-applicant-step1')
  }

})