let text = document.querySelector(".example__p");
console.log(text);

text.innerHTML = "другой текс";
text.setAttribute("class", "redtext");
console.log(text);

console.log(text.getAttribute("class"));
