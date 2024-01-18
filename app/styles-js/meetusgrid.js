import { applyStyles } from "../functions.js";
import { buildFragment } from "../functions.js";

export function createMeetUsGrid() {

    const meetUsGrid = document.createElement('div');
    const meetUsGridStyles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        columnGap: '25px'
    }
    applyStyles(meetUsGrid, meetUsGridStyles);
    const mainGridMid = document.getElementById('mainGridMid');
    mainGridMid.appendChild(meetUsGrid);

    const fragment1 = buildFragment(3, 'div');
    meetUsGrid.appendChild(fragment1);
    
    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '100%',
        fontSize: '16px'
    };

    const meetUsContainer1 = meetUsGrid.querySelector
        (':first-child');
    applyStyles(meetUsContainer1, containerStyles);

    const meetUsContainer2 = meetUsGrid.querySelector(':nth-child(2)');
    applyStyles(meetUsContainer2, containerStyles);

    const meetUsContainer3 = meetUsGrid.querySelector(':nth-child(3)');
    applyStyles(meetUsContainer3, containerStyles);

    const imgContainer1 = document.createElement('img');
    imgContainer1.src = 'https://s7d1.scene7.com/is/image/mcdonalds/Our_Chefs_3col_760x508:3-column-desktop?resmode=sharp2';
    const imgContainerStyles = {
        width: '100%',
        height: '250px'
    };
    applyStyles(imgContainer1, imgContainerStyles);
    meetUsContainer1.appendChild(imgContainer1);

    const h2Container1 = document.createElement('h2');
    h2Container1.textContent = 'Our Chefs';
    meetUsContainer1.appendChild(h2Container1);

    const textContainer1 = document.createElement('p');
    textContainer1.textContent = 'Everyday, culinary masters are cooking up new tastes in our kitchens.';
    meetUsContainer1.appendChild(textContainer1);

    const btnContainer1 = document.createElement('button');
    btnContainer1.href = 'https://www.mcdonalds.com/us/en-us/about-our-food/meet-our-food-experts/our-chefs.html';
    btnContainer1.textContent = 'Meet Our Chefs';
    meetUsContainer1.appendChild(btnContainer1);

    const imgContainer2 = document.createElement('img');
    imgContainer2.src = 'https://s7d1.scene7.com/is/image/mcdonalds/3_Pub_Dietians_2336x1040:3-column-desktop?resmode=sharp2';
    applyStyles(imgContainer2, imgContainerStyles);
    meetUsContainer2.appendChild(imgContainer2);

    const h2Container2 = document.createElement('h2');
    h2Container2.textContent = 'Meet Our Dietitians';
    meetUsContainer2.appendChild(h2Container2);

    const textContainer2 = document.createElement('p');
    textContainer2.textContent = 'Get to know our Registered Dietitian Nutritionists who add a different type of value to your meal.';
    meetUsContainer2.appendChild(textContainer2);

    const btnContainer2 = document.createElement('button');
    btnContainer2.href = 'https://www.mcdonalds.com/us/en-us/about-our-food/meet-our-food-experts/our-nutritionists.html';
    btnContainer2.textContent = 'Meet Our Dietitians';
    meetUsContainer2.appendChild(btnContainer2);

    const imgContainer3 = document.createElement('img');
    imgContainer3.src = 'https://s7d1.scene7.com/is/image/mcdonalds/Suppliers_3Col:3-column-desktop?resmode=sharp2';
    applyStyles(imgContainer3, imgContainerStyles);
    meetUsContainer3.appendChild(imgContainer3);

    const h2Container3 = document.createElement('h2');
    h2Container3.textContent = 'Supplier Stories';
    meetUsContainer3.appendChild(h2Container3);

    const textContainer3 = document.createElement('p');
    textContainer3.textContent = 'Meet some of the people who provide the ingredients for your favorite menu items.';
    meetUsContainer3.appendChild(textContainer3);

    const btnContainer3 = document.createElement('button');
    btnContainer3.href = 'https://www.mcdonalds.com/us/en-us/about-our-food/meet-our-suppliers.html';
    btnContainer3.textContent = 'Explore Supplier Stories';
    meetUsContainer3.appendChild(btnContainer3);
}