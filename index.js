const Nav = document.querySelector('nav');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const navlink = document.querySelector('.nav-link');

// about platform popup... 
const btnContainerElement = document.querySelector('.btn-container');
const btnElement = document.querySelector('.btn');
const popupContainerElement = document.querySelector('.popup-container');
const closeIconElement = document.querySelector('.close-icon');


// textbook popup... 
const btnTextbookContainer = document.querySelector('.btn-textbook-container');
const btnText = document.querySelector('.btntext');
const popupTexebookContainer = document.querySelector('.popup-textbook-container');
const textbookCloseIcon = document.querySelector('.textbook-close-icon');


// statistics popup... 
const btnStatisticsContainer = document.querySelector('.btn-statistics-container');
const btnStatistics = document.querySelector('.btnstatistics');
const popupStatisticsContainer = document.querySelector('.popup-statistics-container');
const statisticsCloseIcon = document.querySelector('.statistics-close-icon');


// sign in popup... 
const signIn = document.querySelector('.signin');
const signinB = document.querySelector('.signin-b');
const signinContainer = document.querySelector('.signin-container');
const signinCloseIcon = document.querySelector('.signin-close-icon');


// sign out popup... 
const signOut = document.querySelector('.signout');
const signoutB = document.querySelector('.signout-b');
const signoutContainer = document.querySelector('.signout-container');
const signoutCloseIcon = document.querySelector('.signout-close-icon');


// nav scroll ......
window.addEventListener('scroll', () => {
  Nav.classList.toggle('nav-bg', window.scrollY>0);
});


// phone open menu ..... 
open.addEventListener('click', () => {
  open.style.display = 'none';
  close.style.display = 'inline-block';
  navlink.style.left = '0';
});

// phone close menu ..... 
close.addEventListener('click', () => {
  open.style.display = 'inline-block';
  close.style.display = 'none';
  navlink.style.left = '-100%';
});


// about platform popup... 
btnElement.addEventListener('click', () => {
  btnContainerElement.classList.add('active');
  popupContainerElement.classList.remove('active');
   
});

closeIconElement.addEventListener('click', () => {
  btnContainerElement.classList.remove('active');
  popupContainerElement.classList.add('active');

});

// textbook popup... 
btnText.addEventListener('click', () => {
  btnTextbookContainer.classList.add('active');
  popupTexebookContainer.classList.remove('active');
   
});

textbookCloseIcon.addEventListener('click', () => {
  btnTextbookContainer.classList.remove('active');
  popupTexebookContainer.classList.add('active');

});


// textbook popup... 
btnStatistics.addEventListener('click', () => {
  btnStatisticsContainer.classList.add('active');
  popupStatisticsContainer.classList.remove('active');
   
});

statisticsCloseIcon.addEventListener('click', () => {
  btnStatisticsContainer.classList.remove('active');
  popupStatisticsContainer.classList.add('active');

});


// signin popup... 
  signinB.addEventListener('click', () => {
  signIn.classList.add('active');
  signinContainer.classList.remove('active');
   
});

  signinCloseIcon.addEventListener('click', () => {
    signIn.classList.remove('active');
    signinContainer.classList.add('active');

});


// signout popup... 
  signoutB.addEventListener('click', () => {
  signOut.classList.add('active');
  signoutContainer.classList.remove('active');
   
});

  signoutCloseIcon.addEventListener('click', () => {
    signOut.classList.remove('active');
    signoutContainer.classList.add('active');

});


// Pagination ......

let thisPage = 1;
let limit = 3;
const list = document.querySelectorAll('.list .item');

function loadItem() {
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage - 1;
  list.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
  listPage();
}
loadItem();
function listPage() {
  let count = Math.ceil(list.length / limit);
  document.querySelector('.listPage').innerHTML = '';

  if (thisPage != 1){
    let prev = document.createElement('li');
    prev.innerText = 'PREV';
    prev.setAttribute('onclick', 'changePage('+ (thisPage - 1) +')');
    document.querySelector('.listPage').appendChild(prev);
  }

  for (i = 1; i <= count; i++) {
    let newPage = document.createElement('li');
    newPage.innerText = i;
    if(i == thisPage) {
      newPage.classList.add('active');
    }
    newPage.setAttribute('onclick', 'changePage('+ i +')');
    document.querySelector('.listPage').appendChild(newPage);
  }


  if (thisPage != count){
    let next = document.createElement('li');
    next.innerText = 'NEXT';
    next.setAttribute('onclick', 'changePage('+ (thisPage + 1) +')');
    document.querySelector('.listPage').appendChild(next);
  }


}
function changePage(i) {
  thisPage = i;
  loadItem();
}
