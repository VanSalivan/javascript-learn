const accum = string => {
  const result = [...string].reduce((total, item, index, arr) => {
    for (let i = 0; i <= index; i++) {
      (i === 0) ? total.push(item.toUpperCase()) : total.push(`${item.toLowerCase()}`);
    
      if (i === index && index+1 !== arr.length) {
        total.push(`-`);
      }
    }

    return total;
  }, []);

  return result.join('')
};

console.log(accum('abcd')); //"A-Bb-Ccc-Dddd"