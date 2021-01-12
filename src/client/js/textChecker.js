function checkForNewsURL(inputText) {
    console.log("::: Running checkForNewsURL :::", inputText);
    var reg = inputText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    if(reg == null){
        return false;
    }
    else
        return true;

}

export { checkForNewsURL }
