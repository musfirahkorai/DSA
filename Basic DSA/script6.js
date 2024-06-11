function birthdayCakeCandles(candles) {
    
    const maxHeight = Math.max(...candles);
    
    let count = 0;
    for (const height of candles) {
        if (height === maxHeight) {
            count++;
        }
    }
    
    return count;
}

const candles = [4, 4, 1, 3];
console.log(birthdayCakeCandles(candles)); 
