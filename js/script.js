     const filterContainer = document.querySelector('.portfolio-filter');
     const filterChildren =  filterContainer.children;
     const childrenLimit = filterChildren.length,
           portfolioItem = document.querySelectorAll('.portfolio-item'),
           portfoloioItemLimit = portfolioItem.length;

     for (let i = 0;i < childrenLimit; i++){
         filterChildren[i].addEventListener('click',function () {
             filterContainer.querySelector('.active').classList.remove('active');
             this.classList.add('active')
              const filterValue = this.getAttribute('data-filter');
             for(let k = 0;k < portfoloioItemLimit;k++){
                 if(filterValue === portfolioItem[k].getAttribute('data-category')){
                     portfolioItem[k].classList.add('show');
                     portfolioItem[k].classList.remove('hide');
                 }else {
                     portfolioItem[k].classList.add('hide');
                     portfolioItem[k].classList.remove('show');
                 }
                 if(filterValue === 'all'){
                     portfolioItem[k].classList.add('show');
                     portfolioItem[k].classList.remove('hide');
                 }
             }
         });


     }

     const lightbox = document.querySelector('.lightbox'),
           lightImg = document.querySelector('.lightbox-img'),
           lightText = lightbox.querySelector('.caption-text'),
           lightCounterr = lightbox.querySelector('.caption-counter');

     let itemIndex = 0;
     for (let i = 0;i < portfoloioItemLimit; i++){
         portfolioItem[i].addEventListener('click',function () {
             itemIndex = i;
             changeItem();
             toggleOpen();
         });

     }

     function changeItem(){
         let imgSrc = portfolioItem[itemIndex].querySelector('.portfolio-img img').getAttribute('src');
         lightImg.src = imgSrc;
         lightText.innerHTML = portfolioItem[itemIndex].querySelector('h4').innerHTML;
         lightCounterr.innerHTML = itemIndex + 1 + ' of ' + portfoloioItemLimit;
             }
     function toggleOpen(){
         lightbox.classList.toggle('open');
     }

     const close = document.querySelector('.lightbox-close');
     close.addEventListener('click',function (){
         lightbox.classList.toggle('open');

     });