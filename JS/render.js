
//! render NAV-LIST

{
    const data = [
        {
            text: 'Home',
            link: '#',
        },
        {
            text: 'How it\’s made?',
            link: '#',
        },
        {
            text: 'Our products',
            link: '#',
        },
        {
            text: 'Contact',
            link: '#',
        },
    ]

    document.querySelector('header nav .nav-list').innerHTML = data.map(item => `
                                <li><a style="font-size: 16px; font-weight: 700" class="nav-link" href=${item.link}>${item.text}</a></li>
    `).join('');
}

//! render PRODUCTS CARDS

{
    const data =[
        {
            image: './images/products/icecream-img.png',
            title: 'ice cream',
            text: 'Soft ice cream with a delicate taste. Made with milk, cream, sugar and natural stabilizer',
            bg: '#AEC6A5',
            data: 'icecream',
        },
        {
            image: './images/products/icecoffe-img.png',
            title: 'ice coffee',
            text: 'Fragrant invigorating drink created from 100% natural ingredients without the use of preservatives and flavor enhancers',
            bg: '#EFD478',
            data: 'icecoffe',
        },
        {
            image: './images/products/milkshakes-img.png',
            title: 'milkshakes',
            text: 'Sweet drinks based on milk and ice cream, supplemented with syrups, fruits, berries and other sweets of your choice',
            bg: '#D6936D',
            data: 'milkshakes',
        },
    ]

    document.querySelector('.products .cards-wrapper').innerHTML = data.map(item => `
                            <div data-item=${item.data} class="card relative max-w-[370px] bg-[${item.bg}] px-[62px] pt-[166px] pb-[60px] flex flex-col gap-[64px] items-center rounded-[24px]">

                            <div style="box-shadow: 0px 8px 30px rgba(10, 136, 23, 0.25);" class="img-block absolute top-[-32%] max-w-[300px] bg-[${item.bg}] rounded-[50%] overflow-hidden">
                            <div class="img-wrapper rounded-[50%] overflow-hidden ">
                                <img src=${item.image} alt="icecream">
                            </div>
                            </div>

                            <div class="card__title font-[700] text-[30px] uppercase tracking-[0.04em]">
                            ${item.title}
                            </div>
                            <p class="text-center font-[400] leading-[176%] text-[16px] tracking-[0.04em]">
                            ${item.text}
                            </p>

                            <div>
                            <div class="bttn-arrow bttn-arrow--black">
                                <span></span>
                            </div>
                            </div>

                        </div>
    `).join('')
}