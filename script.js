function ucFirst(string){
    return string[0].toUpperCase() + string.slice(1);
}

function checkSpam(str){
    if( 
        str.toLowerCase().includes('viagra') || 
        str.toLowerCase().includes('xxx')
    ){
        return true;
    }

    return false;
}

function truncate(str, maxLength){
    if(str.length<=maxLength){
        return str;
    }

    return str.slice(0,19)+'…';
}

function extractCurrencyValue(str){
    return +(str.slice(1))
}

function showVerticalMessage(str){
    let firstLetter = str[0];

    if (firstLetter === 'м') {
        console.log( firstLetter.toUpperCase() );
    } else {
        console.log( firstLetter );
    }

    for (let i = 1; i < str.length; i++) {
        const symbol = str[i];

        if (i>=10) {
            return;
        }
        console.log(symbol);
    }
}








console.log(
    ucFirst("вася") == "Вася",

    ucFirst("вася")
);

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );
console.log('asd', checkSpam(''));

console.log( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) == "Вот, что мне хотело…");
console.log( truncate("Всем привет!", 20) == "Всем привет!" );

console.log('asd', truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));



console.log( extractCurrencyValue('$120') === 120 );




showVerticalMessage('марафон')
showVerticalMessage('фарафон')
showVerticalMessage('марафонмарафон')