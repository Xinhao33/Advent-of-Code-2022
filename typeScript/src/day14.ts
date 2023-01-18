import * as fs from "fs";

let obstacle = [];
let map: Map<[number, number], string> = new Map<[number, number], string>();
const name_case = (x: number, y: number) => {
  return `${x},${y}`;
};

const complet = (list1: number[], list2: number[]) => {
  let output = [];
  if (list1[0] === list2[0]) {
    if (list1[1] < list2[1]) {
      for (let i = list1[1]; i <= list2[1]; i++) {
        map.set([list1[0], i], "#");
      }
    } else {
      for (let i = list2[1]; i <= list2[1]; i++) {
        map.set([list1[0], i], "#");
      }
    }
  }
  if (list1[1] === list2[1]) {
    if (list1[0] < list2[0]) {
      for (let i = list1[1]; i <= list2[1]; i++) {
        map.set([i, list1[0]], "#");
      }
    } else {
      for (let i = list2[0]; i <= list2[0]; i++) {
        map.set([i, list1[0]], "#");
      }
    }
  }
};

const creat_map = (list_grand: number[][]) => {
  list_grand.forEach((list_middle) => {});
};

const find_max_min = (list_grand: number[][]) => {
  list_grand.forEach((line) => {
    for (let i = 0; i < line.length - 1; i++) {
      obstacle.push(line[i]);
    }
  });
};

["./data/inputDay14_1.txt"].forEach((f) => {
  const input = fs.readFileSync(`${f}`, "utf-8").trim().split("\n");

  let list_grand: number[][][] = [];
  input.forEach((line) => {
    //console.log(line);
    let list_middle: number[][] = [];
    line
      .trim()
      .split("->")
      .forEach((coord) => {
        coord.trim();
        let list = [];
        list.push(parseInt(coord.split(",")[0]));
        list.push(parseInt(coord.split(",")[1]));
        list_middle.push(list);
      });
    list_grand.push(list_middle);
  });

  console.log(list_grand);
});
