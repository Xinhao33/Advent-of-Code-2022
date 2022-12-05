import * as fs from "fs";

type tab = {
  num: number;
  start: number;
  end: number;
};

const tab_com = (input: any[]) => {
  let n = parseInt(input[1]);
  let s = parseInt(input[3]) - 1;
  let e = parseInt(input[5]) - 1;
  let t: tab = { num: n, start: s, end: e };
  return t;
};

const buildStackList = (stacks: any[]) => {
  let stackList: any[][] = [];
  let nbStacks = parseInt(stacks.at(-1).at(-2));
  stacks.pop();
  for (let i = 0; i < nbStacks; i++) {
    stackList.push([]);
  }
  stacks.forEach((line) => {
    for (var j = 1; j < line.length; j += 4) {
      let str = line.at(j);
      if (str != " ") {
        stackList[Math.floor(j / 4)].push(line.at(j));
      }
    }
  });
  return stackList;
};

const move5_1 = (tab_com: tab, stackList: any[][]) => {
  for (let i = 0; i < tab_com.num; i++) {
    let letter = stackList[tab_com.start].shift();
    stackList[tab_com.end].unshift(letter);
  }
  return stackList;
};

const move5_2 = (tab_com: tab, stackList: any[][]) => {
  let out = stackList;
  let letter = stackList[tab_com.start].splice(0, tab_com.num);

  stackList[tab_com.end].unshift(...letter);
  return stackList;
};

const arrangeStack = (stackList: any[][], move: any, command: any[]) => {
  command.forEach((line) => {
    line = line.split(" ");
    let tab = tab_com(line);
    stackList = move(tab, stackList);
  });
  return stackList.reduce((acc, stack) => {
    return acc + stack[0];
  }, "");
};

["./data/inputDay5_1.txt"].forEach((f) => {
  const input = fs.readFileSync(`${f}`, "utf-8").split("\n\n").map(String);
  let stack = input[0].split("\n");
  let stackList = buildStackList(stack);
  let command = input[1].split("\n");
  console.log(`${f} - day5_1: ${arrangeStack(stackList, move5_1, command)}`);
});

["./data/inputDay5_1.txt"].forEach((f) => {
  const input = fs.readFileSync(`${f}`, "utf-8").split("\n\n").map(String);
  let stack = input[0].split("\n");
  let stackList = buildStackList(stack);
  let command = input[1].split("\n");
  let start = performance.now();
  console.log(`${f} - day3_2: ${arrangeStack(stackList, move5_2, command)}`);
  let end = performance.now();
  console.log("use time:" + (end - start).toFixed(2));
});
