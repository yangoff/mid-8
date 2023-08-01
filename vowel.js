const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = () => {
    return new Promise((resolve, reject) => {
        rl.question('Hello, i am a vowel counter, give me a phrase: ', (answer) => {
            resolve(answer);
        });
    });
};
const countVowels = (currentCount, char) => {
    const vowels = "aeiouAEIOU";
    return vowels.includes(char) ? currentCount + 1 : currentCount;
};
async function main() {
    let ph = '';
    while (ph === '') {
        ph = await question();
        if (ph === '') console.log('Not a valid entry');
    }

    const result = Array.from(ph).reduce(countVowels, 0);

    console.log(`The vowel count is ${result}`)
    rl.close()
}

main()