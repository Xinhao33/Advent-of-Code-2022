import * as fs from "fs";

type file = {
  name: string;
  size: number;
  father: directory;
};

type directory = {
  name: string;
  file: file[];
  directory: directory[];
  father: directory | undefined;
};

const create_file = (name: string, size: number, father: directory) => {
  const out: file = { name: name, size: size, father: father };
  return out;
};

const create_directory = (name: string, father: directory) => {
  const out: directory = {
    name: name,
    file: [],
    directory: [],
    father: father,
  };
  return out;
};

let root: directory = {
  name: "root",
  file: [],
  directory: [],
  father: undefined,
};

const create_system = (input: any[]) => {
  let current = root;
  for (let i = 1; i < input.length; i++) {
    let l = input[i];
    let line = l.split(" ");
    if (line[0] == "$") {
      if (line[1] == "cd") {
        if (line[2][0] == ".") {
          if (current.father != undefined) {
            current = current.father;
          }
        } else {
          for (let i = 0; i < current.directory.length; i++) {
            if (current.directory[i].name == line[2]) {
              current = current.directory[i];
            }
          }
        }
      }
    }
    if (line[0] == "dir") {
      let son = create_directory(line[1], current);
      current.directory.push(son);
    }
    if (line[0] != "$" && line[0] != "dir") {
      let son = create_file(line[1], Number(line[0]), current);
      current.file.push(son);
    }
  }
};

const size_directory = (input: directory) => {
  let sum = 0;
  if (input.file.length != 0) {
    input.file.forEach((e) => {
      sum += e.size;
    });
    if (input.directory.length != 0) {
      input.directory.forEach((dir) => {
        sum += size_directory(dir);
      });
    }
  } else if (input.directory.length != 0) {
    input.directory.forEach((dir) => {
      sum += size_directory(dir);
    });
  }
  return sum;
};

let current: directory;
const day7_1 = (input: directory) => {
  let sum = 0;
  current = input;
  if (size_directory(current) <= 100000) {
    sum += size_directory(current);
    if (current.directory.length > 0) {
      current.directory.forEach((dir) => {
        sum += day7_1(dir);
      });
    }
  } else {
    current.directory.forEach((dir) => {
      sum += day7_1(dir);
    });
  }
  return sum;
};

let cur: directory;
const big_enough = (input: directory) => {
  let out: directory[] = [];
  const unused_space = 70000000 - size_directory(root);
  const need_space = 30000000 - unused_space;
  cur = input;
  if (size_directory(cur) >= need_space) {
    out.push(cur);
    if (cur.directory.length > 0) {
      cur.directory.forEach((dir) => {
        out = out.concat(big_enough(dir));
      });
    }
  } else {
    cur.directory.forEach((dir) => {
      out = out.concat(big_enough(dir));
    });
  }
  return out;
};

const day7_2 = (input: directory[]) => {
  const list = input.map((x) => size_directory(x));
  list.sort((a, b) => a - b);
  return list[0];
};

["./data/inputDay7_1.txt"].forEach((f) => {
  const input = fs.readFileSync(`${f}`, "utf-8").trim().split("\n");
  let start = performance.now();
  create_system(input);
  console.log(`${f} - day7_1: ${day7_1(root)}`);
  const big_list = big_enough(root);
  console.log(`${f} - day7_2: ${day7_2(big_list)}`);
  let end = performance.now();
  console.log("use time: " + (end - start).toFixed(2));
});
