let users = ['Mike', 'Nikola', 'Tom'];
console.log(users[1]);
users[1] = 'Alex';
console.log(users[1]);

// users.pop();
// users.pop();
// або
users.splice(-2);
console.log(users);

let a = [5, 3 - 4, 25, 32, -16, 6];
let b = [21, -30, 9, 5, 12, -19, 5, 25];

let compar = () => a.length == b.length ? console.log('a == b') :
    a.length > b.length ? console.log('a > b') : console.log('a < b');

compar();

const phrase = 'I am learning JavaScript right now';
const arrPhrase = phrase.split(' ');
console.log(arrPhrase);

const aTrans = [5, 3, 8, 5, 3, 2, 1, 2];
let bTrans = [];

aTrans.forEach((element) => { if (!bTrans.includes(element)) { bTrans.push(element) } });

console.log(bTrans);

let usersId = [{id: 1, age: 17 },
                {id: 2, age: 18 },
                {id: 3, age: 19 },
                {id: 4, age: 21 },
                {id: 5, age: 17 },
                {id: 6, age: 20 },
                { id: 7, age: 25 }]
               
function selectionAge() {
    console.log(usersId.filter(user => user.age > 18 && user.age < 21).map(user => user.id).join(', '));
}

selectionAge();