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

find commun elements in input[0], input[1], input[2] 

inter1_2 = input[0].filter((x) => input[1].includes(x)); // intersection between input[0] and input[1]
let com = inter1_2.filter((x) => input[2].includes(x)); // intersection between inter1_2 and input[2]

## Day4
function satisfy4_1 and satisfy4_2 are efficent, the part convert data with proper list(table) can be improved

## Day5
transform a stack (data in colon) into lists. Usage of shift, unshift (like pop and push, but start at the first element)

## Day6

a method to find out if there is a repeat element in a string:

{input is a string
test = new Set(input);
return test.size == input.length}

comment:
Set will remove repeat elements in a string

## Day7

Difficult

step 1°) create minisystem to store the repositories and files in type depository and type file.

step 2°) find the right sizes by recursion

