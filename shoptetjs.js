document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
    const currentPath = window.location.pathname;
    const deliveryBox = document.querySelector('.dklab-delivery-box.position-above-header');

    // delivery box viditelný
    const categoryPaths = [
        '/sirupy/',
        '/sirupy-2/',
        '/kava/',
        '/karamely/',
        '/recepty/',
        '/limitky/',
    ];

    if (body) {
        // úvodní stránka
        if (currentPath === '/') {
            console.log('Titulní stránka, zobrazujeme delivery box');
            body.classList.add('homepage');
            body.classList.remove('other-pages');

            if (deliveryBox) {
                deliveryBox.style.display = 'block';
            }
        }
        // Pokud je to některá z kategorií
        else if (categoryPaths.some(path => currentPath.startsWith(path))) {
            console.log('Na stránce kategorie, zobrazujeme delivery box');
            body.classList.add('homepage');
            body.classList.remove('other-pages');

            if (deliveryBox) {
                deliveryBox.style.display = 'block';
            }
        }
        // Pokud je to konkrétní stránka produktu nebo jiná stránka
        else {
            console.log('Na stránce produktu nebo jiné stránce, skrýváme delivery box');
            body.classList.add('other-pages');
            body.classList.remove('homepage');

            if (deliveryBox) {
                deliveryBox.style.display = 'none';
            }
        }
    } else {
        console.log('Body not ready');
    }

    // Detekce scrollu a animace obrázků
    const images = document.querySelectorAll('#produkty .col-md-6 img');
    if (images.length > 0) {
        window.addEventListener('scroll', () => {
            images.forEach((img) => {
                const rect = img.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top <= windowHeight / 1.5) {
                    img.parentElement.classList.add('img-visible');
                }
            });
        });
    } else {
        console.log('Žádné obrázky nenalezeny v #produkty .col-md-6 img.');
    }

    // Skrytí navigation-wrapper při zobrazení modálního okna
    const navigationWrapper = document.querySelector('.navigation-wrapper');
    const modalClasses = [
        'search-window-visible',
        'cart-window-visible',
        'login-window-visible',
        'register-window-visible',
    ];

    if (navigationWrapper) {
        function toggleNavigationWrapper() {
            const isModalVisible = modalClasses.some((className) => body.classList.contains(className));
            navigationWrapper.style.display = isModalVisible ? 'none' : '';
        }

        // Sleduj změny tříd na body
        const observer = new MutationObserver(() => {
            toggleNavigationWrapper();
        });
        observer.observe(body, { attributes: true, attributeFilter: ['class'] });

        // Spuštění kontroly při načtení stránky
        toggleNavigationWrapper();
    } else {
        console.error('Navigation wrapper nebyl nalezen.');
    }
});

