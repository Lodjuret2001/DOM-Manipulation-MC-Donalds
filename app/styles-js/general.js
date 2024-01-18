import { applyGlobalStyles } from "../functions.js";

const bodyStyles = {
    margin: '0',
    fontFamily: 'Speedee, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif',
    color: 'black',
    fontSize: '14px'
};
applyGlobalStyles('body', bodyStyles);

const aStyles = {
    padding: '0',
    textDecoration: 'none',
    color: 'black'
};
applyGlobalStyles('a', aStyles);

const pStyles = {
    margin: '0'
};
applyGlobalStyles('p', pStyles);

const buttonStyles = {
    backgroundColor: '#ffbc0d',
    fontSize: '15px',
    border: 'none',
    borderRadius: '4px',
    padding: '15px 30px',
    marginTop: '25px'
};
applyGlobalStyles('button', buttonStyles);

const h2Styles = {
    fontSize: '36px',
    fontWeight: '800'
};
applyGlobalStyles('h2', h2Styles);


const h3Styles = {
    fontSize: '1pc',
    marginBottom: '20px',
    marginTop: '0px'
};
applyGlobalStyles('h3', h3Styles);