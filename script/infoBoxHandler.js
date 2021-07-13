const infoBoxHandler = (clickedId) => {
    thisId = document.getElementById(clickedId).id;
    infoBox = document.getElementById('info_bar');

    if (thisId === "phone_number") {
        infoBox.innerHTML = "(913)669-0379";
    }
    else if (thisId === "email") {
        infoBox.innerHTML = "treykapfer@gmail.com";
    }
    else if (thisId === "github") {
        infoBox.innerHTML = "github.com/treykapfer";
    }
    else {
        infoBox.innerHTML = "https://www.linkedin.com/in/trey-kapfer-252ab5103/";
    }
}