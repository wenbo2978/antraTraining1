function serviceSideRes(user){
  return new Promise((resolve, reject) => {
    if(user.name === 'admin'){
      setTimeout(resolve("get permission"), 2000)
      //resolve("get permission")
    }else{
      setTimeout(reject("no permission"), 2000);
      //reject("no permission")
    }
  })
}

const user1 = {name: "admin"}

const user2 = {name: "user"}

const checkUser = async () => {
  let ans;

  await serviceSideRes(user2)
    .then(
      res => {
        //console.log(res)
        ans = res;
      }
    ).catch(
      err => {
        //console.log(err)
        ans = err
      }
    )



  console.log(ans);
}

checkUser();