let startAt = performance.now();

for (let i = 0; i < 299; i++) {
    console.log(i);
}

let endAt = performance.now();
console.log(`${endAt - startAt} took ms to execute`);
    
