const checkForSpam = function(message) {
    message = message.split(" ");
    let result
    for (let spam of message){
        spam = spam.toLowerCase()    
    if (spam.includes("spam") || spam.includes("sale")) {
        result = "true"
    break
}
else
result = "false"
    }
    console.log(result)
    return result
    }
checkForSpam('Get best wsAle offers now!')