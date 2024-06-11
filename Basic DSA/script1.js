// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10-4 are acceptable.
// Example
// arr = [1, 1, 0, −1, −1]
// There are n = 5 elements, two positive, two negative and one zero. Their ratios are
// =
// 0.400000, 2 = 0.400000 and = 0.200000. Results are printed as:
// 0.400000
// 0.400000
// 0.200000
// Function Description
// Complete the plus Minus function in the editor below.
// plusMinus has the following parameter(s):
// ⚫ int arr[n]: an array of integers
// Print
// Print the ratios of positive, negative and zero values in the array. Each value should be
// printed on a separate line with 6 digits after the decimal. The function should not return a value.
// Input Format
// The first line contains an integer, n, the size of the array.
// The second line contains ʼn space-separated integers that describe arr[n].

function plusMinus(arr) {
                                                  
    const n = arr.length;

    const positiveCount = arr.filter(x => x > 0).length;
    const negativeCount = arr.filter(x => x < 0).length;
    const zeroCount = arr.filter(x => x === 0).length;

    const positiveRatio = positiveCount / n;
    const negativeRatio = negativeCount / n;
    const zeroRatio = zeroCount / n;

    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

const arr = [1, 1, 0, -1, -1];

plusMinus(arr);

// Function Definition:
// The code starts by defining a function named plusMinus that takes an array of numbers as its input. This function will calculate and print the ratios of positive, negative, and zero values in the array.

// Calculate the Length of the Array:
// The function first determines how many numbers are in the array by using the length property. This value is stored in a variable called n.

// Count Positive, Negative, and Zero Elements:


// Positive Count: The function uses the filter method to create a new array containing only the positive numbers from the input array. It then counts how many numbers are in this new array.
// Negative Count: Similarly, the function uses the filter method to create a new array with only the negative numbers and counts them.
// Zero Count: The function also creates an array with only the zeros from the input array and counts them.
// Calculate the Ratios:

// Positive Ratio: The function calculates the ratio of positive numbers by dividing the count of positive numbers by the total number of numbers (n).
// Negative Ratio: It calculates the ratio of negative numbers in the same way, dividing the count of negative numbers by n.
// Zero Ratio: The ratio of zeros is calculated by dividing the count of zeros by n.
// Print the Results with 6 Decimal Places:

// The function prints each of the three ratios (positive, negative, and zero) to six decimal places. This ensures the output is precise and formatted consistently.
// Example Execution:

// The code includes an example where it creates an array [1, 1, 0, -1, -1] and then calls the plusMinus function with this array.
// When the function runs with this example input, it counts 2 positive numbers, 2 negative numbers, and 1 zero.
// It then calculates the ratios: 0.4 for positive, 0.4 for negative, and 0.2 for zeros.
// Finally, it prints these ratios in the format 0.400000, 0.400000, and 0.200000.