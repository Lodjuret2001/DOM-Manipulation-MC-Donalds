import { applyStyles } from "../functions.js";

export function createMainContent() {

    const mainGrid = document.createElement('div');
    const mainGridStyles = {
        display: 'grid',
        gridTemplateColumns: '1fr minmax(400px, 1170px) 1fr',
        marginBottom: '50px'
    };
    applyStyles(mainGrid, mainGridStyles);
    document.body.appendChild(mainGrid);

    const mainGridLeft = document.createElement('div');
    mainGrid.appendChild(mainGridLeft);

    const mainGridMid = document.createElement('div');
    mainGridMid.id = 'mainGridMid';
    mainGrid.appendChild(mainGridMid);

    const mainGridRight = document.createElement('div');
    mainGrid.appendChild(mainGridRight);

    const mainContainer = document.createElement('div');
    const mainContainerStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    };
    applyStyles(mainContainer, mainContainerStyles);
    mainGridMid.appendChild(mainContainer);

    const h1 = document.createElement('h1');
    const h1Styles = {
        marginTop: '90px',
        fontSize: '50px',
        fontWeight: '800'
    };
    h1.textContent = 'Meet Our Food Experts';
    applyStyles(h1, h1Styles);
    mainContainer.appendChild(h1);

    const mainContainerImg = document.createElement('img');
    mainContainerImg.src = 'https://s7d1.scene7.com/is/image/mcdonalds/FoodExperts_Hero_1260x560_Desktop:hero-desktop?resmode=sharp2';
    const mainContainerImgStyles = {
        width: '100%',
        height: '560px'
    };
    applyStyles(mainContainerImg, mainContainerImgStyles);
    mainContainer.appendChild(mainContainerImg);

    const mainContainerText = document.createElement('p');
    mainContainerText.textContent = 'Our food experts are more than just pros at their craft. They are people who care about the food you eat and bring innovation into our kitchens.';
    mainContainerText.style.padding = '110px 0px';
    mainContainerText.style.fontSize = '20px';
    const mainContainerTextStyles = {
        padding: '110px 0px',
        fontSize: '20px'
    };
    applyStyles(mainContainerText, mainContainerTextStyles);
    mainContainer.appendChild(mainContainerText);
}
