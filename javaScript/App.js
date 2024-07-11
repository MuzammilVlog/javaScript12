var str = prompt("Enter Your Value");

function isPalindrome(input) {
    var str = input.toLowerCase();

    var len = str.length;
    
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true; 
}
if (isPalindrome(str)) {
    alert("It's a Palindrome");
} else {
    alert("It's Not a Palindrome");
}
