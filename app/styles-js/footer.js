import { applyStyles } from "../functions.js";

export function createFooter() {

    const mainGridMid = document.getElementById('mainGridMid');

    const mainContainer = document.createElement('div');
    const mainContainerStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '15px',
        marginTop: '50px'
    };
    applyStyles(mainContainer, mainContainerStyles);
    mainGridMid.appendChild(mainContainer);

    const policyMainContainer = document.createElement('div');
    const policyMainContainerStyles = {
        marginLeft: '20px',
        width: '650px',
        height: '60px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    };
    applyStyles(policyMainContainer, policyMainContainerStyles);
    mainContainer.appendChild(policyMainContainer);

    const policyContainer1 = document.createElement('div');
    policyMainContainer.appendChild(policyContainer1);

    const policyContainer2 = document.createElement('div');
    policyMainContainer.appendChild(policyContainer2);

    const policyLinksStyles = {
        marginRight: '30px'
    };

    const privacyLink = document.createElement('a');
    privacyLink.href = 'https://www.mcdonalds.com/us/en-us/privacy-overview.html';
    privacyLink.textContent = 'Privacy (Updated)';
    applyStyles(privacyLink, policyLinksStyles);
    policyContainer1.appendChild(privacyLink);

    const privacyLink2 = document.createElement('a');
    privacyLink2.href = 'https://www.mcdonalds.com/us/en-us/california-privacy-notice.html';
    privacyLink2.textContent = 'California Privacy Notice';
    applyStyles(privacyLink2, policyLinksStyles);
    policyContainer1.appendChild(privacyLink2);

    const termsLink = document.createElement('a');
    termsLink.href = 'https://www.mcdonalds.com/us/en-us/terms-and-conditions.html';
    termsLink.textContent = 'Terms & Conditions';
    applyStyles(termsLink, policyLinksStyles);
    policyContainer1.appendChild(termsLink);

    const accessibilityLink = document.createElement('a');
    accessibilityLink.href = 'https://www.mcdonalds.com/us/en-us/accessibility.html';
    accessibilityLink.textContent = 'Accessibility';
    applyStyles(accessibilityLink, policyLinksStyles);
    policyContainer1.appendChild(accessibilityLink);

    const informationLink = document.createElement('a');
    informationLink.href = 'https://www.mcdonalds.com/us/en-us/privacy/do-not-sell-my-personal-information.html';
    informationLink.textContent = 'Do Not Sell or Share My Personal Information';
    applyStyles(informationLink, policyLinksStyles);
    policyContainer2.appendChild(informationLink);

    const cookieLink = document.createElement('a');
    cookieLink.href = 'https://www.mcdonalds.com/us/en-us/about-our-food/meet-our-food-experts.html';
    cookieLink.textContent = 'Cookies Settings';
    policyContainer2.appendChild(cookieLink);

    const copyrightContainer = document.createElement('div');
    const copyrightContainerStyles = {
        marginRight: '20px',
        display: 'flex',
        alignItems: 'center'
    };
    applyStyles(copyrightContainer, copyrightContainerStyles);
    mainContainer.appendChild(copyrightContainer);

    const mcdonaldsLogo = document.createElement('img');
    mcdonaldsLogo.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/arches-logo_108x108.jpg';
    const mcdonaldsLogoStyles = {
        marginRight: '30px',
        width: '30px',
        height: '30px'
    };
    applyStyles(mcdonaldsLogo, mcdonaldsLogoStyles);
    copyrightContainer.appendChild(mcdonaldsLogo);

    const copyrightText = document.createElement('p');
    copyrightText.textContent = '© 2017 - 2023 McDonalds. All Rights Reserved';
    copyrightContainer.appendChild(copyrightText);
}