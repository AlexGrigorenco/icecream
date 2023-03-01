


const swiper = new Swiper('.swiper', {
   
    loop: true,
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 100,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  


  //! MODALS

  document.querySelector('[data-action="openModal"]').addEventListener('click', (e) => {
      const obj = e.target.dataset.obj
      console.log(obj)

      document.querySelectorAll('.modal').forEach(item =>{
        if(item.dataset.obj = 'buyNow'){
          item.classList.remove('hidden')
        }
      })
  })

  document.querySelectorAll('[data-action="closeModal"]').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.add('hidden')
    })
  })