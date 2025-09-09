// 1) Arrow functions + implicit return 
const add = (a, b) => a + b;
console.log("1:", add(8, 7)); 

// 2) Template literals 
const name = "Nimesh", age = 18;
console.log(`2: Hello, I'm ${name} and I'm ${age}.`);

// 3) Object destructuring 
const person = { first: "WG", middle: "Nimesh", last: "Hasith", country: "Sri Lanka" };
const { first,middle, last, country } = person;
console.log("3:", first,middle, last, country);

// 4) Array destructuring + skipping 
const nums = [10, 20, 30, 40];
const [x, , y] = nums;
console.log("4:", x, y); 

// 5) Default params 
const greet = (who = "Guest") => `Hello, ${who}!`;
console.log("5:", greet(), greet("Nimesh"));

// 6) Spread with arrays 
const a1 = [1, 2], a2 = [3, 4];
const merged = [...a1, ...a2];
console.log("6:", merged);

// 7) Spread with objects 
const baseUser = { id: 1, role: "user" };
const adminUser = { ...baseUser, role: "admin" };
console.log("7:", adminUser);

// 8) Rest parameters 
const sum = (...vals) => vals.reduce((acc, n) => acc + n, 0);
console.log("8:", sum(1, 2, 3, 4)); 

// 9) Array.map 
const doubled = [1, 2, 3].map(n => n * 2);
console.log("9:", doubled);

const doubledd = [2,4,6].map(n => n*5);
console.log("9",doubledd);

// 10) Array.filter
const evens = [1, 2, 3, 4, 5, 6].filter(n => n % 2 === 0);
console.log("10:", evens);

// 11) Array.reduce 
const total = [5, 10, 15].reduce((acc, n) => acc + n, 0);
console.log("11:", total);

// 12) Array.find / some / every 
const arr = [3, 7, 9, 12];
console.log("12-find:", arr.find(n => n > 8));   
console.log("12-some:", arr.some(n => n % 2 === 0)); 
console.log("12-every:", arr.every(n => n > 0));     

// 13) Object property shorthand & method shorthand 
const brand = "BMW", model = "M3";
const car = {
  brand, model,
  info() { return `${this.brand} ${this.model}`; }
};
console.log("13:", car.info());

// 14) Computed property names 
const keyName = "likes";
const profile = { name: "Nimesh", [keyName]: ["BMW", "Ferrari"] };
console.log("14:", profile);

// 15) Optional chaining & nullish coalescing 
const user = { settings: { theme: "dark" } };
console.log("15a:", user?.settings?.theme);         
console.log("15b:", user?.prefs?.lang ?? "en-US");  

// 16) Sets 
const set = new Set([1, 1, 2, 3, 3]);
console.log("16:", [...set]); // [1,2,3]

// 17) Maps  
const m = new Map();
m.set("role", "admin").set(1, "numericKey");
console.log("17:", m.get("role"), m.get(1));

// 18) Promise basic 
const wait = (ms) => new Promise(res => setTimeout(res, ms));
wait(300).then(() => console.log("18: waited 300ms (Promise)"));

// 19) Async/Await 
const getData = async () => "fetched";
(async () => {
  const res = await getData();
  console.log("19:", res);
})();

// 20) Promise.all 
const p1 = wait(100).then(() => "A");
const p2 = wait(200).then(() => "B");
Promise.all([p1, p2]).then(vals => console.log("20:", vals));