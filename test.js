// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");


// function User(name) {
//     this.name = name;
// }

// User.prototype.sayHello = () => {
//     console.log(`Hello, ${this.name}`);
// }

// const user1 = new User("Alice");
// user1.sayHello();


// function counter() {
//     let count = 0;
//     return () => console.log(count++);
// }

// const count1 = counter();
// count1();
// count1();

// const count2 = counter();
// count2();
// count2();

// console.log(foo);
// var foo = "Hello";
// console.log(foo);


// app.get("/data", async (req, res) => {
//     const result = fetch("https://api.example.com/data");
//     res.send(await result.json());
// });

// useEffect(() => {
//  console.log("Effect runs");
// }, [user])

// function sum(...numbers, extra)  {
//     return numbers.reduce((acc, num) => acc + num, 0) + extra;
// }


// const [user, setUser] = useState({name: "Alice", age: 20});
// function updateAge() {
//     setUser({ age: 30 });
// }

// function MyComponent() {
//     const inputRef = useRef();

//     useEffect(() => {
//       inputRef.current.focus();    
//     }, [])

//     return <input />;
// };

// console.log(1 + "2" + 3);

// function fetchData() {
//     let data;
//     fetch("https://api.example.com/data")
//         .then(response => response.json())
//         .then(json => data = json);
//     return data;
// }

// function multiply(x, y = 2) {
//     return x * y;
// }

// console.log(multiply(5));
// console.log(multiply(5, undefined));
// console.log(multiply(5, null));


// const a = [1, 2, 3];
// const b = a;
// b.push(4);
// console.log(a);

// let x = 1;
// let y = 2;
// x = x + y++;
// console.log(x, y);

// let x = [1, 2, 3];
// let y = [...x];
// y[0] = 4;
// console.log(x[0], y[0]);

// const numbers = [1, 2, 3];
// numbers[10] = 10;
// console.log(numbers.length);

// let numbers = [1, 2, 3];
// numbers = numbers.map(num => num * 2);
// console.log(numbers);

const x = 10;
