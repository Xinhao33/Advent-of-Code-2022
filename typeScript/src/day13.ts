import * as fs from "fs";

const compare = (left: any, right: any): number => {
  // negative if left<right
  let comparing_element = 0;
  while (comparing_element < left.length && comparing_element < right.length) {
    if (
      typeof left[comparing_element] === "number" &&
      typeof right[comparing_element] === "number"
    ) {
      if (left[comparing_element] === right[comparing_element]) {
        comparing_element += 1;
      } else {
        return left[comparing_element] - right[comparing_element];
      }
    } else {
      let result = compare(
        [left[comparing_element]].flat(),
        [right[comparing_element]].flat()
      );
      if (result === 0) {
        comparing_element++;
      } else {
        return result;
      }
    }
  }
  return left.length - right.length;
};

const day13_1 = (pairs: any[]) => {
  let count = 0;
  for (let i = 0; i < pairs.length; i++) {
    if (compare(pairs[i].left, pairs[i].right) < 0) {
      count += i + 1; // first is 1, not 0
    }
  }
  return count;
};

const day13_2 = (pairs: any[]) => {
  let packets = [];
  const dividers = [[[2]], [[6]]];
  packets.push(...dividers);
  for (let i = 0; i < pairs.length; i++) {
    packets.push(pairs[i].left, pairs[i].right);
  }
  packets = packets.sort((a, b) => compare(a, b));
  return (
    (packets.indexOf(dividers[0]) + 1) * (packets.indexOf(dividers[1]) + 1)
  );
};

["./data/inputDay13_1.txt"].forEach((f) => {
  const input = fs.readFileSync(`${f}`, "utf-8").trim().split("\n\n");
  const pairs = input.map((v) => ({
    left: JSON.parse(v.split("\n")[0]),
    right: JSON.parse(v.split("\n")[1]),
  }));
  let start = performance.now();
  console.log(`${f} - day13_1: ${day13_1(pairs)}`);
  console.log(`${f} - day13_2: ${day13_2(pairs)}`);
  let end = performance.now();
  console.log("use time: " + (end - start).toFixed(2));
});
