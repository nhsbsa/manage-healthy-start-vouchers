// External dependencies
const express = require('express');
const router = express.Router();
const moment = require('moment')

// Add your routes here - above the module.exports line

module.exports = router;

// CONSTANTS

const today = new Date(Date.now());

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

// // Find address

// router.post('/v2/find-address', function (req, res) {

//   var name = req.session.data['1']
//   var dob = req.session.data['2']
//   var NI = req.session.data['3']
//   var houseNumber = req.session.data['4']
//   var postcode = req.session.data['5']

//   if (postcode) {
//     res.redirect('/v2/add-applicant-step1-1')
//   }
//   else {
//     res.redirect('/v2/add-applicant-step1')
//   }

// })

// Scotland

router.post('/v2/do-you-live-in-scotland', function (req, res) {

  var scotland = req.session.data['scotland']

  if (scotland === "yes") {
    res.redirect('/v2/applying-from-scotland')
  }
  else if (scotland === "no") {
    res.redirect('/v2/add-applicant-step2')
  }
  else {
    res.redirect('/v2/add-applicant-step1')
  }

})

// Scotland

router.post('/v2/pregnant-or-children', function (req, res) {

  var pregnantorchildren = req.session.data['pregnant-or-children']

  if (pregnantorchildren) {

    if (pregnantorchildren === 'pregnant') {
      res.redirect('/v2/add-applicant-step3')
    }
    else if (pregnantorchildren === 'children') {
      res.redirect('/v2/add-applicant-step4')
    }
    else if (pregnantorchildren === 'NONE') {
      res.redirect('/v2/add-applicant-step2-error')
    }
    else if (pregnantorchildren.toString() == 'pregnant,children') {
      res.redirect('/v2/add-applicant-step3')
    }
    
  } else {
    res.redirect('/v2/add-applicant-step2')
  }

})

        // Are you pregnant? > Due Date

        router.post('/v2/due-date', function (req, res) {

          var duedateday = req.session.data['duedateday']
          var duedatemonth = req.session.data['duedatemonth']
          var duedateyear = req.session.data['duedateyear']

          var duedate = moment(duedateyear + '-' + duedatemonth + '-' + duedateday);
          var tenweeksfromtoday = moment().add(10, 'weeks');
          
          if (duedateday && duedatemonth && duedateyear) {

            if (duedate < tenweeksfromtoday) {
              res.redirect('/v2/add-applicant-step3-error')
            } else {
              res.redirect('/v2/CORRECT')
            }

          }
          else {
            res.redirect('/v2/add-applicant-step3')
          }
  
      
      })