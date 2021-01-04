// ...Spreat для обьектов
const defaults = {
    hots: 'localhost',
    bdName: 'blog',
    user: 'admin',
};

const opts = {
    user: 'John',
    password: 'utopia'
};
const port = 8080;

const res = { ...defaults, ...opts, port };
console.log(res)
