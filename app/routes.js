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
          var fulltermpregnancy = moment().add(30, 'weeks'); // 40 weeks from today is a full term pregnancy - 10 weeks
    
          if (duedateday && duedatemonth && duedateyear) {

            if (duedate > fulltermpregnancy) { // If due date is later than 30 weeks from today they are less than 10 weeks pregnant
              res.redirect('/v2/add-applicant-step3-error')
            } else {
              res.redirect('/v2/CORRECT')
            }

          }
          else {
            res.redirect('/v2/add-applicant-step3')
          }
  
      
      })

// ********************************
// MANAGE HEALTHY START VOUCHERS (VERSION 3)
// ********************************

// Capture NHSMail address (Login)
router.post('/v3/nhs-login', function (req, res) {

  var nhsLogin = req.session.data['nhs-mail-address']

  if (nhsLogin === ""){
    req.session.data['nhs-mail-address'] = "joe.bloggs@nhs.net";
    res.redirect('/v3/home')
  }
  else if (nhsLogin) {
    res.redirect('/v3/home')
  }
  else {
    res.redirect('/v3/home')
  }
  
})

// // Find address

// router.post('/v3/find-address', function (req, res) {

//   var name = req.session.data['1']
//   var dob = req.session.data['2']
//   var NI = req.session.data['3']
//   var houseNumber = req.session.data['4']
//   var postcode = req.session.data['5']

//   if (postcode) {
//     res.redirect('/v3/add-applicant-step1-1')
//   }
//   else {
//     res.redirect('/v3/add-applicant-step1')
//   }

// })

// Scotland

router.post('/v3/do-you-live-in-scotland', function (req, res) {

  var scotland = req.session.data['scotland']

  if (scotland === "yes") {
    res.redirect('/v3/applying-from-scotland')
  }
  else if (scotland === "no") {
    res.redirect('/v3/add-applicant-step2')
  }
  else {
    res.redirect('/v3/add-applicant-step1')
  }

})

// Scotland

router.post('/v3/pregnant-or-children', function (req, res) {

  var pregnantorchildren = req.session.data['pregnant-or-children']

  if (pregnantorchildren) {

    if (pregnantorchildren === 'pregnant') {
      res.redirect('/v3/add-applicant-step3')
    }
    else if (pregnantorchildren === 'children') {
      res.redirect('/v3/add-applicant-step4')
    }
    else if (pregnantorchildren === 'NONE') {
      res.redirect('/v3/add-applicant-step2-error')
    }
    else if (pregnantorchildren.toString() == 'pregnant,children') {
      res.redirect('/v3/add-applicant-step3')
    }
    
  } else {
    res.redirect('/v3/add-applicant-step2')
  }

})

///////////

// Date of birth

router.post('/v3/date-of-birth', function (req, res) {

  var dateofbirthday = req.session.data['dateofbirthday']
  var dateofbirthmonth = req.session.data['dateofbirthmonth']
  var dateofbirthyear = req.session.data['dateofbirthyear']

  var dob = new Date(dateofbirthyear, dateofbirthmonth, dateofbirthday);
  var ageDate =  new Date(today - dob.getTime())
  var temp = ageDate.getFullYear();
  var yrs = Math.abs(temp - 1970);

  req.session.data['age'] = yrs; 


  if (dateofbirthday && dateofbirthmonth && dateofbirthyear) {

      if (yrs >= 16 && yrs < 18) {
        res.redirect('/v3/do-they-get-vouchers')
      } else {
        res.redirect('/v3/not-currently-eligible-dob')
      }

  }
  else {
    res.redirect('/v3/date-of-birth')
  }

})

// Do they get Healthy Start vouchers at the moment?
router.post('/v3/do-they-get-vouchers', function (req, res) {

  var vouchers = req.session.data['vouchers']

  if (vouchers === "yes") {
    res.redirect('/v3/already-get-vouchers')
  }
  else if (vouchers === "no") {
    res.redirect('/v3/do-they-live-in-scotland')
  }
  else {
    res.redirect('/v3/do-they-get-vouchers')
  }

})

// Do they live in Scotland?

router.post('/v3/do-they-live-in-scotland', function (req, res) {

  var scotland = req.session.data['scotland']

  if (scotland === "yes") {
    res.redirect('/v3/applying-from-scotland')
  }
  else if (scotland === "no") {
    res.redirect('/v3/are-they-pregnant')
  }
  else {
    res.redirect('/v3/do-they-live-in-scotland')
  }

})

// Are they pregnant?

router.post('/v3/are-they-pregnant', function (req, res) {

  var pregnant = req.session.data['pregnant']

  if (pregnant === "yes") {
    res.redirect('/v3/due-date')
  }
  else if (pregnant === "no") {
    res.redirect('/v3/not-currently-eligible')
  }
  else {
    res.redirect('/v3/are-they-pregnant')
  }

})

router.post('/v3/due-date', function (req, res) {

  var duedateday = req.session.data['duedateday']
  var duedatemonth = req.session.data['duedatemonth']
  var duedateyear = req.session.data['duedateyear']

  var duedate = moment(duedateyear + '-' + duedatemonth + '-' + duedateday);
  var fulltermpregnancy = moment().add(30, 'weeks'); // 40 weeks from today is a full term pregnancy - 10 weeks

  var temp = moment(duedate).subtract(30, 'weeks');

  var fourtytwoweeksfromtoday = moment().add(42, 'weeks');

  req.session.data['preggers'] = moment(temp).format('Do MMMM YYYY');
  
  if (duedateday && duedatemonth && duedateyear) { // If a date has been entered...

    if (duedate > fourtytwoweeksfromtoday) { // If due date is greater than 42 weeks from today...
      res.redirect('/v3/due-date-42-weeks') // ...redirect to error screen...
    } else {
      res.redirect('/v3/name') // ...otherwise allow them to continue their journey!
    }

  }
  else {
    res.redirect('/v3/due-date')
  }

})

// Do they have any children under the age of 4?

router.post('/v3/children-under-four', function (req, res) {

  var childrenunderfour = req.session.data['childrenunderfour']
  var pregnant = req.session.data['pregnant']

  if (pregnant === "yes" && childrenunderfour === "no") {
    res.redirect('/v3/name')
  } else if (pregnant === "no" && childrenunderfour === "yes") {
    res.redirect('/v3/not-currently-eligible')
  } else if (pregnant === "yes" && childrenunderfour === "yes") {
    res.redirect('/v3/name')
  } else if (pregnant === "no" && childrenunderfour === "no") {
    res.redirect('/v3/not-eligible')
  } else {
    res.redirect('/v3/children-under-four')
  }

})

// What is their name?

router.post('/v3/name', function (req, res) {

  var firstname = req.session.data['firstname']
  var lastname = req.session.data['lastname']

  if (firstname && lastname) {
    res.redirect('/v3/address')
  }
  else {
    res.redirect('/v3/name')
  }

})

// What is their address?

router.post('/v3/address', function (req, res) {

  var addressline1 = req.session.data['addressline1']
  var addressline2 = req.session.data['addressline2']
  var towncity = req.session.data['towncity']
  var postcode = req.session.data['postcode']

  if (addressline1 && towncity && postcode) {
    res.redirect('/v3/national-insurance-number')
  }
  else {
    res.redirect('/v3/address')
  }

})

// What is their national insurance number?

router.post('/v3/national-insurance-number', function (req, res) {

  var nationalinsurancenumber = req.session.data['nationalinsurancenumber']

  if (nationalinsurancenumber) {
    res.redirect('/v3/telephone-number')
  }
  else {
    res.redirect('/v3/national-insurance-number')
  }

})

// What is their telephone number?

router.post('/v3/telephone-number', function (req, res) {

  var telephonenumber = req.session.data['telephonenumber']

  if (telephonenumber) {
    res.redirect('/v3/email-address')
  }
  else {
    res.redirect('/v3/telephone-number')
  }

})

// What is their email address?

router.post('/v3/email-address', function (req, res) {

  var emailaddress = req.session.data['emailaddress']

  if (emailaddress) {
    res.redirect('/v3/terms-and-conditions')
  }
  else {
    res.redirect('/v3/email-address')
  }

})

// Terms and Conditions

router.post('/v3/terms-and-conditions', function (req, res) {

  var terms = req.session.data['terms']

  var duedateday = req.session.data['duedateday']
  var duedatemonth = req.session.data['duedatemonth']
  var duedateyear = req.session.data['duedateyear']

  var duedate = moment(duedateyear + '-' + duedatemonth + '-' + duedateday);
  var fulltermpregnancy = moment().add(30, 'weeks'); // 40 weeks from today is a full term pregnancy - 10 weeks

  if (terms) {

    if (duedate > fulltermpregnancy) {
      res.redirect('/v3/confirmation-under-10-weeks')
    } else {
      res.redirect('/v3/confirmation-over-10-weeks')
    }

    res.redirect('/v3/confirmation')
  }
  else {
    res.redirect('/v3/terms-and-conditions')
  }

})