const tapHandler = (clickedId) => {
    //check for mobile display
    let currentWidth = width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (currentWidth <= 748) {
        let currentId = document.getElementById(clickedId);
        let currentPar = currentId.getElementsByTagName("p")[0];

        if (currentId.style.height) {
            currentId.style.removeProperty("height");
            currentId.style.removeProperty("opacity");
            currentPar.style.removeProperty("display");
        }

        else {
            if (currentWidth <= 400) {
                currentId.style.height = "296px"
            } else {
                currentId.style.height = "380px"
            }
            currentId.style.opacity = "100"
            currentPar.style.display = "none"
        }
    }


}