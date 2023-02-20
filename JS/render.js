
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
                                <li><a class="link" href=${item.link}>${item.text}</a></li>
    `).join('');
}