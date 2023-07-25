// Gov Notify

const { NotifyClient } = require('notifications-node-client');
let notify = null;

if (process.env.NOTIFYAPIKEY) {
  notify = new NotifyClient(process.env.NOTIFYAPIKEY);
};

// External dependencies
const express = require('express');
const router = express.Router();
const moment = require('moment');
const e = require('express');

// ****************************************
// NOTIFICATIONS
// ****************************************

router.post('/v5/terms-and-conditions', function (req, res) {

  var emailAddress = req.session.data['emailaddress']
  var telephoneNumber = req.session.data['telephonenumber']
  var firstName = req.session.data['firstname']

  if (emailAddress != "") {
    notify.sendEmail(
      // this long string is the template ID, copy it from the template
      // page in GOV.UK Notify. It's not a secret so it's fine to put it
      // in your code.
      '93e5fbda-bc50-42c3-87cb-467cf0470862',
      // `emailAddress` here needs to match the name of the form field in
      // your HTML page
      emailAddress, {
      personalisation: {
        'firstName': firstName
      }
    }
    );
    res.redirect('/v5/confirmation-over-10-weeks')
  }
  else if (telephoneNumber != "") {
    notify.sendSms(
      // this long string is the template ID, copy it from the template
      // page in GOV.UK Notify. It's not a secret so it's fine to put it
      // in your code.
      '5dd2a61e-a740-4a58-a484-7fbc2b5454b7',
      // `emailAddress` here needs to match the name of the form field in
      // your HTML page
      telephoneNumber, {
      personalisation: {
        'firstName': firstName
      }
    }
    );
    res.redirect('/v5/confirmation-over-10-weeks')
  }
  else {
    res.redirect('/v5/confirmation-over-10-weeks')
  }

});

router.post('/v7/terms-and-conditions', function (req, res) {

  var emailAddress = req.session.data['emailaddress']
  var telephoneNumber = req.session.data['telephonenumber']
  var firstName = req.session.data['firstname']

  if (emailAddress != "") {
    notify.sendEmail(
      // this long string is the template ID, copy it from the template
      // page in GOV.UK Notify. It's not a secret so it's fine to put it
      // in your code.
      '93e5fbda-bc50-42c3-87cb-467cf0470862',
      // `emailAddress` here needs to match the name of the form field in
      // your HTML page
      emailAddress, {
      personalisation: {
        'firstName': firstName
      }
    }
    );
    res.redirect('/v7/confirmation-over-10-weeks')
  }
  else if (telephoneNumber != "") {
    notify.sendSms(
      // this long string is the template ID, copy it from the template
      // page in GOV.UK Notify. It's not a secret so it's fine to put it
      // in your code.
      '5dd2a61e-a740-4a58-a484-7fbc2b5454b7',
      // `emailAddress` here needs to match the name of the form field in
      // your HTML page
      telephoneNumber, {
      personalisation: {
        'firstName': firstName
      }
    }
    );
    res.redirect('/v7/confirmation-over-10-weeks')
  }
  else {
    res.redirect('/v7/confirmation-over-10-weeks')
  }

});

router.post('/v8/terms-and-conditions', function (req, res) {

  var emailAddress = req.session.data['emailaddress']
  var telephoneNumber = req.session.data['telephonenumber']
  var firstName = req.session.data['firstname']

  if (emailAddress != "") {
    notify.sendEmail(
      // this long string is the template ID, copy it from the template
      // page in GOV.UK Notify. It's not a secret so it's fine to put it
      // in your code.
      '93e5fbda-bc50-42c3-87cb-467cf0470862',
      // `emailAddress` here needs to match the name of the form field in
      // your HTML page
      emailAddress, {
      personalisation: {
        'firstName': firstName
      }
    }
    );
    res.redirect('/v8/confirmation-over-10-weeks')
  }
  else if (telephoneNumber != "") {
    notify.sendSms(
      // this long string is the template ID, copy it from the template
      // page in GOV.UK Notify. It's not a secret so it's fine to put it
      // in your code.
      '5dd2a61e-a740-4a58-a484-7fbc2b5454b7',
      // `emailAddress` here needs to match the name of the form field in
      // your HTML page
      telephoneNumber, {
      personalisation: {
        'firstName': firstName
      }
    }
    );
    res.redirect('/v8/confirmation-over-10-weeks')
  }
  else {
    res.redirect('/v8/confirmation-over-10-weeks')
  }

});














// CONSTANTS

const today = new Date(Date.now());

// ****************************************
// Get help to buy food and milk (Healthy Start) (VERSION 1)
// ****************************************

// Capture NHSMail address (Login)
router.post('/v1/nhs-login', function (req, res) {

  var nhsLogin = req.session.data['nhs-mail-address']

  if (nhsLogin === "") {
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

// ****************************************
// Get help to buy food and milk (Healthy Start) (VERSION 2)
// ****************************************

// Capture NHSMail address (Login)
router.post('/v2/nhs-login', function (req, res) {

  var nhsLogin = req.session.data['nhs-mail-address']

  if (nhsLogin === "") {
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
  var fulltermpregnancy = moment().add(32, 'weeks'); // 42 weeks from today is a full term pregnancy - 10 weeks

  if (duedateday && duedatemonth && duedateyear) {

    if (duedate > fulltermpregnancy) { // If due date is later than 32 weeks from today they are less than 10 weeks pregnant
      res.redirect('/v2/add-applicant-step3-error')
    } else {
      res.redirect('/v2/CORRECT')
    }

  }
  else {
    res.redirect('/v2/add-applicant-step3')
  }


})

// ****************************************
// Get help to buy food and milk (Healthy Start) (VERSION 3)
// ****************************************

// Capture NHSMail address (Login)
router.post('/v3/nhs-login', function (req, res) {

  var nhsLogin = req.session.data['nhs-mail-address']

  if (nhsLogin === "") {
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
  var ageDate = new Date(today - dob.getTime())
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
  var fulltermpregnancy = moment().add(32, 'weeks'); // 42 weeks from today is a full term pregnancy - 10 weeks

  var temp = moment(duedate).subtract(32, 'weeks');

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
  var fulltermpregnancy = moment().add(32, 'weeks'); // 42 weeks from today is a full term pregnancy - 10 weeks

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

// ****************************************
// Get help to buy food and milk (Healthy Start) (VERSION 4)
// ****************************************

// Capture NHSMail address (Login)
router.post('/v4/nhs-login', function (req, res) {

  var nhsLogin = req.session.data['nhs-mail-address']

  if (nhsLogin === "") {
    req.session.data['nhs-mail-address'] = "joe.bloggs@nhs.net";
    res.redirect('/v4/home')
  }
  else if (nhsLogin) {
    res.redirect('/v4/home')
  }
  else {
    res.redirect('/v4/home')
  }

})

// // Find address

// router.post('/v4/find-address', function (req, res) {

//   var name = req.session.data['1']
//   var dob = req.session.data['2']
//   var NI = req.session.data['3']
//   var houseNumber = req.session.data['4']
//   var postcode = req.session.data['5']

//   if (postcode) {
//     res.redirect('/v4/add-applicant-step1-1')
//   }
//   else {
//     res.redirect('/v4/add-applicant-step1')
//   }

// })

// Scotland

router.post('/v4/do-you-live-in-scotland', function (req, res) {

  var scotland = req.session.data['scotland']

  if (scotland === "yes") {
    res.redirect('/v4/applying-from-scotland')
  }
  else if (scotland === "no") {
    res.redirect('/v4/add-applicant-step2')
  }
  else {
    res.redirect('/v4/add-applicant-step1')
  }

})

// Scotland

router.post('/v4/pregnant-or-children', function (req, res) {

  var pregnantorchildren = req.session.data['pregnant-or-children']

  if (pregnantorchildren) {

    if (pregnantorchildren === 'pregnant') {
      res.redirect('/v4/add-applicant-step3')
    }
    else if (pregnantorchildren === 'children') {
      res.redirect('/v4/add-applicant-step4')
    }
    else if (pregnantorchildren === 'NONE') {
      res.redirect('/v4/add-applicant-step2-error')
    }
    else if (pregnantorchildren.toString() == 'pregnant,children') {
      res.redirect('/v4/add-applicant-step3')
    }

  } else {
    res.redirect('/v4/add-applicant-step2')
  }

})

///////////

// Date of birth

router.post('/v4/date-of-birth', function (req, res) {

  var dateofbirthday = req.session.data['dateofbirthday']
  var dateofbirthmonth = req.session.data['dateofbirthmonth']
  var dateofbirthyear = req.session.data['dateofbirthyear']

  var dob = new Date(dateofbirthyear, dateofbirthmonth, dateofbirthday);
  var ageDate = new Date(today - dob.getTime())
  var temp = ageDate.getFullYear();
  var yrs = Math.abs(temp - 1970);

  req.session.data['age'] = yrs;


  if (dateofbirthday && dateofbirthmonth && dateofbirthyear) {

    if (yrs >= 16 && yrs < 18) {
      res.redirect('/v4/do-they-get-vouchers')
    } else {
      res.redirect('/v4/not-currently-eligible-dob')
    }

  }
  else {
    res.redirect('/v4/date-of-birth')
  }

})

// Do they get Healthy Start vouchers at the moment?
router.post('/v4/do-they-get-vouchers', function (req, res) {

  var vouchers = req.session.data['vouchers']

  if (vouchers === "yes") {
    res.redirect('/v4/already-get-vouchers')
  }
  else if (vouchers === "no") {
    res.redirect('/v4/do-they-live-in-scotland')
  }
  else {
    res.redirect('/v4/do-they-get-vouchers')
  }

})

// Do they live in Scotland?

router.post('/v4/do-they-live-in-scotland', function (req, res) {

  var scotland = req.session.data['scotland']

  if (scotland === "yes") {
    res.redirect('/v4/applying-from-scotland')
  }
  else if (scotland === "no") {
    res.redirect('/v4/are-they-pregnant')
  }
  else {
    res.redirect('/v4/do-they-live-in-scotland')
  }

})

// Are they pregnant?

router.post('/v4/are-they-pregnant', function (req, res) {

  var pregnant = req.session.data['pregnant']

  if (pregnant === "yes") {
    res.redirect('/v4/due-date')
  }
  else if (pregnant === "no") {
    res.redirect('/v4/not-currently-eligible')
  }
  else {
    res.redirect('/v4/are-they-pregnant')
  }

})

router.post('/v4/due-date', function (req, res) {

  var duedateday = req.session.data['duedateday']
  var duedatemonth = req.session.data['duedatemonth']
  var duedateyear = req.session.data['duedateyear']

  var duedate = moment(duedateyear + '-' + duedatemonth + '-' + duedateday);
  var fulltermpregnancy = moment().add(32, 'weeks'); // 42 weeks from today is a full term pregnancy - 10 weeks

  var temp = moment(duedate).subtract(32, 'weeks');

  var fourtytwoweeksfromtoday = moment().add(42, 'weeks');

  req.session.data['preggers'] = moment(temp).format('Do MMMM YYYY');

  if (duedateday && duedatemonth && duedateyear) { // If a date has been entered...

    if (duedate > fourtytwoweeksfromtoday) { // If due date is greater than 42 weeks from today...
      res.redirect('/v4/due-date-42-weeks') // ...redirect to error screen...
    } else {
      res.redirect('/v4/name') // ...otherwise allow them to continue their journey!
    }

  }
  else {
    res.redirect('/v4/due-date')
  }

})

// Do they have any children under the age of 4?

router.post('/v4/children-under-four', function (req, res) {

  var childrenunderfour = req.session.data['childrenunderfour']
  var pregnant = req.session.data['pregnant']

  if (pregnant === "yes" && childrenunderfour === "no") {
    res.redirect('/v4/name')
  } else if (pregnant === "no" && childrenunderfour === "yes") {
    res.redirect('/v4/not-currently-eligible')
  } else if (pregnant === "yes" && childrenunderfour === "yes") {
    res.redirect('/v4/name')
  } else if (pregnant === "no" && childrenunderfour === "no") {
    res.redirect('/v4/not-eligible')
  } else {
    res.redirect('/v4/children-under-four')
  }

})

// What is their name?

router.post('/v4/name', function (req, res) {

  var firstname = req.session.data['firstname']
  var lastname = req.session.data['lastname']

  if (firstname && lastname) {
    res.redirect('/v4/address')
  }
  else {
    res.redirect('/v4/name')
  }

})

// What is their address?

router.post('/v4/address', function (req, res) {

  var addressline1 = req.session.data['addressline1']
  var addressline2 = req.session.data['addressline2']
  var towncity = req.session.data['towncity']
  var postcode = req.session.data['postcode']

  if (addressline1 && towncity && postcode) {
    res.redirect('/v4/national-insurance-number')
  }
  else {
    res.redirect('/v4/address')
  }

})

// What is their national insurance number?

router.post('/v4/national-insurance-number', function (req, res) {

  var nationalinsurancenumber = req.session.data['nationalinsurancenumber']

  if (nationalinsurancenumber) {
    res.redirect('/v4/telephone-number')
  }
  else {
    res.redirect('/v4/national-insurance-number')
  }

})

// What is their telephone number?

router.post('/v4/telephone-number', function (req, res) {

  var telephonenumber = req.session.data['telephonenumber']

  if (telephonenumber) {
    res.redirect('/v4/email-address')
  }
  else {
    res.redirect('/v4/telephone-number')
  }

})

// What is their email address?

router.post('/v4/email-address', function (req, res) {

  var emailaddress = req.session.data['emailaddress']

  if (emailaddress) {
    res.redirect('/v4/terms-and-conditions')
  }
  else {
    res.redirect('/v4/email-address')
  }

})

// Terms and Conditions

router.post('/v4/terms-and-conditions', function (req, res) {

  var terms = req.session.data['terms']

  var duedateday = req.session.data['duedateday']
  var duedatemonth = req.session.data['duedatemonth']
  var duedateyear = req.session.data['duedateyear']

  var duedate = moment(duedateyear + '-' + duedatemonth + '-' + duedateday);
  var fulltermpregnancy = moment().add(32, 'weeks'); // 42 weeks from today is a full term pregnancy - 10 weeks

  if (terms) {

    if (duedate > fulltermpregnancy) {
      res.redirect('/v4/confirmation-under-10-weeks')
    } else {
      res.redirect('/v4/confirmation-over-10-weeks')
    }

    res.redirect('/v4/confirmation')
  }
  else {
    res.redirect('/v4/terms-and-conditions')
  }

})

// What is their email address?

router.post('/v4/eligibility', function (req, res) {

  var vouchers = req.session.data['vouchers']
  var scotland = req.session.data['scotland']
  var pregnant = req.session.data['pregnant']

  var dateofbirthday = req.session.data['dateofbirthday']
  var dateofbirthmonth = req.session.data['dateofbirthmonth']
  var dateofbirthyear = req.session.data['dateofbirthyear']

  var dob = new Date(dateofbirthyear, dateofbirthmonth, dateofbirthday);
  var ageDate = new Date(today - dob.getTime())
  var temp = ageDate.getFullYear();
  var yrs = Math.abs(temp - 1970);

  req.session.data['age'] = yrs;

  if (vouchers === "no" && scotland === "no" && pregnant === "yes" && yrs >= 16 && yrs < 18) {
    res.redirect('/v4/details')
  }
  else {
    res.redirect('/v4/eligibility-error')
  }

})

// What is their email address?

router.post('/v4/details', function (req, res) {

  res.redirect('/v4/confirmation-over-10-weeks')


})

// ****************************************
// Get help to buy food and milk (Healthy Start) (VERSION 5)
// ****************************************

// Capture NHSMail address (Login)
router.post('/v5/nhs-login', function (req, res) {

  var nhsLogin = req.session.data['nhs-mail-address']

  if (nhsLogin === "") {
    req.session.data['nhs-mail-address'] = "joe.bloggs@nhs.net";
    res.redirect('/v5/home')
  }
  else if (nhsLogin) {
    res.redirect('/v5/home')
  }
  else {
    res.redirect('/v5/home')
  }

})

// Search
router.post('/v5/search', function (req, res) {

  var searchreferenceNumber = req.session.data['searchreferencenumber']
  var searchfirstName = req.session.data['searchfirstname']
  var searchlastName = req.session.data['searchlastname']
  var searchpostCode = req.session.data['searchpostcode']

  // To find a match search for:
  // Reference number: OAM1959T
  // First name: Anita
  // Last name: Bilal
  // Postcode: NE15 8NY / NE158NY

  if (searchreferenceNumber.includes('OAM1959T')) {
    res.redirect('/v5/result-found')
  } else if (searchfirstName.includes('Anita')) {
    res.redirect('/v5/result-found')
  } else if (searchlastName.includes('Bilal')) {
    res.redirect('/v5/result-found')
  } else if (searchpostCode.includes('NE15 8NY')) {
    res.redirect('/v5/result-found')
  } else if (searchpostCode.includes('NE158NY')) {
    res.redirect('/v5/result-found')
  } else {
    res.redirect('/v5/result-not-found')
  }

})

// Search > Add
router.post('/v5/search-add', function (req, res) {

  var searchadd = req.session.data['searchadd']

  if (searchadd == 'yes') {
    res.redirect('/v5/search-confirmation')
  } else if (searchadd == 'no') {
    res.redirect('/v5/home')
  }
  else {
    res.redirect('/v5/result-not-found')
  }

})

// Capture new applicant
router.post('/v5/personal-details', function (req, res) {

  // Name

  var firstName = req.session.data['firstname']
  var lastName = req.session.data['lastname']

  // Date of birth

  var dateofbirthDay = req.session.data['dateofbirthday']
  var dateofbirthMonth = req.session.data['dateofbirthmonth']
  var dateofbirthYear = req.session.data['dateofbirthyear']

  // Expected due date

  var duedateDay = req.session.data['duedateday']
  var duedateMonth = req.session.data['duedatemonth']
  var duedateYear = req.session.data['duedateyear']

  // Address

  var addressLine1 = req.session.data['addressline1']
  var addressLine2 = req.session.data['addressline2']
  var townCity = req.session.data['towncity']
  var postCode = req.session.data['postcode']

  // National insurance number, telephone number and email address (all optional)

  var nationalinsuranceNumber = req.session.data['nationalinsurancenumber']
  var telephoneNumber = req.session.data['telephonenumber']
  var emailAddress = req.session.data['emailaddress']

  if (firstName && lastName && dateofbirthDay && dateofbirthMonth && dateofbirthYear && duedateDay && duedateMonth && duedateYear && addressLine1 && postCode) {
    res.redirect('/v5/terms-and-conditions')
  }
  else {
    res.redirect('/v5/personal-details-error')
  }

})

// ****************************************
// Get help to buy food and milk (Healthy Start) (VERSION 6)
// ****************************************

// Capture NHSMail address (Login)
router.post('/v6/nhs-login', function (req, res) {

  var nhsLogin = req.session.data['nhs-mail-address']

  if (nhsLogin === "") {
    req.session.data['nhs-mail-address'] = "joe.bloggs@nhs.net";
    res.redirect('/v6/home')
  }
  else if (nhsLogin) {
    res.redirect('/v6/home')
  }
  else {
    res.redirect('/v6/home')
  }

})

// Search
router.post('/v6/search', function (req, res) {

  var searchreferenceNumber = req.session.data['searchreferencenumber']
  var searchfirstName = req.session.data['searchfirstname']
  var searchlastName = req.session.data['searchlastname']
  var searchpostCode = req.session.data['searchpostcode']

  // To find a match search for:
  // Reference number: OAM1959T
  // First name: Anita
  // Last name: Bilal
  // Postcode: NE15 8NY / NE158NY

  if (searchreferenceNumber.includes('OAM1959T')) {
    res.redirect('/v6/result-found')
  } else if (searchfirstName.includes('Anita')) {
    res.redirect('/v6/result-found')
  } else if (searchlastName.includes('Bilal')) {
    res.redirect('/v6/result-found')
  } else if (searchpostCode.includes('NE15 8NY')) {
    res.redirect('/v6/result-found')
  } else if (searchpostCode.includes('NE158NY')) {
    res.redirect('/v6/result-found')
  } else {
    res.redirect('/v6/result-not-found')
  }

})

// Search > Add
router.post('/v6/search-add', function (req, res) {

  var searchadd = req.session.data['searchadd']

  if (searchadd == 'yes') {
    res.redirect('/v6/search-confirmation')
  } else if (searchadd == 'no') {
    res.redirect('/v6/home')
  }
  else {
    res.redirect('/v6/result-not-found')
  }

})

// Capture new applicant
router.post('/v6/new-applicant', function (req, res) {

  // Name

  var firstName = req.session.data['firstname']
  var lastName = req.session.data['lastname']

  // Date of birth

  var dateofbirthDay = req.session.data['dateofbirthday']
  var dateofbirthMonth = req.session.data['dateofbirthmonth']
  var dateofbirthYear = req.session.data['dateofbirthyear']

  // Expected due date

  var duedateDay = req.session.data['duedateday']
  var duedateMonth = req.session.data['duedatemonth']
  var duedateYear = req.session.data['duedateyear']

  // Address

  var addressLine1 = req.session.data['addressline1']
  var addressLine2 = req.session.data['addressline2']
  var townCity = req.session.data['towncity']
  var postCode = req.session.data['postcode']

  // National insurance number, telephone number and email address (all optional)

  var nationalinsuranceNumber = req.session.data['nationalinsurancenumber']
  var telephoneNumber = req.session.data['telephonenumber']
  var emailAddress = req.session.data['emailaddress']

  if (firstName && lastName && dateofbirthDay && dateofbirthMonth && dateofbirthYear && duedateDay && duedateMonth && duedateYear && addressLine1 && postCode) {
    res.redirect('/v6/terms-and-conditions')
  }
  else {
    res.redirect('/v6/new-applicant-error')
  }

})

// ****************************************
// Get help to buy food and milk (Healthy Start) (VERSION 7)
// ****************************************

// Capture NHSMail address (Login)
router.post('/v7/nhs-login', function (req, res) {

  var nhsLogin = req.session.data['nhs-mail-address']

  if (nhsLogin === "") {
    req.session.data['nhs-mail-address'] = "joe.bloggs@nhs.net";
    res.redirect('/v7/home')
  }
  else if (nhsLogin) {
    res.redirect('/v7/home')
  }
  else {
    res.redirect('/v7/home')
  }

})

// Search
router.post('/v7/search', function (req, res) {

  var searchreferenceNumber = req.session.data['searchreferencenumber']
  var searchfirstName = req.session.data['searchfirstname']
  var searchlastName = req.session.data['searchlastname']
  var searchpostCode = req.session.data['searchpostcode']

  // To find a match search for:
  // Reference number: OAM1959T
  // First name: Anita
  // Last name: Bilal
  // Postcode: NE15 8NY / NE158NY

  if (searchreferenceNumber.includes('OAM1959T')) {
    res.redirect('/v7/result-found')
  } else if (searchfirstName.includes('Anita')) {
    res.redirect('/v7/result-found')
  } else if (searchlastName.includes('Bilal')) {
    res.redirect('/v7/result-found')
  } else if (searchpostCode.includes('NE15 8NY')) {
    res.redirect('/v7/result-found')
  } else if (searchpostCode.includes('NE158NY')) {
    res.redirect('/v7/result-found')
  } else {
    res.redirect('/v7/result-not-found')
  }

})

// Search > Add
router.post('/v7/search-add', function (req, res) {

  var searchadd = req.session.data['searchadd']

  if (searchadd == 'yes') {
    res.redirect('/v7/search-confirmation')
  } else if (searchadd == 'no') {
    res.redirect('/v7/home')
  }
  else {
    res.redirect('/v7/result-not-found')
  }

})

// Capture new applicant (Personal Details)
router.post('/v7/personal-details', function (req, res) {

  // Name

  var firstName = req.session.data['firstname']
  var lastName = req.session.data['lastname']

  // Date of birth

  var dateofbirthDay = req.session.data['dateofbirthday']
  var dateofbirthMonth = req.session.data['dateofbirthmonth']
  var dateofbirthYear = req.session.data['dateofbirthyear']

  // Expected due date

  var duedateDay = req.session.data['duedateday']
  var duedateMonth = req.session.data['duedatemonth']
  var duedateYear = req.session.data['duedateyear']

  // Address

  var addressLine1 = req.session.data['addressline1']
  var addressLine2 = req.session.data['addressline2']
  var townCity = req.session.data['towncity']
  var postCode = req.session.data['postcode']

  // National insurance number, telephone number and email address (all optional)

  var nationalinsuranceNumber = req.session.data['nationalinsurancenumber']
  var telephoneNumber = req.session.data['telephonenumber']
  var emailAddress = req.session.data['emailaddress']

  if (firstName && lastName && dateofbirthDay && dateofbirthMonth && dateofbirthYear && duedateDay && duedateMonth && duedateYear && addressLine1 && postCode) {

    // Calculate Age

    var ageToday = new Date(Date.now());
    var dob = new Date(dateofbirthYear, dateofbirthMonth, dateofbirthDay);
    var ageDate = new Date(ageToday - dob.getTime())
    var temp = ageDate.getFullYear();
    var yrs = Math.abs(temp - 1970);

    req.session.data['age'] = yrs;

    console.log(yrs)

    // Calculate Due Date

    var today = moment();
    var dueDate = moment(duedateYear + '-' + duedateMonth + '-' + duedateDay);
    var fulltermPregnancy = moment().add(32, 'weeks'); // 42 weeks from today is a full term pregnancy - 10 weeks    

    if (dueDate < today || dueDate > fulltermPregnancy) {
      req.session.data['duedateInvalid'] = "INELIGIBLE";
      res.redirect('/v7/personal-details-error')
    } else if (yrs >= "18") {
      res.redirect('/v7/personal-details-error')
    } else {
      res.redirect('/v7/bank-details')
    }

  } else {
    res.redirect('/v7/personal-details-error')
  }

})

// Capture new applicant (Bank Details)
router.post('/v7/bank-details', function (req, res) {

  // Bank Details

  var accountName = req.session.data['accountname']
  var sortCode = req.session.data['sortcode']
  var accountNumber = req.session.data['accountnumber']

  if (accountName && sortCode && accountNumber) {
    res.redirect('/v7/terms-and-conditions')
  }
  else {
    res.redirect('/v7/bank-details-error')
  }

})

// ****************************************
// Get help to buy food and milk (Healthy Start) (VERSION 8)
// ****************************************

// Capture NHSMail address (Login)
router.post('/v8/nhs-login', function (req, res) {

  var nhsLogin = req.session.data['nhs-mail-address']

  if (nhsLogin === "") {
    req.session.data['nhs-mail-address'] = "joe.bloggs@nhs.net";
    res.redirect('/v8/home')
  }
  else if (nhsLogin) {
    res.redirect('/v8/home')
  }
  else {
    res.redirect('/v8/home')
  }

})

// Search
router.post('/v8/search', function (req, res) {

  var searchlastName = req.session.data['searchlastname']
  var searchpostCode = req.session.data['searchpostcode']

  // To find a match search for:
  // Last name: Bilal
  // Postcode: NE15 8NY / NE158NY

  if (!searchlastName || !searchpostCode) {
    res.redirect('/v8/home-error')
  } else if ((searchlastName.includes('Bilal')) && (searchpostCode.includes('NE15 8NY') || searchpostCode.includes('NE158NY'))) {
    res.redirect('/v8/result-found')
  } else {
    res.redirect('/v8/result-not-found')
  }

})

// Search > Add
router.post('/v8/search-add', function (req, res) {

  var searchadd = req.session.data['searchadd']

  if (searchadd == 'yes') {
    res.redirect('/v8/personal-details')
  } else if (searchadd == 'no') {
    res.redirect('/v8/home')
  }
  else {
    res.redirect('/v8/result-not-found')
  }

})

// Capture new applicant (Personal Details)
router.post('/v8/personal-details', function (req, res) {

  // Name

  var firstName = req.session.data['firstname']
  var lastName = req.session.data['lastname']

  // Date of birth

  var dateofbirthDay = req.session.data['dateofbirthday']
  var dateofbirthMonth = req.session.data['dateofbirthmonth']
  var dateofbirthYear = req.session.data['dateofbirthyear']

  // Expected due date

  var duedateDay = req.session.data['duedateday']
  var duedateMonth = req.session.data['duedatemonth']
  var duedateYear = req.session.data['duedateyear']

  // Address

  var addressLine1 = req.session.data['addressline1']
  var addressLine2 = req.session.data['addressline2']
  var townCity = req.session.data['towncity']
  var postCode = req.session.data['postcode']

  // National insurance number, telephone number and email address (all optional)

  var nationalinsuranceNumber = req.session.data['nationalinsurancenumber']
  var telephoneNumber = req.session.data['telephonenumber']
  var emailAddress = req.session.data['emailaddress']

  if (firstName && lastName && dateofbirthDay && dateofbirthMonth && dateofbirthYear && duedateDay && duedateMonth && duedateYear && addressLine1 && postCode) {

    // Calculate Age

    var ageToday = new Date(Date.now());
    var dob = new Date(dateofbirthYear, dateofbirthMonth, dateofbirthDay);
    var ageDate = new Date(ageToday - dob.getTime())
    var temp = ageDate.getFullYear();
    var yrs = Math.abs(temp - 1970);

    req.session.data['age'] = yrs;

    console.log(yrs)

    // Calculate Due Date

    var today = moment();
    var dueDate = moment(duedateYear + '-' + duedateMonth + '-' + duedateDay);
    var fulltermPregnancy = moment().add(32, 'weeks'); // 42 weeks from today is a full term pregnancy - 10 weeks    

    if (dueDate < today || dueDate > fulltermPregnancy) {
      req.session.data['duedateInvalid'] = "INELIGIBLE";
      res.redirect('/v8/personal-details-error')
    } else if (yrs >= "18") {
      res.redirect('/v8/personal-details-error')
    } else {
      res.redirect('/v8/bank-details')
    }

  } else {
    res.redirect('/v8/personal-details-error')
  }

})

// Capture new applicant (Bank Details)
router.post('/v8/bank-details', function (req, res) {

  // Bank Details

  var accountName = req.session.data['accountname']
  var sortCode = req.session.data['sortcode']
  var accountNumber = req.session.data['accountnumber']

  if (accountName && sortCode && accountNumber) {
    res.redirect('/v8/check-answers')
  }
  else {
    res.redirect('/v8/bank-details-error')
  }

})

// Capture new applicant (Bank Details)
router.post('/v8/check-answers', function (req, res) {

  res.redirect('/v8/terms-and-conditions')

})

// ****************************************
// Get help to buy food and milk (Healthy Start) (VERSION 9)
// ****************************************

// Capture NHSMail address (Login)
router.post('/v9/nhs-login', function (req, res) {

  var nhsLogin = req.session.data['nhs-mail-address']

  if (nhsLogin === "") {
    req.session.data['nhs-mail-address'] = "joe.bloggs@nhs.net";
    res.redirect('/v9/home')
  }
  else if (nhsLogin) {
    res.redirect('/v9/home')
  }
  else {
    res.redirect('/v9/home')
  }

})

// Search
router.post('/v9/search', function (req, res) {

  var searchlastName = req.session.data['searchlastname']
  var searchpostCode = req.session.data['searchpostcode']

  // To find a match search for:
  // Last name: Bilal
  // Postcode: NE15 8NY / NE158NY

  if (!searchlastName || !searchpostCode) {
    res.redirect('/v9/home-error')
  } else if ((searchlastName.includes('Bilal')) && (searchpostCode.includes('NE15 8NY') || searchpostCode.includes('NE158NY'))) {
    res.redirect('/v9/result-found')
  } else {
    res.redirect('/v9/result-not-found')
  }

})

// Search > Add
router.post('/v9/search-add', function (req, res) {

  var searchadd = req.session.data['searchadd']

  if (searchadd == 'yes') {
    res.redirect('/v9/personal-details')
  } else if (searchadd == 'no') {
    res.redirect('/v9/home')
  }
  else {
    res.redirect('/v9/result-not-found')
  }

})

// Capture new applicant (Personal Details)
router.post('/v9/personal-details', function (req, res) {

  // Name

  var firstName = req.session.data['firstname']
  var lastName = req.session.data['lastname']

  // Date of birth

  var dateofbirthDay = req.session.data['dateofbirthday']
  var dateofbirthMonth = req.session.data['dateofbirthmonth']
  var dateofbirthYear = req.session.data['dateofbirthyear']

  // Expected due date

  var duedateDay = req.session.data['duedateday']
  var duedateMonth = req.session.data['duedatemonth']
  var duedateYear = req.session.data['duedateyear']

  // Address

  var addressLine1 = req.session.data['addressline1']
  var addressLine2 = req.session.data['addressline2']
  var townCity = req.session.data['towncity']
  var postCode = req.session.data['postcode']

  // National insurance number, telephone number and email address (all optional)

  var nationalinsuranceNumber = req.session.data['nationalinsurancenumber']
  var telephoneNumber = req.session.data['telephonenumber']
  var emailAddress = req.session.data['emailaddress']

  if (firstName && lastName && dateofbirthDay && dateofbirthMonth && dateofbirthYear && duedateDay && duedateMonth && duedateYear && addressLine1 && postCode) {

    // Calculate Age

    var ageToday = new Date(Date.now());
    var dob = new Date(dateofbirthYear, dateofbirthMonth, dateofbirthDay);
    var ageDate = new Date(ageToday - dob.getTime())
    var temp = ageDate.getFullYear();
    var yrs = Math.abs(temp - 1970);

    req.session.data['age'] = yrs;

    console.log(yrs)

    // Calculate Due Date

    var today = moment();
    var dueDate = moment(duedateYear + '-' + duedateMonth + '-' + duedateDay);
    var fulltermPregnancy = moment().add(32, 'weeks'); // 42 weeks from today is a full term pregnancy - 10 weeks    

    if (dueDate < today || dueDate > fulltermPregnancy) {
      req.session.data['duedateInvalid'] = "INELIGIBLE";
      res.redirect('/v9/personal-details-error')
    } else if (yrs >= "18") {
      res.redirect('/v9/personal-details-error')
    } else {
      res.redirect('/v9/bank-details')
    }

  } else {
    res.redirect('/v9/personal-details-error')
  }

})

// Capture new applicant (Bank Details)
router.post('/v9/bank-details', function (req, res) {

  // Bank Details

  var accountName = req.session.data['accountname']
  var sortCode = req.session.data['sortcode']
  var accountNumber = req.session.data['accountnumber']

  if (accountName && sortCode && accountNumber) {
    res.redirect('/v9/check-answers')
  }
  else {
    res.redirect('/v9/bank-details-error')
  }

})

// Capture new applicant (Bank Details)
router.post('/v9/check-answers', function (req, res) {

  res.redirect('/v9/terms-and-conditions')

})

// ****************************************
// Get help to buy food and milk (Healthy Start) (VERSION 10)
// ****************************************

// Capture NHSMail address (Login)
router.post('/v10/nhs-login', function (req, res) {

  var nhsLogin = req.session.data['nhs-mail-address']

  if (nhsLogin === "") {
    req.session.data['nhs-mail-address'] = "joe.bloggs@nhs.net";
    res.redirect('/v10/home')
  }
  else if (nhsLogin) {
    res.redirect('/v10/home')
  }
  else {
    res.redirect('/v10/home')
  }

})

// Search
router.post('/v10/search', function (req, res) {

  var searchlastName = req.session.data['searchlastname']
  var searchpostCode = req.session.data['searchpostcode']

  // To find a match search for:
  // Last name: Bilal
  // Postcode: NE15 8NY / NE158NY

  if (!searchlastName || !searchpostCode) {
    res.redirect('/v10/home-error')
  } else if ((searchlastName.includes('Bilal')) && (searchpostCode.includes('NE15 8NY') || searchpostCode.includes('NE158NY'))) {
    res.redirect('/v10/result-found')
  } else {
    res.redirect('/v10/result-not-found')
  }

})

// Search > Add
router.post('/v10/search-add', function (req, res) {

  var searchadd = req.session.data['searchadd']

  if (searchadd == 'yes') {
    res.redirect('/v10/personal-details')
  } else if (searchadd == 'no') {
    res.redirect('/v10/home')
  }
  else {
    res.redirect('/v10/result-not-found')
  }

})

// Capture new applicant (Personal Details)
router.post('/v10/personal-details', function (req, res) {

  // Name

  var firstName = req.session.data['firstname']
  var lastName = req.session.data['lastname']

  // Date of birth

  var dateofbirthDay = req.session.data['dateofbirthday']
  var dateofbirthMonth = req.session.data['dateofbirthmonth']
  var dateofbirthYear = req.session.data['dateofbirthyear']

  // Expected due date

  var duedateDay = req.session.data['duedateday']
  var duedateMonth = req.session.data['duedatemonth']
  var duedateYear = req.session.data['duedateyear']

  // Address

  var addressLine1 = req.session.data['addressline1']
  var addressLine2 = req.session.data['addressline2']
  var townCity = req.session.data['towncity']
  var postCode = req.session.data['postcode']

  // National insurance number, telephone number and email address (all optional)

  var nationalinsuranceNumber = req.session.data['nationalinsurancenumber']
  var telephoneNumber = req.session.data['telephonenumber']
  var emailAddress = req.session.data['emailaddress']

  if (firstName && lastName && dateofbirthDay && dateofbirthMonth && dateofbirthYear && duedateDay && duedateMonth && duedateYear && addressLine1 && postCode) {

    // Calculate Age

    var ageToday = new Date(Date.now());
    var dob = new Date(dateofbirthYear, dateofbirthMonth, dateofbirthDay);
    var ageDate = new Date(ageToday - dob.getTime())
    var temp = ageDate.getFullYear();
    var yrs = Math.abs(temp - 1970);

    req.session.data['age'] = yrs;

    console.log(yrs)

    // Calculate Due Date

    var today = moment();
    var dueDate = moment(duedateYear + '-' + duedateMonth + '-' + duedateDay);
    var fulltermPregnancy = moment().add(32, 'weeks'); // 42 weeks from today is a full term pregnancy - 10 weeks    

    if (dueDate < today || dueDate > fulltermPregnancy) {
      req.session.data['duedateInvalid'] = "INELIGIBLE";
      res.redirect('/v10/personal-details-error')
    } else if (yrs >= "18") {
      res.redirect('/v10/personal-details-error')
    } else {
      res.redirect('/v10/bank-details')
    }

  } else {
    res.redirect('/v10/personal-details-error')
  }

})

// Capture new applicant (Bank Details)
router.post('/v10/bank-details', function (req, res) {

  // Bank Details

  var accountName = req.session.data['accountname']
  var sortCode = req.session.data['sortcode']
  var accountNumber = req.session.data['accountnumber']

  if (accountName && sortCode && accountNumber) {
    res.redirect('/v10/check-answers')
  }
  else {
    res.redirect('/v10/bank-details-error')
  }

})

// Capture new applicant (Bank Details)
router.post('/v10/check-answers', function (req, res) {

  res.redirect('/v10/terms-and-conditions')

})


// ****************************************
// Get help to buy food and milk (Healthy Start) (VERSION 15)
// ****************************************

// Capture NHSMail address (Login)
router.post('/v15/nhs-login', function (req, res) {

  var nhsLogin = req.session.data['nhs-mail-address']

  if (nhsLogin === "") {
    req.session.data['nhs-mail-address'] = "joe.bloggs@nhs.net";
    res.redirect('/v15/home')
  }
  else if (nhsLogin) {
    res.redirect('/v15/home')
  }
  else {
    res.redirect('/v15/home')
  }

})

// Search
router.post('/v15/search', function (req, res) {

  var searchlastName = req.session.data['searchlastname']
  var searchpostCode = req.session.data['searchpostcode']

  // To find a match search for:
  // Last name: Bilal
  // Postcode: NE15 8NY / NE158NY

  if (!searchlastName || !searchpostCode) {
    res.redirect('/v15/home-error')
  } else if ((searchlastName.includes('Bilal')) && (searchpostCode.includes('NE15 8NY') || searchpostCode.includes('NE158NY'))) {
    res.redirect('/v15/result-found')
  } else {
    res.redirect('/v15/result-not-found')
  }

})

// Search > Add
router.post('/v15/search-add', function (req, res) {

  var searchadd = req.session.data['searchadd']

  if (searchadd == 'yes') {
    res.redirect('/v15/personal-details')
  } else if (searchadd == 'no') {
    res.redirect('/v15/home')
  }
  else {
    res.redirect('/v15/result-not-found')
  }

})

// Capture new applicant (Personal Details)
router.post('/v15/personal-details', function (req, res) {

  // Name

  var firstName = req.session.data['firstname']
  var lastName = req.session.data['lastname']

  // Date of birth

  var dateofbirthDay = req.session.data['dateofbirthday']
  var dateofbirthMonth = req.session.data['dateofbirthmonth']
  var dateofbirthYear = req.session.data['dateofbirthyear']

  // Expected due date

  var duedateDay = req.session.data['duedateday']
  var duedateMonth = req.session.data['duedatemonth']
  var duedateYear = req.session.data['duedateyear']

  // Address

  var addressLine1 = req.session.data['addressline1']
  var addressLine2 = req.session.data['addressline2']
  var townCity = req.session.data['towncity']
  var postCode = req.session.data['postcode']

  // National insurance number, telephone number and email address (all optional)

  var nationalinsuranceNumber = req.session.data['nationalinsurancenumber']
  var telephoneNumber = req.session.data['telephonenumber']
  var emailAddress = req.session.data['emailaddress']

  if (firstName && lastName && dateofbirthDay && dateofbirthMonth && dateofbirthYear && duedateDay && duedateMonth && duedateYear && addressLine1 && postCode) {

    // Calculate Age

    var ageToday = new Date(Date.now());
    var dob = new Date(dateofbirthYear, dateofbirthMonth, dateofbirthDay);
    var ageDate = new Date(ageToday - dob.getTime())
    var temp = ageDate.getFullYear();
    var yrs = Math.abs(temp - 1970);

    req.session.data['age'] = yrs;

    console.log(yrs)

    // Calculate Due Date

    var today = moment();
    var dueDate = moment(duedateYear + '-' + duedateMonth + '-' + duedateDay);
    var fulltermPregnancy = moment().add(32, 'weeks'); // 42 weeks from today is a full term pregnancy - 10 weeks    

    if (dueDate < today || dueDate > fulltermPregnancy) {
      req.session.data['duedateInvalid'] = "INELIGIBLE";
      res.redirect('/v15/personal-details-error')
    } else if (yrs >= "18") {
      res.redirect('/v15/personal-details-error')
    } else {
      res.redirect('/v15/bank-details')
    }

  } else {
    res.redirect('/v15/personal-details-error')
  }

})

// Capture new applicant (Bank Details)
router.post('/v15/bank-details', function (req, res) {

  // Bank Details

  var accountName = req.session.data['accountname']
  var sortCode = req.session.data['sortcode']
  var accountNumber = req.session.data['accountnumber']

  if (accountName && sortCode && accountNumber) {
    res.redirect('/v15/check-answers')
  }
  else {
    res.redirect('/v15/bank-details-error')
  }

})

// Capture new applicant (Bank Details)
router.post('/v15/check-answers', function (req, res) {

  res.redirect('/v15/terms-and-conditions')

})

router.post('/v15/add-child', (req, res) => {
  const childFirstName = req.session.data['child-first-name']
  const childLastName = req.session.data['child-last-name']

  const childdobday = req.session.data['child-dob-day']
  const childdobmonth = req.session.data['child-dob-month']
  const childdobyear = req.session.data['child-dob-year']

  const childDOB = childdobday + '/' + childdobmonth + '/' + childdobyear

  if (childFirstName == "Sarah" || childFirstName == "Bobby" || childFirstName == "John") {
    res.redirect('/v15/eligibility-update-children-add-error')
  } else if (childFirstName && childLastName && childDOB) {
    res.redirect('/v15/eligibility')
  } else {
    res.redirect('/v15/eligibility-update-children-add')
  }
})


// router.post('/v15/test-array', (req, res) => {

//   var checkboxes = req.session.data['example-array']

// if (checkboxes == 'email', 'text', 'post' || checkboxes == 'email', 'text', 'post') {
//   res.redirect('/v15/eligibility')
// }


//   console.log(checkboxes);


// })


// router.post('/nationality', (req, res) => {

//   var nationality = req.session.data['nationality']

// if (nationality == 'UK', 'Irish', 'Other' || nationality == 'UK', 'Other') {
//   res.redirect('/path-to-page')
// }


//   console.log(checkboxes);


// })

// ****************************************
// Get help to buy food and milk (Healthy Start) (VERSION 16)
// ****************************************

// Capture NHSMail address (Login)
router.post('/v16/nhs-login', function (req, res) {

  var nhsLogin = req.session.data['nhs-mail-address']

  if (nhsLogin === "") {
    req.session.data['nhs-mail-address'] = "joe.bloggs@nhs.net";
    res.redirect('/v16/home')
  }
  else if (nhsLogin) {
    res.redirect('/v16/home')
  }
  else {
    res.redirect('/v16/home')
  }

})

// Search
router.post('/v16/search', function (req, res) {

  var searchlastName = req.session.data['searchlastname']
  var searchpostCode = req.session.data['searchpostcode']

  // To find a match search for:
  // Last name: Bilal
  // Postcode: NE15 8NY / NE158NY

  if (!searchlastName || !searchpostCode) {
    res.redirect('/v16/home-error')
  } else if ((searchlastName.includes('Bilal')) && (searchpostCode.includes('NE15 8NY') || searchpostCode.includes('NE158NY'))) {
    res.redirect('/v16/result-found')
  } else {
    res.redirect('/v16/result-not-found')
  }

})

// Search > Add
router.post('/v16/search-add', function (req, res) {

  var searchadd = req.session.data['searchadd']

  if (searchadd == 'yes') {
    res.redirect('/v16/personal-details')
  } else if (searchadd == 'no') {
    res.redirect('/v16/home')
  }
  else {
    res.redirect('/v16/result-not-found')
  }

})

// Capture new applicant (Personal Details)
router.post('/v16/personal-details', function (req, res) {

  // Name

  var firstName = req.session.data['firstname']
  var lastName = req.session.data['lastname']

  // Date of birth

  var dateofbirthDay = req.session.data['dateofbirthday']
  var dateofbirthMonth = req.session.data['dateofbirthmonth']
  var dateofbirthYear = req.session.data['dateofbirthyear']

  // Expected due date

  var duedateDay = req.session.data['duedateday']
  var duedateMonth = req.session.data['duedatemonth']
  var duedateYear = req.session.data['duedateyear']

  // Address

  var addressLine1 = req.session.data['addressline1']
  var addressLine2 = req.session.data['addressline2']
  var townCity = req.session.data['towncity']
  var postCode = req.session.data['postcode']

  // National insurance number, telephone number and email address (all optional)

  var nationalinsuranceNumber = req.session.data['nationalinsurancenumber']
  var telephoneNumber = req.session.data['telephonenumber']
  var emailAddress = req.session.data['emailaddress']

  if (firstName && lastName && dateofbirthDay && dateofbirthMonth && dateofbirthYear && duedateDay && duedateMonth && duedateYear && addressLine1 && postCode) {

    // Calculate Age

    var ageToday = new Date(Date.now());
    var dob = new Date(dateofbirthYear, dateofbirthMonth, dateofbirthDay);
    var ageDate = new Date(ageToday - dob.getTime())
    var temp = ageDate.getFullYear();
    var yrs = Math.abs(temp - 1970);

    req.session.data['age'] = yrs;

    console.log(yrs)

    // Calculate Due Date

    var today = moment();
    var dueDate = moment(duedateYear + '-' + duedateMonth + '-' + duedateDay);
    var fulltermPregnancy = moment().add(32, 'weeks'); // 42 weeks from today is a full term pregnancy - 10 weeks    

    if (dueDate < today || dueDate > fulltermPregnancy) {
      req.session.data['duedateInvalid'] = "INELIGIBLE";
      res.redirect('/v16/personal-details-error')
    } else if (yrs >= "18") {
      res.redirect('/v16/personal-details-error')
    } else {
      res.redirect('/v16/bank-details')
    }

  } else {
    res.redirect('/v16/personal-details-error')
  }

})

// Capture new applicant (Bank Details)
router.post('/v16/bank-details', function (req, res) {

  // Bank Details

  var accountName = req.session.data['accountname']
  var sortCode = req.session.data['sortcode']
  var accountNumber = req.session.data['accountnumber']

  if (accountName && sortCode && accountNumber) {
    res.redirect('/v16/check-answers')
  }
  else {
    res.redirect('/v16/bank-details-error')
  }

})

// Capture new applicant (Bank Details)
router.post('/v16/check-answers', function (req, res) {

  res.redirect('/v16/terms-and-conditions')

})

router.post('/v16/add-child', (req, res) => {
  const childFirstName = req.session.data['child-first-name']
  const childLastName = req.session.data['child-last-name']

  const childdobday = req.session.data['child-dob-day']
  const childdobmonth = req.session.data['child-dob-month']
  const childdobyear = req.session.data['child-dob-year']

  const childDOB = childdobday + '/' + childdobmonth + '/' + childdobyear

  if (childFirstName == "Sarah" || childFirstName == "Bobby" || childFirstName == "John") {
    res.redirect('/v16/eligibility-update-children-add-error')
  } else if (childFirstName && childLastName && childDOB) {
    res.redirect('/v16/eligibility')
  } else {
    res.redirect('/v16/eligibility-update-children-add')
  }
})


// router.post('/v16/test-array', (req, res) => {

//   var checkboxes = req.session.data['example-array']

// if (checkboxes == 'email', 'text', 'post' || checkboxes == 'email', 'text', 'post') {
//   res.redirect('/v16/eligibility')
// }


//   console.log(checkboxes);


// })


// router.post('/nationality', (req, res) => {

//   var nationality = req.session.data['nationality']

// if (nationality == 'UK', 'Irish', 'Other' || nationality == 'UK', 'Other') {
//   res.redirect('/path-to-page')
// }


//   console.log(checkboxes);


// })

router.post('/v16/dynamics-sign-in', function (req, res) {

  var email = req.session.data['email']
  var password = req.session.data['password']

  if (email && password) {
    res.redirect('/v16/dashboard')
  }
  else {
    res.redirect('/v16/dynamics-sign-in')
  }
})


router.post('/v16/sign-in', function (req, res) {

  var email = req.session.data['email']
  var password = req.session.data['password']

  if (email && password) {
    res.redirect('/v16/manage-claim-search')
  }
  else {
    res.redirect('/v16/sign-in')
  }
})

router.post('/v16/manage-claim-search', function (req, res) {

  var searchlastname = req.session.data['searchlastname']
  var searchpostcode = req.session.data['searchpostcode']

  if (searchlastname && searchpostcode) {
    res.redirect('/v16/manage-claim-search-results')
  }
  else {
    res.redirect('/v16/manage-claim-search-no-results')
  }
})


// Search > Add
router.post('/v16/manage-claim-search-no-results', function (req, res) {

  var searchadd = req.session.data['addperson']

  if (searchadd == 'yes') {
    res.redirect('/v16/create-claim-personal-details')
  } else if (searchadd == 'no') {
    res.redirect('/v16/manage-claim-search')
  }
  else {
    res.redirect('/v16/manage-claim-search-no-results')
  }

})

// Sign in
router.post('/v17/sign-in', function (req, res) {

  var email = req.session.data['email']
  var password = req.session.data['password']

  if (email && password) {
    res.redirect('/v17/manage-claim-search')
  }
  else {
    res.redirect('/v17/sign-in')
  }
})

// Search
router.post('/v17/manage-claim-search', function (req, res) {

  var searchfirstname = req.session.data['searchfirstname'].toUpperCase().trimEnd()
  var searchlastname = req.session.data['searchlastname'].toUpperCase().trimEnd()

  if (searchfirstname == 'ANITA' && searchlastname == 'BILAL') {
    res.redirect('/v17/manage-claim-search-ANITA-BILAL') // PENDING
  } else if (searchfirstname == 'SARAH' && searchlastname == 'GREEN') {
    res.redirect('/v17/manage-claim-search-SARAH-GREEN') // ACTIVE
  } else if (searchfirstname == 'SIMON' && searchlastname == 'WOODS') {
    res.redirect('/v17/manage-claim-search-SIMON-WOODS') // PENDING EXPIRY
  } else if (searchfirstname == 'JOHN' && searchlastname == 'SMITH') {
    res.redirect('/v17/manage-claim-search-JOHN-SMITH') // EXPIRED
  } else {
    res.redirect('/v17/manage-claim-search-no-results')
  }
})


// Search > Add
router.post('/v17/manage-claim-search-no-results', function (req, res) {

  var searchadd = req.session.data['addperson']

  if (searchadd == 'yes') {
    res.redirect('/v17/create-claim-personal-details')
  } else if (searchadd == 'no') {
    res.redirect('/v17/manage-claim-search')
  }
  else {
    res.redirect('/v17/manage-claim-search-no-results')
  }

})

router.post('/v17/search-add', function (req, res) {

  var searchadd = req.session.data['searchadd']

  if (searchadd == 'yes') {
    res.redirect('/v17/personal-details')
  } else if (searchadd == 'no') {
    res.redirect('/v17/home')
  }
  else {
    res.redirect('/v17/result-not-found')
  }

})

// Pending claim override.
router.post('/v17/manage-claim-pending-override', function (req, res) {

  // this variable is getting the data from the radio buttons (name="contact") and storing the value into pendingOverride
  var pendingOverride = req.session.data['override']


  if (pendingOverride === 'yes') {
    res.redirect('/v17/manage-claim-pending-override-warning')
  } else if (pendingOverride === 'no') {
    res.redirect('/v17/manage-claim-pending-claim-details')
  } else {
    res.redirect('/v17/manage-claim-pending-override')
  }

})

// Pending claim override warning.
router.post('/v17/manage-claim-pending-override-warning', function (req, res) {

  // this variable is getting the data from the radio buttons (name="contact") and storing the value into pendingOverride
  var pendingOverride = req.session.data['warning']


  if (pendingOverride === 'yes') {
    res.redirect('/v17/review-and-confirm-override')
  } else if (pendingOverride === 'no') {
    res.redirect('/v17/manage-claim-pending-claim-details')
  } else {
    res.redirect('/v17/manage-claim-pending-override-warning')
  }

})

// Active search
router.post('/v17/manage-claim-search-active', function (req, res) {

  var searchlastname = req.session.data['searchlastnamea']
  var searchpostcode = req.session.data['searchpostcodea']

  if (searchlastname && searchpostcode) {
    res.redirect('/v17/manage-claim-search-results-active')
  }
  else {
    res.redirect('/v17/manage-claim-search-no-results-active')
  }
})

// Do you undersatnd

router.post('/v17/before-you-start-ANITA-BILAL', function (req, res) {

  const DoYouUnderstand = req.session.data['do-you-understand']

  if (DoYouUnderstand == 'yes') {
    res.redirect('/v17/manage-claim-ANITA-BILAL-override');
  } else {
    res.redirect('/v17/before-you-start-ANITA-BILAL');
  }

})

router.post('/v17/before-you-start-SARAH-GREEN', function (req, res) {

  const DoYouUnderstand = req.session.data['do-you-understand']

  if (DoYouUnderstand == 'yes') {
    res.redirect('/v17/manage-claim-SARAH-GREEN-override');
  } else {
    res.redirect('/v17/before-you-start-SARAH-GREEN');
  }

})

router.post('/v17/before-you-start-SIMON-WOODS', function (req, res) {

  const DoYouUnderstand = req.session.data['do-you-understand']

  if (DoYouUnderstand == 'yes') {
    res.redirect('/v17/manage-claim-SIMON-WOODS-override');
  } else {
    res.redirect('/v17/before-you-start-SIMON-WOODS');
  }

})



// Select claims
router.post('/v17/manage-claim-ANITA-BILAL-override', function (req, res) {

  var typeofbenefit = req.session.data['type-of-benefit']


  if (typeofbenefit === 'universalcredit') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'incomesupport') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'pensioncredit') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedjsa') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedesa') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'childtaxcredit') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'workingtaxcredit') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'pregnantandunder18') {
    res.redirect('/v17/manage-claim-override-length')
  }

})


router.post('/v17/manage-claim-SARAH-GREEN-override', function (req, res) {

  var typeofbenefit = req.session.data['type-of-benefit']


  if (typeofbenefit === 'universalcredit') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'incomesupport') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'pensioncredit') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedjsa') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedesa') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'childtaxcredit') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'workingtaxcredit') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'pregnantandunder18') {
    res.redirect('/v17/manage-claim-override-length')
  }

})


router.post('/v17/manage-claim-SIMON-WOODS-override', function (req, res) {

  var typeofbenefit = req.session.data['type-of-benefit']


  if (typeofbenefit === 'universalcredit') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'incomesupport') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'pensioncredit') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedjsa') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedesa') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'childtaxcredit') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'workingtaxcredit') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'pregnantandunder18') {
    res.redirect('/v17/manage-claim-override-length')
  }

})


router.post('/v17/manage-claim-JOHN-SMITH-override', function (req, res) {

  var typeofbenefit = req.session.data['type-of-benefit']


  if (typeofbenefit === 'universalcredit') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'incomesupport') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'pensioncredit') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedjsa') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedesa') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'childtaxcredit') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'workingtaxcredit') {
    res.redirect('/v17/manage-claim-override-length')
  } else if (typeofbenefit === 'pregnantandunder18') {
    res.redirect('/v17/manage-claim-override-length')
  }

})



// Confirm Override
router.post('/v17/confirm-override', function (req, res) {

  var overrideWeeks = req.session.data['overrideWeeks']

  if (overrideWeeks >= 1 && overrideWeeks <= 52) {
    req.session.data['weeks'] = overrideWeeks + " weeks";
    res.redirect('/v17/review-and-confirm-override');
  } else {
    res.redirect('/v17/manage-claim-override-length');
  }

})

// Do you want to continue

router.post('/v17/review-and-confirm-override', function (req, res) {

  const DoYouWantToContinue = req.session.data['do-you-want-to-continue']

  if (DoYouWantToContinue == 'yes') {
    res.redirect('/v17/application-successful');
  } else {
    res.redirect('/v17/review-and-confirm-override');
  }

})

// router.post('/v17/manage-claim-pending-override', function (req, res) {

//     var pendingOverride = req.session.data['override']


//   if (pendingOverride === 'yes') {
//     res.redirect('/v17/screen-1')
//   } else if (pendingOverride === 'no'){
//     res.redirect('/v17/screen-2')
//   } else {
//     res.redirect('/v17/return-to-same-screen')
//   }

//   })

// Add your routes here - above the module.exports line

// Sign in
router.post('/v18/sign-in', function (req, res) {

  var email = req.session.data['email']
  var password = req.session.data['password']

  if (email && password) {
    res.redirect('/v18/manage-claim-search')
  }
  else {
    res.redirect('/v18/sign-in')
  }
})

// Search
router.post('/v18/manage-claim-search', function (req, res) {

  var searchfirstname = req.session.data['searchfirstname'].toUpperCase().trimEnd()
  var searchlastname = req.session.data['searchlastname'].toUpperCase().trimEnd()

  if (searchfirstname == 'ANITA' && searchlastname == 'BILAL') {
    res.redirect('/v18/manage-claim-search-ANITA-BILAL') // PENDING
  } else if (searchfirstname == 'SARAH' && searchlastname == 'GREEN') {
    res.redirect('/v18/manage-claim-search-SARAH-GREEN') // ACTIVE
  } else if (searchfirstname == 'SIMON' && searchlastname == 'WOODS') {
    res.redirect('/v18/manage-claim-search-SIMON-WOODS') // PENDING EXPIRY
  } else if (searchfirstname == 'JOHN' && searchlastname == 'SMITH') {
    res.redirect('/v18/manage-claim-search-JOHN-SMITH') // EXPIRED
  } else {
    res.redirect('/v18/manage-claim-search-no-results')
  }
})


// Search > Add
router.post('/v18/manage-claim-search-no-results', function (req, res) {

  var searchadd = req.session.data['addperson']

  if (searchadd == 'yes') {
    res.redirect('/v18/create-claim-personal-details')
  } else if (searchadd == 'no') {
    res.redirect('/v18/manage-claim-search')
  }
  else {
    res.redirect('/v18/manage-claim-search-no-results')
  }

})

router.post('/v18/search-add', function (req, res) {

  var searchadd = req.session.data['searchadd']

  if (searchadd == 'yes') {
    res.redirect('/v18/personal-details')
  } else if (searchadd == 'no') {
    res.redirect('/v18/home')
  }
  else {
    res.redirect('/v18/result-not-found')
  }

})

// Pending claim override.
router.post('/v18/manage-claim-pending-override', function (req, res) {

  // this variable is getting the data from the radio buttons (name="contact") and storing the value into pendingOverride
  var pendingOverride = req.session.data['override']


  if (pendingOverride === 'yes') {
    res.redirect('/v18/manage-claim-pending-override-warning')
  } else if (pendingOverride === 'no') {
    res.redirect('/v18/manage-claim-pending-claim-details')
  } else {
    res.redirect('/v18/manage-claim-pending-override')
  }

})

// Pending claim override warning.
router.post('/v18/manage-claim-pending-override-warning', function (req, res) {

  // this variable is getting the data from the radio buttons (name="contact") and storing the value into pendingOverride
  var pendingOverride = req.session.data['warning']


  if (pendingOverride === 'yes') {
    res.redirect('/v18/review-and-confirm-override')
  } else if (pendingOverride === 'no') {
    res.redirect('/v18/manage-claim-pending-claim-details')
  } else {
    res.redirect('/v18/manage-claim-pending-override-warning')
  }

})

// Active search
router.post('/v18/manage-claim-search-active', function (req, res) {

  var searchlastname = req.session.data['searchlastnamea']
  var searchpostcode = req.session.data['searchpostcodea']

  if (searchlastname && searchpostcode) {
    res.redirect('/v18/manage-claim-search-results-active')
  }
  else {
    res.redirect('/v18/manage-claim-search-no-results-active')
  }
})

// Do you undersatnd

router.post('/v18/before-you-start-ANITA-BILAL', function (req, res) {

  const DoYouUnderstand = req.session.data['do-you-understand']

  if (DoYouUnderstand == 'yes') {
    res.redirect('/v18/manage-claim-ANITA-BILAL-override');
  } else {
    res.redirect('/v18/before-you-start-ANITA-BILAL');
  }

})

router.post('/v18/before-you-start-SARAH-GREEN', function (req, res) {

  const DoYouUnderstand = req.session.data['do-you-understand']

  if (DoYouUnderstand == 'yes') {
    res.redirect('/v18/manage-claim-SARAH-GREEN-override');
  } else {
    res.redirect('/v18/before-you-start-SARAH-GREEN');
  }

})

router.post('/v18/before-you-start-SIMON-WOODS', function (req, res) {

  const DoYouUnderstand = req.session.data['do-you-understand']

  if (DoYouUnderstand == 'yes') {
    res.redirect('/v18/manage-claim-SIMON-WOODS-override');
  } else {
    res.redirect('/v18/before-you-start-SIMON-WOODS');
  }

})



// Select claims
router.post('/v18/manage-claim-ANITA-BILAL-override', function (req, res) {

  var typeofbenefit = req.session.data['type-of-benefit']


  if (typeofbenefit === 'universalcredit') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'incomesupport') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'pensioncredit') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedjsa') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedesa') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'childtaxcredit') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'workingtaxcredit') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'pregnantandunder18') {
    res.redirect('/v18/manage-claim-override-length')
  }

})


router.post('/v18/manage-claim-SARAH-GREEN-override', function (req, res) {

  var typeofbenefit = req.session.data['type-of-benefit']


  if (typeofbenefit === 'universalcredit') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'incomesupport') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'pensioncredit') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedjsa') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedesa') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'childtaxcredit') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'workingtaxcredit') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'pregnantandunder18') {
    res.redirect('/v18/manage-claim-override-length')
  }

})


router.post('/v18/manage-claim-SIMON-WOODS-override', function (req, res) {

  var typeofbenefit = req.session.data['type-of-benefit']


  if (typeofbenefit === 'universalcredit') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'incomesupport') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'pensioncredit') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedjsa') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedesa') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'childtaxcredit') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'workingtaxcredit') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'pregnantandunder18') {
    res.redirect('/v18/manage-claim-override-length')
  }

})


router.post('/v18/manage-claim-JOHN-SMITH-override', function (req, res) {

  var typeofbenefit = req.session.data['type-of-benefit']


  if (typeofbenefit === 'universalcredit') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'incomesupport') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'pensioncredit') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedjsa') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedesa') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'childtaxcredit') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'workingtaxcredit') {
    res.redirect('/v18/manage-claim-override-length')
  } else if (typeofbenefit === 'pregnantandunder18') {
    res.redirect('/v18/manage-claim-override-length')
  }

})



// Confirm Override
router.post('/v18/confirm-override', function (req, res) {

  var overrideWeeks = req.session.data['overrideWeeks']

  if (overrideWeeks >= 1 && overrideWeeks <= 52) {
    req.session.data['weeks'] = overrideWeeks + " weeks";
    res.redirect('/v18/review-and-confirm-override');
  } else {
    res.redirect('/v18/manage-claim-override-length');
  }

})

// Do you want to continue

router.post('/v18/review-and-confirm-override', function (req, res) {

  const DoYouWantToContinue = req.session.data['do-you-want-to-continue']

  if (DoYouWantToContinue == 'yes') {
    res.redirect('/v18/application-successful');
  } else {
    res.redirect('/v18/review-and-confirm-override');
  }

})

// router.post('/v18/manage-claim-pending-override', function (req, res) {

//     var pendingOverride = req.session.data['override']


//   if (pendingOverride === 'yes') {
//     res.redirect('/v18/screen-1')
//   } else if (pendingOverride === 'no'){
//     res.redirect('/v18/screen-2')
//   } else {
//     res.redirect('/v18/return-to-same-screen')
//   }

//   })

// Add your routes here - above the module.exports line

// Sign in
router.post('/v19/sign-in', function (req, res) {

  var email = req.session.data['email']
  var password = req.session.data['password']

  if (email && password) {
    res.redirect('/v19/manage-claim-search')
  }
  else {
    res.redirect('/v19/sign-in')
  }
})

// Search
router.post('/v19/manage-claim-search', function (req, res) {

  var searchfirstname = req.session.data['searchfirstname'].toUpperCase().trimEnd()
  var searchlastname = req.session.data['searchlastname'].toUpperCase().trimEnd()

  if (searchfirstname == 'ANITA' && searchlastname == 'BILAL') {
    res.redirect('/v19/manage-claim-search-ANITA-BILAL') // PENDING
  } else if (searchfirstname == 'SARAH' && searchlastname == 'GREEN') {
    res.redirect('/v19/manage-claim-search-SARAH-GREEN') // ACTIVE
  } else if (searchfirstname == 'SIMON' && searchlastname == 'WOODS') {
    res.redirect('/v19/manage-claim-search-SIMON-WOODS') // PENDING EXPIRY
  } else if (searchfirstname == 'JOHN' && searchlastname == 'SMITH') {
    res.redirect('/v19/manage-claim-search-JOHN-SMITH') // EXPIRED
  } else {
    res.redirect('/v19/manage-claim-search-no-results')
  }
})


// Search > Add
router.post('/v19/manage-claim-search-no-results', function (req, res) {

  var searchadd = req.session.data['addperson']

  if (searchadd == 'yes') {
    res.redirect('/v19/create-claim-personal-details')
  } else if (searchadd == 'no') {
    res.redirect('/v19/manage-claim-search')
  }
  else {
    res.redirect('/v19/manage-claim-search-no-results')
  }

})

router.post('/v19/search-add', function (req, res) {

  var searchadd = req.session.data['searchadd']

  if (searchadd == 'yes') {
    res.redirect('/v19/personal-details')
  } else if (searchadd == 'no') {
    res.redirect('/v19/home')
  }
  else {
    res.redirect('/v19/result-not-found')
  }

})

// Pending claim override.
router.post('/v19/manage-claim-pending-override', function (req, res) {

  // this variable is getting the data from the radio buttons (name="contact") and storing the value into pendingOverride
  var pendingOverride = req.session.data['override']


  if (pendingOverride === 'yes') {
    res.redirect('/v19/manage-claim-pending-override-warning')
  } else if (pendingOverride === 'no') {
    res.redirect('/v19/manage-claim-pending-claim-details')
  } else {
    res.redirect('/v19/manage-claim-pending-override')
  }

})

// Pending claim override warning.
router.post('/v19/manage-claim-pending-override-warning', function (req, res) {

  // this variable is getting the data from the radio buttons (name="contact") and storing the value into pendingOverride
  var pendingOverride = req.session.data['warning']


  if (pendingOverride === 'yes') {
    res.redirect('/v19/review-and-confirm-override')
  } else if (pendingOverride === 'no') {
    res.redirect('/v19/manage-claim-pending-claim-details')
  } else {
    res.redirect('/v19/manage-claim-pending-override-warning')
  }

})

// Active search
router.post('/v19/manage-claim-search-active', function (req, res) {

  var searchlastname = req.session.data['searchlastnamea']
  var searchpostcode = req.session.data['searchpostcodea']

  if (searchlastname && searchpostcode) {
    res.redirect('/v19/manage-claim-search-results-active')
  }
  else {
    res.redirect('/v19/manage-claim-search-no-results-active')
  }
})

// Do you undersatnd

router.post('/v19/before-you-start-ANITA-BILAL', function (req, res) {

  const DoYouUnderstand = req.session.data['do-you-understand']

  if (DoYouUnderstand == 'yes') {
    res.redirect('/v19/manage-claim-ANITA-BILAL-override');
  } else {
    res.redirect('/v19/before-you-start-ANITA-BILAL');
  }

})

router.post('/v19/before-you-start-SARAH-GREEN', function (req, res) {

  const DoYouUnderstand = req.session.data['do-you-understand']

  if (DoYouUnderstand == 'yes') {
    res.redirect('/v19/manage-claim-SARAH-GREEN-override');
  } else {
    res.redirect('/v19/before-you-start-SARAH-GREEN');
  }

})

router.post('/v19/before-you-start-SIMON-WOODS', function (req, res) {

  const DoYouUnderstand = req.session.data['do-you-understand']

  if (DoYouUnderstand == 'yes') {
    res.redirect('/v19/manage-claim-SIMON-WOODS-override');
  } else {
    res.redirect('/v19/before-you-start-SIMON-WOODS');
  }

})



// Select claims
router.post('/v19/manage-claim-ANITA-BILAL-override', function (req, res) {

  var typeofbenefit = req.session.data['type-of-benefit']


  if (typeofbenefit === 'universalcredit') {
    res.redirect('/v19/manage-claim-override-length')
  } else if (typeofbenefit === 'incomesupport') {
    res.redirect('/v19/manage-claim-override-length')
  } else if (typeofbenefit === 'pensioncredit') {
    res.redirect('/v19/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedjsa') {
    res.redirect('/v19/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedesa') {
    res.redirect('/v19/manage-claim-override-length')
  } else if (typeofbenefit === 'childtaxcredit') {
    res.redirect('/v19/manage-claim-override-length')
  } else if (typeofbenefit === 'workingtaxcredit') {
    res.redirect('/v19/manage-claim-override-length')
  } else if (typeofbenefit === 'pregnantandunder18') {
    res.redirect('/v19/manage-claim-override-length')
  }

})


router.post('/v19/manage-claim-SARAH-GREEN-override', function (req, res) {

  var typeofbenefit = req.session.data['type-of-benefit']
  var typeofbenefitSTRING = typeofbenefit.toString();


  if (typeofbenefit === 'universalcredit') {
    res.redirect('/v19/manage-claim-universal-credit')
  } else if (typeofbenefit === 'incomesupport') {
    res.redirect('/v19/manage-claim-income-support')
  } else if (typeofbenefit === 'pensioncredit') {
    res.redirect('/v19/manage-claim-pension-credit')
  } else if (typeofbenefit === 'incomebasedjsa') {
    res.redirect('/v19/manage-claim-income-based-jsa')
  } else if (typeofbenefit === 'incomebasedesa') {
    res.redirect('/v19/manage-claim-income-based-esa')
  } else if (typeofbenefit === 'childtaxcredit') {
    res.redirect('/v19/manage-claim-child-tax-credit')
  } else if (typeofbenefit === 'workingtaxcredit') {
    res.redirect('/v19/manage-claim-working-tax-credit')
  } else if (typeofbenefit === 'pregnantandunder18') {
    res.redirect('/v19/manage-claim-pregnant')
  } else if (typeofbenefitSTRING == 'incomebasedjsa,childtaxcredit') {
    res.redirect('/v19/manage-claim-income-based-jsa')
  } else if (typeofbenefitSTRING == 'incomebasedjsa,workingtaxcredit') {
    res.redirect('/v19/manage-claim-income-based-jsa')
  } else if (typeofbenefitSTRING == 'incomebasedjsa,pregnantandunder18') {
    res.redirect('/v19/manage-claim-income-based-jsa')
  } else if (typeofbenefitSTRING == 'incomebasedesa,childtaxcredit') {
    res.redirect('/v19/manage-claim-income-based-esa')
  } else if (typeofbenefitSTRING == 'incomebasedesa,workingtaxcredit') {
    res.redirect('/v19/manage-claim-income-based-esa')
  } else if (typeofbenefitSTRING == 'incomebasedesa,pregnantandunder18') {
    res.redirect('/v19/manage-claim-income-based-esa')
  } else if (typeofbenefitSTRING == 'childtaxcredit,workingtaxcredit') {
    res.redirect('/v19/manage-claim-child-tax-credit')
  } else if (typeofbenefitSTRING == 'childtaxcredit,incomesupport') {
    res.redirect('/v19/manage-claim-child-tax-credit')
  } else if (typeofbenefitSTRING == 'childtaxcredit,pensioncredit') {
    res.redirect('/v19/manage-claim-child-tax-credit')
  } else if (typeofbenefitSTRING == 'childtaxcredit,pregnantandunder18') {
    res.redirect('/v19/manage-claim-child-tax-credit')
  } else if (typeofbenefitSTRING == 'workingtaxcredit,incomesupport') {
    res.redirect('/v19/manage-claim-working-tax-credit')
  } else if (typeofbenefitSTRING == 'universalcredit,pregnantandunder18') {
    res.redirect('/v19/manage-claim-universal-credit')
  } else if (typeofbenefitSTRING == 'incomesupport,pregnantandunder18') {
    res.redirect('/v19/manage-claim-income-support')
  } else {
    res.redirect('/v19/manage-claim-SARAH-GREEN-override')
  }

})


router.post('/v19/manage-claim-SIMON-WOODS-override', function (req, res) {

  var typeofbenefit = req.session.data['type-of-benefit']
  var typeofbenefitSTRING = typeofbenefit.toString();


  if (typeofbenefit === 'universalcredit') {
    res.redirect('/v19/manage-claim-universal-credit')
  } else if (typeofbenefit === 'incomesupport') {
    res.redirect('/v19/manage-claim-income-support')
  } else if (typeofbenefit === 'pensioncredit') {
    res.redirect('/v19/manage-claim-pension-credit')
  } else if (typeofbenefit === 'incomebasedjsa') {
    res.redirect('/v19/manage-claim-income-based-jsa')
  } else if (typeofbenefit === 'incomebasedesa') {
    res.redirect('/v19/manage-claim-income-based-esa')
  } else if (typeofbenefit === 'childtaxcredit') {
    res.redirect('/v19/manage-claim-child-tax-credit')
  } else if (typeofbenefit === 'workingtaxcredit') {
    res.redirect('/v19/manage-claim-working-tax-credit')
  } else if (typeofbenefit === 'pregnantandunder18') {
    res.redirect('/v19/manage-claim-pregnant')
  } else if (typeofbenefitSTRING == 'incomebasedjsa,childtaxcredit') {
    res.redirect('/v19/manage-claim-income-based-jsa')
  } else if (typeofbenefitSTRING == 'incomebasedjsa,workingtaxcredit') {
    res.redirect('/v19/manage-claim-income-based-jsa')
  } else if (typeofbenefitSTRING == 'incomebasedjsa,pregnantandunder18') {
    res.redirect('/v19/manage-claim-income-based-jsa')
  } else if (typeofbenefitSTRING == 'incomebasedesa,childtaxcredit') {
    res.redirect('/v19/manage-claim-income-based-esa')
  } else if (typeofbenefitSTRING == 'incomebasedesa,workingtaxcredit') {
    res.redirect('/v19/manage-claim-income-based-esa')
  } else if (typeofbenefitSTRING == 'incomebasedesa,pregnantandunder18') {
    res.redirect('/v19/manage-claim-income-based-esa')
  } else if (typeofbenefitSTRING == 'childtaxcredit,workingtaxcredit') {
    res.redirect('/v19/manage-claim-child-tax-credit')
  } else if (typeofbenefitSTRING == 'childtaxcredit,incomesupport') {
    res.redirect('/v19/manage-claim-child-tax-credit')
  } else if (typeofbenefitSTRING == 'childtaxcredit,pensioncredit') {
    res.redirect('/v19/manage-claim-child-tax-credit')
  } else if (typeofbenefitSTRING == 'childtaxcredit,pregnantandunder18') {
    res.redirect('/v19/manage-claim-child-tax-credit')
  } else if (typeofbenefitSTRING == 'workingtaxcredit,incomesupport') {
    res.redirect('/v19/manage-claim-working-tax-credit')
  } else if (typeofbenefitSTRING == 'universalcredit,pregnantandunder18') {
    res.redirect('/v19/manage-claim-universal-credit')
  } else if (typeofbenefitSTRING == 'incomesupport,pregnantandunder18') {
    res.redirect('/v19/manage-claim-income-support')
  } else {
    res.redirect('/v19/manage-claim-SIMON-WOODS-override')
  }

})


router.post('/v19/manage-claim-JOHN-SMITH-override', function (req, res) {

  var typeofbenefit = req.session.data['type-of-benefit']
  var typeofbenefitSTRING = typeofbenefit.toString();


  if (typeofbenefit === 'universalcredit') {
    res.redirect('/v19/manage-claim-universal-credit')
  } else if (typeofbenefit === 'incomesupport') {
    res.redirect('/v19/manage-claim-income-support')
  } else if (typeofbenefit === 'pensioncredit') {
    res.redirect('/v19/manage-claim-pension-credit')
  } else if (typeofbenefit === 'incomebasedjsa') {
    res.redirect('/v19/manage-claim-income-based-jsa')
  } else if (typeofbenefit === 'incomebasedesa') {
    res.redirect('/v19/manage-claim-income-based-esa')
  } else if (typeofbenefit === 'childtaxcredit') {
    res.redirect('/v19/manage-claim-child-tax-credit')
  } else if (typeofbenefit === 'workingtaxcredit') {
    res.redirect('/v19/manage-claim-working-tax-credit')
  } else if (typeofbenefit === 'pregnantandunder18') {
    res.redirect('/v19/manage-claim-pregnant')
  } else if (typeofbenefitSTRING == 'incomebasedjsa,childtaxcredit') {
    res.redirect('/v19/manage-claim-income-based-jsa')
  } else if (typeofbenefitSTRING == 'incomebasedjsa,workingtaxcredit') {
    res.redirect('/v19/manage-claim-income-based-jsa')
  } else if (typeofbenefitSTRING == 'incomebasedjsa,pregnantandunder18') {
    res.redirect('/v19/manage-claim-income-based-jsa')
  } else if (typeofbenefitSTRING == 'incomebasedesa,childtaxcredit') {
    res.redirect('/v19/manage-claim-income-based-esa')
  } else if (typeofbenefitSTRING == 'incomebasedesa,workingtaxcredit') {
    res.redirect('/v19/manage-claim-income-based-esa')
  } else if (typeofbenefitSTRING == 'incomebasedesa,pregnantandunder18') {
    res.redirect('/v19/manage-claim-income-based-esa')
  } else if (typeofbenefitSTRING == 'childtaxcredit,workingtaxcredit') {
    res.redirect('/v19/manage-claim-child-tax-credit')
  } else if (typeofbenefitSTRING == 'childtaxcredit,incomesupport') {
    res.redirect('/v19/manage-claim-child-tax-credit')
  } else if (typeofbenefitSTRING == 'childtaxcredit,pensioncredit') {
    res.redirect('/v19/manage-claim-child-tax-credit')
  } else if (typeofbenefitSTRING == 'childtaxcredit,pregnantandunder18') {
    res.redirect('/v19/manage-claim-child-tax-credit')
  } else if (typeofbenefitSTRING == 'workingtaxcredit,incomesupport') {
    res.redirect('/v19/manage-claim-working-tax-credit')
  } else if (typeofbenefitSTRING == 'universalcredit,pregnantandunder18') {
    res.redirect('/v19/manage-claim-universal-credit')
  } else if (typeofbenefitSTRING == 'incomesupport,pregnantandunder18') {
    res.redirect('/v19/manage-claim-income-support')
  } else {
    res.redirect('/v19/manage-claim-JOHN-SMITH-override')
  }

})


// Confirm Override
router.post('/v19/confirm-override', function (req, res) {

  var overrideWeeks = req.session.data['overrideWeeks']

  if (overrideWeeks >= 1 && overrideWeeks <= 52) {
    req.session.data['weeks'] = overrideWeeks + " weeks";
    res.redirect('/v19/review-and-confirm-override');
  } else {
    res.redirect('/v19/manage-claim-override-length');
  }

})

// Do you want to continue

router.post('/v19/review-and-confirm-override', function (req, res) {

  const DoYouWantToContinue = req.session.data['do-you-want-to-continue']

  if (DoYouWantToContinue == 'yes') {
    res.redirect('/v19/application-successful');
  } else {
    res.redirect('/v19/review-and-confirm-override');
  }

})

// Manage Benefit

router.post('/v19/manage-claim-benefit', function (req, res) {

  const anotherFile = req.session.data['add-benefit-1']

  if (anotherFile === 'yes') {
    req.session.data["manage-benefit"] = "accepted";
    res.redirect('/v19/manage-claim-ANITA-BILAL-claim-details')
  } else if (anotherFile === 'no') {
    res.redirect('/v19/manage-claim-ANITA-BILAL-claim-details')
  } else {
    res.redirect('/v19/manage-benefit')
  }
  
  res.redirect('/v19/manage-claim-ANITA-BILAL-claim-details')

})

// Manage Child

router.post('/v19/manage-claim-child-1', function (req, res) {

  const addChild = req.session.data['add-child-1']

  console.log('RUNNING HERE')

  if (addChild === 'yes') {
    console.log('RUNNING THIS')
    req.session.data["manage-child-1"] = "Complete";
    res.redirect('/v19/manage-claim-child-1')
  } else if (addChild === 'no') {
    console.log('RUNNING THERE')
    req.session.data["manage-child-1"] = "pending";
    res.redirect('/v19/manage-claim-ANITA-BILAL-claim-details')
  } else {
    res.redirect('/v19/manage-claim-child-1')
  }
  
  res.redirect('/v19/manage-claim-ANITA-BILAL-claim-details')

})

router.post('/v19/manage-claim-child-2', function (req, res) {

  const anotherFile = req.session.data['add-file1']

  if (anotherFile === 'yes') {
    req.session.data["manage-child-2"] = "accepted";
    res.redirect('/v19/manage-claim-ANITA-BILAL-claim-details')
  } else if (anotherFile === 'no') {
    res.redirect('/v19/manage-claim-ANITA-BILAL-claim-details')
  } else {
    res.redirect('/v19/manage-claim-child-2')
  }
  
  res.redirect('/v19/manage-claim-ANITA-BILAL-claim-details')

})

// router.post('/v19/manage-claim-pending-override', function (req, res) {

//     var pendingOverride = req.session.data['override']


//   if (pendingOverride === 'yes') {
//     res.redirect('/v19/screen-1')
//   } else if (pendingOverride === 'no'){
//     res.redirect('/v19/screen-2')
//   } else {
//     res.redirect('/v19/return-to-same-screen')
//   }

//   })

// Add your routes here - above the module.exports line

// Sign in
router.post('/v20/sign-in', function (req, res) {

  var email = req.session.data['email']
  var password = req.session.data['password']

  if (email && password) {
    res.redirect('/v20/manage-claim-search')
  }
  else {
    res.redirect('/v20/sign-in')
  }
})

// Search
router.post('/v20/manage-claim-search', function (req, res) {

  var searchfirstname = req.session.data['searchfirstname'].toUpperCase().trimEnd()
  var searchlastname = req.session.data['searchlastname'].toUpperCase().trimEnd()

  if (searchfirstname == 'ANITA' && searchlastname == 'BILAL') {
    res.redirect('/v20/manage-claim-search-ANITA-BILAL') // PENDING
  } else if (searchfirstname == 'SARAH' && searchlastname == 'GREEN') {
    res.redirect('/v20/manage-claim-search-SARAH-GREEN') // ACTIVE
  } else if (searchfirstname == 'SIMON' && searchlastname == 'WOODS') {
    res.redirect('/v20/manage-claim-search-SIMON-WOODS') // PENDING EXPIRY
  } else if (searchfirstname == 'JOHN' && searchlastname == 'SMITH') {
    res.redirect('/v20/manage-claim-search-JOHN-SMITH') // EXPIRED
  } else {
    res.redirect('/v20/manage-claim-search-no-results')
  }
})


// Search > Add
router.post('/v20/manage-claim-search-no-results', function (req, res) {

  var searchadd = req.session.data['addperson']

  if (searchadd == 'yes') {
    res.redirect('/v20/create-claim-personal-details')
  } else if (searchadd == 'no') {
    res.redirect('/v20/manage-claim-search')
  }
  else {
    res.redirect('/v20/manage-claim-search-no-results')
  }

})

router.post('/v20/search-add', function (req, res) {

  var searchadd = req.session.data['searchadd']

  if (searchadd == 'yes') {
    res.redirect('/v20/personal-details')
  } else if (searchadd == 'no') {
    res.redirect('/v20/home')
  }
  else {
    res.redirect('/v20/result-not-found')
  }

})

// Pending claim override.
router.post('/v20/manage-claim-pending-override', function (req, res) {

  // this variable is getting the data from the radio buttons (name="contact") and storing the value into pendingOverride
  var pendingOverride = req.session.data['override']


  if (pendingOverride === 'yes') {
    res.redirect('/v20/manage-claim-pending-override-warning')
  } else if (pendingOverride === 'no') {
    res.redirect('/v20/manage-claim-pending-claim-details')
  } else {
    res.redirect('/v20/manage-claim-pending-override')
  }

})

// Pending claim override warning.
router.post('/v20/manage-claim-pending-override-warning', function (req, res) {

  // this variable is getting the data from the radio buttons (name="contact") and storing the value into pendingOverride
  var pendingOverride = req.session.data['warning']


  if (pendingOverride === 'yes') {
    res.redirect('/v20/review-and-confirm-override')
  } else if (pendingOverride === 'no') {
    res.redirect('/v20/manage-claim-pending-claim-details')
  } else {
    res.redirect('/v20/manage-claim-pending-override-warning')
  }

})

// Active search
router.post('/v20/manage-claim-search-active', function (req, res) {

  var searchlastname = req.session.data['searchlastnamea']
  var searchpostcode = req.session.data['searchpostcodea']

  if (searchlastname && searchpostcode) {
    res.redirect('/v20/manage-claim-search-results-active')
  }
  else {
    res.redirect('/v20/manage-claim-search-no-results-active')
  }
})

// Do you undersatnd

router.post('/v20/before-you-start-ANITA-BILAL', function (req, res) {

  const DoYouUnderstand = req.session.data['do-you-understand']

  if (DoYouUnderstand == 'yes') {
    res.redirect('/v20/manage-claim-ANITA-BILAL-override');
  } else if (DoYouUnderstand == 'maybe') {
    res.redirect('/v20/evidence-missing-ANITA-BILAL');
  } else if (DoYouUnderstand == 'no') {
    res.redirect('/v20/not-eligible-ANITA-BILAL')
  } else {
    res.redirect('/v20/before-you-start-ANITA-BILAL');
  }

})

router.post('/v20/before-you-start-SARAH-GREEN', function (req, res) {

  const DoYouUnderstand = req.session.data['do-you-understand']

  if (DoYouUnderstand == 'yes') {
    res.redirect('/v20/manage-claim-SARAH-GREEN-override');
  } else {
    res.redirect('/v20/before-you-start-SARAH-GREEN');
  }

})

router.post('/v20/before-you-start-SIMON-WOODS', function (req, res) {

  const DoYouUnderstand = req.session.data['do-you-understand']

  if (DoYouUnderstand == 'yes') {
    res.redirect('/v20/manage-claim-SIMON-WOODS-override');
  } else {
    res.redirect('/v20/before-you-start-SIMON-WOODS');
  }

})



// Select claims
router.post('/v20/manage-claim-ANITA-BILAL-override', function (req, res) {

  var typeofbenefit = req.session.data['type-of-benefit']


  if (typeofbenefit === 'universalcredit') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'incomesupport') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'pensioncredit') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedjsa') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedesa') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'childtaxcredit') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'workingtaxcredit') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'pregnantandunder18') {
    res.redirect('/v20/manage-claim-override-length')
  }

})


router.post('/v20/manage-claim-SARAH-GREEN-override', function (req, res) {

  var typeofbenefit = req.session.data['type-of-benefit']


  if (typeofbenefit === 'universalcredit') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'incomesupport') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'pensioncredit') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedjsa') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedesa') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'childtaxcredit') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'workingtaxcredit') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'pregnantandunder18') {
    res.redirect('/v20/manage-claim-override-length')
  }

})


router.post('/v20/manage-claim-SIMON-WOODS-override', function (req, res) {

  var typeofbenefit = req.session.data['type-of-benefit']


  if (typeofbenefit === 'universalcredit') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'incomesupport') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'pensioncredit') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedjsa') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedesa') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'childtaxcredit') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'workingtaxcredit') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'pregnantandunder18') {
    res.redirect('/v20/manage-claim-override-length')
  }

})


router.post('/v20/manage-claim-JOHN-SMITH-override', function (req, res) {

  var typeofbenefit = req.session.data['type-of-benefit']


  if (typeofbenefit === 'universalcredit') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'incomesupport') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'pensioncredit') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedjsa') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'incomebasedesa') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'childtaxcredit') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'workingtaxcredit') {
    res.redirect('/v20/manage-claim-override-length')
  } else if (typeofbenefit === 'pregnantandunder18') {
    res.redirect('/v20/manage-claim-override-length')
  }

})



// Confirm Override
router.post('/v20/confirm-override', function (req, res) {

  const benefitDay = req.session.data['benefit-day']
  const benefitMonth = req.session.data['benefit-month']
  const benefitYear  = req.session.data['benefit-year']

  res.redirect('/v20/review-and-confirm-override')


})

// Do you want to continue

router.post('/v20/review-and-confirm-override', function (req, res) {

  const DoYouWantToContinue = req.session.data['do-you-want-to-continue']

  if (DoYouWantToContinue == 'yes') {
    res.redirect('/v20/application-successful');
  } else {
    res.redirect('/v20/review-and-confirm-override');
  }

})

// router.post('/v20/manage-claim-pending-override', function (req, res) {

//     var pendingOverride = req.session.data['override']


//   if (pendingOverride === 'yes') {
//     res.redirect('/v20/screen-1')
//   } else if (pendingOverride === 'no'){
//     res.redirect('/v20/screen-2')
//   } else {
//     res.redirect('/v20/return-to-same-screen')
//   }

//   })

// Add your routes here - above the module.exports line

module.exports = router;