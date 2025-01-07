function countDistinctSubsequences(s) {
    let dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;  // Base case: empty string has one subsequence (itself)
    
    let lastOccurrence = new Map();
    
    for (let i = 1; i <= s.length; i++) {
        dp[i] = 2 * dp[i - 1];  // Double the subsequences formed without including s[i-1]
        
        //If this character has appeared before, subtract the duplicate subsequences
        if (lastOccurrence.has(s[i - 1])) {
            dp[i] -= dp[lastOccurrence.get(s[i - 1])];
        }
        
        //updating the last occurrence of s[i-1]
        lastOccurrence.set(s[i - 1], i - 1);
    }
    
    return dp[s.length];  //returingthe total number of distinct subsequences
}

const string = "abcbac";
const result = countDistinctSubsequences(string);
console.log(`Number of Distinct Subsequences: ${result}`);
