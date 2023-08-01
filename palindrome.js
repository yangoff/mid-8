const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(w) {
    let strT = w.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return strT === strT.split('').reverse().join('');
}

const question = () => {
    return new Promise((resolve, reject) => {
        rl.question('Hello, give me a word and i say if its a palindrome: ', (answer) => {
            resolve(answer);
        });
    });
};
async function main() {
    let r = '';
    while (r === '') {
        r = await question();
        if (r === '') console.log('Not a valid entry');
    }
    console.log(`The word ${r} is${isPalindrome(r) ? ' ' : ' not '}a palindrome`);
    rl.close();
}

main()