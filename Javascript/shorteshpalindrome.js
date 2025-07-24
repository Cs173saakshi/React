function shortestPalindrome(s) {
 function isPalindrome(str){
return str===str.split('').reverse().join('');
 }
  let end=s.length;
  while(end>0){
    if(isPalindrome(s.substring(0,end)))
         break;
  end--;
}  
 const suffix=s.substring(end);
 const prefix=suffix.split('').reverse().join('');
 const result=prefix+s;
 console.log(result);
 return result;
 }
shortestPalindrome("defe");  
shortestPalindrome("bob");
shortestPalindrome("aacecaaa");
shortestPalindrome("dada");

 