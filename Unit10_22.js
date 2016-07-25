var backward = function () {
var string = prompt("Enter a word");
return string.split('').reverse().join('');
}
document.write(backward());
