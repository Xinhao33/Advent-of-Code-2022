import * as fs from "fs";

const buffer = (input: any, index: number, len: number) => {
  const out = input.slice(index, index + len);
  return out;
};

const is_marker = (input: any[]) => {
  let test = new Set(input);
  return test.size == input.length;
};

const day6 = (input: any, len: number) => {
  // len: length of letters in buffer
  for (let i = 0; i < input.length; i++) {
    let buf = buffer(input, i, len);
    if (is_marker(buf)) {
      return i + len;
    }
  }
};

["./data/inputDay6_1.txt"].forEach((f) => {
  const input = fs.readFileSync(`${f}`, "utf-8").trim();
  let start = performance.now();
  console.log(`${f} - day6_1: ${day6(input, 4)}`);
  //console.log(day6_1(input, 4));
  console.log(`${f} - day6_2: ${day6(input, 14)}`);
  let end = performance.now();
  console.log((end - start).toFixed(2));
  //console.log(`${f} - day3_2: ${input}`);
});
