const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isNumeric(str) {
    if (typeof str != 'string') return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}

const questionGeneric = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

async function main() {
    console.log('Hi, im a simple calculator of investiments, please tell me you: \n')
    let init = '';
    while (!isNumeric(init) || (Number(init) < 0)) {
        init = await questionGeneric('Initial Investiment: ');
        if (!isNumeric(init) || (Number(init) < 0)) console.log('Not a valid entry');
    }

    let rate = '';
    while (!isNumeric(rate) || (Number(rate) < 0)) {
        rate = await questionGeneric('Interest Rate(by months): ');
        if (!isNumeric(rate) || (Number(rate) < 0)) console.log('Not a valid entry');
    }

    let time = '';
    while (!isNumeric(time) || (Number(time) < 0)) {
        time = await questionGeneric('Investiment Time(months): ');
        if (!isNumeric(time) || (Number(time) < 0)) console.log('Not a valid entry');
    }

    let c = Number(init) * (Number(rate) / 100)* Number(time)
    console.log(`Initial investiment is: $${Number(init).toFixed(2)}`);
    console.log(`The interest is: $${Number(c).toFixed(2)}`);
    console.log(`The total value is: $${(Number(init)+c).toFixed(2)}`)

    rl.close()
}

main()