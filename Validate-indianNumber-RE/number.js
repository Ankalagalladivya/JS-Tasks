function validateMobileNumber(number) {
    // Regular expression for Indian mobile numbers
    var pattern = /^[789]\d{9}$/;
  
    // Test the provided number against the regular expression
    return pattern.test(number);
  }
  
  // Example usage:
  var mobileNumber = "9876543210";
  if (validateMobileNumber(mobileNumber)) {
    console.log(mobileNumber + " is a valid Indian mobile number.");
  } else {
    console.log(mobileNumber + " is not a valid Indian mobile number.");
  }
  