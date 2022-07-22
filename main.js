const calculate = () => {

    let totalSum = 0;
    let promoterSum = 0;
    let promoterPercent = 0;
    let detractorSum = 0;
    let detractorPercent = 0;
    let totalScore = 0;
    let resultScore = document.querySelector('.resultScore');
    let resultZone = document.querySelector('.resultZone');
    let resultText = document.querySelector('.resultText');

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

    if (totalSum != 0) {
        if (totalScore >= 75) {
            resultScore.innerHTML = `Nota: ${totalScore}`;
            resultZone.innerHTML = "Zona: Excelência";
            resultText.innerHTML = "Comentário: Parabéns, sua empresa satisfaz seus clientes, atende às suas expectativas e garante uma boa experiência ao usuário, conquista consumidores fiéis que recomendam e defendem a marca."
        } else if (totalScore >= 50) {
            resultScore.innerHTML = `Nota: ${totalScore}`;
            resultZone.innerHTML = "Zona: Qualidade";
            resultText.innerHTML = "Comentário: Sua empresa conta com clientes satisfeitos com a marca, mas que ressaltam pontos que deixaram a desejar. Realizar uma avaliação da jornada do cliente é importante para que a empresa possa identificar possíveis falhas.";
        } else if (totalScore >= 0) {
            resultScore.innerHTML = `Nota: ${totalScore}`;
            resultZone.innerHTML = "Zona: aperfeiçoamento";
            resultText.innerHTML = "Comentário: Sua empresa deve ter muita atenção com os feedbacks dos seus clientes. Estar situado nesta zona significa que muitos clientes não tiveram uma boa experiência e não ficaram satisfeitos com a empresa. Refazer processos, melhorar estratégias e conhecer melhor as espectativas dos clientes são pontos importantes a serem avaliados.";
        } else {
            resultScore.innerHTML = `Nota: ${totalScore}`;
            resultZone.innerHTML = "Zona: Crítica";
            resultText.innerHTML = "Comentário: Sua empresa deve tomar ações rápidas em relação às suas estratégias. Essa categoria indica que muitos clientes ficaram insatisfeitos com a empresa e que não recomendariam a marca. Eles serão os primeiros a reclamarem, a divulgarem feedbacks negativos sobre suas experiências, podendo engajar uma comunidade de outros clientes.";
        }
    }    
}
