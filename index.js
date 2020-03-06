//definition of the function
function nonsense(test)
{
//set debug parameter to string "on"
debug = "on";
//instructions to check log directory
console.log ("check /var/log");
//set value parameter to input parameter
value = ("test:" + test)
//output testvalue
console.log (value);
//return testvalue
return value
};
//set export
module.exports = nonsense;
