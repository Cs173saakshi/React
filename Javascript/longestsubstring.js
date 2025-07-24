/* function lengthOfLongestSubstring(s) {
    let longest=0;
    let start=0;
    let used={};
    for (let i=0; i<s.length;i++) {
        let char=s[i];
       start=used[char]+1;
          used[char]=i;
        let length=i-start+1;
        if (length>longest) {
            longest=length;
        }
    }
    return longest;
}
let input ="bbbbb";
let result =lengthOfLongestSubstring(input);
console.log("Input: " +input);             
console.log("Output: " +result);    
     */
function lengthOfLongestSubstringWithSet(s) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;
    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
let input = "pwwkew";
console.log("Input:", input);
console.log("Set Result:", lengthOfLongestSubstringWithSet(input));




