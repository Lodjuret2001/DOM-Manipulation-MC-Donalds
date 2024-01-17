import { applyStyles } from "../functions.js";

export function createSocialMediaLinks() {

    const mainGridMid = document.getElementById('mainGridMid');

    const mainContainer = document.createElement('div');
    const mainContainerStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: '50px'
    };
    applyStyles(mainContainer, mainContainerStyles);
    mainGridMid.appendChild(mainContainer);

    const socialMediaContainer = document.createElement('div');
    const socialMediaContainerStyles = {
        width: '300px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '30px'
    };
    applyStyles(socialMediaContainer, socialMediaContainerStyles);
    mainContainer.appendChild(socialMediaContainer);

    const facebookImg = document.createElement('img');
    facebookImg.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/facebook.png';
    socialMediaContainer.appendChild(facebookImg);

    const xImg = document.createElement('img');
    xImg.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/x.png';
    socialMediaContainer.appendChild(xImg);

    const youtubeImg = document.createElement('img');
    youtubeImg.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/youtube.png';
    socialMediaContainer.appendChild(youtubeImg);

    const instgramImg = document.createElement('img');
    instgramImg.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/instagram.png';
    socialMediaContainer.appendChild(instgramImg);

    const tumblrImg = document.createElement('img');
    tumblrImg.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/tumblr.png';
    socialMediaContainer.appendChild(tumblrImg);

    const spotifyImg = document.createElement('img');
    spotifyImg.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/spotify.png';
    socialMediaContainer.appendChild(spotifyImg);

    const appContainer = document.createElement('div');
    const appContainerStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: '30px'
    };
    applyStyles(appContainer, appContainerStyles);
    mainContainer.appendChild(appContainer);

    const appStoreImg = document.createElement('img');
    appStoreImg.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/logo/app_store_badge.png';
    appContainer.appendChild(appStoreImg);

    const googleStoreImg = document.createElement('img');
    googleStoreImg.src = 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/logo/google_play_badge.png';
    appContainer.appendChild(googleStoreImg);

    const breakLine = document.createElement('hr');
    breakLine.style.marginBottom = '30px';
    mainGridMid.appendChild(breakLine);
}
