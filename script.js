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