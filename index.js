// Code your solutions in this file

// function writeCards(names){
//     let thanks = []
//     for(let i = 0; i < names.length; i+=1){
//         name = names[i]
//         thanks.push("Thank you, " + name + ", for the wonderful surprise gift!")
//     }
//     console.log(thanks)
// }
function writeCards(namesArray, event) {
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}


function countdown(num){
    for(let i = num; i >= 0; i-=1){
        console.log(i);
    }
}

writeCards("jen")
countdown(10); 
