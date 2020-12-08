const formatString = (string) => {
    const stringLength = string.split("")
    if (stringLength.length > 40) {
        stringLength.splice(39);
        stringLength.push("...");
        console.log(stringLength.join(""));
    }
    else
        console.log(string)
}

formatString('Curabitur ligula sapien, tincidunt non.');
