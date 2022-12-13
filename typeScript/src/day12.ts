import * as fs from "fs";

type Pos = { x: number; y: number };

const start_end = (input: any[]) => {
  let start: Pos = { x: 0, y: 0 };
  let end: Pos = { x: 0, y: 0 };
  for (let i = 0; i < input.length; i++) {
    let s = input[i].indexOf("S");
    let e = input[i].indexOf("E");
    if (s != -1) {
      start.y = i;
      start.x = s;
    }
    if (e != -1) {
      end.y = i;
      end.x = e;
    }
  }
  return [name_case(start.x, start.y), name_case(end.x, end.y)];
};

const can_move = (from: string, to: string) => {
  return to.charCodeAt(0) - from.charCodeAt(0) <= 1;
};

let graph: { [key: string]: any[] } = {};

// name the case for graph
const name_case = (x: number, y: number) => {
  return `${x},${y}`;
};

const accessible = (input: any[], x: number, y: number) => {
  //input.pop();
  let accessible = [];
  let x_max = input[0].length;
  let y_max = input.length;
  let from = input[y][x];
  if (x > 0) {
    if (can_move(from, input[y][x - 1])) {
      accessible.push([name_case(y, x - 1), 1]);
    }
  }
  if (x + 1 < x_max) {
    if (can_move(from, input[y][x + 1])) {
      accessible.push([name_case(y, x + 1), 1]);
    }
  }
  if (y > 0) {
    if (can_move(from, input[y - 1][x])) {
      accessible.push([name_case(y - 1, x), 1]);
    }
  }
  if (y + 1 < y_max) {
    if (can_move(from, input[y + 1][x])) {
      accessible.push([name_case(y + 1, x), 1]);
    }
  }
  return accessible;
};

const convert_graph = (input: any[]) => {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(input[i].split(""));
  }
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] === "S") {
        //console.log(input[i][j]);
        output[i][j] = "a";
        //console.log(output[i]);
      }
      if (input[i][j] == "E") {
        //console.log(output[i][j]);
        output[2][5] = "z";
        //console.log(output[i]);
      }
      //console.log(output[2][5] === "E");
    }
  }
  return output;
};

const create_graph = (input: [][]) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      graph[name_case(i, j)] = accessible(input, j, i);
    }
  }
};

const desoriente = (graph: { [x: string]: [] }) => {
  let new_graph: { [key: string]: any[] } = {};
  for (let node in graph) {
    for (const chemin in graph[node]) {
      if (!(node in new_graph)) {
        new_graph[node] = [];
        new_graph[node].push((chemin[0], chemin[1]));
      }
      if (!(chemin[0] in new_graph)) {
        new_graph[chemin[0]] = [];
        new_graph[chemin[0]].push([node, chemin[1]]);
      }
    }
  }
  return new_graph;
};

const solution = () => {
  let sol = {};
};
["./data/inputDay12_1.txt"].forEach((f) => {
  const input = fs.readFileSync(`${f}`, "utf-8").trim().split("\n").map(String);
  //input.pop();
  //let start = performance.now();
  //console.log(`Result of part one for ${f} : ` + day11_1(input, 20));
  //console.log(`Result of part two for ${f} : ` + day11_1(input, 10000));
  //let end = performance.now();
  //console.log("use time: " + (end - start).toFixed(2));
  //create_graph(convert_graph(input));
  console.log(graph);
});
