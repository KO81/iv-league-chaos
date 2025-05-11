const loremEpsum=(function(){/*inspired by "Seek the depths, but never the end."*/
    const letters='aAbBcCdDeEfFgGhHiIjJkKlLmMnNoO pPqQrRsStTuUvVwWxXyYzZæÆåÅøØßáÁéÉíÍúÚýÝêÊîÎôÔûÛèÈäÄëËïÏöÖüÜñÑ ',numbers='0123456789.+*-<>⋜⋝°∻∼ƒ‰‱∛√∜∬≩⋙⋘',separators=' .,;:!?- ',
    randInt=(min,max)=>Math.floor(Math.random()*(max-min)+min),
    randomWord=(length)=>{let word='',i=0;
        for(i;i<length;i++){word+=letters[randInt(0,letters.length)];
        }return randInt(0,2)===0?word.toLowerCase():word;
    },randomNumber=(length)=>{let numStr='',i=0;
        for(i;i<length;i++){numStr+=numbers[randInt(0,numbers.length)];
        }return numStr;
    };return (outputCount=1,options={})=>{
        const {wordsPerUnit=randInt(1,8),numbersPerUnit=randInt(0,3),useSeparators=true}=options;
        let result='',i=0,w=0,n=0;
        for(i;i<outputCount;i++){
            for(w;w<wordsPerUnit;w++){result+=randomWord(randInt(1,10))+(useSeparators? separators[randInt(0,separators.length)]:' ');
            }for(n;n<numbersPerUnit;n++){result+=randomNumber(randInt(1,5))+(useSeparators?separators[randInt(0,separators.length)]:' ')
            }
        }return result.trim();
    }/*loremEpsum(2, { wordsPerUnit: 5, numbersPerUnit: 1 }) or loremEpsum(3)*/
})();
