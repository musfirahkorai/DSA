function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '#'.repeat(i));
  }
}

const n = 4;
staircase(n);

// Function: staircase(n) generates a right-aligned 
// staircase of height n.
// Loop: Iterates from 1 to n.
// Print Each Row:
// ' '.repeat(n - i): Creates leading spaces.
// '#'.repeat(i): Creates # symbols.
// Output: Combines spaces and # symbols, then prints the row.

// Function Definition: The staircase(n) function takes a single integer parameter n, representing the size of the staircase.
// Loop through Rows: A for loop iterates from 1 to n (inclusive). The loop variable i represents the current row number.
// Print Each Row:
// ' '.repeat(n - i): Creates a string of spaces. The number of spaces is n - i to ensure the # symbols are right-aligned.
// '#'.repeat(i): Creates a string of # symbols. The number of # symbols is equal to the current row number i.
// The combination of these two parts (' '.repeat(n - i) + '#'.repeat(i)) results in a right-aligned row of # symbols with the correct number of leading spaces.
// Print the Row: Each constructed row is printed out using the console.log function.