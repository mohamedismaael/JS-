const array = [
    {
        name: 'Mohamed Esmail',
        desc: 'Beware of what you become in pursuit of what you want.'
    },
    {
        name: 'Epictetus',
        desc: 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        name: 'Frank Sinatra',
        desc: 'The best revenge is massive success.'
    },
    {
        name: 'Wayne Gretzy',
        desc: 'You miss 100% of the shots you don\'t take.'
    },
    {
        name: 'Nelson Mandela',
        desc: 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        name: 'Elbert Hubbard',
        desc: 'Do not take life too seriously. You will not get out alive.'
    },
];

document.getElementById('getObject').onclick = getObj

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getObj() {
    const random = getRandomInt(0, 5);
    document.querySelector('#desc').textContent = `${array[random].desc}`;
    document.querySelector('#name').textContent = `${array[random].name}`;

}