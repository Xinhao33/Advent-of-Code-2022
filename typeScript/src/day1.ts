import * as fs from "fs";

type elves = {
  sum: number;
  index: number;
};

const conv = (input: string) => {
  const convert = input.trim().split("\n").map(String);
  const listint = convert.map((x) => parseInt(x));
  return listint;
};

const sum = (input: any[]) => {
  const sum = input.reduce((acc, cur) => acc + cur, 0);
  return sum;
};

const day1_1 = (input: any[]) => {
  //console.log(input.length);
  let ELF: elves = { sum: 0, index: 0 };
  for (let i = 0; i < input.length; i++) {
    const listint = conv(input[i]);
    const sumlist = sum(listint);
    const elf: elves = { sum: sumlist, index: i };
    if (ELF.sum < elf.sum) {
      ELF = elf;
    }
  }
  return ELF;
};

const day1_2 = (input: any[]) => {
  const elf0 = day1_1(input);
  input.splice(elf0.index, 1);
  const elf1 = day1_1(input);
  input.splice(elf1.index, 1);
  const elf2 = day1_1(input);
  input.splice(elf2.index, 1);
  return sum([elf0.sum, elf1.sum, elf2.sum]);
};

["inputDay1_1.txt"].forEach((f) => {
  const input = fs
    .readFileSync(`${f}`, "utf-8")
    .trim()
    .split("\n\n")
    .map(String);
  console.log(`${f} - day1_1: ${day1_1(input).sum}`);
  //console.log(`${f} - day1_2: ${day1_2(input)}`);
  //console.log(`${f} - day02: ${day02(input)}`);
  //console.log(input);
});

["./data/inputDay1_2.txt"].forEach((f) => {
  const input = fs
    .readFileSync(`${f}`, "utf-8")
    .trim()
    .split("\n\n")
    .map(String);
  //console.log(`${f} - day1_1: ${day1_1(input).sum}`);
  console.log(`${f} - day1_2: ${day1_2(input)}`);
  //console.log(`${f} - day02: ${day02(input)}`);
  //console.log(input);
});
