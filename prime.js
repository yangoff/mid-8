function isPrime(num) {
    if (num <= 1) return false;
    if ((num % 2) === 0 && num > 2) return false;
    const s = Math.sqrt(num);
    for(let i = 3; i <= s; i += 2) {
        if(num % i === 0) return false;
    }
    return true;
}

let n = [];
for (let i = 0; n.length < 10; i++) {
    if (isPrime(i)) n.push(i)
}

console.log(`First 10 prime numbers: ${n.join(',')}`)