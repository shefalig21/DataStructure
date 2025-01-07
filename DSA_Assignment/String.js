function countDistinctSubsequences(string) {
    const subsequences=new Set();

    function generateSubsequences(current,index) {
        // Base case: If we reach the end of the string
        if(index===string.length) {
            // Add the current subsequence to the set if it is non-empty
            if(current){
                subsequences.add(current);
            }
            return;
        }

        // Include the current character in the subsequence
        generateSubsequences(current+string[index],index+1);

        // Exclude the current character from the subsequence
        generateSubsequences(current,index+1);
    }

    // Start generating subsequences from the beginning of the string
    generateSubsequences("", 0);

    // The size of the set represents the number of distinct subsequences
    return subsequences.size;
}


const string="abcbac";
const result=countDistinctSubsequences(string);
console.log("Number of Distinct Subsequences:", result);


