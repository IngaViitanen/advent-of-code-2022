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

        // console.log(sortedArr)
        let highestValsArr = sortedArr.slice(0, 3)
        // console.log(highestValsArr)
        // let highestValsArr = []

        // highestValsArr.push(max1)
        // sums.splice(sums.indexOf(max1), 1);

        // let max2 = Math.max.apply(null, sums)
        // highestValsArr.push(max2)
        // sums.splice(sums.indexOf(max2), 1);

        // let max3 = Math.max.apply(null, sums)
        // highestValsArr.push(max3)

        let total = highestValsArr.reduce((a, b) => a + b)

        console.log(total)
}

threeHighestVal()


        

