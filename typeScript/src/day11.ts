import * as fs from "fs";

type monkey = {
  id: number;
  items: number[];
  operation: string[];
  divisible: number;
  trueId: number;
  falseId: number;
  inspection: number;
};

const convert = (input: any[]) => {
  const monkey_list: monkey[] = [];
  input.forEach((notes) => {
    let monkey: monkey = {
      id: 0,
      items: [],
      operation: [],
      divisible: 1,
      trueId: 1,
      falseId: 1,
      inspection: 1,
    };
    notes.forEach((line: string, i: number) => {
      if (i === 0)
        monkey["id"] = Number(line.trim().replace(/Monkey |\:/, "")[0]);
      else if (i === 1)
        monkey.items = line
          .trim()
          .replace(/Starting items: /, "")
          .split(", ")
          .map((item: any) => Number(item));
      else if (i === 2)
        monkey.operation = line
          .trim()
          .replace(/Operation: new = old /, "")
          .split(" ");
      else if (i === 3)
        monkey.divisible = Number(
          line.trim().replace(/Test: divisible by /, "")
        );
      else if (i === 4)
        monkey.trueId = Number(
          line.trim().replace(/If true: throw to monkey /, "")[0]
        );
      else if (i === 5)
        monkey.falseId = Number(
          line.trim().replace(/If false: throw to monkey /, "")[0]
        );
    });
    monkey.inspection = 0;
    monkey_list.push(monkey);
  });
  return monkey_list;
};

const day11_1 = (input: any[], nb_round: number) => {
  const monkey_list = convert(input);
  let divise = 3;
  if (nb_round === 10000) {
    for (let i = 0; i < monkey_list.length; i++) {
      divise *= monkey_list[i].divisible;
    }
  }
  for (let round = 0; round < nb_round; round++) {
    for (let i = 0; i < monkey_list.length; i++) {
      let monkey = monkey_list[i];
      let itemPop = 0;
      for (let item of monkey.items) {
        itemPop += 1;
        monkey.inspection += 1;
        if (monkey.operation[0] === "*") {
          if (monkey.operation[1] === "old") {
            if (nb_round === 10000) {
              item = Math.floor((item * item) % divise);
            } else {
              item = Math.floor((item * item) / divise);
            }
          } else {
            if (nb_round === 10000) {
              item = Math.floor(
                (item * parseInt(monkey.operation[1])) % divise
              );
            } else {
              item = Math.floor(
                (item * parseInt(monkey.operation[1])) / divise
              );
            }
          }
        } else if (monkey.operation[0] === "+") {
          if (monkey.operation[1] === "old") {
            if (nb_round === 10000) {
              item = Math.floor((item + item) % divise);
            } else {
              item = Math.floor((item + item) / divise);
            }
          } else {
            if (nb_round === 10000) {
              item = Math.floor(
                (item + parseInt(monkey.operation[1])) % divise
              );
            } else {
              item = Math.floor(
                (item + parseInt(monkey.operation[1])) / divise
              );
            }
          }
        }
        if (item % monkey.divisible === 0) {
          let target = monkey_list.find(
            (search) => search.id === monkey.trueId
          );
          if (target != undefined) {
            target.items.push(item);
          }
        } else {
          let target = monkey_list.find(
            (search) => search.id === monkey.falseId
          );
          if (target != undefined) {
            target.items.push(item);
          }
        }
      }
      for (let i = 0; i < itemPop; i++) {
        monkey.items.shift();
      }
    }
  }
  let result = [];
  for (let monkey of monkey_list) {
    result.push(monkey.inspection);
  }
  result.sort(function (a, b) {
    return a - b;
  });
  return result[result.length - 1] * result[result.length - 2];
};

["./data/inputDay11_1.txt"].forEach((f) => {
  const input = fs
    .readFileSync(`${f}`, "utf-8")
    .trim()
    .split("\n\n")
    .map((section) => section.split("\n"));
  let start = performance.now();
  console.log(`Result of part one for ${f} : ` + day11_1(input, 20));
  console.log(`Result of part two for ${f} : ` + day11_1(input, 10000));
  let end = performance.now();
  console.log("use time: " + (end - start).toFixed(2));
});
