import * as fs from "fs";

const tree_edge = (input: any[]) => {
  const len_row = input[0].trim().length;
  const len_colomn = input.length;
  //console.log(len_colomn);
  //console.log(len_row);
  return (len_row + len_colomn) * 2 - 4;
};

const isVisible = (input: any[], x: number, y: number) => {
  let tree = input[x][y];
  let vU = true;
  let vD = true;
  let vL = true;
  let vR = true;

  for (let u = x - 1; u >= 0; u--) {
    if (input[u][y] >= tree) {
      vU = false;
      break;
    }
  }

  for (let d = x + 1; d < input.length; d++) {
    if (input[d][y] >= tree) {
      vD = false;
      break;
    }
  }

  for (let l = y - 1; l >= 0; l--) {
    if (input[x][l] >= tree) {
      vL = false;
      break;
    }
  }
  for (let r = y + 1; r < input[0].length; r++) {
    if (input[x][r] >= tree) {
      vR = false;
      break;
    }
  }

  return vU || vD || vL || vR;
};

const nb_visible = (input: any[]) => {
  let sum = tree_edge(input);
  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input[0].length - 2; j++) {
      if (isVisible(input, i, j)) {
        sum += 1;
      }
    }
  }
  return sum;
};

function scenicScore(input: any[], x: number, y: number) {
  let v = input[x][y];
  let sU = 0;
  let sD = 0;
  let sL = 0;
  let sR = 0;
  for (let u = x - 1; u >= 0; u--) {
    sU += 1;
    if (input[u][y] >= v) {
      break;
    }
  }
  for (let d = x + 1; d < input.length - 1; d++) {
    // last element is vide espace, trim() will do better
    sD += 1;
    if (input[d][y] >= v) {
      break;
    }
  }
  for (let l = y - 1; l >= 0; l--) {
    sL += 1;
    if (input[x][l] >= v) {
      break;
    }
  }
  for (let r = y + 1; r < input[0].length - 1; r++) {
    sR += 1;
    if (input[x][r] >= v) {
      break;
    }
  }
  return sR * sL * sU * sD;
}

function bestScore(input: any[]) {
  let score = 0;
  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input[0].length - 1; j++) {
      let s = scenicScore(input, i, j);
      if (s > score) {
        score = s;
      }
    }
  }
  return score;
}

["./data/inputDay8_1.txt"].forEach((f) => {
  const input = fs.readFileSync(`${f}`, "utf-8").trim().split("\n").map(String);
  let start = performance.now();
  console.log(`${f} - day8_1: ${nb_visible(input)}`);
  console.log(`${f} - day8_2: ${bestScore(input)}`);
  let end = performance.now();
  console.log("use time: " + (end - start).toFixed(2));
  //console.log(input[0][5]);
  //console.log(`${f} - day1_2: ${day1_2(input)}`);
  //console.log(`${f} - day02: ${day02(input)}`);
  //console.log(input);
});
