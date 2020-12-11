    const allLogins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const login = "Mane";
let result;
const isLoginValid = function(login) {
    for (let element of login) {
        let  сharacters = login;
        if (сharacters.length >= 4 && сharacters.length < 16) {
            return login = true;
        }
        else
            return login = false;
    }
      
};



const isLoginUnique = function (allLogins, login) {
    for (let allLogin of allLogins) {
               if (allLogin === login) {
            result = false;
            break;
        }
        else
            result = true;

    }
    return result
}

const addLogin = function (allLogins, login) {
    if (isLoginValid(login) === true) {
        if (isLoginUnique(allLogins, login) === true) {
            console.log("Логин успешно добавлен!");
            allLogins.push(login);
        }
        else
            console.log("Такой логин уже используется!");


    }
    else
        console.log("Ошибка! Логин должен быть от 4 до 16 символов")
};
    
addLogin(allLogins, login)

