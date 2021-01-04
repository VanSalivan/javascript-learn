// Template Literals
const user = "Alexander";
const num = 28;
const txt2 = `Hello ${user} you have ${num} letters in your inbox`;
console.log(txt2)

const txt3 = `Now is ${Date.now()}`;
console.log(txt3)

const items = ['tea', 'coffee'];
const templateHTML = `
<ul>
    <li>${items[0]}</li>
    <li>${items[1]}</li>
</ul>
`;

console.log(templateHTML);
