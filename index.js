// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal 
// integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, 
// starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 
// = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses 
// each letter in descending order.

// Example:

// solution('XXI'); // should return 21
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

const solution = (str) => {
    let result = 0
    const roman = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};

    for(let i = 0; i < str.length; i++){
        if(roman[str[i]] < roman[str[i + 1]]){
            result += roman[str[i + 1]] - roman[str[i]]
            i++
        }else {
            result += roman[str[i]]
        }
    }

    return result
}

solution("IV")

//Solution 2

const solution = (str) => {
    const roman = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
    let strArr = str.split("").map((value) => roman[value])
    return strArr.reduce((sum, curr, index, arr) => {
        if(curr < arr[index + 1]) return sum - curr
        return sum + curr
    }, 0)
}

solution("XXI")