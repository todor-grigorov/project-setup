import "./styles/index.scss";

const test = {
    a: 1,
    b: 2,
    c: 5
}

const test2 = {
    ...test,
    d: 1000,
    e: 99,
}

console.log(test);
console.log(test2);