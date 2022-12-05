import * as fs from "fs";

let start = performance.now();

const convert = (input: any[]) => {
  let out = [];
  for (let i = 0; i < input.length; i++) {
    let line = input[i];
    line = line.split(",");
    let I1 = line[0].split("-");
    let I2 = line[1].split("-");
    let a1 = parseInt(I1[0]);
    let b1 = parseInt(I1[1]);
    let a2 = parseInt(I2[0]);
    let b2 = parseInt(I2[1]);
    line = [
      [a1, b1],
      [a2, b2],
    ];
    out.push(line);
  }

  return out;
};

const satisfy4_1 = (input: any[]) => {
  return (
    (input[0][0] <= input[1][0] && input[0][1] >= input[1][1]) ||
    (input[0][0] >= input[1][0] && input[0][1] <= input[1][1])
  );
};

const satisfy4_2 = (input: any[]) => {
  return !(input[0][1] < input[1][0] || input[0][0] > input[1][1]);
};
const day4_1 = (input: any[]) => {
  let res = 0;
  for (let i = 0; i < input.length; i++) {
    if (satisfy4_1(input[i])) {
      //console.log(input[i]);
      res += 1;
    }
  }
  return res;
};

const day4_2 = (input: any[]) => {
  let res = 0;
  for (let i = 0; i < input.length; i++) {
    if (satisfy4_2(input[i])) {
      //console.log(input[i]);
      res += 1;
    }
  }
  return res;
};

["./data/inputDay4_1.txt"].forEach((f) => {
  const input = fs.readFileSync(`${f}`, "utf-8").trim().split("\n").map(String);
  let start = performance.now();
  console.log(`${f} - day4_1: ${day4_1(convert(input))}`);
  console.log(`${f} - day4_1: ${day4_2(convert(input))}`);
  let end = performance.now();
  console.log((end - start).toFixed(2));
  //console.log(`${f} - day3_2: ${input}`);
});
