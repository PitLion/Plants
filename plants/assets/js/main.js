(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const menuCloseItem = document.querySelector('.nav-close');
    const menuLinks = document.querySelectorAll('.header__link');
    const allMain = document.querySelector('.main');

    burgerItem.addEventListener('click', () => {
      menu.classList.add('nav-active');
    });
  
    allMain.addEventListener('click', () => {
        menu.classList.remove('nav-active');
    });
  
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav-active');
    });

    if (window.innerWidth <= 380) {
       for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', () => {
            menu.classList.remove('nav-active');
            });
        }
    }
  }());

//js-scroll
  (function () {
    const smoothScroll = function (targetEl, duration) {
       /* const headerElHeight =  document.querySelector('.header').clientHeight;*/
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top/* - headerElHeight*/;
        let startPosition = window.pageYOffset;
        let startTime = null;
  
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
  
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
  
    };
  
    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
  }());
  

// blur
const blurBtn = document.querySelectorAll('.blur');
let blurBtnItems = document.getElementsByClassName('btn-blur-active');
const boxGarden = document.getElementsByClassName('box-garden');
const boxPlanting = document.getElementsByClassName('box-planting');
const boxLawn = document.getElementsByClassName('box-lawn');

Array.from(blurBtn).map((item) => {
  item.addEventListener('click', () => {
    if (blurBtnItems.length < 2) {
      item.classList.toggle('btn-blur-active');
   } else {
      item.classList.remove('btn-blur-active');
   }

   if ((blurBtn[0].classList.contains('btn-blur-active')) && (blurBtn[1].classList.contains('btn-blur-active'))) {
    Array.from(boxGarden).map((item) => {item.classList.remove('box-blur');})
    Array.from(boxLawn).map((item) => {item.classList.remove('box-blur');})
    Array.from(boxPlanting).map((item) => {item.classList.add('box-blur');})
    blurBtn[2].classList.add('btn-service-hover-delete');
    blurBtn[0].classList.remove('btn-service-hover-delete');
    blurBtn[1].classList.remove('btn-service-hover-delete');
  } else if ((blurBtn[0].classList.contains('btn-blur-active')) && (blurBtn[2].classList.contains('btn-blur-active'))) {
    Array.from(boxGarden).map((item) => {item.classList.remove('box-blur');})
    Array.from(boxLawn).map((item) => {item.classList.add('box-blur');})
    Array.from(boxPlanting).map((item) => {item.classList.remove('box-blur');})
    blurBtn[1].classList.add('btn-service-hover-delete');
    blurBtn[2].classList.remove('btn-service-hover-delete');
    blurBtn[0].classList.remove('btn-service-hover-delete');
  } else if ((blurBtn[1].classList.contains('btn-blur-active')) && (blurBtn[2].classList.contains('btn-blur-active'))) {
    Array.from(boxGarden).map((item) => {item.classList.add('box-blur');})
    Array.from(boxLawn).map((item) => {item.classList.remove('box-blur');})
    Array.from(boxPlanting).map((item) => {item.classList.remove('box-blur');})
    blurBtn[0].classList.add('btn-service-hover-delete');
    blurBtn[2].classList.remove('btn-service-hover-delete');
    blurBtn[1].classList.remove('btn-service-hover-delete');
  } else if (blurBtn[0].classList.contains('btn-blur-active')) {
    Array.from(boxGarden).map((item) => {item.classList.remove('box-blur');})
    Array.from(boxLawn).map((item) => {item.classList.add('box-blur');})
    Array.from(boxPlanting).map((item) => {item.classList.add('box-blur');})
    blurBtn[2].classList.remove('btn-service-hover-delete');
    blurBtn[0].classList.remove('btn-service-hover-delete');
    blurBtn[1].classList.remove('btn-service-hover-delete');
  }  else if (blurBtn[1].classList.contains('btn-blur-active')) {
    Array.from(boxGarden).map((item) => {item.classList.add('box-blur');})
    Array.from(boxLawn).map((item) => {item.classList.remove('box-blur');})
    Array.from(boxPlanting).map((item) => {item.classList.add('box-blur');})
    blurBtn[2].classList.remove('btn-service-hover-delete');
    blurBtn[0].classList.remove('btn-service-hover-delete');
    blurBtn[1].classList.remove('btn-service-hover-delete');
  }  else if (blurBtn[2].classList.contains('btn-blur-active')) {
    Array.from(boxGarden).map((item) => {item.classList.add('box-blur');})
    Array.from(boxLawn).map((item) => {item.classList.add('box-blur');})
    Array.from(boxPlanting).map((item) => {item.classList.remove('box-blur');})
    blurBtn[2].classList.remove('btn-service-hover-delete');
    blurBtn[0].classList.remove('btn-service-hover-delete');
    blurBtn[1].classList.remove('btn-service-hover-delete');
  } else {
    Array.from(boxGarden).map((item) => {item.classList.remove('box-blur');})
    Array.from(boxLawn).map((item) => {item.classList.remove('box-blur');})
    Array.from(boxPlanting).map((item) => {item.classList.remove('box-blur');})
    blurBtn[2].classList.remove('btn-service-hover-delete');
    blurBtn[0].classList.remove('btn-service-hover-delete');
    blurBtn[1].classList.remove('btn-service-hover-delete');
  }
  });
})


// accourdion
let acc = document.getElementsByClassName("prices-item");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(e) {

    if (acc[0] === e.currentTarget) {
      acc[0].classList.toggle("prices-item-active");
      acc[0].lastElementChild.classList.toggle("prices-item-block-active");
      acc[0].nextElementSibling.classList.toggle("panel-active");

      if (acc[0].querySelector(".accourdion-btn-open").style.display !== 'block') {
        acc[0].querySelector(".accourdion-btn-close").style.display = 'none';
        acc[0].querySelector(".accourdion-btn-open").style.display = 'block';
      } else {
        acc[0].querySelector(".accourdion-btn-close").style.display = 'block';
        acc[0].querySelector(".accourdion-btn-open").style.display = 'none'; 
      }
      
      acc[1].classList.remove("prices-item-active");
      acc[1].lastElementChild.classList.remove("prices-item-block-active");
      acc[1].nextElementSibling.classList.remove("panel-active");
      acc[1].querySelector(".accourdion-btn-close").style.display = 'block';
      acc[1].querySelector(".accourdion-btn-open").style.display = 'none'; 

      acc[2].classList.remove("prices-item-active");
      acc[2].lastElementChild.classList.remove("prices-item-block-active");
      acc[2].nextElementSibling.classList.remove("panel-active");
      acc[2].querySelector(".accourdion-btn-close").style.display = 'block';
      acc[2].querySelector(".accourdion-btn-open").style.display = 'none'; 
    } else  if (acc[1] === e.currentTarget) {
      acc[1].classList.toggle("prices-item-active");
      acc[1].lastElementChild.classList.toggle("prices-item-block-active");
      acc[1].nextElementSibling.classList.toggle("panel-active");

      if (acc[1].querySelector(".accourdion-btn-open").style.display !== 'block') {
        acc[1].querySelector(".accourdion-btn-close").style.display = 'none';
        acc[1].querySelector(".accourdion-btn-open").style.display = 'block';
      } else {
        acc[1].querySelector(".accourdion-btn-close").style.display = 'block';
        acc[1].querySelector(".accourdion-btn-open").style.display = 'none'; 
      }

      acc[0].classList.remove("prices-item-active");
      acc[0].lastElementChild.classList.remove("prices-item-block-active");
      acc[0].nextElementSibling.classList.remove("panel-active");
      acc[0].querySelector(".accourdion-btn-close").style.display = 'block';
      acc[0].querySelector(".accourdion-btn-open").style.display = 'none'; 

      acc[2].classList.remove("prices-item-active");
      acc[2].lastElementChild.classList.remove("prices-item-block-active");
      acc[2].nextElementSibling.classList.remove("panel-active");
      acc[2].querySelector(".accourdion-btn-close").style.display = 'block';
      acc[2].querySelector(".accourdion-btn-open").style.display = 'none'; 
    } else  if (acc[2] === e.currentTarget) {
      acc[2].classList.toggle("prices-item-active");
      acc[2].lastElementChild.classList.toggle("prices-item-block-active");
      acc[2].nextElementSibling.classList.toggle("panel-active");

      if (acc[2].querySelector(".accourdion-btn-open").style.display !== 'block') {
        acc[2].querySelector(".accourdion-btn-close").style.display = 'none';
        acc[2].querySelector(".accourdion-btn-open").style.display = 'block';
      } else {
        acc[2].querySelector(".accourdion-btn-close").style.display = 'block';
        acc[2].querySelector(".accourdion-btn-open").style.display = 'none'; 
      }

      acc[1].classList.remove("prices-item-active");
      acc[1].lastElementChild.classList.remove("prices-item-block-active");
      acc[1].nextElementSibling.classList.remove("panel-active");
      acc[1].querySelector(".accourdion-btn-close").style.display = 'block';
      acc[1].querySelector(".accourdion-btn-open").style.display = 'none'; 

      acc[0].classList.remove("prices-item-active");
      acc[0].lastElementChild.classList.remove("prices-item-block-active");
      acc[0].nextElementSibling.classList.remove("panel-active");
      acc[0].querySelector(".accourdion-btn-close").style.display = 'block';
      acc[0].querySelector(".accourdion-btn-open").style.display = 'none'; 
    }
  });
}


//select
const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.contacts-item');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
const adressesWrap = selectSingle.querySelectorAll('.adresses-wrap');
const imageWoman = document.querySelector('.wrap-table-woman');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
    imageWoman.classList.remove('wrap-table-woman-delete');
  } else {
    selectSingle.setAttribute('data-state', 'active');
    imageWoman.classList.add('wrap-table-woman-delete');
  }

  for (let i = 0; i < adressesWrap.length; i++) {
     adressesWrap[i].classList.remove('adresses-wrap-active');
  }
  selectSingle.classList.remove('__select-top-active-mobile');
  selectSingle.classList.remove('__select-top-active');
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.firstElementChild.innerHTML = evt.target.textContent;
    selectSingle_title.classList.remove("contacts-item-reset");
    selectSingle_title.classList.add("contacts-item-mode");
    selectSingle.setAttribute('data-state', '');
    adressesWrap[i - 1].classList.add('adresses-wrap-active');
    selectSingle.classList.add('__select-top-active');
    selectSingle.classList.add('__select-top-active-mobile');
    imageWoman.classList.add('wrap-table-woman-delete');
  });
}

// Reset title
const reset = document.querySelector('.main');
reset.addEventListener('click', () => {
  selectSingle_title.firstElementChild.innerHTML = 'City';
  selectSingle_title.classList.remove("contacts-item-mode");
  selectSingle_title.classList.add("contacts-item-reset");
  selectSingle.setAttribute('data-state', '');
  for (let i = 0; i < adressesWrap.length; i++) {
    adressesWrap[i].classList.remove('adresses-wrap-active');
  }
  selectSingle.classList.remove('__select-top-active');
  selectSingle.classList.remove('__select-top-active-mobile');
  imageWoman.classList.remove('wrap-table-woman-delete');
});
