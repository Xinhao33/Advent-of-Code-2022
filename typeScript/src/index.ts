console.log("hello world");

type point = { x: number; y: number };

let p: point = { x: 1, y: 2 };

let y: point = { x: 1, y: 2 };

y = p;

y.x = 3;
console.log(p.x);
