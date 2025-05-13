
// Типізуйте функцію повністю: параметри і повернення функції.


type User = {
    name: string;
    age: number;
    isAdmin: boolean;
};

function createUser({ name, age }: User): User {
    return {
      name,
      age,
      isAdmin: false
    };
  }
  
createUser({ name: "Alice", age: 30, isAdmin: true });

console.log(createUser({ name: "Alice", age: 30, isAdmin: true }));