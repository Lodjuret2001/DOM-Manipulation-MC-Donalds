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
const aboutUsH3 = document.createElement('h3');
aboutUsH3.textContent = 'About Us';
linksContainer.appendChild(aboutUsH3);

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
const servicesH3 = document.createElement('h3');
servicesH3.textContent = 'Services';
linksContainer2.appendChild(servicesH3);

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

const communityH3 = document.createElement('h3');
communityH3.textContent = 'Community';
linksContainer3.appendChild(communityH3);

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

const contactUsH3 = document.createElement('h3');
contactUsH3.textContent = 'Contact Us';
linksContainer4.appendChild(contactUsH3);

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


//----------------Start SocialMedia and App ------------------------//

const socialAppContainer = document.createElement('div');
socialAppContainer.classList = 'socialAppContainer';
pageGridMid.appendChild(socialAppContainer);

const socialMediaContainer = document.createElement('div');
socialMediaContainer.classList = 'socialMediaContainer';
socialAppContainer.appendChild(socialMediaContainer);

const facebookImg = document.createElement('img');
facebookImg.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/facebook.png';
facebookImg.alt = 'facebookImg';
socialMediaContainer.appendChild(facebookImg);

const xImg = document.createElement('img');
xImg.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/x.png';
xImg.alt = 'xImg';
socialMediaContainer.appendChild(xImg);

const youtubeImg = document.createElement('img');
youtubeImg.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/youtube.png';
youtubeImg.alt = 'youtubeImg';
socialMediaContainer.appendChild(youtubeImg);

const instgramImg = document.createElement('img');
instgramImg.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/instagram.png';
instgramImg.alt = 'instgramImg';
socialMediaContainer.appendChild(instgramImg);

const tumblrImg = document.createElement('img');
tumblrImg.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/tumblr.png';
tumblrImg.alt = 'tumblrImg';
socialMediaContainer.appendChild(tumblrImg);

const spotifyImg = document.createElement('img');
spotifyImg.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/spotify.png';
spotifyImg.alt = 'spotifyImg';
socialMediaContainer.appendChild(spotifyImg);

const appContainer = document.createElement('div');
appContainer.classList = 'appContainer';
socialAppContainer.appendChild(appContainer);

const appStoreImg = document.createElement('img');
appStoreImg.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/logo/app_store_badge.png';
appStoreImg.alt = 'appStoreImg';
appContainer.appendChild(appStoreImg);

const googleStoreImg = document.createElement('img');
googleStoreImg.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/logo/google_play_badge.png';
googleStoreImg.alt = 'googleStoreImg';
appContainer.appendChild(googleStoreImg);

const breakLine = document.createElement('hr');
pageGridMid.appendChild(breakLine);

//----------------Start policyCopyrightLinks------------------------//

const policyCopyrightContainer = document.createElement('div');
policyCopyrightContainer.classList = 'policyCopyrightContainer';
pageGridMid.appendChild(policyCopyrightContainer);

const policyLinksContainer = document.createElement('div');
policyLinksContainer.classList = 'policyLinksContainer';
policyCopyrightContainer.appendChild(policyLinksContainer);

const policyLinksContainer1 = document.createElement('div');
policyLinksContainer1.classList = 'policyLinksContainer1';
policyLinksContainer.appendChild(policyLinksContainer1);

const policyLinksContainer2 = document.createElement('div');
policyLinksContainer2.classList = 'policyLinksContainer2';
policyLinksContainer.appendChild(policyLinksContainer2);

const privacyLink = document.createElement('a');
privacyLink.href = 'https://www.mcdonalds.com/us/en-us/privacy-overview.html';
privacyLink.textContent = 'Privacy (Updated)';
policyLinksContainer1.appendChild(privacyLink);

const privacyLink2 = document.createElement('a');
privacyLink2.href = 'https://www.mcdonalds.com/us/en-us/california-privacy-notice.html';
privacyLink2.textContent = 'California Privacy Notice';
policyLinksContainer1.appendChild(privacyLink2);

const termsLink = document.createElement('a');
termsLink.href = 'https://www.mcdonalds.com/us/en-us/terms-and-conditions.html';
termsLink.textContent = 'Terms & Conditions';
policyLinksContainer1.appendChild(termsLink);

const accessibilityLink = document.createElement('a');
accessibilityLink.href = 'https://www.mcdonalds.com/us/en-us/accessibility.html';
accessibilityLink.textContent = 'Accessibility';
policyLinksContainer1.appendChild(accessibilityLink);

const informationLink = document.createElement('a');
informationLink.href = 'https://www.mcdonalds.com/us/en-us/privacy/do-not-sell-my-personal-information.html';
informationLink.textContent = 'Do Not Sell or Share My Personal Information';
policyLinksContainer2.appendChild(informationLink);

const cookieLink = document.createElement('a');
cookieLink.href = 'https://www.mcdonalds.com/us/en-us/about-our-food/meet-our-food-experts.html';
cookieLink.textContent = 'Cookies Settings';
policyLinksContainer2.appendChild(cookieLink);

const copyrightContainer = document.createElement('div');
copyrightContainer.classList = 'copyrightContainer';
policyCopyrightContainer.appendChild(copyrightContainer);

const mcdonaldsLogoCopyright = document.createElement('img');
mcdonaldsLogoCopyright.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/arches-logo_108x108.jpg';
mcdonaldsLogoCopyright.alt = 'mcdonaldsLogoCopyright';
copyrightContainer.appendChild(mcdonaldsLogoCopyright);

const copyrightText = document.createElement('p');
copyrightText.textContent = '© 2017 - 2023 McDonalds. All Rights Reserved';
copyrightContainer.appendChild(copyrightText); 

//----------------CSS functions------------------------//

function styleElementA(selector, cssProps) {
    // Select all HTML elements based on the provided selector
    const elements = document.querySelectorAll(selector);
    // Check if any elements were found
    if (elements.length === 0) {
        console.warn('No elements found for selector:', selector);
        return;
    }
    // Apply each CSS property to each element
    elements.forEach(element => {
        for (const prop in cssProps) {
            if (Object.prototype.hasOwnProperty.call(cssProps, prop)) {
                element.style[prop] = cssProps[prop];
            }
        }
    });
}

// Usage Example
styleElementA('a', {'padding': '0', 'margin': '0', 'textDecoration': 'none', 'color': 'black'});

function styleElementImg(selector, cssProps) {
    // Select all HTML elements based on the provided selector
    const elements = document.querySelectorAll(selector);
    // Check if any elements were found
    if (elements.length === 0) {
        console.warn('No elements found for selector:', selector);
        return;
    }
    // Apply each CSS property to each element
    elements.forEach(element => {
        for (const prop in cssProps) {
            if (Object.prototype.hasOwnProperty.call(cssProps, prop)) {
                element.style[prop] = cssProps[prop];
            }
        }
    });
}

// Usage Example
styleElementImg('img', {'width': '30px', 'height': '30px'});

function styleElementP(selector, cssProps) {
    // Select all HTML elements based on the provided selector
    const elements = document.querySelectorAll(selector);
    // Check if any elements were found
    if (elements.length === 0) {
        console.warn('No elements found for selector:', selector);
        return;
    }
    // Apply each CSS property to each element
    elements.forEach(element => {
        for (const prop in cssProps) {
            if (Object.prototype.hasOwnProperty.call(cssProps, prop)) {
                element.style[prop] = cssProps[prop];
            }
        }
    });
}

// Usage Example
styleElementP('p', { 'margin': '0', 'padding': '0' });

function styleElementH2(selector, cssProps) {
    // Select all HTML elements based on the provided selector
    const elements = document.querySelectorAll(selector);
    // Check if any elements were found
    if (elements.length === 0) {
        console.warn('No elements found for selector:', selector);
        return;
    }
    // Apply each CSS property to each element
    elements.forEach(element => {
        for (const prop in cssProps) {
            if (Object.prototype.hasOwnProperty.call(cssProps, prop)) {
                element.style[prop] = cssProps[prop];
            }
        }
    });
}

// Usage Example
styleElementH2('h2', { 'fontSize': '36px', 'fontWeight': '800' });

function styleElementH3(selector, cssProps) {
    // Select all HTML elements based on the provided selector
    const elements = document.querySelectorAll(selector);
    // Check if any elements were found
    if (elements.length === 0) {
        console.warn('No elements found for selector:', selector);
        return;
    }
    // Apply each CSS property to each element
    elements.forEach(element => {
        for (const prop in cssProps) {
            if (Object.prototype.hasOwnProperty.call(cssProps, prop)) {
                element.style[prop] = cssProps[prop];
            }
        }
    });
}

// Usage Example
styleElementH3('h3', {'fontSize': '1pc', 'marginBottom': '20px', 'marginTop': '0px'});

function styleElementBtn(selector, cssProps) {
    // Select all HTML elements based on the provided selector
    const elements = document.querySelectorAll(selector);
    // Check if any elements were found
    if (elements.length === 0) {
        console.warn('No elements found for selector:', selector);
        return;
    }
    // Apply each CSS property to each element
    elements.forEach(element => {
        for (const prop in cssProps) {
            if (Object.prototype.hasOwnProperty.call(cssProps, prop)) {
                element.style[prop] = cssProps[prop];
            }
        }
    });
}

// Usage Example
styleElementBtn('button', {'backgroundColor': '#ffbc0d', 'fontSize': '15px', 'border': 'none', 'borderRadius': '4px', 'padding': '15px 30px', 'marginTop': '25px'});
