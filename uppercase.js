// a function to change to uppercase letter
function UpperCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  };
  UpperCase("This Is Good")
console.log(UpperCase("This Is Good"));
