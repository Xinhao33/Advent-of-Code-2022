import * as fs from "fs";

const moveElt = (list: number[], from: number, to: number) => {
  const elt = list[from];
  list.splice(from, 1);
  list.splice(to % list.length, 0, elt);
};

const solutions = (input: string, part: number) => {
  let baseFile = fs
    .readFileSync(`./day20/inputs/${input}.in`, "utf-8")
    .split("\n")
    .map((x) => parseInt(x));
  if (part === 2) baseFile = baseFile.map((x) => x * 811589153); // 811589153 is the encryption key
  const baseIndex = baseFile.map((x, i) => i);
  let file = [...baseFile];
  let fileIndex = [...baseIndex]; // keep track of modifications on indexes of the file
  let nIterations = 1; // number of iterations initially set to 1
  if (part === 2) nIterations = 10; // 10 iterations for part 2
  for (let n = 1; n <= nIterations; n++) {
    for (let index of baseIndex) {
      let currI = fileIndex.indexOf(index); // find the index of the current element in the modified file (there are duplicated elements in the file)
      moveElt(fileIndex, currI, currI + file[currI]);
      moveElt(file, currI, currI + file[currI]);
    }

    const getNthEltAfter0 = (n: number) =>
      file[(file.indexOf(0) + (n % file.length)) % file.length];
    return (
      getNthEltAfter0(1000) + getNthEltAfter0(2000) + getNthEltAfter0(3000)
    );
  }

  ["example", "puzzle"].forEach((input) => {
    console.log(`PART 1 "${input}":`, `${solutions(input, 1)}`);
  });

  ["example", "puzzle"].forEach((input) => {
    console.log(`PART 2 "${input}":`, `${solutions(input, 2)}`);
  });
};
