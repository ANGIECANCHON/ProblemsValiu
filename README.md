# ProblemsValiu
test to apply to backend developer in valiu

## Installation

Use ``` npm i ``` to install all the dependences

## Excecution

With the comand ```node index.js``` you can run the node service

# APIS EXAMPLES

You can see the solutions through POST type services, then, I show you the cURL of the three problems:

## Problem 1
```
curl --location --request POST 'localhost:8080/watchmen' \
--header 'Content-Type: application/json' \
--data-raw '{
    "watchmen":3, //total watchmen number
    "days":10,  //total day work
    "array":[1,2,8,3],  //Array with the initial days to work
    "daysEnd":[4,5,9,7]  //Array with the final days to work
}'
```

## Problem 2
```
curl --location --request POST 'localhost:8080/pairs' \
--header 'Content-Type: application/json' \
--data-raw '{
    "array":[4,5,9,7,6,4,5,1]  //Array with the sequence of numbers to find the pairs
}'
```

## Problem 3

Note: This problem has bugs, I couldn't complete it, but I want to send you my analysis 

```
curl --location --request POST 'localhost:8080/knight' \
--header 'Content-Type: application/json' \
--data-raw '{
    "PiX": -5,  //Initial point of coordinate in x
    "PiY": -5,   //Initial point of coordinate in y
    "PfX": 5,  //Final point of coordinate in x
    "PfY": 5   //Final point of coordinate in y
}'

```
