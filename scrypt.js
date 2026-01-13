// 1. CONFIGURACIÓN DE EMAILJS
// COMENTARIO: Reemplaza "YOUR_PUBLIC_KEY" con tu Public Key de EmailJS
(function() {
    emailjs.init("YCGFbgFRJPIU3wWP6N"); 
})();

// 2. TRADUCCIONES
const translations = {
    'es': {
        'nav-home': 'Inicio', 'nav-services': 'Servicios', 'nav-contact': 'Contacto',
        'hero-title': 'Vesta Instalaciones', 'hero-subtitle': 'Expertos en refrigeración y ventilación industrial.',
        'services-title': 'Nuestros Servicios', 'service-1-title': 'Instalación', 'service-1-text': 'Sistemas industriales de alta eficiencia.',
        'service-2-title': 'Reparación', 'service-2-text': 'Servicio técnico rápido y garantizado.',
        'service-3-title': 'Mantenimiento', 'service-3-text': 'Planes preventivos para empresas.'
    },
    'en': {
        'nav-home': 'Home', 'nav-services': 'Services', 'nav-contact': 'Contact',
        'hero-title': 'Vesta Installations', 'hero-subtitle': 'Experts in industrial refrigeration and ventilation.',
        'services-title': 'Our Services', 'service-1-title': 'Installation', 'service-1-text': 'High efficiency industrial systems.',
        'service-2-title': 'Repair', 'service-2-text': 'Fast and guaranteed technical service.',
        'service-3-title': 'Maintenance', 'service-3-text': 'Preventive plans for companies.'
    },
    'ru': {
        'nav-home': 'Главная', 'nav-services': 'Услуги', 'nav-contact': 'Контакт',
        'hero-title': 'Vesta Instalaciones', 'hero-subtitle': 'Эксперты в промышленном охлаждении и вентиляции.',
        'services-title': 'Наши услуги', 'service-1-title': 'Монтаж', 'service-1-text': 'Высокоэффективные промышленные системы.',
        'service-2-title': 'Ремонт', 'service-2-text': 'Быстрое и гарантированное обслуживание.',
        'service-3-title': 'Обслуживание', 'service-3-text': 'Планы профилактики для компаний.'
    },
    'ua': {
        'nav-home': 'Головна', 'nav-services': 'Послуги', 'nav-contact': 'Контакт',
        'hero-title': 'Vesta Instalaciones', 'hero-subtitle': 'Експерти з промислового охолодження та вентиляції.',
        'services-title': 'Наші послуги', 'service-1-title': 'Монтаж', 'service-1-text': 'Високоефективні промислові системи.',
        'service-2-title': 'Ремонт', 'service-2-text': 'Швидке та гарантоване обслуговування.',
        'service-3-title': 'Обслуговування', 'service-3-text': 'Плани профілактики для компаній.'
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = translations[lang][key];
    });
    document.documentElement.lang = lang;
}

// 3. OBTENER IP Y ENVIAR EMAIL
async function captureAndSendIP() {
    try {
        // Obtener IP de ipify
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const userIP = data.ip;

        // COMENTARIO: Configura aquí tus IDs de EmailJS
        const serviceID = 'service_y63yrbs'; // Reemplaza con tu Service ID
        const templateID = 'template_gp31v3g'; // Reemplaza con tu Template ID

        const templateParams = {
            ip_address: userIP,
            page_url: window.location.href,
            timestamp: new Date().toLocaleString()
        };

        emailjs.send(serviceID, templateID, templateParams)
            .then(() => {
                console.log('IP enviada correctamente.');
            }, (err) => {
                console.error('Error al enviar IP:', err);
            });

    } catch (error) {
        console.error('Error obteniendo la IP:', error);
    }
}

// Ejecutar al cargar la página
window.onload = captureAndSendIP;