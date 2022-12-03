import * as fs from "fs";

const score1 = new Map<string, number>([
  ["A Y", 6],
  ["A X", 3],
  ["A Z", 0],
  ["B Y", 3],
  ["B X", 0],
  ["B Z", 6],
  ["C Y", 0],
  ["C X", 6],
  ["C Z", 3],
]);

const score2 = new Map<string, number>([
  ["A", 1],
  ["B", 2],
  ["C", 3],
]);

const score3 = new Map<string, number>([
  ["X", 0],
  ["Y", 3],
  ["Z", 6],
]);

const relation = new Map<string, string>([
  ["A Y", "A"],
  ["A X", "C"],
  ["A Z", "B"],
  ["B Y", "B"],
  ["B X", "A"],
  ["B Z", "C"],
  ["C Y", "C"],
  ["C X", "B"],
  ["C Z", "A"],
]);

const score_sum = (input: any[], score: Map<string, number>) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    let a = score.get(input[i]);
    if (a != undefined) {
      if (input[i][2] === "Y") {
        a += 2;
      } else if (input[i][2] === "X") {
        a += 1;
      } else {
        a += 3;
      }
      sum = sum + a;
    }
  }
  return sum;
};

const day2_2 = (input: any[]) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    let rel = relation.get(input[i]);
    let compare = score3.get(input[i][2]);
    if (rel != undefined && compare != undefined) {
      let a = score2.get(rel);
      if (a != undefined) {
        a += compare;
        sum += a;
      }
    }
  }
  return sum;
};

["./data/inputDay2_1.txt"].forEach((f) => {
  const input = fs.readFileSync(`${f}`, "utf-8").trim().split("\n").map(String);
  console.log(`${f} - day2_1: ${score_sum(input, score1)}`);
  console.log(`${f} - day2_2: ${day2_2(input)}`);
  //console.log(`${f} - day1_2: ${day1_2(input)}`);
  //console.log(`${f} - day02: ${day02(input)}`);
  //console.log(input);
});
