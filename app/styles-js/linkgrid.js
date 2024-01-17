import { applyStyles } from "../functions.js";
import { buildFragment } from "../functions.js";

export function createLinkGrid() {

    const linkGrid = document.createElement('div');
    const linkGridStyles = {
        margin: '160px 0px 60px 0px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        columnGap: '25px',
        fontSize: '15px',
        height: '300px'
    };
    applyStyles(linkGrid, linkGridStyles);
    const mainGridMid = document.getElementById('mainGridMid');
    mainGridMid.appendChild(linkGrid);

    const fragment1 = buildFragment(4, 'div');
    linkGrid.appendChild(fragment1);

    const linksContainerStyles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '200px'
    };

    const linksContainer1 = linkGrid.querySelector(':first-child');
    applyStyles(linksContainer1, linksContainerStyles);

    const linksContainer2 = linkGrid.querySelector(':nth-child(2)');
    applyStyles(linksContainer2, linksContainerStyles);

    const linksContainer3 = linkGrid.querySelector(':nth-child(3)');
    applyStyles(linksContainer3, linksContainerStyles);

    const linksContainer4 = linkGrid.querySelector(':last-child');
    applyStyles(linksContainer4, linksContainerStyles);

    const h3Container1 = document.createElement('h3');
    h3Container1.textContent = 'About Us';
    linksContainer1.appendChild(h3Container1);

    const aboutUsLink = document.createElement('a');
    aboutUsLink.href = '#';
    aboutUsLink.textContent = 'About Us Overview';

    linksContainer1.appendChild(aboutUsLink);

    const aboutUsLink2 = document.createElement('a');
    aboutUsLink2.href = '#';
    aboutUsLink2.textContent = 'Leadership Team';
    linksContainer1.appendChild(aboutUsLink2);

    const aboutUsLink3 = document.createElement('a');
    aboutUsLink3.href = '#';
    aboutUsLink3.textContent = 'Values In Action';
    linksContainer1.appendChild(aboutUsLink3);

    const aboutUsLink4 = document.createElement('a');
    aboutUsLink4.href = '#';
    aboutUsLink4.textContent = 'Franchise Info';
    linksContainer1.appendChild(aboutUsLink4);

    const aboutUsLink5 = document.createElement('a');
    aboutUsLink5.href = '#';
    aboutUsLink5.textContent = 'Recalls & Alerts';
    linksContainer1.appendChild(aboutUsLink5);

    const aboutUsLink6 = document.createElement('a');
    aboutUsLink6.href = '#';
    aboutUsLink6.textContent = 'Real Estate';
    linksContainer1.appendChild(aboutUsLink6);

    const aboutUsLink7 = document.createElement('a');
    aboutUsLink7.href = '#';
    aboutUsLink7.textContent = 'Accessibility';
    linksContainer1.appendChild(aboutUsLink7);

    const aboutUsLink8 = document.createElement('a');
    aboutUsLink8.href = '#';
    aboutUsLink8.textContent = 'Investor Relations';
    linksContainer1.appendChild(aboutUsLink8);

    const aboutUsLink9 = document.createElement('a');
    aboutUsLink9.href = '#';
    aboutUsLink9.textContent = 'News & Notifications';
    linksContainer1.appendChild(aboutUsLink9);


    const h3Container2 = document.createElement('h3');
    h3Container2.textContent = 'Services';
    linksContainer2.appendChild(h3Container2);

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

    const h3Container3 = document.createElement('h3');
    h3Container3.textContent = 'Community';
    linksContainer3.appendChild(h3Container3);

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

    const h3Container4 = document.createElement('h3');
    h3Container4.textContent = 'Contact Us';
    linksContainer4.appendChild(h3Container4);

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
}