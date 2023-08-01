const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isNumeric(str) {
    if (typeof str != 'string') return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}

const question1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Hello, i am a calculator, give me a number: ', (answer) => {
            resolve(answer);
        });
    });
};

const question2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Ok, give me second number: ', (answer) => {
            resolve(answer);
        });
    });
};
const question3 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Now, give me a operator (+,-,*,/): ', (answer) => {
            resolve(answer);
        });
    });
};


const main = async () => {
    let n1 = '';
    while (!isNumeric(n1)) {
        n1 = await question1();
        if (!isNumeric(n1)) console.log('Not a valid entry');
    }

    let n2 = '';
    while (!isNumeric(n2)) {
        n2 = await question2();
        if (!isNumeric(n2)) console.log('Not a valid entry');
    }

    let op = '';
    while (!(['+', '-', '*', '/'].includes(op))) {
        op = await question3();
        if (!(['+', '-', '*', '/'].includes(op))) console.log('Not a valid entry');
    }

    console.log(`Result of ${n1} ${op} ${n2} is: ${eval(`${n1}${op}${n2}`)}`);

    rl.close();
};

main();