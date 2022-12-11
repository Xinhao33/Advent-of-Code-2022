import * as fs from "fs";

const input: string[] = fs
  .readFileSync("./data/inputDay9_1.txt", "utf-8")
  .trim()
  .split("\n");

//const imput: string[] = fs
//.readFileSync("src/advent_of_code_2022/day_9/test.txt", "utf-8")
//.trim()
//.split("\n");
let visited_place = new Map<string, number>();
visited_place.set("0_0", 1);
let x_t: number = 0;
let y_t: number = 0;
let x_h: number = 0;
let y_h: number = 0;

let isClose = (x_h: number, y_h: number, x_t: number, y_t: number): boolean => {
  return Math.abs(x_h - x_t) <= 1 && Math.abs(y_h - y_t) <= 1;
};

let move = (
  xH: number,
  yH: number,
  xT: number,
  yT: number
): [number, number] => {
  if (yH > yT && xH > xT) {
    return [1, 1];
  }
  if (yH > yT && xH === xT) {
    return [0, 1];
  }
  if (yH > yT && xH < xT) {
    return [-1, 1];
  }
  if (yH < yT && xH > xT) {
    return [1, -1];
  }
  if (yH < yT && xH === xT) {
    return [0, -1];
  }
  if (yH < yT && xH < xT) {
    return [-1, -1];
  }
  if (xH > xT && yH > yT) {
    return [1, 1];
  }
  if (xH > xT && yH === yT) {
    return [1, 0];
  }
  if (xH > xT && yH < yT) {
    return [1, -1];
  }
  if (xH < xT && xH > xT) {
    return [-1, 1];
  }
  if (xH < xT && yH === yT) {
    return [-1, 0];
  }
  if (xH < xT && xH < xT) {
    return [-1, -1];
  } else {
    return [-1, -1];
  }
};

const day9_1 = (input: any) => {
  let compt: number = 1;
  for (let i: number = 0; i < input.length; i++) {
    let command: string[] = input[i].trim().split(" ");
    let direction: string = command[0];
    let distance: number = parseInt(command[1]);

    while (distance > 0) {
      if (direction === "U") {
        y_h++;
        distance--;
        if (!isClose(x_h, y_h, x_t, y_t)) {
          x_t += move(x_h, y_h, x_t, y_t)[0];
          y_t += move(x_h, y_h, x_t, y_t)[1];
          let pos: string = x_t.toString() + "_" + y_t.toString();
          if (!visited_place.has(pos)) {
            visited_place.set(pos, 1);
            compt++;
          }
        }
      }
      if (direction === "D") {
        y_h--;
        distance--;
        if (!isClose(x_h, y_h, x_t, y_t)) {
          x_t += move(x_h, y_h, x_t, y_t)[0];
          y_t += move(x_h, y_h, x_t, y_t)[1];
          let pos: string = x_t.toString() + "_" + y_t.toString();
          if (!visited_place.has(pos)) {
            visited_place.set(pos, 1);
            compt++;
          }
        }
      }
      if (direction === "R") {
        x_h++;
        distance--;
        if (!isClose(x_h, y_h, x_t, y_t)) {
          x_t += move(x_h, y_h, x_t, y_t)[0];
          y_t += move(x_h, y_h, x_t, y_t)[1];
          let pos: string = x_t.toString() + "_" + y_t.toString();
          if (!visited_place.has(pos)) {
            visited_place.set(pos, 1);
            compt++;
          }
        }
      }
      if (direction === "L") {
        x_h--;
        distance--;
        if (!isClose(x_h, y_h, x_t, y_t)) {
          x_t += move(x_h, y_h, x_t, y_t)[0];
          y_t += move(x_h, y_h, x_t, y_t)[1];
          let pos: string = x_t.toString() + "_" + y_t.toString();
          if (!visited_place.has(pos)) {
            visited_place.set(pos, 1);
            compt++;
          }
        }
      }
    }
  }

  return compt;
};

let knots: number[][] = [
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
];

/////// day 9_2///////////

let compt = 1;
for (let i: number = 0; i < input.length; i++) {
  let command: string[] = input[i].trim().split(" ");
  let direction: string = command[0];
  let distance: number = +command[1];
  if (direction === "U") {
    while (distance > 0) {
      distance--;
      let j: number = 1;
      knots[0][1]++;
      while (j < 10) {
        if (
          !isClose(knots[j - 1][0], knots[j - 1][1], knots[j][0], knots[j][1])
        ) {
          knots[j][0] += move(
            knots[j - 1][0],
            knots[j - 1][1],
            knots[j][0],
            knots[j][1]
          )[0];
          knots[j][1] += move(
            knots[j - 1][0],
            knots[j - 1][1],
            knots[j][0],
            knots[j][1]
          )[1];
        }
        j++;
      }
      let pos: string =
        knots[j - 1][0].toString() + "_" + knots[j - 1][1].toString();
      if (!visited_place.has(pos)) {
        visited_place.set(pos, 1);
        compt++;
      }
    }
  }
  if (direction === "D") {
    while (distance > 0) {
      distance--;
      let j: number = 1;
      knots[0][1]--;
      while (j < 10) {
        if (
          !isClose(knots[j - 1][0], knots[j - 1][1], knots[j][0], knots[j][1])
        ) {
          knots[j][0] += move(
            knots[j - 1][0],
            knots[j - 1][1],
            knots[j][0],
            knots[j][1]
          )[0];
          knots[j][1] += move(
            knots[j - 1][0],
            knots[j - 1][1],
            knots[j][0],
            knots[j][1]
          )[1];
        }
        j++;
      }
      let pos: string =
        knots[j - 1][0].toString() + "_" + knots[j - 1][1].toString();
      if (!visited_place.has(pos)) {
        visited_place.set(pos, 1);
        compt++;
      }
    }
  }
  if (direction === "R") {
    while (distance > 0) {
      distance--;
      let j: number = 1;
      knots[0][0]++;
      while (j < 10) {
        if (
          !isClose(knots[j - 1][0], knots[j - 1][1], knots[j][0], knots[j][1])
        ) {
          knots[j][0] += move(
            knots[j - 1][0],
            knots[j - 1][1],
            knots[j][0],
            knots[j][1]
          )[0];
          knots[j][1] += move(
            knots[j - 1][0],
            knots[j - 1][1],
            knots[j][0],
            knots[j][1]
          )[1];
        }
        j++;
      }
      let pos: string =
        knots[j - 1][0].toString() + "_" + knots[j - 1][1].toString();
      if (!visited_place.has(pos)) {
        visited_place.set(pos, 1);
        compt++;
      }
    }
  }
  if (direction === "L") {
    while (distance > 0) {
      distance--;
      let j: number = 1;
      knots[0][0]--;
      while (j < 10) {
        if (
          !isClose(knots[j - 1][0], knots[j - 1][1], knots[j][0], knots[j][1])
        ) {
          knots[j][0] += move(
            knots[j - 1][0],
            knots[j - 1][1],
            knots[j][0],
            knots[j][1]
          )[0];
          knots[j][1] += move(
            knots[j - 1][0],
            knots[j - 1][1],
            knots[j][0],
            knots[j][1]
          )[1];
        }
        j++;
      }
      let pos: string =
        knots[j - 1][0].toString() + "_" + knots[j - 1][1].toString();
      if (!visited_place.has(pos)) {
        visited_place.set(pos, 1);
        compt++;
      }
    }
  }
}

let start = performance.now();
console.log(`day9_1: ${day9_1(input)}`);

console.log(`day9_2: ${compt}`);
let end = performance.now();
console.log("use time: " + (end - start).toFixed(2));
