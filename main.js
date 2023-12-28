var validator = require("validator");

validator.isEmail("foo@bar.com"); //=> true

console.log(validator.isEmail("test@test.com"));
console.log(validator.isEmail("abcDE123"));
