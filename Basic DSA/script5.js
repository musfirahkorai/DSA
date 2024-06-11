function miniMaxSum(arr) {
   
                                                  arr.sort((a, b) => a - b);

    const minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);
    const maxSum = arr.slice(1).reduce((sum, num) => sum + num, 0);

    console.log(minSum, maxSum);
}

const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr); 

// Sort the array: The input array is sorted in ascending order to easily access the smallest and largest elements.
// Calculate the minimum sum: The sum of the first four elements in the sorted array gives the minimum sum.
// Calculate the maximum sum: The sum of the last four elements in the sorted array gives the maximum sum.
// Print the results: The minimum and maximum sums are printed as two space-separated integers.
// Efficient implementation: The solution is concise and efficiently calculates the required sums using array slicing and the reduce method.