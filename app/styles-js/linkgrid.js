import { applyStyles } from "../functions.js";
import { buildFragment } from "../functions.js";
import { createLinks } from "../functions.js";

export function createLinkGrid() {

    const linkGrid = document.createElement('div');
    const linkGridStyles = {
        margin: '160px 0px 80px 0px',
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

    const links1 = [
        { text: 'About Us Overview', href: '#' },
        { text: 'Leadership Team', href: '#' },
        { text: 'Values In Action', href: '#' },
        { text: 'Franchise Info', href: '#' },
        { text: 'Recalls & Alerts', href: '#' },
        { text: 'Accessibility', href: '#' },
        { text: 'Investor Relations', href: '#' },
        { text: 'News & Notifications', href: '#' },
        { text: 'Real Estate', href: '#' }
    ];
    createLinks(linksContainer1, links1);

    const h3Container2 = document.createElement('h3');
    h3Container2.textContent = 'Services';
    linksContainer2.appendChild(h3Container2);

    const links2 = [
        { text: 'Services Overview', href: '#' },
        { text: 'Wi-Fi', href: '#' },
        { text: 'PlayPlaces & Parties', href: '#' },
        { text: 'McDelivery', href: '#' },
        { text: 'Mobile Order & Pay', href: '#' },
        { text: 'Trending Now', href: '#' },
        { text: 'McDonalds Merchandise', href: '#' },
        { text: 'Family Fun Hub', href: '#' },
        { text: 'MyMcDonalds Rewards', href: '#' },
        { text: 'McCafé', href: '#' }
    ];
    createLinks(linksContainer2, links2);

    const h3Container3 = document.createElement('h3');
    h3Container3.textContent = 'Community';
    linksContainer3.appendChild(h3Container3);

    const links3 = [
        { text: 'Community Overview', href: '#' },
        { text: 'Now Serving', href: '#' },
        { text: 'HACER Scholarships for Hispanic Students', href: '#' },
        { text: 'Ronald McDonald House Charities', href: '#' },
        { text: 'McDonalds Asian Pacific American', href: '#' },
        { text: 'McDonalds International', href: '#' },
        { text: 'Black and Positively Golden', href: '#' },
        { text: 'McDonalds LGBTQ+', href: '#' }
    ];

    createLinks(linksContainer3, links3);

    const h3Container4 = document.createElement('h3');
    h3Container4.textContent = 'Contact Us';
    linksContainer4.appendChild(h3Container4);

    const links4 = [
        { text: 'Contact Us Overview', href: '#' },
        { text: 'Gift Card FAQs', href: '#' },
        { text: 'Donations', href: '#' },
        { text: 'Employment', href: '#' },
        { text: 'Customer Feedback', href: '#' },
        { text: 'Frequently Asked Questions', href: '#' },
    ];
    createLinks(linksContainer4, links4);
}