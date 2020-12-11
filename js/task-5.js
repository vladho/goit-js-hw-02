const checkForSpam = function(message) {
    message = message.split(" ");
    let boolon
    for (let spam of message){
        spam = spam.toLowerCase()    
    if (spam.includes("spam") || spam.includes("sale")) {
    boolon = "true"
    break
}
else
boolon = "false"
    }
    console.log(boolon)
    return boolon
    }
checkForSpam('Get best sAle offers now!')