//definition of the function
function nonsense(test)
{
  //set dummy
  var dummy = "";
  //set flag
  var truth = false;
  //set integer test
  var wert = 0;
  //set debug parameter to string "on"
  var debug = "on";
  //instructions to check log directory
  console.log ("check /var/log");
  //set value parameter to input parameter
  var value = ("test:" + test);
  //output testvalue
  console.log (value);
  //return testvalue
  return value;
};
//set export
module.exports = nonsense;
