let resultScore = document.querySelector('.resultScore');
let resultZone = document.querySelector('.resultZone');
let resultText = document.querySelector('.resultText');

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

    if (totalSum != 0) {
        if (totalScore >= 75) {
            resultScore.innerHTML = `<strong>Nota: </strong> ${totalScore}`;
            resultZone.innerHTML = "<strong>Zona: </strong> Excelência";
            resultText.innerHTML = "<strong>Comentário: </strong>2 Parabéns, sua empresa satisfaz seus clientes, atende às suas expectativas, garante uma boa experiência ao usuário e conquista consumidores fiéis que recomendam e defendem a marca."
        } else if (totalScore >= 50) {
            resultScore.innerHTML = `<strong>Nota: </strong> ${totalScore}`;
            resultZone.innerHTML = "<strong>Zona: </strong> Qualidade";
            resultText.innerHTML = "<strong>Comentário: </strong> Sua empresa conta com clientes satisfeitos com a marca, mas que ressaltam pontos que deixaram a desejar. Realizar uma avaliação da jornada do cliente é importante para que a empresa possa identificar possíveis falhas.";
        } else if (totalScore >= 0) {
            resultScore.innerHTML = `<strong>Nota: </strong> ${totalScore}`;
            resultZone.innerHTML = "<strong>Zona: </strong> aperfeiçoamento";
            resultText.innerHTML = "<strong>Comentário: </strong> Sua empresa deve ter muita atenção com os feedbacks dos seus clientes. Estar situado nesta zona significa que muitos clientes não tiveram uma boa experiência e não ficaram satisfeitos com a empresa. Refazer processos, melhorar estratégias e conhecer melhor as espectativas dos clientes são pontos importantes a serem avaliados.";
        } else {
            resultScore.innerHTML = `<strong>Nota: </strong> ${totalScore}`;
            resultZone.innerHTML = "<strong>Zona: </strong> Crítica";
            resultText.innerHTML = "<strong>Comentário: </strong> Sua empresa deve tomar ações rápidas em relação às suas estratégias. Essa categoria indica que muitos clientes ficaram insatisfeitos com a empresa e que não recomendariam a marca. Eles serão os primeiros a reclamarem, a divulgarem feedbacks negativos sobre suas experiências, podendo engajar uma comunidade de outros clientes.";
        }
    }    
}

const zerar = () => {
    for (let i = 0; i <= 10; i++) {
        let numbers = document.querySelector(`#num${i}`);
        if (numbers.value !== '') {
            numbers.value = '';
            resultScore.innerHTML = "<strong>Nota: </strong>";
            resultZone.innerHTML = "<strong>Zona: </strong>";
            resultText.innerHTML = "<strong>Comentário: </strong>";
        }
    }
}
