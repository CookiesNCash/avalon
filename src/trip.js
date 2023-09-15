import readlineSync from 'readline-sync';






export default (arr) => {
    let scoreRed = 0;
    let scoreBlue = 0;
    console.log("Поход начинаеться");
    let resultTrip = [];
    let countFail = 0;
    arr.forEach(element => {
       readlineSync.question('');
       console.clear();
        console.log(`Выберите ${element} игрока`)
        for (let i = 0; i < element; i+=1){
        let answer1 = readlineSync.question('Выкинь s или f : ');
        resultTrip.push(answer1);

        if (answer1 === 'f'){
            countFail +=1;
        }

        readlineSync.question('Следующий нажми Enter');
        console.clear();
        }
        
        if (countFail > 0){
            console.log('поход провалился');
            console.log(`кол-во Фейлов ${countFail}`);
            scoreRed += 1;
            countFail = 0;
            resultTrip = [];
        } else {
            console.log('Поход успешен');
            scoreBlue += 1;
            resultTrip = [];
        }

        if (scoreBlue === 3){
            console.log("Синии победили");
            return;
        } else if (scoreRed === 3){
            console.log("Красные победили");
            return;
        }
    });

}
