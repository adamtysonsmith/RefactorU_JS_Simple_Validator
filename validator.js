///////////////////////////////////////////////////
// Phone Number Validation
///////////////////////////////////////////////////
var userPhone = prompt('Enter your phone number with dashes. (For example: 978-999-6565). We promise we will not SPAM you!');

// First, validate the length is correct, 12
// Next, make sure the 3rd and 7th chars are '-'

if (userPhone.length === 12 && (userPhone.charAt(3) === '-') && (userPhone.charAt(7) === '-')) {
    console.log('Phone length and dashes are good');
} else {
    alert('Error! Phone Number is not the correct length, or contains illegal characters.');
}

// Next, make sure the other characters are only numbers
var areaCode = userPhone.substring(0,3);
var cityCode = userPhone.substring(4,7);
var lastDigits = userPhone.substring(8,12);

if ((typeof(parseInt(areaCode, 10)) === 'number') && (typeof(parseInt(cityCode, 10)) === 'number') && (typeof(parseInt(lastDigits, 10)) === 'number')) {
    console.log('Phone number format is good: ' + userPhone);
} else {
    alert('Error! Phone numbers must only contain numbers or dashes');
}


///////////////////////////////////////////////////
// Birth Date Validation
///////////////////////////////////////////////////
var userBirth = prompt('Enter your Birth Date in the following format: xx/xx/xx');

if (userBirth.length === 8 && (userBirth.charAt(2) === '/') && (userBirth.charAt(5) === '/')) {
    console.log('Birth length and dashes are good');
} else {
    alert('Error! Birth Date is not the correct length, or contains illegal characters.');
}

var birthMonth = userBirth.substring(0,2);
var birthDay = userBirth.substring(3,5);
var birthYear = userBirth.substring(6,8);

if ((typeof(parseInt(birthMonth, 10)) === 'number') && (typeof(parseInt(birthDay, 10)) === 'number') && (typeof(parseInt(birthYear, 10)) === 'number')) {
    console.log('Birth date format is good: ' + userBirth);
} else {
    alert('Error! Birth Date must only contain numbers or slashes');
}


///////////////////////////////////////////////////
// Postal Code Validation
///////////////////////////////////////////////////
var postalCode = prompt('Enter your Postal Code in the following format: xxxxx-xxxx or xxxxx');

if (postalCode.length === 10 && postalCode.charAt(5) === '-') {
    var zipCode = postalCode.substring(0,5);
    var fourDigitCode = postalCode.substring(6,9);
    if ((typeof(parseInt(zipCode, 10)) === 'number') && (typeof(parseInt(fourDigitCode, 10)) === 'number')) {
        console.log('Long Postal code is validated.');
    } else {
        alert('Error! Postal code must only contain numbers or dashes');
    }
    console.log('Postal Code length and dashes are good');
} else if ( (postalCode.length === 5) && (typeof(parseInt(postalCode, 10)) === 'number') ) {
    console.log('Short Postal Code is validated');
} else {
    alert('Error! Postal Code is not the correct length, or contains illegal characters.');
}


///////////////////////////////////////////////////
// State Validation
///////////////////////////////////////////////////
var state = prompt('What is your state? Please enter in this format: GA');

if ((state.length === 2) && (typeof(state) === 'string') && (state === state.toUpperCase())) {
    console.log('State format is good: ' + state);
} else {
    alert('Error! State must only contain capital letters.');
}


///////////////////////////////////////////////////
// Marriage Validation
///////////////////////////////////////////////////
var married = prompt('Are you married? Please enter Yes or No.');

if ((married.toLowerCase() === 'yes') || (married.toLowerCase() === 'no')) {
    console.log('Married format is good!:' + married);
} else {
    console.log('Error, you must enter yes or no for married status.');
}