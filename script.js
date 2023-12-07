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
btnOrderNow.href = 'https://www.mcdonalds.com/us/en-us/about-our-food/meet-our-food-experts.html';
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

//----------------Start Main content------------------------//

const mainContainer = document.createElement('div');
mainContainer.classList = 'mainContainer';
pageGridMid.appendChild(mainContainer);

const h1Text = document.createElement('h1');
h1Text.textContent = 'Meet Our Food Experts';
mainContainer.appendChild(h1Text);

const cuttingTomatoImg = document.createElement('img');
cuttingTomatoImg.src = 'https://s7d1.scene7.com/is/image/mcdonalds/FoodExperts_Hero_1260x560_Desktop:hero-desktop?resmode=sharp2';
cuttingTomatoImg.classList = 'cuttingTomatoImg';
cuttingTomatoImg.alt = 'cuttingTomatoImg';
mainContainer.appendChild(cuttingTomatoImg);

const infoFoodExperts = document.createElement('p');
infoFoodExperts.textContent = 'Our food experts are more than just pros at their craft. They are people who care about the food you eat and bring innovation into our kitchens.';
mainContainer.appendChild(infoFoodExperts);

//----------------Start Meet us Grid------------------------//

const meetUsGrid = document.createElement('div');
meetUsGrid.classList = 'meetUsGrid';
pageGridMid.appendChild(meetUsGrid);

let meetUsContainer = document.createElement('div');
meetUsContainer.classList = 'meetUsContainer';
meetUsGrid.appendChild(meetUsContainer);

let meetUsContainer2 = document.createElement('div');
meetUsContainer2.classList = 'meetUsContainer';
meetUsGrid.appendChild(meetUsContainer2);

let meetUsContainer3 = document.createElement('div');
meetUsContainer3.classList = 'meetUsContainer';
meetUsGrid.appendChild(meetUsContainer3);

const ourChefsImg = document.createElement('img');
ourChefsImg.src = 'https://s7d1.scene7.com/is/image/mcdonalds/Our_Chefs_3col_760x508:3-column-desktop?resmode=sharp2';
ourChefsImg.classList = 'meetUsImg';
ourChefsImg.alt = 'ourChefsImg';
meetUsContainer.appendChild(ourChefsImg);

const h2Text = document.createElement('h2');
h2Text.classList = 'meetUsH2';
h2Text.textContent = 'Our Chefs';
meetUsContainer.appendChild(h2Text);

const ourChefsText = document.createElement('p');
ourChefsText.textContent = 'Everyday, culinary masters are cooking up new tastes in our kitchens.';
meetUsContainer.appendChild(ourChefsText);

const ourChefsBtn = document.createElement('button');
ourChefsBtn.href = 'https://www.mcdonalds.com/us/en-us/about-our-food/meet-our-food-experts/our-chefs.html';
ourChefsBtn.textContent = 'Meet Our Chefs';
ourChefsBtn.classList = 'meetUsBtn';
meetUsContainer.appendChild(ourChefsBtn);

const ourChefsImg2 = document.createElement('img');
ourChefsImg2.src = 'https://s7d1.scene7.com/is/image/mcdonalds/3_Pub_Dietians_2336x1040:3-column-desktop?resmode=sharp2';
ourChefsImg2.classList = 'meetUsImg';
ourChefsImg2.alt = 'ourChefsImg2';
meetUsContainer2.appendChild(ourChefsImg2);

const h2Text2 = document.createElement('h2');
h2Text2.classList = 'meetUsH2';
h2Text2.textContent = 'Meet Our Dietitians';
meetUsContainer2.appendChild(h2Text2);

const ourChefsText2 = document.createElement('p');
ourChefsText2.textContent = 'Get to know our Registered Dietitian Nutritionists who add a different type of value to your meal.';
meetUsContainer2.appendChild(ourChefsText2);

const ourChefsBtn2 = document.createElement('button');
ourChefsBtn2.href = 'https://www.mcdonalds.com/us/en-us/about-our-food/meet-our-food-experts/our-nutritionists.html';
ourChefsBtn2.textContent = 'Meet Our Dietitians';
ourChefsBtn2.classList = 'meetUsBtn';
meetUsContainer2.appendChild(ourChefsBtn2);

const ourChefsImg3 = document.createElement('img');
ourChefsImg3.src = 'https://s7d1.scene7.com/is/image/mcdonalds/Suppliers_3Col:3-column-desktop?resmode=sharp2';
ourChefsImg3.alt = 'ourChefsImg3';
ourChefsImg3.classList = 'meetUsImg';
meetUsContainer3.appendChild(ourChefsImg3);

const h2Text3 = document.createElement('h2');
h2Text3.classList = 'meetUsH2';
h2Text3.textContent = 'Supplier Stories';
meetUsContainer3.appendChild(h2Text3);

const ourChefsText3 = document.createElement('p');
ourChefsText3.textContent = 'Meet some of the people who provide the ingredients for your favorite menu items.';
meetUsContainer3.appendChild(ourChefsText3);

const ourChefsBtn3 = document.createElement('button');
ourChefsBtn3.href = 'https://www.mcdonalds.com/us/en-us/about-our-food/meet-our-suppliers.html';
ourChefsBtn3.textContent = 'Explore Supplier Stories';
ourChefsBtn3.classList = 'meetUsBtn';
meetUsContainer3.appendChild(ourChefsBtn3);

//----------------Start Link GRID------------------------//

const linkGrid = document.createElement('div');
linkGrid.classList = 'linkGrid';
pageGridMid.appendChild(linkGrid);

const linksContainer = document.createElement('div');
linksContainer.classList = 'linksContainer';
linkGrid.appendChild(linksContainer);

const linksContainer2 = document.createElement('div');
linksContainer2.classList = 'linksContainer';
linkGrid.appendChild(linksContainer2);

const linksContainer3 = document.createElement('div');
linksContainer3.classList = 'linksContainer';
linkGrid.appendChild(linksContainer3);

const linksContainer4 = document.createElement('div');
linksContainer4.classList = 'linksContainer';
linkGrid.appendChild(linksContainer4);
//----------------Start LinksContainer ------------------------//
const aboutUsH2 = document.createElement('h2');
aboutUsH2.textContent = 'About Us';
linksContainer.appendChild(aboutUsH2);

const aboutUsLink = document.createElement('a');
aboutUsLink.href = '#';
aboutUsLink.textContent = 'About Us Overview';
linksContainer.appendChild(aboutUsLink);

const aboutUsLink2 = document.createElement('a');
aboutUsLink2.href = '#';
aboutUsLink2.textContent = 'Leadership Team';
linksContainer.appendChild(aboutUsLink2);

const aboutUsLink3 = document.createElement('a');
aboutUsLink3.href = '#';
aboutUsLink3.textContent = 'Values In Action';
linksContainer.appendChild(aboutUsLink3);

const aboutUsLink4 = document.createElement('a');
aboutUsLink4.href = '#';
aboutUsLink4.textContent = 'Franchise Info';
linksContainer.appendChild(aboutUsLink4);

const aboutUsLink5 = document.createElement('a');
aboutUsLink5.href = '#';
aboutUsLink5.textContent = 'Recalls & Alerts';
linksContainer.appendChild(aboutUsLink5);

const aboutUsLink6 = document.createElement('a');
aboutUsLink6.href = '#';
aboutUsLink6.textContent = 'Real Estate';
linksContainer.appendChild(aboutUsLink6);

const aboutUsLink7 = document.createElement('a');
aboutUsLink7.href = '#';
aboutUsLink7.textContent = 'Accessibility';
linksContainer.appendChild(aboutUsLink7);

const aboutUsLink8 = document.createElement('a');
aboutUsLink8.href = '#';
aboutUsLink8.textContent = 'Investor Relations';
linksContainer.appendChild(aboutUsLink8);

const aboutUsLink9 = document.createElement('a');
aboutUsLink9.href = '#';
aboutUsLink9.textContent = 'News & Notifications';
linksContainer.appendChild(aboutUsLink9);

//----------------Start LinksContainer2------------------------//
const servicesH2 = document.createElement('h2');
servicesH2.textContent = 'Services';
linksContainer2.appendChild(servicesH2);

const servicesLink = document.createElement('a');
servicesLink.href = '#';
servicesLink.textContent = 'Services Overview';
linksContainer2.appendChild(servicesLink);

const servicesLink2 = document.createElement('a');
servicesLink2.href = '#';
servicesLink2.textContent = 'Wi-Fi';
linksContainer2.appendChild(servicesLink2);

const servicesLink3 = document.createElement('a');
servicesLink3.href = '#';
servicesLink3.textContent = 'PlayPlaces & Parties';
linksContainer2.appendChild(servicesLink3);

const servicesLink4 = document.createElement('a');
servicesLink4.href = '#';
servicesLink4.textContent = 'McDelivery';
linksContainer2.appendChild(servicesLink4);

const servicesLink5 = document.createElement('a');
servicesLink5.href = '#';
servicesLink5.textContent = 'Mobile Order & Pay';
linksContainer2.appendChild(servicesLink5);

const servicesLink6 = document.createElement('a');
servicesLink6.href = '#';
servicesLink6.textContent = 'Trending Now';
linksContainer2.appendChild(servicesLink6);

const servicesLink7 = document.createElement('a');
servicesLink7.href = '#';
servicesLink7.textContent = 'McDonalds Merchandise';
linksContainer2.appendChild(servicesLink7);

const servicesLink8 = document.createElement('a');
servicesLink8.href = '#';
servicesLink8.textContent = 'Family Fun Hub';
linksContainer2.appendChild(servicesLink8);

const servicesLink9 = document.createElement('a');
servicesLink9.href = '#';
servicesLink9.textContent = 'MyMcDonalds Rewards';
linksContainer2.appendChild(servicesLink9);

const searchLink10 = document.createElement('a');
searchLink10.href = '#';
searchLink10.textContent = 'McCafé';
linksContainer2.appendChild(searchLink10);

//----------------Start LinksContainer3------------------------//

const communityH2 = document.createElement('h2');
communityH2.textContent = 'Community';
linksContainer3.appendChild(communityH2);

const communityLink = document.createElement('a');
communityLink.href = '#';
communityLink.textContent = 'Community Overview';
linksContainer3.appendChild(communityLink);

const communityLink2 = document.createElement('a');
communityLink2.href = '#';
communityLink2.textContent = 'Now Serving';
linksContainer3.appendChild(communityLink2);

const communityLink3 = document.createElement('a');
communityLink3.href = '#';
communityLink3.textContent = 'HACER Scholarships for Hispanic Students';
linksContainer3.appendChild(communityLink3);

const communityLink4 = document.createElement('a');
communityLink4.href = '#';
communityLink4.textContent = 'Ronald McDonald House Charities';
linksContainer3.appendChild(communityLink4);

const communityLink5 = document.createElement('a');
communityLink5.href = '#';
communityLink5.textContent = 'McDonalds Asian Pacific American';
linksContainer3.appendChild(communityLink5);

const communityLink6 = document.createElement('a');
communityLink6.href = '#';
communityLink6.textContent = 'McDonalds International';
linksContainer3.appendChild(communityLink6);

const communityLink7 = document.createElement('a');
communityLink7.href = '#';
communityLink7.textContent = 'Black and Positively Golden';
linksContainer3.appendChild(communityLink7);

const communityLink8 = document.createElement('a');
communityLink8.href = '#';
communityLink8.textContent = 'McDonalds LGBTQ+';
linksContainer3.appendChild(communityLink8);

//----------------Start linksContainer4 ------------------------//

const contactUsH2 = document.createElement('h2');
contactUsH2.textContent = 'Community';
linksContainer4.appendChild(contactUsH2);

const contactUsLink = document.createElement('a');
contactUsLink.href = '#';
contactUsLink.textContent = 'Contact Us Overview';
linksContainer4.appendChild(contactUsLink);

const contactUsLink2 = document.createElement('a');
contactUsLink2.href = '#';
contactUsLink2.textContent = 'Gift Card FAQs';
linksContainer4.appendChild(contactUsLink2);

const contactUsLink3 = document.createElement('a');
contactUsLink3.href = '#';
contactUsLink3.textContent = 'Donations';
linksContainer4.appendChild(contactUsLink3);

const contactUsLink4 = document.createElement('a');
contactUsLink4.href = '#';
contactUsLink4.textContent = 'Employment';
linksContainer4.appendChild(contactUsLink4);

const contactUsLink5 = document.createElement('a');
contactUsLink5.href = '#';
contactUsLink5.textContent = 'Customer Feedback';
linksContainer4.appendChild(contactUsLink5);

const contactUsLink6 = document.createElement('a');
contactUsLink6.href = '#';
contactUsLink6.textContent = 'Frequently Asked Questions';
linksContainer4.appendChild(contactUsLink6);


//----------------Start ------------------------//
