import { createNavbar } from "./styles-js/navbar.js";
import { createMainContent } from "./styles-js/main-content.js";
import { createMeetUsGrid } from "./styles-js/meetusgrid.js";
import { createLinkGrid } from "./styles-js/linkgrid.js";
import { createSocialMediaLinks } from "./styles-js/socialmedia.js";
import { createFooter } from "./styles-js/footer.js";

async function createPage() {
    
    await createNavbar();
    await createMainContent();
    await createMeetUsGrid();
    await createLinkGrid();
    await createSocialMediaLinks();
    await createFooter();
}

createPage();



