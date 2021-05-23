$(document).ready(function (){
    // brand navbar
    const brandNavbar = document.querySelector('.navbarBrand');
    const hrefBrandNavbar = document.createElement('a');
    hrefBrandNavbar.setAttribute('class', 'navbar-brand');
    hrefBrandNavbar.setAttribute('href', '/index.html'); // change href brand navbar
    hrefBrandNavbar.innerHTML = '<img id="brand-logo" src="/asset/img/logo.png" alt="logo">'; // change source image brand navbar
    brandNavbar.appendChild(hrefBrandNavbar);

    // list navbar menu
    const listNavbarMenu = document.querySelector('.list-navbar-menu');
    const menu = [                                      // edit list menu & path file
        {'name': 'Beranda', 'link': '/index.html'},
        {'name': 'Profile', 'link': '/pages/profile/index.html'},
        {'name': 'Portofolio', 'link': '/pages/portofolio/index.html'}
    ]
    const getUrlPathName = window.location.pathname; 
    menu.map(data => {
        const hrefMenuNavbar = document.createElement('a');
        hrefMenuNavbar.setAttribute('class', 'nav-item nav-link' + (data.link == getUrlPathName ? ' active' : ''));
        hrefMenuNavbar.setAttribute('href', data.link);
        hrefMenuNavbar.innerText = data.name;
        listNavbarMenu.appendChild(hrefMenuNavbar);
    })

    // sosial media footer
    const sosialMediaInfo = document.querySelector('.sosial-media-info');
    const sosialMediaItem = [
        {'link': 'https://www.instagram.com/yoga_prianjaya/', 'icon': 'fa fa-instagram'},
        {'link': 'https://github.com/yogaprianjaya', 'icon': 'fa fa-github'},
        {'link': '#', 'icon': 'fa fa-youtube'}
    ]
    sosialMediaItem.map(data => {
        const hrefSosialMediaItem = document.createElement('a');
        hrefSosialMediaItem.setAttribute('class', 'btn btn-outline-light btn-floating m-1');
        hrefSosialMediaItem.setAttribute('href', data.link);
        hrefSosialMediaItem.setAttribute('target', 'blank');
        hrefSosialMediaItem.setAttribute('role', 'button');
        hrefSosialMediaItem.innerHTML = '<i class="' + data.icon + '"></i>'
        sosialMediaInfo.appendChild(hrefSosialMediaItem);
    })

    // paragraph footer
    const containerParagraphFooter = document.querySelector('.paragraph-footer');
    const paragraphFooter = 'Terimakasih telah mengunjungi website portofolio saya, semoga website ini bermanfaat untuk kita semua.';
    containerParagraphFooter.innerHTML = '<p>' + paragraphFooter + '</p>'

    // copyright footer
    const copyrightFooter = document.querySelector('.copyright-footer');
    const copyrightHref = 'https://www.instagram.com/yoga_prianjaya/';
    copyrightFooter.innerHTML = '© 2021 Copyright: <a class="text-white" href="' + copyrightHref + '" target="blank">Yoga Prianjaya</a>';
})