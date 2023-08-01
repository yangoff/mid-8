const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isNumeric(str) {
    if (typeof str != 'string') return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
}

const questionS = () => {
    return new Promise((resolve, reject) => {
        rl.question('Give me a subject name: ', (answer) => {
            resolve(answer);
        });
    });
};
const questionG = (subject) => {
    return new Promise((resolve, reject) => {
        rl.question(`Give me a grade of ${subject}: `, (answer) => {
            resolve(answer);
        });
    });
};

async function main() {
    let datamodel = {};
    console.log(`Hi, im a grade calculator, give me 3 subjects and grades, i calculate you avg! \n`)
    while (Object.keys(datamodel).length < 3) {
        let s = ''
        while (s === '') {
            s = await questionS();
            if (s === '') console.log('Not a valid entry');
        }
        let g = ''
        while (!isNumeric(g)) {
            g = await questionG(s);
            if (!isNumeric(g) || (Number(g) < 0)) console.log('Not a valid entry');
        }
        datamodel[s.toUpperCase()] = g;
    }
    console.log('Subjects is: \n')
    let count = 0;
    Object.keys(datamodel).forEach((k)=> {
        console.log(`${k} : => Grade: ${datamodel[k]} \n`)
        count += Number(datamodel[k])
    })
    console.log('Avg is: '+(count/Object.keys(datamodel).length))

    rl.close();
}

main()