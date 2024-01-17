import { applyStyles } from "../functions.js";

export function createNavbar() {
    
    const background = document.createElement('div');
    const backgroundStyles = {
        height: '135px',
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.1)'
    };
    applyStyles(background, backgroundStyles);
    document.body.appendChild(background);

    const mainContainer = document.createElement('div');
    const mainContainerStyles = {
        display: 'flex',
        alignItems: 'center',
        width: '1170px'
    };
    applyStyles(mainContainer, mainContainerStyles);
    background.appendChild(mainContainer);

    const mainContainerLeft = document.createElement('div');
    const mainContainerLeftStyles = {
        width: '110px',
        height: '110px'
    };
    applyStyles(mainContainerLeft, mainContainerLeftStyles);
    mainContainer.appendChild(mainContainerLeft);

    const mcdonaldsLogo = document.createElement('img');
    mcdonaldsLogo.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/arches-logo_108x108.jpg';
    const mcdonaldsLogoStyles = {
        width: '100%',
        height: '100%'
    };
    applyStyles(mcdonaldsLogo, mcdonaldsLogoStyles);
    mainContainerLeft.appendChild(mcdonaldsLogo);

    const mainContainerRight = document.createElement('div');
    const mainContainerRightStyles = {
        flex: '1',
        height: '110px',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '50px',
        marginRight: '50px'
    };
    applyStyles(mainContainerRight, mainContainerRightStyles)
    mainContainer.appendChild(mainContainerRight);

    const topContainer = document.createElement('div');
    const topContainerStyles = {
        height: '50%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    };
    applyStyles(topContainer, topContainerStyles);
    mainContainerRight.appendChild(topContainer);

    const topContainerBox = document.createElement('div');
    const topContainerBoxStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    };
    applyStyles(topContainerBox, topContainerBoxStyles);
    topContainer.appendChild(topContainerBox);

    const topContainerBoxLeft = document.createElement('div');
    const topContainerBoxLeftStyles = {
        width: '315px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };
    applyStyles(topContainerBoxLeft, topContainerBoxLeftStyles);
    topContainerBox.appendChild(topContainerBoxLeft);

    const languageContainer = document.createElement('div');
    const languageContainerStyles = {
        display: 'flex',
        alignItems: 'center'
    };
    applyStyles(languageContainer, languageContainerStyles);
    topContainerBoxLeft.appendChild(languageContainer);

    const languagesLink = document.createElement('a');
    languagesLink.href = '#';
    languagesLink.textContent = 'Languages';
    languageContainer.appendChild(languagesLink);

    const dropdownImg = document.createElement('img');
    dropdownImg.src = 'https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png';
    const dropdownImgStyles = {
        width: '12px',
        height: '12px',
        paddingTop: '3px',
        marginLeft: '5px'
    };
    applyStyles(dropdownImg, dropdownImgStyles);
    languageContainer.appendChild(dropdownImg);

    const signUpEmailLink = document.createElement('a');
    signUpEmailLink.href = 'https://www.mcdonalds.com/us/en-us/mcdonalds-email-signup.html';
    signUpEmailLink.textContent = 'Sign Up for Email';
    topContainerBoxLeft.appendChild(signUpEmailLink);

    const careersLink = document.createElement('a');
    careersLink.href = 'https://www.mcdonalds.com/us/en-us/mcdonalds-careers.html';
    careersLink.textContent = 'Careers';
    topContainerBoxLeft.appendChild(careersLink);

    const topContainerBoxRight = document.createElement('div');
    const topContainerBoxRightStyles = {
        width: '375px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    };
    applyStyles(topContainerBoxRight, topContainerBoxRightStyles);
    topContainerBox.appendChild(topContainerBoxRight);

    const searchImgContainer = document.createElement('div');
    const searchImgContainerStyles = {
        display: 'flex',
        alignItems: 'center'
    };
    applyStyles(searchImgContainer, searchImgContainerStyles);
    topContainerBoxRight.appendChild(searchImgContainer);

    const searchImg = document.createElement('img');
    searchImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png';
    const searchImgStyles = {
        width: '17px',
        height: '17px',
        marginRight: '4px'
    };
    applyStyles(searchImg, searchImgStyles);
    searchImgContainer.appendChild(searchImg);

    const searchLink = document.createElement('a');
    searchLink.href = 'https://www.mcdonalds.com/us/en-us/search-results.html';
    searchLink.textContent = 'Search';
    searchImgContainer.appendChild(searchLink);

    const locationContainer = document.createElement('div');
    const locationContainerStyles = {
        display: 'flex',
        alignItems: 'center'
    };
    applyStyles(locationContainer, locationContainerStyles);
    topContainerBoxRight.appendChild(locationContainer);

    const locationImg = document.createElement('img');
    locationImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8DMo0QXC3ppRTl2EKhmXxuoXgLgi26FURlA&usqp=CAU';
    const locationImgStyles = {
        width: '17px',
        height: '17px',
        marginRight: '4px'
    };
    applyStyles(locationImg, locationImgStyles);
    locationContainer.appendChild(locationImg);

    const locationLink = document.createElement('a');
    locationLink.href = 'https://www.mcdonalds.com/us/en-us/restaurant-locator.html';
    locationLink.textContent = 'Change your location';
    const locationLinkStyles = {
        color: 'rgb(56, 56, 155)',
        textDecoration: 'underline'
    };
    applyStyles(locationLink, locationLinkStyles);
    locationContainer.appendChild(locationLink);

    const orderButton = document.createElement('button');
    orderButton.href = 'https://www.mcdonalds.com/us/en-us/about-our-food/meet-our-food-experts.html';
    orderButton.textContent = 'Order Now';
    topContainerBoxRight.appendChild(orderButton);

    const bottomContainer = document.createElement('div');
    const bottomContainerStyles = {
        height: '50%',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    };
    applyStyles(bottomContainer, bottomContainerStyles);
    mainContainerRight.appendChild(bottomContainer);

    const bottomContainerBox = document.createElement('div');
    const bottomContainerBoxStyles = {
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '15px'
    };
    applyStyles(bottomContainerBox, bottomContainerBoxStyles);
    bottomContainer.appendChild(bottomContainerBox);

    const menuContainer = document.createElement('div');
    const menuContainerStyles = {
        display: 'flex',
        alignItems: 'center'
    };
    applyStyles(menuContainer, menuContainerStyles);
    bottomContainerBox.appendChild(menuContainer);

    const menuLink = document.createElement('a');
    menuLink.href = '#';
    menuLink.textContent = 'Our Menu';
    menuContainer.appendChild(menuLink);

    const menuDropdownImg = document.createElement('img');
    menuDropdownImg.src = 'https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png';
    const menuDropdownImgStyles = {
        width: '14px',
        height: '14px',
        marginLeft: '4px'
    };
    applyStyles(menuDropdownImg, menuDropdownImgStyles);
    menuContainer.appendChild(menuDropdownImg);

    const downloadAppLink = document.createElement('a');
    downloadAppLink.href = 'https://www.mcdonalds.com/us/en-us/download-app.html';
    downloadAppLink.textContent = 'Download App';
    bottomContainerBox.appendChild(downloadAppLink);

    const mcDonaldsRewardLink = document.createElement('a');
    mcDonaldsRewardLink.href = 'https://www.mcdonalds.com/us/en-us/mymcdonalds.html';
    mcDonaldsRewardLink.textContent = 'MyMcDonalds Rewards';
    bottomContainerBox.appendChild(mcDonaldsRewardLink);

    const dealsLink = document.createElement('a');
    dealsLink.href = 'https://www.mcdonalds.com/us/en-us/deals.html';
    dealsLink.textContent = 'Exclusive Deals';
    bottomContainerBox.appendChild(dealsLink);

    const aboutOurFoodLink = document.createElement('a');
    aboutOurFoodLink.href = 'https://www.mcdonalds.com/us/en-us/about-our-food.html';
    aboutOurFoodLink.textContent = 'About Our Food';
    bottomContainerBox.appendChild(aboutOurFoodLink);

    const locateLink = document.createElement('a');
    locateLink.href = 'https://www.mcdonalds.com/us/en-us/restaurant-locator.html';
    locateLink.textContent = 'Locate';
    bottomContainerBox.appendChild(locateLink);

    const giftCardsLink = document.createElement('a');
    giftCardsLink.href = 'https://www.mcdonalds.com/us/en-us/arch-card.html';
    giftCardsLink.textContent = 'Gift Cards';
    bottomContainerBox.appendChild(giftCardsLink);
}