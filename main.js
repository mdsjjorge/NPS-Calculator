const calculate = () => {

    let totalSum = 0;
    let promoterSum = 0;
    let promoterPercent = 0;
    let detractorSum = 0;
    let detractorPercent = 0;
    let totalScore = 0;

    for (let i = 0; i <= 10; i++) {
        let numbers = document.querySelector(`#num${i}`);
        let number = Number(numbers.value);
        // console.log(`number[${i}] = ${number}`);  
        totalSum += number;  
        // console.log(`totalSum = ${totalSum}`);
        if (i > 8) {
            let promoterNumber = Number(numbers.value);
            // console.log(`promoterNumber[${i}] = ${promoterNumber}`);
            promoterSum += promoterNumber;

        } else if (i < 7) {
            let detractorNumber = Number(numbers.value);
            // console.log(`detractorNumber[${i}] = ${detractorNumber}`);
            detractorSum += detractorNumber;
        }
    }
    promoterPercent = promoterSum / totalSum;

    detractorPercent = detractorSum / totalSum;

    console.log(`detractorPercent = ${detractorPercent}`);
    console.log(`promoterPercent = ${promoterPercent}`);
    totalScore = promoterPercent - detractorPercent
    console.log(`totalScore = ${totalScore}`);

}



// let totalScore 

// if (totalScore >= 75) {
//     return "Zona de excelência";
// } else if (totalScore >= 50) {
//     return "Zona de qualidade";
// } else if (totalScore >= 0) {
//     return "Zona de aperfeiçoamento";
// } else {
//     return "Zona de crítica";
// }
