const titleCardArr = ["Front-End Developer", "Analyst", "Hobbyist", "Designer", "World Creator", "All Around Cool Guy"]
let i = 0;

titleCard = () => {
    /*reset i if it gets too big*/
    if (i >= titleCardArr.length) i = 0;
    /*loop through the title card array*/
    document.getElementById('scrolling_title').innerHTML = titleCardArr[i];
    i++;
    setTimeout(()=> {titleCard()}, 6000);
}

titleCard();