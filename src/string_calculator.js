function Electrongame(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num === 3) {
            sum += 2;
        } else if (num === 5) {
            sum += 4;
        }
    }
    return sum;
}