const printNumbers = (lastNumber) => {
  let i = 1;

  while (i <= lastNumber) {
    console.log(i);
    i = i + 1;
  }
  console.log('finished!');
}

printNumbers(33);
