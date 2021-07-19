let x = 0;

const tapHandler = (clickedId) => {
    //check for mobile display
    let currentWidth = width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (currentWidth <= 748) {
        let currentId = document.getElementById(clickedId);
        let currentPar = currentId.getElementsByTagName("p")[0];

        // add inline properties
        currentId.style.height = "380px"
        currentId.style.opacity = "100"
        currentPar.style.display = "none"

        if (x === 1) {
            // deactivate switch
            x --;
            // remove inline properties
            currentId.style.removeProperty("height");
            currentId.style.removeProperty("opacity");
            currentPar.style.removeProperty("display");
        } 
        // activate switch
        else x++
    }
}