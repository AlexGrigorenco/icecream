
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
                            <div data-item=${item.data} class="card relative max-w-[370px] bg-[${item.bg}] px-[62px] pt-[166px] pb-[60px] flex flex-col gap-[64px] items-center rounded-[24px] justify-between">

                            <div style="box-shadow: 0px 8px 30px rgba(10, 136, 23, 0.25);" class="img-block absolute top-[-32%] max-w-[300px] bg-[${item.bg}] rounded-[50%]">
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


//! render HOW MADE   INFO CARDS

{
    const data = [
        {
            img:'./images/how-made/cow-icon.svg',
            title: '721',
            text: 'Aliquam ac dui vel dui vulputate consectetur. Mauris massa.',
        },
        {
            img:'./images/how-made/weight-icon.svg',
            title: '16kg',
            text: 'Aliquam ac dui vel dui vulputate consectetur. Mauris massa.',
        },
        {
            img:'./images/how-made/icecream-icon.svg',
            title: '84',
            text: 'Aliquam ac dui vel dui vulputate consectetur. Mauris massa.',
        },
    ]


    document.querySelector('.how-made .info-wrapper').innerHTML = data.map(item => `
                <div class="info-card flex flex-col gap-[16px] items-center max-w-[320px] text-[#FCFCFC]">
                        <div class="icon-wrapper max-w-[50px] rounded-[50%] bg-[#F8D24E] p-[8px]">
                            <img src=${item.img} alt="icon">
                        </div>
                        <div class="info-title font-[700] text-[58px] leading-[71px] tracking-[0.04em] uppercase pt-[34px]">
                            ${item.title}
                        </div>
                        <p class="text-center font-[400] text-[16px] leading-[176%] tracking-[0.02em]">
                            ${item.text}
                        </p>
                        </div>
    `).join('')
}


//! render SLIDER

{
    const data = [
        {
            img: './images/slider/slider-img-1.png',
            photo: './images/slider/emily-photo.png',
            review: 'I love visiting your cafe. You prepare the most delicious ice cream in Los Angeles! In addition, you have beautiful serving, cozy atmosphere and polite staff.',
            namePlace: 'Emily, Los Angeles',
        },
        {
            img: './images/slider/slider-img-2.png',
            photo: './images/slider/sam-photo.png',
            review: 'I love eating popsicles on a hot day. Yours is always delicious. I recommend your cafe to everyone I know.',
            namePlace: 'Sam, Los Angeles',
        },
        {
            img: './images/slider/slider-img-3.png',
            photo: './images/slider/diana-photo.png',
            review: 'Ice cream is my passion! I love your chocolate hazelnut ice cream! And I really like the excellent service - always served politely and quickly!',
            namePlace: 'Diana, Chicago',
        },
    ]


    document.querySelector('.slider-body .swiper-wrapper').innerHTML = data.map(item => `
                            <div class="swiper-slide flex flex-col gap-[186px]">
                                        <div class="img-wrapper w-[100%] max-h-[422px] rounded-[24px] overflow-hidden">
                                            <img src=${item.img} alt="icecream">
                                        </div>
                                        <div class="content flex flex-col items-center gap-[32px]">
                                            <div class="img-wrapper max-w-[84px] rounded-[50%] overflow-hidden">
                                            <img src=${item.photo} alt="photo">
                                            </div>
                                            <div class="review bg-[#84A178] w-[100%] bg-[#84A178] rounded-[24px] px-[108px] pt-[40px] pb-[46px]">
                                            <p class="text-[16px] text-center text-[#FCFCFC] leading-[186%] tracking-[0.04em]">
                                                ${item.review}
                                            </p>
                                            </div>
                                            <p class="text-[16px] leading-[186%]">
                                            ${item.namePlace}
                                            </p>
                                        </div>
                                        </div>
    `).join('')
}


//! render CONTACTS CARDS


{
    const data = [
        {
            title: 'CAFE',
            city: 'Chicago',
            addres: '10340 Ridgeland Ave, Chicago Ridge, IL 60415, USA',
            mondayFriday: '06:00 AM - 10:00 PM',
            saturdaySunday: '08:00 AM - 16:00 PM',
            phone: '+61(0) 383 766 284',
            phoneNum: '+610383766284',
            mail: 'noreply@envato.com',
        },
        {
            title: 'FOOD TRUCK',
            city: 'Los Angeles',
            addres: '1003 Manhattan Ave, Manhattan Beach, CA 90263, USA',
            mondayFriday: '06:00 AM - 10:00 PM',
            saturdaySunday: '08:00 AM - 16:00 PM',
            phone: '+61(0) 383 766 284',
            phoneNum: '+610383766284',
            mail: 'noreply@envato.com',
        },
        {
            title: 'CAFE',
            city: 'New York',
            addres: '726 Sterling Pl, Brooklyn, NY 11222, USA',
            mondayFriday: '06:00 AM - 10:00 PM',
            saturdaySunday: '08:00 AM - 16:00 PM',
            phone: '+61(0) 383 766 284',
            phoneNum: '+610383766284',
            mail: 'noreply@envato.com',
        },
    ]

    document.querySelector('.contacts .cards-wrapper .cards').innerHTML = data.map(item => `
    <div class="card p-[40px] bg-[#FFFFFF] max-w-[368px] rounded-[24px] flex flex-col gap-[32px]">
                <div class="title">
                  <p class="text-[16px] bg-[#F8D24E] inline-block px-[18px] py-[4px] rounded-[6px] leading-[186%] tracking-[0.04em]">
                    ${item.title}
                  </p>
                </div>
                <div class="location text-[16px] leading-[186%] tracking-[0.04em]">
                  <span class="pb-[8px] block">
                    ${item.city}
                  </span>
                  <p class="addres text-[#D6936D]">
                    ${item.addres}
                  </p>
                </div>
                <div class="line w-[100%] h-[1px] bg-[#E1E1E1]"></div>
                <div class="schedule text-[16px] leading-[186%] tracking-[0.04em] flex flex-col gap-[12px]">
                  <div>
                    <p>
                      Monday - Friday
                    </p>
                    <p class="text-[#ABABAB]">
                      ${item.mondayFriday}
                    </p>
                  </div>
                  <div>
                    <p>
                      Saturday - Sunday
                    </p>
                    <p class="text-[#ABABAB]">
                    ${item.saturdaySunday}
                    </p>
                  </div>
                </div>
                <div class="line w-[100%] h-[1px] bg-[#E1E1E1]"></div>
                <div class="flex flex-col gap-[6px] text-[16px] leading-[186%] tracking-[0.04em]">
                  <a href="tel:${item.phoneNum}">${item.phone}</a>
                  <a href="mailto:${item.mail}">${item.mail}</a>
                </div>
              </div>
    `).join('')
}