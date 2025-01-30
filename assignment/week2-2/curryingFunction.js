const curryingFn = () => {
  let count = 0;
  return () => {
    if(count < 5){
      count ++;
      console.log("Congrats you earn the chance!");
    }else{
      console.log("Sorry you missed the chance");
    }
  }
}

const callFn = curryingFn();

callFn();
callFn();
callFn();
callFn();
callFn();
callFn();
callFn();
callFn();