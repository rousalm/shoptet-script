document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
    const currentPath = window.location.pathname;

    if (body) {
        // Tituln� str�nka 
        if (currentPath === '/') {
            console.log('Tituln� str�nka, ��dn� zm�ny pro menu');
            body.classList.add('homepage');
            body.classList.remove('other-pages');
        }
        // Pro v�echny ostatn� str�nky
        else {
            console.log('Ostatn� str�nka, p�id�m t��du "other-pages"');
            body.classList.add('other-pages');
            body.classList.remove('homepage');
        }
    } else {
        console.log('Body not ready');
    }
});



const images = document.querySelectorAll('#produkty .col-md-6 img');

window.addEventListener('scroll', () => {

    images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const windowHeight = window.innerHeight;


        if (rect.top <= windowHeight / 1.5) {
            img.parentElement.classList.add('img-visible');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const navigationWrapper = document.querySelector('.navigation-wrapper');
    const modalClasses = [
        'search-window-visible',
        'cart-window-visible',
        'login-window-visible',
        'register-window-visible'
    ];

    if (!navigationWrapper) {
        console.error('Navigation wrapper nebyl nalezen.');
        return;
    }

    // Funkce pro kontrolu a �pravu visibility navigation-wrapper
    function toggleNavigationWrapper() {
        const isModalVisible = modalClasses.some((className) => body.classList.contains(className));
        if (isModalVisible) {
            navigationWrapper.style.display = 'none'; // Skryje navigation-wrapper
        } else {
            navigationWrapper.style.display = ''; // Obnov� navigation-wrapper
        }
    }

    // Sleduj zm�ny t��d na body
    const observer = new MutationObserver(() => {
        toggleNavigationWrapper();
    });
    observer.observe(body, { attributes: true, attributeFilter: ['class'] });

    // Spu�t�n� kontroly p�i na�ten� str�nky
    toggleNavigationWrapper();
});
