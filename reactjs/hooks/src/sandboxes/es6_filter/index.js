const users = [
  { name: "Codiku", age: 30 },
  { name: "Julia", age: 22 },
  { name: "Lara", age: 17 },
  { name: "Max", age: 12 },
  { name: "Paul", age: 43 },
  { name: "Ana", age: 68 },
];

const filteredUsers = users.filter((user) => {});
console.log(filteredUsers);

function isUserMajor(user) {
  return user.age >= 18;
}
