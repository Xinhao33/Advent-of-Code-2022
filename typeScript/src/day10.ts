import * as fs from "fs";

let dataX = [1];
let screen = "";
const construction = (input: any) => {
  for (let i = 0; i < input.length; i++) {
    let cycle = dataX.length;
    input[i] = input[i].split(" ");
    let last_data = dataX[dataX.length - 1];
    if (input[i][0] === "noop") {
      draw(cycle);
      dataX.push(last_data);
    } else {
      draw(cycle);
      dataX.push(last_data);
      draw(cycle + 1);
      dataX.push(last_data + parseInt(input[i][1]));
    }
  }
};

const signal_strenth = (nb_cycle: number) => {
  return nb_cycle * dataX[nb_cycle - 1];
};

const draw = (cycle: number) => {
  let position = (cycle - 1) % 40;
  let valueX = dataX[dataX.length - 1]; // during last cycle
  if (
    position === valueX ||
    position === valueX - 1 ||
    position === valueX + 1
  ) {
    screen += "#";
  } else {
    screen += ".";
  }
};

["./data/inputDay10_1.txt"].forEach((f) => {
  const input = fs.readFileSync(`${f}`, "utf-8").trim().split("\n").map(String);
  let start = performance.now();
  construction(input);

  const sum =
    signal_strenth(20) +
    signal_strenth(60) +
    signal_strenth(100) +
    signal_strenth(140) +
    signal_strenth(180) +
    signal_strenth(220);
  console.log(`${f} - day10_2: ${sum}`);
  for (let i = 0; i <= 240; i = i + 40) {
    let slice = screen.slice(i, i + 40);
    console.log(slice);
  }
  let end = performance.now();
  console.log("use time: " + (end - start).toFixed(2));
});
