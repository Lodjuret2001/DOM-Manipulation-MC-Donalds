import { applyStyles, createLinks } from "../functions.js";

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

    const policyLinks1 = [
        { text: 'Privacy (Updated)', href: '#' },
        { text: 'California Privacy Notice', href: '#' },
        { text: 'Terms & Conditions', href: '#' },
        { text: 'Accessibility', href: '#' },
    ];
    createLinks(policyContainer1, policyLinks1);

    const policyLinks2 = [
        { text: 'Do Not Sell or Share My Personal Information', href: '#' },
        { text: 'Cookies Settings', href: '#' },
    ];
    createLinks(policyContainer2, policyLinks2);

    const policyLinks = policyMainContainer.querySelectorAll('a');
    policyLinks.forEach(link => {
        applyStyles(link, policyLinksStyles);
    });

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