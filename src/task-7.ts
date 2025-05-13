
interface User {
    name: string;
    age: number;
};


const users: User[] = [
    { name: "Charlie", age: 30 },
    { name: "Bob", age: 25 },
];

users.push({ name: "Petro", age: 40 });
// users.push({name: "VAsia"})
  

console.log(users);

