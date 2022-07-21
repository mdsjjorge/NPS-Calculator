const calculate = () => {

    let totalSum = 0;
    let promoterSum = 0;
    let promoterPercent = 0;
    let detractorSum = 0;
    let detractorPercent = 0;
    let totalScore = 0;
    let result = document.querySelector('#result');

    for (let i = 0; i <= 10; i++) {

        // let numbers = document.querySelector(`#num${i}`);
        let numbers = document.getElementById(`num${i}`);
        let number = Number(numbers.value);
        totalSum += number;  

        if (i > 8) {
            let promoterNumber = Number(numbers.value);
            promoterSum += promoterNumber;
        } else if (i < 7) {
            let detractorNumber = Number(numbers.value);
            detractorSum += detractorNumber;
        }
    }

    promoterPercent = (promoterSum / totalSum) * 100;
    detractorPercent = (detractorSum / totalSum) * 100;
    totalScore = (promoterPercent - detractorPercent).toFixed(0);

    // console.log(`detractorPercent = ${detractorPercent}`);
    // console.log(`promoterPercent = ${promoterPercent}`);
    // console.log(`totalScore = ${totalScore}`);

    if (totalScore >= 75) {
        result.innerHTML = `excellence zone, score: ${totalScore}`;
    } else if (totalScore >= 50) {
        result.innerHTML = `quality zone, score: ${totalScore}`;
    } else if (totalScore >= 0) {
        result.innerHTML = `improvement zone, score: ${totalScore}`;
    } else {
        result.innerHTML = `critical zone, score: ${totalScore}`;
    }
}
