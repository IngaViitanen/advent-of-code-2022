const fs = require('fs');
const data = fs.readFileSync('./cal.txt', {encoding:'utf8'}).split('\r\n')


let sums = []
let counter = 0

for (let i = 0; i < data.length; i++) {
        if(data[i] !== ''){
                counter += +data[i];
        } else{
                sums.push(counter)
                counter = 0
        }
}

// console.log(Math.max(...sums))

// PART 2
const threeHighestVal = () => {
        let sortedArr = sums.sort((a, b) => b - a)

        let highestValsArr = sortedArr.slice(0, 3)

        let total = highestValsArr.reduce((a, b) => a + b)
        console.log(total)
}

threeHighestVal()


        

