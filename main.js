// PROBLEM 1 : The staircase problem

// The problem states as follows : 
// Given a stair with a number of stairs as N 
// A person can either jump 1, 2 or 3 steps at a time
// For a number of stairs given, how many possible paths are possible ? 

// Example : n = 3
// Path 1 : 1 + 1 + 1
// Path 2 : 1 + 2
// Path 3 : 2 + 1
// Path 4 = 3

// Result = 4

function count_paths(number_of_stairs){
    // Since the last jump can be 1, 2 or 3 steps 
    // The sub-problems are the number of paths of number_of_stairs - 1, -2 or -3 
    // So, the number of ways to reach the nth step is the sum of the 
    // number of ways to reach the nth-1, nth-2 and nth-3 steps

    // For each case, the last jump will add no new way of reaching the top
    // If we have the number of paths to reach n-1, n-2 and n-3
    // the last jump will be 1, 2 or 3 but will therefore add 0 way of going 
    // to the nth step

    // The base cases are the hard coded values of the number of paths for 1, 2 and 3 steps

    if (number_of_stairs == 1) return 1;
    if (number_of_stairs == 2) return 2;
    if (number_of_stairs == 3) return 4;

    // Careful, this function has a time complexity of O(3^n)
    // It is therefore very long for "big" values of n
    return count_paths(number_of_stairs - 1) + count_paths(number_of_stairs - 2) + count_paths(number_of_stairs - 3);
}


// The count_paths solution works, but the time complexity is horrible
// The reason for this is that it has to calculate multiple times the sames values 
// In order to resolve this, we use a hash table to store the results of the calculations that we already made
// Therefore changing the time complexity from O(3^N) to O(N)
// It's called memoization (there's not typo)
function count_paths_with_memoization(number_of_stairs, memo){
    if (number_of_stairs == 1) return 1;
    if (number_of_stairs == 2) return 2;
    if (number_of_stairs == 3) return 4;
    if (memo[number_of_stairs]) return memo[number_of_stairs];

    memo[number_of_stairs] = count_paths_with_memoization(number_of_stairs - 1, memo) + count_paths_with_memoization(number_of_stairs - 2, memo) + count_paths_with_memoization(number_of_stairs - 3, memo);
    
    // To see how the memo builds up, un-comment the next line
    // console.log(memo)
    return memo[number_of_stairs];
}

//console.log(count_paths(40)) // This would take forever to load : O(3^N)

console.log(count_paths_with_memoization(80, {})); // This takes no time : O(N)

function staircase_button_clicked(){
    let n = document.getElementById("staircase_input").value ;
    let solution = count_paths(n);
    document.getElementById("staircase_answer").innerText = solution;
}


// PROBLEM 2 : Sum of numbers 

// The problem states as follows : 
// Given an array of numbers, return the sum of all of them 

function sum_numbers(numbers){
    // Here, the sub problem is : 
    // Return the first number + the sum of all the next ones 
    // Base case : if the argument is 1 number, it returns the number

    if (numbers.length == 1){
        return numbers[0];
    }
    return numbers[0] + sum_numbers(numbers.slice(1));
}


// PROBLEM 3 : String reversal

// The problem states as follows :
// Given a string, reverse it

function reverse_string(string){
    // Here, the sub problem is : 
    // return the reverse_string of the array starting at 1, and add the first letter at the end

    // Base case : if the length of the string is 1, return the string (single char)
    
    if(string.length == 1) return string;
    return reverse_string(string.slice(1)) + string[0];
}

console.log(reverse_string("Abracadabra"))


// PROBLEM 4 : The anagram problem 

// The problem states as follows : 
// Given a string, return all anagrams possible 

function get_anagrams(string){
    // Here, the sub problem is : 
    // Get the anagrams of the string starting at 1
    // Insert the first letter at every possible spot of every anagram we got 

    // Base case : if the length of the string is 1, return the string (single char)

    if(string.length == 1) return string;

    let anagrams = []

    for (let anagram of get_anagrams(string.slice(1))){
        for (let i = 0; i <= anagram.length ; i++){
            anagrams.push(anagram.slice(0,i)+string[0]+anagram.slice(i));
        }
    }

    return anagrams;
}


// PROBLEM 5 : Sum of strings

// The problem states as follows : 
// Given an array of strings, return the sum of all characters

function get_number_of_chars(arr_string){
    // Here, the sub problem is : 
    // return the length of the arr_string[0] + the number of chars of the rest of the array

    // Base case : if the array is of 1 string, return the length of the string

    if (arr_string.length == 1) return arr_string[0].length;
    return arr_string[0].length + get_number_of_chars(arr_string.slice(1));
}

// Other problems : See page 181 from "A common-sense guide to data structures and algorithms"
