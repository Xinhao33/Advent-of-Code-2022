# Advent-of-Code-2022
## Day1

simple, but for day1_2 we can still discuss about the complexity.

method 1: we can firstly sort the list sum, then sum up the three first value, in theory we can have a complexity nlogn,

method 2: we can find the biggest sum, then delete this sum, do it 3 times. in this way we have a complexity 3n.

In this exercise, we have a list sum which contains 266 elements, log266 ==7.7548875021635, so it's better to choose methode 2.

## Day2

try to establish 3 dictionaries to simplify the comptlexity (first try with dictionary)

## Day3

interesting method to find out commun elements in three lists:
//find commun elements in input[0], input[1], input[2] 
 inter1_2 = input[0].filter((x) => input[1].includes(x)); // intersection between input[0] and input[1]
 let com = inter1_2.filter((x) => input[2].includes(x)); // intersection between inter1_2 and input[2]

