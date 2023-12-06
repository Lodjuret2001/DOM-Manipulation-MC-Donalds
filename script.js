//Snippet = "ad"
// const aName = document.createElement('a');
// aName.href = '';
// aName.textContent = 'text';
// divName.appendChild(aName);

//Snippet = "dd"
// const divName = document.createElement('div');
// divName.classList = 'divName';
// divName.textContent = '';
// document.body.appendChild(divName);

//Snippet = "pd"
// const pName = document.createElement('p');
// pName.textContent = '';
// parent.appendChild(pName);

//Snippet = "imgd"
// const imgName = document.createElement('img');
// imgName.src = '#';
// imgName.classList = 'imgName';
// imgName.alt = 'imgName';
// parent.appendChild(imgName);

//Snippet = "btnd"
// const btnName = document.createElement('button');
// btnName.textContent = 'btnName';
// btnName.classList = 'btnName';
// parent.appendChild(btnName);

//Snippet = "bcd"
//----------------Start ------------------------//<== start new document.body with comment!


//-------------------Start Navbar---------------------// 
const navbarBackground = document.createElement('div');
navbarBackground.classList = 'navbarBackground';
document.body.appendChild(navbarBackground);

const navbarContainer = document.createElement('div');
navbarContainer.classList = 'navbarContainer';
navbarBackground.appendChild(navbarContainer);

const navbarContainerLeft = document.createElement('div');
navbarContainerLeft.classList = 'navbarContainerLeft';
navbarContainer.appendChild(navbarContainerLeft);

const mcdonaldsLogo = document.createElement('img');
mcdonaldsLogo.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/arches-logo_108x108.jpg';
mcdonaldsLogo.classList = 'mcdonaldsLogo';
mcdonaldsLogo.alt = 'mcdonaldsLogo';
navbarContainerLeft.appendChild(mcdonaldsLogo);

const navbarContainerRight = document.createElement('div');
navbarContainerRight.classList = 'navbarContainerRight';
navbarContainer.appendChild(navbarContainerRight);

//----------------Start navbar top links------------------------//

const navbarTopContainer = document.createElement('div');
navbarTopContainer.classList = 'navbarTopContainer';
navbarContainerRight.appendChild(navbarTopContainer);

const topContainerBox = document.createElement('div');
topContainerBox.classList = 'topContainerBox';
navbarTopContainer.appendChild(topContainerBox);

const topContainerBoxLeft = document.createElement('div');
topContainerBoxLeft.classList = 'topContainerBoxLeft';
topContainerBox.appendChild(topContainerBoxLeft);

const languageContainer = document.createElement('div');
languageContainer.classList = 'languageContainer';
topContainerBoxLeft.appendChild(languageContainer);

const languagesLink = document.createElement('a');
languagesLink.href = '#';
languagesLink.textContent = 'Languages';
languageContainer.appendChild(languagesLink);

const dropdownImg = document.createElement('img');
dropdownImg.src = 'https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png';
dropdownImg.classList = 'dropdownImg';
dropdownImg.alt = 'dropdownImg';
languageContainer.appendChild(dropdownImg);

const signUpEmailLink = document.createElement('a');
signUpEmailLink.href = 'https://www.mcdonalds.com/us/en-us/mcdonalds-email-signup.html';
signUpEmailLink.textContent = 'Sign Up for Email';
topContainerBoxLeft.appendChild(signUpEmailLink);

const careerLink = document.createElement('a');
careerLink.href = 'https://www.mcdonalds.com/us/en-us/mcdonalds-careers.html';
careerLink.textContent = 'Careers';
topContainerBoxLeft.appendChild(careerLink);

const topContainerBoxRight = document.createElement('div');
topContainerBoxRight.classList = 'topContainerBoxRight';
topContainerBox.appendChild(topContainerBoxRight);

const searchImgContainer = document.createElement('div');
searchImgContainer.classList = 'searchImgContainer';
topContainerBoxRight.appendChild(searchImgContainer);

const searchImg = document.createElement('img');
searchImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png';
searchImg.classList = 'searchImg';
searchImg.alt = 'searchImg';
searchImgContainer.appendChild(searchImg);

const searchLink = document.createElement('a');
searchLink.href = 'https://www.mcdonalds.com/us/en-us/search-results.html';
searchLink.textContent = 'Search';
searchImgContainer.appendChild(searchLink);

const changeLocationContainer = document.createElement('div');
changeLocationContainer.classList = 'changeLocationContainer';
topContainerBoxRight.appendChild(changeLocationContainer);

const locationImg = document.createElement('img');
locationImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8DMo0QXC3ppRTl2EKhmXxuoXgLgi26FURlA&usqp=CAU';
locationImg.classList = 'locationImg';
locationImg.alt = 'locationImg';
changeLocationContainer.appendChild(locationImg);

const changeLocationLink = document.createElement('a');
changeLocationLink.href = 'https://www.mcdonalds.com/us/en-us/restaurant-locator.html';
changeLocationLink.textContent = 'Change your location';
changeLocationContainer.appendChild(changeLocationLink);

const btnOrderNow = document.createElement('button');
btnOrderNow.textContent = 'Order Now';
btnOrderNow.classList = 'btnOrderNow';
topContainerBoxRight.appendChild(btnOrderNow);


//----------------Start navbar links bottom------------------------//

const navbarBottomContainer = document.createElement('div');
navbarBottomContainer.classList = 'navbarBottomContainer';
navbarContainerRight.appendChild(navbarBottomContainer);

const bottomContainerBox = document.createElement('div');
bottomContainerBox.classList = 'bottomContainerBox';
navbarBottomContainer.appendChild(bottomContainerBox);

const ourMenuContainer = document.createElement('div');
ourMenuContainer.classList = 'ourMenuContainer';
bottomContainerBox.appendChild(ourMenuContainer);

const ourMenuLink = document.createElement('a');
ourMenuLink.href = '#';
ourMenuLink.textContent = 'Our Menu';
ourMenuContainer.appendChild(ourMenuLink);

const dropdownImgMenu = document.createElement('img');
dropdownImgMenu.src = 'https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png';
dropdownImgMenu.classList = 'dropdownImgMenu';
dropdownImgMenu.alt = 'dropdownImgMenu';
ourMenuContainer.appendChild(dropdownImgMenu);

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


//----------------Start pageGrid------------------------//

const pageGrid = document.createElement('div');
pageGrid.classList = 'pageGrid';
document.body.appendChild(pageGrid);

const pageGridLeft = document.createElement('div');
pageGridLeft.classList = 'pageGridLeft';
pageGrid.appendChild(pageGridLeft);

const pageGridMid = document.createElement('div');
pageGridMid.classList = 'pageGridMid';
pageGrid.appendChild(pageGridMid);

const pageGridRight = document.createElement('div');
pageGridRight.classList = 'pageGridRight';
pageGrid.appendChild(pageGridRight);