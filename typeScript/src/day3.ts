import * as fs from "fs";

const seperate = (input: any[]) => {
  let out = [];
  let first = [];
  let second = [];
  for (let i = 0; i < input.length; i++) {
    let e = [];
    let element = input[i];
    for (let i = 0; i < element.length; i++) {
      e.push(element[i]);
    }
    for (let i = 0; i < e.length / 2; i++) {
      first.push(e[i]);
    }
    for (let i = e.length / 2; i < e.length; i++) {
      second.push(element[i]);
    }

    out.push([first, second]);
    first = [];
    second = [];
  }

  return out;
};

const chaine_to_list = (input: any[]) => {
  let out = [];
  for (let i = 0; i < input.length; i++) {
    out.push(input[i]);
  }
  return out;
};

const seperate2 = (input: any[]) => {
  // seperate global list into group of 3
  let out = [];

  input = chaine_to_list(input);
  for (let i = 0; i < input.length / 3; i++) {
    let first = chaine_to_list(input[3 * i]);
    let second = chaine_to_list(input[3 * i + 1]);
    let third = chaine_to_list(input[3 * i + 2]);

    out.push([first, second, third]);
  }

  return out;
};

const find = (input: any[]) => {
  let commun = [];
  input = chaine_to_list(input);
  for (let i = 0; i < input.length; i++) {
    let first = input[i][0];
    let second = input[i][1];
    let res = first.filter(function (v: any) {
      return second.indexOf(v) > -1;
    });
    commun.push(res[0]);
  }
  return commun;
};

const find_three_list = (input: any[]) => {
  let commun = [];
  for (let i = 0; i < input.length; i++) {
    let inter1_2 = input[i][0].filter((x: any) => input[i][1].includes(x));
    let com = inter1_2.filter((x: any) => input[i][2].includes(x));

    commun.push(com);
  }

  for (let i = 0; i < commun.length; i++) {
    commun[i] = commun[i][0];
  }
  return commun;
};

const score = (input: any[]) => {
  let score_list = [
    "0",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += score_list.indexOf(input[i]);
  }
  return sum;
};

["./data/inputDay3_1.txt"].forEach((f) => {
  const input = fs.readFileSync(`${f}`, "utf-8").trim().split("\n").map(String);
  let start = performance.now();
  console.log(`${f} - day3_1: ${score(find(seperate(input)))}`);
  console.log(`${f} - day3_2: ${score(find_three_list(seperate2(input)))}`);
  let end = performance.now();
  console.log((end - start).toFixed(2));
});
