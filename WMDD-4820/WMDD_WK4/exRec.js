//this simple example will count down from a number passed in as a parameter to 0
function countD(num){
  if(num < 0)
    return;
  console.log(num);
  countD(num - 1);
}