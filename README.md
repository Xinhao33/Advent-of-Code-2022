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

## Day8

relatively simple

## Day 9

it is more easy to consider every elementory movement (every time just consider to move one case)

## Day 10

first part I use a naive methode, put every situation of register after every cycle in a list, but it seems that it is useful for question 2.

As for question 2, it is an interesting question. Think wisely about the fonction draw will be helpful

## Day 11

I use a lot of if condition in order to solve two question in one question, but it takes a long time to caculate the result. There must be a way to simplify the fonction Day11_1(). But I still think that consider every monkey as a type is a good start.

## Day 12

<<<<<<< HEAD
Difficult to solve. I'm net sure if it's a good way to create a matrix with numbers to replace the letters. Idea is after this, find the path with dijkstra.

comment: it is useful when we work with ROS slam navigation, which is used to find the path between two points with obstacles apprears. The matrix created is as a matter of fact costmap. (find the path in the matrix which the sum of the number along the path is min)

## Day 13

I think this question is interesting. I create a comparator to "simplify" the questions

## Day 14

I try it with GO with the help of the code of PEM (see the code in dossier go)
=======
dijkstra hasn't finished yet

## Day13

Instead of contert data in string by input.map(string), I find a new way to convert data in it's proper form: JSON

construction of a comparator in this question is interesting. usage of array.flat() and recursion

for day13_2, sort based on comparator we have constructed


>>>>>>> 9928f8f928b3a068f86039ac6ba2a375d73f5ad1
