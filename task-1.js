const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
// console.log(user);

user["hobby"] = "skydiving";
// console.log(user);

user.premium = false;
// console.log(user);

const keys = Object.keys(user);
// console.log(keys);

for (const key in user) {
  //  console.log(key);

  console.log("Key: ", key, ", Value: ", user[key]);
}
