// ===== VARIABLES GLOBALES OPTIMIZADAS PARA MÓVIL =====
let isMenuOpen = false;
let currentFeature = 0;
const features = document.querySelectorAll('.feature');
// Variables para el sistema de idiomas
let currentLanguage = 'es';
const translations = {};
// Variables para el botón flotante
let isFloatingMenuOpen = false;
// Variables para el selector de idioma flotante
let isLanguageSwitcherOpen = false;
// Variables para el control del navbar
let lastScrollY = 0;
let isScrollingDown = false;
let ticking = false;
// Variables para el navbar responsive
let isNavbarVisible = true;
// Variables para optimización móvil
let isMobile = window.innerWidth <= 1023;
let isReducedMotion = false;
let performanceMode = false;

// ===== CONFIGURACIÓN GLOBAL OPTIMIZADA =====
const CONFIG = {
    ANIMATION_DURATION: isMobile ? 200 : 300,
    SCROLL_THRESHOLD: isMobile ? 5 : 10,
    IMAGE_FORMATS: ['avif', 'webp', 'jpg', 'png'],
    IMAGE_PATHS: {
        hero: './assets/phones/Hero',
        logo: './assets/logo',
        phones: {
            horario: './assets/phones/Horario',
            estaciones: './assets/phones/Estaciones',
            calendario: './assets/phones/Calendario',
            registro: './assets/phones/Registro',
            notificaciones: './assets/phones/Notificaciones',
            referidos: './assets/phones/Referidos'
        },
        downloads: {
            apple: './assets/AppleStore.png',
            google: './assets/GooglePlay.png'
        }
    }
};

// ===== OPTIMIZADOR DE IMÁGENES ULTRA-AVANZADO =====
let imageOptimizer;

// ===== DATOS DE TRADUCCIÓN COMPLETOS =====
const translationData = {
    es: {
        // Meta tags
        'page-title': 'StarFlex - Automatiza tus Bloques de Amazon Flex | Prueba Gratis',
        'page-description': 'Starflex revoluciona Amazon Flex. Automatización inteligente de bloques, optimización de horarios y máximas ganancias. Únete a +15,000 conductores exitosos.',
        'og-title': 'Starflex - La Revolución de Amazon Flex',
        'og-description': 'Automatización inteligente que multiplica tus ganancias. La herramienta que todo conductor profesional necesita.',
        // Navegación
        'nav-home': 'Inicio',
        'nav-features': 'Características',
        'nav-videos': 'Videos',
        'nav-faq': 'FAQ',
        'nav-contact': 'Contacto',
        'nav-cta': 'Comienza tu prueba gratuita',
        'nav-language-title': 'Idioma',
        // Hero Section
        'hero-badge': 'Next-Gen Amazon Flex Revolution',
        'hero-title-main': 'DOMINA LOS',
        'hero-title-highlight': 'BLOQUES DE',
        'hero-title-amazon': 'AMAZON FLEX',
        'hero-company-description': 'Somos una empresa dedicada a mejorar la experiencia laboral de los conductores de Amazon Flex permitiendo seleccionar de forma automática y eficiente los mejores bloques de su preferencia.',
        'hero-subtitle': 'Automatización inteligente de última generación que multiplica tus ganancias. La plataforma más avanzada para conductores profesionales del futuro.',
        'hero-cta-main': 'PRUEBA <strong>GRATUITA</strong>',
        'hero-cta-trial': '3 DÍAS GRATIS',
        'hero-trust': 'Más de 15,000 conductores han transformado sus ganancias',
        'download-google': 'Descargar en Google Play',
        'download-apple': 'Descargar en App Store',
        'download-google-alt': 'Descargar en Google Play',
        'download-apple-alt': 'Descargar en App Store',
        // Features Section
        'features-title': 'Características',
        'features-subtitle': 'Descubre todas las funcionalidades que StarFlex te ofrece para maximizar tus ganancias.',
        // Feature 1: Horario
        'feature-schedule-title': 'HORARIO',
        'feature-schedule-description': 'Elige los días y horarios que prefieres para tus bloques de entrega. Configura tu disponibilidad de manera inteligente y deja que StarFlex encuentre los mejores bloques en tus horarios preferidos.',
        'feature-schedule-item-1': 'Configuración personalizada por día de la semana',
        'feature-schedule-item-2': 'Horarios flexibles adaptados a tu estilo de vida',
        'feature-schedule-item-3': 'Optimización automática de turnos rentables',
        'feature-schedule-item-4': 'Sincronización inteligente con tu calendario personal',
        'feature-schedule-item-5': 'Alertas de disponibilidad en tiempo real',
        // Feature 2: Estaciones
        'feature-stations-title': 'ESTACIONES',
        'feature-stations-description': 'Selecciona tus estaciones preferidas y configura precios mínimos para que nuestra aplicación pueda ofrecerte automáticamente bloques que se ajusten perfectamente a tus preferencias y ubicación.',
        'feature-stations-item-1': 'Selección personalizada de estaciones favoritas',
        'feature-stations-item-2': 'Configuración de precio mínimo por estación',
        'feature-stations-item-3': 'Análisis detallado de rentabilidad por ubicación',
        'feature-stations-item-4': 'Notificaciones instantáneas de bloques disponibles',
        'feature-stations-item-5': 'Mapa interactivo con todas las estaciones cercanas',
        'feature-stations-item-6': 'Filtros avanzados por distancia y tipo de entrega',
        // Feature 3: Calendario
        'feature-calendar-title': 'CALENDARIO',
        'feature-calendar-description': 'En el calendario puedes ver todos tus bloques aceptados y acceder a funciones avanzadas como identificación desde cualquier ubicación, opción de saltar selfie y cancelación rápida de bloques, todo centralizado para tu máxima comodidad.',
        'feature-calendar-item-1': 'Identificación automática desde cualquier ubicación',
        'feature-calendar-item-2': 'Opción inteligente de saltar verificación de selfie',
        'feature-calendar-item-3': 'Cancelación rápida y segura de bloques',
        'feature-calendar-item-4': 'Vista mensual y semanal de tus entregas',
        'feature-calendar-item-5': 'Recordatorios automáticos de bloques próximos',
        // Feature 4: Log
        'feature-log-title': 'LOG',
        'feature-log-description': 'En el log detallado puedes ver todos los bloques disponibles y el motivo específico por el cual algunos fueron ignorados. Esta información te ayudará a ajustar tus filtros y preferencias para optimizar continuamente tus opciones de entrega.',
        'feature-log-item-1': 'Historial completo y detallado de todos los bloques',
        'feature-log-item-2': 'Motivos específicos y detallados de rechazo automático',
        'feature-log-item-3': 'Herramientas de optimización de filtros inteligentes',
        'feature-log-item-4': 'Análisis avanzado de patrones y tendencias',
        'feature-log-item-5': 'Estadísticas de rendimiento y ganancias',
        // Feature 5: Notificaciones
        'feature-notifications-title': 'NOTIFICACIONES',
        'feature-notifications-description': 'StarFlex te mantiene siempre informado con un sistema completo de notificaciones múltiples para que nunca te pierdas los mejores bloques disponibles. Configura tus alertas según tus preferencias específicas y recibe notificaciones en tiempo real.',
        'feature-notifications-item-1': 'Notificaciones Push instantáneas y personalizables',
        'feature-notifications-item-2': 'Alertas automáticas por correo electrónico',
        'feature-notifications-item-3': 'Llamadas telefónicas automáticas para bloques premium',
        'feature-notifications-item-4': 'Mensajes SMS directos y urgentes',
        'feature-notifications-item-5': 'Alertas personalizables por tipo y valor de bloque',
        'feature-notifications-item-6': 'Sistema de notificaciones en tiempo real 24/7',
        'feature-notifications-item-7': 'Filtros avanzados de notificación por prioridad',
        // Feature 6: Referidos
        'feature-referrals-title': 'REFERIDOS',
        'feature-referrals-description': 'Invita a otros conductores a unirse a la revolución StarFlex y obtén beneficios exclusivos por cada referido que se registre exitosamente. Comparte tu experiencia y gana recompensas mientras ayudas a otros conductores a maximizar sus ganancias.',
        'feature-referrals-item-1': 'Enlace único de referido personalizado y rastreable',
        'feature-referrals-item-2': 'Gana 1 semana completamente gratis por cada referido exitoso',
        'feature-referrals-item-3': 'Código QR dinámico para compartir fácilmente',
        'feature-referrals-item-4': 'Panel de seguimiento de referidos en tiempo real',
        'feature-referrals-item-5': 'Bonificaciones adicionales por referidos activos',
        // Videos Section
        'videos-badge': 'Experiencia Visual Inmersiva',
        'videos-title-main': 'VE STARFLEX',
        'videos-title-highlight': 'EN ACCIÓN',
        'videos-subtitle': 'Descubre cómo StarFlex revoluciona tu experiencia con Amazon Flex. Mira la automatización inteligente trabajando en tiempo real.',
        'video-not-supported': 'Tu navegador no soporta videos HTML5. <a href="./assets/StarFlex.mp4">Descargar video</a>.',
        'video-play-title': 'REPRODUCIR DEMO',
        'video-play-subtitle': 'Ver StarFlex en acción',
        'video-info-title': 'StarFlex Demo Completo',
        'video-info-description': 'Observa cómo StarFlex automatiza completamente tu experiencia con Amazon Flex. Desde la configuración inicial hasta la captura automática de bloques.',
        'videos-cta-title': '¿Listo para Transformar tus Ganancias?',
        'videos-cta-subtitle': 'Únete a miles de conductores que ya están maximizando sus ingresos',
        'videos-cta-btn': 'COMENZAR PRUEBA GRATUITA',
        'videos-cta-trial': '3 días completamente gratis',
        'videos-demo-btn': 'VER DEMO PERSONALIZADA',
        // FAQ Section
        'faq-badge': 'Preguntas Frecuentes',
        'faq-title': 'TODO LO QUE NECESITAS SABER',
        'faq-subtitle': 'Resolvemos todas tus dudas sobre StarFlex y cómo puede transformar tu experiencia con Amazon Flex.',
        'faq-search-placeholder': 'Buscar pregunta...',
        'faq-1-question': '¿Cómo funciona StarFlex exactamente?',
        'faq-1-answer': 'StarFlex utiliza <span class="faq__answer-highlight">tecnología de automatización avanzada</span> que monitorea constantemente la aplicación de Amazon Flex en busca de bloques que coincidan con tus preferencias configuradas. Cuando encuentra un bloque que cumple tus criterios de horario, ubicación y precio mínimo, lo acepta automáticamente por ti.',
        'faq-2-question': '¿Es seguro usar StarFlex? ¿Puede afectar mi cuenta de Amazon Flex?',
        'faq-2-answer': 'Sí, StarFlex es completamente seguro. Utilizamos <span class="faq__answer-highlight">protocolos de seguridad de nivel empresarial</span> y técnicas de automatización que simulan el comportamiento humano natural. Miles de conductores han usado StarFlex durante años sin ningún problema con sus cuentas de Amazon Flex.',
        'faq-3-question': '¿StarFlex puede ser detectado por Amazon?',
        'faq-3-answer': 'StarFlex utiliza <span class="faq__answer-highlight">tecnología avanzada de simulación humana</span> que incluye patrones de comportamiento naturales, tiempos de respuesta variables y gestos táctiles realistas. Nuestro enfoque se centra en ayudar a los conductores a brindar un mejor servicio a Amazon y sus clientes, asegurando entregas eficientes y de alta calidad.',
        'faq-4-question': '¿StarFlex funciona en iPhone y Android?',
        'faq-4-answer': 'Sí, StarFlex está disponible para <span class="faq__answer-highlight">iOS (iPhone 8+) y Android (8.0+)</span>. Hemos desarrollado aplicaciones nativas optimizadas para cada plataforma, garantizando el mejor rendimiento y una experiencia de usuario superior. Ambas versiones incluyen todas las funcionalidades y reciben actualizaciones automáticas.',
        'faq-5-question': '¿Qué necesito para empezar a usar StarFlex?',
        'faq-5-answer': 'Solo necesitas una <span class="faq__answer-highlight">cuenta activa de Amazon Flex y un dispositivo compatible</span>. Después de descargar la aplicación, el proceso de configuración toma menos de 5 minutos. Nuestro sistema de configuración guiada te ayudará a optimizar tu experiencia desde el primer día.',
        'faq-no-results': 'No se encontraron preguntas que coincidan con tu búsqueda',
        'faq-no-results-suggestion': 'Intenta con términos diferentes o contacta nuestro soporte',
        // Contact Section
        'contact-badge': 'Conecta con el Futuro',
        'contact-title-main': 'MEJORES BLOQUES DE',
        'contact-title-highlight': 'AMAZON FLEX',
        'contact-subtitle': 'No olvides seguirnos en nuestras redes sociales ya que publicamos diariamente en nuestros canales la recopilación de los mejores bloques aceptados y así podrás estar al tanto de los horarios y ubicaciones más rentables.',
        'contact-whatsapp-title': 'Canales de noticias de WhatsApp',
        'contact-whatsapp-description': 'Únete a nuestro canal de WhatsApp para recibir las últimas actualizaciones y mejores bloques disponibles',
        'contact-whatsapp-btn': 'Unirse',
        'contact-instagram-title': 'Instagram',
        'contact-instagram-description': 'Síguenos para contenido visual, tips y actualizaciones diarias sobre los mejores bloques',
        'contact-instagram-btn': 'Seguir',
        'contact-facebook-title': 'Facebook',
        'contact-facebook-description': 'Únete a nuestra comunidad en Facebook para interactuar con otros conductores y compartir experiencias',
        'contact-facebook-btn': 'Seguir',
        'contact-tiktok-title': 'TikTok',
        'contact-tiktok-description': 'Descubre contenido viral, tips rápidos y las últimas tendencias de Amazon Flex',
        'contact-tiktok-btn': 'Seguir',
        'contact-telegram-title': 'Canales de noticias de Telegram',
        'contact-telegram-description': 'Recibe notificaciones instantáneas de los mejores bloques y actualizaciones importantes',
        'contact-telegram-btn': 'Unirse',
        'contact-email-title': 'support@starflexapp.com',
        'contact-email-description': 'Contacta directamente con nuestro equipo de soporte técnico especializado',
        'contact-email-btn': 'Contactar',
        // Footer
        'footer-legal': 'Política de Privacidad • Términos y Condiciones',
        'footer-copyright': '© StarFlex • Todos los derechos reservados',
        'footer-cta-main': 'COMENZAR AHORA',
        'footer-cta-trial': '3 días gratis'
    },
    en: {
        // Meta tags
        'page-title': 'StarFlex - Automate your Amazon Flex Blocks | Free Trial',
        'page-description': 'Starflex revolutionizes Amazon Flex. Intelligent block automation, schedule optimization and maximum earnings. Join +15,000 successful drivers.',
        'og-title': 'Starflex - The Amazon Flex Revolution',
        'og-description': 'Intelligent automation that multiplies your earnings. The tool every professional driver needs.',
        // Navegación
        'nav-home': 'Home',
        'nav-features': 'Features',
        'nav-videos': 'Videos',
        'nav-faq': 'FAQ',
        'nav-contact': 'Contact',
        'nav-cta': 'Start your free trial',
        'nav-language-title': 'Language',
        // Hero Section
        'hero-badge': 'Next-Gen Amazon Flex Revolution',
        'hero-title-main': 'MASTER THE',
        'hero-title-highlight': 'AMAZON FLEX',
        'hero-title-amazon': 'BLOCKS',
        'hero-company-description': 'We are a company dedicated to improving the work experience of Amazon Flex drivers by allowing them to automatically and efficiently select the best blocks of their preference.',
        'hero-subtitle': 'Next-generation intelligent automation that multiplies your earnings. The most advanced platform for professional drivers of the future.',
        'hero-cta-main': '<strong>FREE</strong> TRIAL',
        'hero-cta-trial': '3 DAYS FREE',
        'hero-trust': 'More than 15,000 drivers have transformed their earnings',
        'download-google': 'Download on Google Play',
        'download-apple': 'Download on App Store',
        'download-google-alt': 'Download on Google Play',
        'download-apple-alt': 'Download on App Store',
        // Features Section
        'features-title': 'Features',
        'features-subtitle': 'Discover all the functionalities that StarFlex offers you to maximize your earnings.',
        // Feature 1: Schedule
        'feature-schedule-title': 'SCHEDULE',
        'feature-schedule-description': 'Choose the days and times you prefer for your delivery blocks. Configure your availability intelligently and let StarFlex find the best blocks in your preferred schedules.',
        'feature-schedule-item-1': 'Personalized configuration per day of the week',
        'feature-schedule-item-2': 'Flexible schedules adapted to your lifestyle',
        'feature-schedule-item-3': 'Automatic optimization of profitable shifts',
        'feature-schedule-item-4': 'Intelligent synchronization with your personal calendar',
        'feature-schedule-item-5': 'Real-time availability alerts',
        // Feature 2: Stations
        'feature-stations-title': 'STATIONS',
        'feature-stations-description': 'Select your preferred stations and configure minimum prices so our application can automatically offer you blocks that perfectly fit your preferences and location.',
        'feature-stations-item-1': 'Personalized selection of favorite stations',
        'feature-stations-item-2': 'Minimum price configuration per station',
        'feature-stations-item-3': 'Detailed profitability analysis by location',
        'feature-stations-item-4': 'Instant notifications of available blocks',
        'feature-stations-item-5': 'Interactive map with all nearby stations',
        'feature-stations-item-6': 'Advanced filters by distance and delivery type',
        // Feature 3: Calendar
        'feature-calendar-title': 'CALENDAR',
        'feature-calendar-description': 'In the calendar you can see all your accepted blocks and access advanced functions like identification from any location, option to skip selfie and quick block cancellation, all centralized for your maximum convenience.',
        'feature-calendar-item-1': 'Automatic identification from any location',
        'feature-calendar-item-2': 'Smart option to skip selfie verification',
        'feature-calendar-item-3': 'Quick and secure block cancellation',
        'feature-calendar-item-4': 'Monthly and weekly view of your deliveries',
        'feature-calendar-item-5': 'Automatic reminders of upcoming blocks',
        // Feature 4: Log
        'feature-log-title': 'LOG',
        'feature-log-description': 'In the detailed log you can see all available blocks and the specific reason why some were ignored. This information will help you adjust your filters and preferences to continuously optimize your delivery options.',
        'feature-log-item-1': 'Complete and detailed history of all blocks',
        'feature-log-item-2': 'Specific and detailed reasons for automatic rejection',
        'feature-log-item-3': 'Smart filter optimization tools',
        'feature-log-item-4': 'Advanced pattern and trend analysis',
        'feature-log-item-5': 'Performance and earnings statistics',
        // Feature 5: Notifications
        'feature-notifications-title': 'NOTIFICATIONS',
        'feature-notifications-description': 'StarFlex keeps you always informed with a complete system of multiple notifications so you never miss the best available blocks. Configure your alerts according to your specific preferences and receive real-time notifications.',
        'feature-notifications-item-1': 'Instant and customizable Push notifications',
        'feature-notifications-item-2': 'Automatic email alerts',
        'feature-notifications-item-3': 'Automatic phone calls for premium blocks',
        'feature-notifications-item-4': 'Direct and urgent SMS messages',
        'feature-notifications-item-5': 'Customizable alerts by block type and value',
        'feature-notifications-item-6': '24/7 real-time notification system',
        'feature-notifications-item-7': 'Advanced notification filters by priority',
        // Feature 6: Referrals
        'feature-referrals-title': 'REFERRALS',
        'feature-referrals-description': 'Invite other drivers to join the StarFlex revolution and get exclusive benefits for each referral that successfully registers. Share your experience and earn rewards while helping other drivers maximize their earnings.',
        'feature-referrals-item-1': 'Unique personalized and trackable referral link',
        'feature-referrals-item-2': 'Earn 1 completely free week for each successful referral',
        'feature-referrals-item-3': 'Dynamic QR code for easy sharing',
        'feature-referrals-item-4': 'Real-time referral tracking panel',
        'feature-referrals-item-5': 'Additional bonuses for active referrals',
        // Videos Section
        'videos-badge': 'Immersive Visual Experience',
        'videos-title-main': 'SEE STARFLEX',
        'videos-title-highlight': 'IN ACTION',
        'videos-subtitle': 'Discover how StarFlex revolutionizes your Amazon Flex experience. Watch intelligent automation working in real time.',
        'video-not-supported': 'Your browser does not support HTML5 videos. <a href="./assets/StarFlex.mp4">Download video</a>.',
        'video-play-title': 'PLAY DEMO',
        'video-play-subtitle': 'See StarFlex in action',
        'video-info-title': 'Complete StarFlex Demo',
        'video-info-description': 'Watch how StarFlex completely automates your Amazon Flex experience. From initial setup to automatic block capture.',
        'videos-cta-title': 'Ready to Transform Your Earnings?',
        'videos-cta-subtitle': 'Join thousands of drivers who are already maximizing their income',
        'videos-cta-btn': 'START FREE TRIAL',
        'videos-cta-trial': '3 days completely free',
        'videos-demo-btn': 'SEE PERSONALIZED DEMO',
        // FAQ Section
        'faq-badge': 'Frequently Asked Questions',
        'faq-title': 'EVERYTHING YOU NEED TO KNOW',
        'faq-subtitle': 'We answer all your questions about StarFlex and how it can transform your Amazon Flex experience.',
        'faq-search-placeholder': 'Search question...',
        'faq-1-question': 'How does StarFlex work exactly?',
        'faq-1-answer': 'StarFlex uses <span class="faq__answer-highlight">advanced automation technology</span> that constantly monitors the Amazon Flex app for blocks that match your configured preferences. When it finds a block that meets your schedule, location, and minimum price criteria, it automatically accepts it for you.',
        'faq-2-question': 'Is StarFlex safe to use? Can it affect my Amazon Flex account?',
        'faq-2-answer': 'Yes, StarFlex is completely safe. We use <span class="faq__answer-highlight">enterprise-level security protocols</span> and automation techniques that simulate natural human behavior. Thousands of drivers have used StarFlex for years without any issues with their Amazon Flex accounts.',
        'faq-3-question': 'Can StarFlex be detected by Amazon?',
        'faq-3-answer': 'StarFlex uses <span class="faq__answer-highlight">advanced human simulation technology</span> that includes natural behavior patterns, variable response times and realistic touch gestures. Our approach focuses on helping drivers provide better service to Amazon and its customers, ensuring efficient and high-quality deliveries.',
        'faq-4-question': 'Does StarFlex work on iPhone and Android?',
        'faq-4-answer': 'Yes, StarFlex is available for <span class="faq__answer-highlight">iOS (iPhone 8+) and Android (8.0+)</span>. We have developed native applications optimized for each platform, guaranteeing the best performance and superior user experience. Both versions include all functionalities and receive automatic updates.',
        'faq-5-question': 'What do I need to start using StarFlex?',
        'faq-5-answer': 'You only need an <span class="faq__answer-highlight">active Amazon Flex account and a compatible device</span>. After downloading the application, the setup process takes less than 5 minutes. Our guided setup system will help you optimize your experience from day one.',
        'faq-no-results': 'No questions found matching your search',
        'faq-no-results-suggestion': 'Try different terms or contact our support',
        // Contact Section
        'contact-badge': 'Connect with the Future',
        'contact-title-main': 'BEST BLOCKS OF',
        'contact-title-highlight': 'AMAZON FLEX',
        'contact-subtitle': 'Don\'t forget to follow us on our social networks as we publish daily on our channels the compilation of the best accepted blocks so you can stay up to date with the most profitable schedules and locations.',
        'contact-whatsapp-title': 'WhatsApp news channels',
        'contact-whatsapp-description': 'Join our WhatsApp channel to receive the latest updates and best blocks available',
        'contact-whatsapp-btn': 'Join',
        'contact-instagram-title': 'Instagram',
        'contact-instagram-description': 'Follow us for visual content, tips and daily updates on the best blocks',
        'contact-instagram-btn': 'Follow',
        'contact-facebook-title': 'Facebook',
        'contact-facebook-description': 'Join our community on Facebook to interact with other drivers and share experiences',
        'contact-facebook-btn': 'Follow',
        'contact-tiktok-title': 'TikTok',
        'contact-tiktok-description': 'Discover viral content, quick tips and the latest Amazon Flex trends',
        'contact-tiktok-btn': 'Follow',
        'contact-telegram-title': 'Telegram news channels',
        'contact-telegram-description': 'Receive instant notifications of the best blocks and important updates',
        'contact-telegram-btn': 'Join',
        'contact-email-title': 'support@starflexapp.com',
        'contact-email-description': 'Contact our specialized technical support team directly',
        'contact-email-btn': 'Contact',
        // Footer
        'footer-legal': 'Privacy Policy • Terms and Conditions',
        'footer-copyright': '© StarFlex • All rights reserved',
        'footer-cta-main': 'START NOW',
        'footer-cta-trial': '3 days free'
    }
};

// ===== DETECCIÓN DE DISPOSITIVO Y CAPACIDADES ULTRA-OPTIMIZADA =====
function detectDeviceCapabilities() {
    isMobile = window.innerWidth <= 1023;
    isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Detectar dispositivos de baja potencia más agresivamente
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowConnection = connection && (
        connection.effectiveType === 'slow-2g' || 
        connection.effectiveType === '2g' || 
        connection.effectiveType === '3g'
    );
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const isLowMemory = navigator.deviceMemory && navigator.deviceMemory <= 4;
    
    performanceMode = isMobile && (isSlowConnection || isLowEndDevice || isReducedMotion || isLowMemory);
    
    if (performanceMode) {
        document.body.classList.add('performance-mode');
        // Deshabilitar animaciones CSS
        const style = document.createElement('style');
        style.textContent = `
            .performance-mode * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.1s !important;
            }
            .performance-mode .features::before,
            .performance-mode .features::after {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
        console.log('Modo de rendimiento activado para dispositivo de baja potencia');
    }
}

// ===== DETECCIÓN DE SOPORTE DE FORMATOS DE IMAGEN OPTIMIZADA =====
function detectImageFormats() {
    return new Promise((resolve) => {
        const formats = { avif: false, webp: false };
        let pending = 2;
        
        const checkComplete = () => {
            pending--;
            if (pending === 0) {
                if (formats.avif) document.documentElement.classList.add('avif');
                if (formats.webp) document.documentElement.classList.add('webp');
                resolve(formats);
            }
        };
        
        // Test AVIF
        const avifImg = new Image();
        avifImg.onload = avifImg.onerror = () => {
            formats.avif = avifImg.width > 0;
            checkComplete();
        };
        avifImg.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
        
        // Test WebP
        const webpImg = new Image();
        webpImg.onload = webpImg.onerror = () => {
            formats.webp = webpImg.width > 0;
            checkComplete();
        };
        webpImg.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
}

// ===== CLASE OPTIMIZADORA DE IMÁGENES ULTRA-AVANZADA =====
class UltraOptimizedImageLoader {
    constructor() {
        this.cache = new Map();
        this.intersectionObserver = null;
        this.supportedFormats = { avif: false, webp: false };
        this.loadingQueue = new Set();
        this.maxConcurrentLoads = isMobile ? 2 : 4;
        this.currentLoads = 0;
    }

    async init() {
        this.supportedFormats = await detectImageFormats();
        this.setupLazyLoading();
        this.preloadCriticalImages();
    }

    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            this.intersectionObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            const imageKey = img.dataset.imageKey;
                            if (imageKey) {
                                this.loadImage(img, imageKey);
                                this.intersectionObserver.unobserve(img);
                            }
                        }
                    });
                },
                {
                    rootMargin: isMobile ? '50px' : '100px',
                    threshold: 0.1
                }
            );
        }
    }

    getBestImageUrl(basePath) {
        if (this.supportedFormats.avif) {
            return `${basePath}.avif`;
        } else if (this.supportedFormats.webp) {
            return `${basePath}.webp`;
        } else {
            return `${basePath}.jpg`;
        }
    }

    async loadImage(element, imageKey) {
        if (this.currentLoads >= this.maxConcurrentLoads) {
            this.loadingQueue.add({ element, imageKey });
            return;
        }

        this.currentLoads++;
        
        try {
            const config = this.getImageConfig(imageKey);
            if (!config) return;

            const cacheKey = `${imageKey}_${isMobile ? 'mobile' : 'desktop'}`;
            
            if (this.cache.has(cacheKey)) {
                this.applyImage(element, this.cache.get(cacheKey));
                return;
            }

            const imageUrl = this.getBestImageUrl(config.path);
            await this.preloadImage(imageUrl);
            
            this.cache.set(cacheKey, imageUrl);
            this.applyImage(element, imageUrl);
            
        } catch (error) {
            console.warn(`Error cargando imagen ${imageKey}:`, error);
        } finally {
            this.currentLoads--;
            this.processQueue();
        }
    }

    processQueue() {
        if (this.loadingQueue.size > 0 && this.currentLoads < this.maxConcurrentLoads) {
            const next = this.loadingQueue.values().next().value;
            this.loadingQueue.delete(next);
            this.loadImage(next.element, next.imageKey);
        }
    }

    preloadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    }

    applyImage(element, src) {
        if (element.tagName === 'IMG') {
            element.src = src;
            element.classList.add('loaded');
        } else {
            element.style.backgroundImage = `url(${src})`;
            element.classList.add('loaded');
        }
    }

    getImageConfig(imageKey) {
        const keys = imageKey.split('.');
        let config = CONFIG.IMAGE_PATHS;
        
        for (const key of keys) {
            config = config[key];
            if (!config) return null;
        }
        
        return { path: config };
    }

    preloadCriticalImages() {
        const criticalImages = ['hero', 'logo'];
        criticalImages.forEach(key => {
            const config = this.getImageConfig(key);
            if (config) {
                const url = this.getBestImageUrl(config.path);
                this.preloadImage(url).catch(() => {});
            }
        });
    }

    observeImage(element, imageKey) {
        if (this.intersectionObserver) {
            element.dataset.imageKey = imageKey;
            this.intersectionObserver.observe(element);
        } else {
            this.loadImage(element, imageKey);
        }
    }

    loadImageImmediately(element, imageKey) {
        this.loadImage(element, imageKey);
    }
}

// ===== SISTEMA DE IDIOMAS OPTIMIZADO =====
function initializeLanguageSystem() {
    currentLanguage = localStorage.getItem('starflex-language') || 'es';
    translations[currentLanguage] = translationData[currentLanguage];
    applyTranslations();
    updateLanguageButtons();
}

function initializeLanguageSwitcher() {
    const languageOptions = document.querySelectorAll('.nav__language-option');
    
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.dataset.lang;
            if (lang && lang !== currentLanguage) {
                switchLanguage(lang);
            }
        });
    });
}

function switchLanguage(newLanguage) {
    if (newLanguage === currentLanguage) return;
    
    currentLanguage = newLanguage;
    localStorage.setItem('starflex-language', newLanguage);
    translations[currentLanguage] = translationData[currentLanguage];
    
    applyTranslations();
    updateLanguageButtons();
    
    // Actualizar meta tags
    document.title = translations[currentLanguage]['page-title'];
    document.querySelector('meta[name="description"]').content = translations[currentLanguage]['page-description'];
    document.querySelector('meta[property="og:title"]').content = translations[currentLanguage]['og-title'];
    document.querySelector('meta[property="og:description"]').content = translations[currentLanguage]['og-description'];
}

function applyTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.dataset.translate;
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });
    
    // Actualizar atributos aria-label
    const ariaElements = document.querySelectorAll('[data-translate-aria]');
    ariaElements.forEach(element => {
        const key = element.dataset.translateAria;
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.setAttribute('aria-label', translations[currentLanguage][key]);
        }
    });
    
    // Actualizar atributos alt
    const altElements = document.querySelectorAll('[data-translate-alt]');
    altElements.forEach(element => {
        const key = element.dataset.translateAlt;
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.setAttribute('alt', translations[currentLanguage][key]);
        }
    });
}

function updateLanguageButtons() {
    const languageOptions = document.querySelectorAll('.nav__language-option');
    languageOptions.forEach(option => {
        const lang = option.dataset.lang;
        if (lang === currentLanguage) {
            option.classList.add('active');
            option.setAttribute('aria-pressed', 'true');
        } else {
            option.classList.remove('active');
            option.setAttribute('aria-pressed', 'false');
        }
    });
}

// ===== WIDGET FLOTANTE OPTIMIZADO =====
function initializeFloatingWidget() {
    const floatingBtn = document.getElementById('floating-btn');
    const floatingMenu = document.getElementById('floating-menu');
    
    if (!floatingBtn || !floatingMenu) return;
    
    floatingBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleFloatingMenu();
    });
    
    // Cerrar al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (isFloatingMenuOpen && !floatingBtn.contains(e.target) && !floatingMenu.contains(e.target)) {
            closeFloatingMenu();
        }
    });
    
    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isFloatingMenuOpen) {
            closeFloatingMenu();
        }
    });
}

function toggleFloatingMenu() {
    if (isFloatingMenuOpen) {
        closeFloatingMenu();
    } else {
        openFloatingMenu();
    }
}

function openFloatingMenu() {
    const floatingBtn = document.getElementById('floating-btn');
    const floatingMenu = document.getElementById('floating-menu');
    
    if (!floatingBtn || !floatingMenu) return;
    
    isFloatingMenuOpen = true;
    floatingBtn.classList.add('active');
    floatingMenu.classList.add('active');
    floatingBtn.setAttribute('aria-expanded', 'true');
    floatingMenu.setAttribute('aria-hidden', 'false');
}

function closeFloatingMenu() {
    const floatingBtn = document.getElementById('floating-btn');
    const floatingMenu = document.getElementById('floating-menu');
    
    if (!floatingBtn || !floatingMenu) return;
    
    isFloatingMenuOpen = false;
    floatingBtn.classList.remove('active');
    floatingMenu.classList.remove('active');
    floatingBtn.setAttribute('aria-expanded', 'false');
    floatingMenu.setAttribute('aria-hidden', 'true');
}

// ===== NAVEGACIÓN ULTRA-OPTIMIZADA =====
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', toggleMobileMenu);
        
        // Cerrar menú al hacer clic en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    closeMobileMenu();
                    smoothScrollToSection(href.substring(1));
                }
            });
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (isMenuOpen && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
    
    initializeKeyboardNavigation();
    initializeActiveSection();
}

function toggleMobileMenu() {
    if (isMenuOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;
    
    if (!navToggle || !navMenu) return;
    
    isMenuOpen = true;
    navToggle.classList.add('active');
    navMenu.classList.add('active');
    body.classList.add('no-scroll');
    navToggle.setAttribute('aria-expanded', 'true');
    navMenu.setAttribute('aria-hidden', 'false');
    
    const navLanguageMobile = navMenu.querySelector('.nav__language-mobile');
    const navLinks = navMenu.querySelectorAll('.nav__link');
    const navCtaMobile = navMenu.querySelector('.nav__cta-mobile');
    
    if (navLanguageMobile) {
        navLanguageMobile.style.opacity = '0';
        navLanguageMobile.style.transform = 'translateY(15px)';
        setTimeout(() => {
            navLanguageMobile.style.transition = `all ${isMobile ? '0.2s' : '0.3s'} ease`;
            navLanguageMobile.style.opacity = '1';
            navLanguageMobile.style.transform = 'translateY(0)';
        }, isMobile ? 30 : 50);
    }
    
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(15px)';
        setTimeout(() => {
            link.style.transition = `all ${isMobile ? '0.2s' : '0.3s'} ease`;
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, (index + 1) * (isMobile ? 40 : 60) + (isMobile ? 60 : 100));
    });
    
    if (navCtaMobile) {
        navCtaMobile.style.opacity = '0';
        navCtaMobile.style.transform = 'translateY(15px)';
        setTimeout(() => {
            navCtaMobile.style.transition = `all ${isMobile ? '0.2s' : '0.3s'} ease`;
            navCtaMobile.style.opacity = '1';
            navCtaMobile.style.transform = 'translateY(0)';
        }, navLinks.length * (isMobile ? 40 : 60) + (isMobile ? 120 : 160));
    }
}

function closeMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;
    
    if (!navToggle || !navMenu) return;
    
    isMenuOpen = false;
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    body.classList.remove('no-scroll');
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('aria-hidden', 'true');
    
    // Resetear estilos de animación
    const animatedElements = navMenu.querySelectorAll('.nav__language-mobile, .nav__link, .nav__cta-mobile');
    animatedElements.forEach(element => {
        element.style.transition = '';
        element.style.opacity = '';
        element.style.transform = '';
    });
}

function smoothScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = section.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

function initializeKeyboardNavigation() {
    const navLinks = document.querySelectorAll('.nav__link, .nav__cta');
    const navToggle = document.getElementById('nav-toggle');
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMobileMenu();
        }
        
        if (e.key === 'Tab' && isMenuOpen) {
            handleTabTrap(e);
        }
    });
    
    // Mejorar accesibilidad táctil en móvil
    if (isMobile) {
        navLinks.forEach(link => {
            link.addEventListener('touchstart', () => {
                link.style.transform = 'scale(0.95)';
            });
            link.addEventListener('touchend', () => {
                link.style.transform = '';
            });
        });
        
        if (navToggle) {
            navToggle.addEventListener('touchstart', () => {
                navToggle.style.transform = 'scale(0.9)';
            });
            navToggle.addEventListener('touchend', () => {
                navToggle.style.transform = '';
            });
        }
    }
}

function handleTabTrap(e) {
    const navMenu = document.getElementById('nav-menu');
    if (!navMenu || !isMenuOpen) return;
    
    const focusableElements = navMenu.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey) {
        if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        }
    } else {
        if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
}

function initializeActiveSection() {
    updateActiveNavLink();
    window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
}

// ===== EFECTOS DE SCROLL ULTRA-OPTIMIZADOS =====
function initializeScrollEffects() {
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScrollDirection();
                updateActiveNavOnScroll();
                updateHeaderOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
}

function handleScrollDirection() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        if (!isScrollingDown) {
            isScrollingDown = true;
            if (!isMenuOpen) {
                document.querySelector('.header')?.classList.add('header--hidden');
            }
        }
    } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        if (isScrollingDown) {
            isScrollingDown = false;
            document.querySelector('.header')?.classList.remove('header--hidden');
        }
    }
    
    lastScrollY = currentScrollY;
}

function updateActiveNavOnScroll() {
    updateActiveNavLink();
}

function updateHeaderOnScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
}

// ===== REPRODUCTOR DE VIDEO ULTRA-OPTIMIZADO =====
function initializeVideoPlayer() {
    const video = document.getElementById('demo-video');
    const playBtn = document.getElementById('video-play-btn');
    const progressBar = document.getElementById('video-progress');
    const currentTimeSpan = document.getElementById('video-current-time');
    const durationSpan = document.getElementById('video-duration');
    const videoContainer = document.querySelector('.videos__player-container');
    
    if (!video || !playBtn) return;
    
    let isPlaying = false;
    
    // Configuración inicial del video
    video.preload = isMobile ? 'metadata' : 'auto';
    video.muted = true;
    
    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            video.pause();
        } else {
            video.play().catch(e => {
                console.error('Error reproduciendo video:', e);
                showVideoError();
            });
        }
    });
    
    video.addEventListener('play', () => {
        isPlaying = true;
        playBtn.classList.add('playing');
        videoContainer?.classList.add('playing');
    });
    
    video.addEventListener('pause', () => {
        isPlaying = false;
        playBtn.classList.remove('playing');
        videoContainer?.classList.remove('playing');
    });
    
    video.addEventListener('timeupdate', () => {
        if (progressBar && video.duration) {
            const progress = (video.currentTime / video.duration) * 100;
            progressBar.style.width = `${progress}%`;
        }
        
        if (currentTimeSpan) {
            currentTimeSpan.textContent = formatTime(video.currentTime);
        }
    });
    
    video.addEventListener('loadedmetadata', () => {
        if (durationSpan) {
            durationSpan.textContent = formatTime(video.duration);
        }
    });
    
    video.addEventListener('ended', () => {
        isPlaying = false;
        playBtn.classList.remove('playing');
        videoContainer?.classList.remove('playing');
        if (progressBar) progressBar.style.width = '0%';
    });
    
    video.addEventListener('error', showVideoError);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function showVideoError() {
    const videoContainer = document.querySelector('.videos__player-container');
    if (videoContainer) {
        videoContainer.innerHTML = `
            <div class="video-error">
                <p>Error cargando el video. <a href="./assets/StarFlex.mp4" target="_blank">Ver video</a></p>
            </div>
        `;
    }
}

// ===== FAQ ULTRA-OPTIMIZADO =====
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq__item');
    const searchInput = document.getElementById('faq-search');
    const noResults = document.getElementById('faq-no-results');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        const answer = item.querySelector('.faq__answer');
        
        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Cerrar otros items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq__answer');
                        const otherQuestion = otherItem.querySelector('.faq__question');
                        if (otherAnswer) otherAnswer.classList.remove('active');
                        if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
                    }
                });
                
                if (isActive) {
                    item.classList.remove('active');
                    answer.classList.remove('active');
                    question.setAttribute('aria-expanded', 'false');
                } else {
                    item.classList.add('active');
                    answer.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                }
            });

            // Mejor feedback táctil en móvil
            if (isMobile) {
                question.addEventListener('touchstart', () => {
                    question.style.transform = 'scale(0.98)';
                });
                question.addEventListener('touchend', () => {
                    question.style.transform = '';
                });
            }
        }
    });
    
    // Funcionalidad de búsqueda
    if (searchInput) {
        searchInput.addEventListener('input', debounce((e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            let visibleItems = 0;
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq__question-text');
                const answer = item.querySelector('.faq__answer-text');
                
                if (question && answer) {
                    const questionText = question.textContent.toLowerCase();
                    const answerText = answer.textContent.toLowerCase();
                    
                    if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
                        item.style.display = 'block';
                        visibleItems++;
                    } else {
                        item.style.display = 'none';
                        item.classList.remove('active');
                    }
                }
            });
            
            if (noResults) {
                noResults.style.display = visibleItems === 0 && searchTerm ? 'block' : 'none';
            }
        }, 300));
    }
}

// ===== INTERSECTION OBSERVER ULTRA-OPTIMIZADO =====
function initializeIntersectionObserver() {
    if (!('IntersectionObserver' in window)) return;
    
    const observerOptions = {
        threshold: isMobile ? 0.1 : 0.2,
        rootMargin: isMobile ? '50px' : '100px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                if (element.classList.contains('feature')) {
                    animateFeature(element);
                } else {
                    element.classList.add('in-view');
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observar elementos
    const elementsToObserve = document.querySelectorAll('.feature, .videos__content, .faq__item, .contact__channel');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
}

function animateFeature(feature) {
    feature.classList.add('in-view');
    
    // Animar elementos internos con delay
    const content = feature.querySelector('.feature__content');
    const phone = feature.querySelector('.feature__phone');
    
    if (content) {
        setTimeout(() => {
            content.classList.add('animated');
        }, 200);
    }
    
    if (phone) {
        setTimeout(() => {
            phone.classList.add('animated');
        }, 400);
    }
}

// ===== CARGA LAZY DE IMÁGENES ULTRA-OPTIMIZADA =====
function setupImageLazyLoading() {
    const waitForOptimizer = () => {
        if (!imageOptimizer) {
            setTimeout(waitForOptimizer, 100);
            return;
        }
        
        // Logo del navbar (crítico)
        const navLogo = document.querySelector('.nav__logo');
        if (navLogo) {
            imageOptimizer.loadImageImmediately(navLogo, 'logo');
        }
        
        // Imagen del hero (crítica)
        const heroImage = document.querySelector('.hero__phone-app-image');
        if (heroImage) {
            imageOptimizer.loadImageImmediately(heroImage, 'hero');
        }
        
        // Imágenes de características
        const featureImages = document.querySelectorAll('.phone__app-image');
        featureImages.forEach((img, index) => {
            const imageKeys = [
                'phones.horario',
                'phones.estaciones',
                'phones.calendario',
                'phones.registro',
                'phones.notificaciones',
                'phones.referidos'
            ];
            
            if (imageKeys[index]) {
                if (performanceMode) {
                    imageOptimizer.loadImageImmediately(img, imageKeys[index]);
                } else {
                    imageOptimizer.observeImage(img, imageKeys[index]);
                }
            }
        });
        
        // Botones de descarga
        const appleBtn = document.querySelector('.download-btn--app-store .download-btn__image');
        const googleBtn = document.querySelector('.download-btn--google .download-btn__image');
        
        if (appleBtn) {
            imageOptimizer.loadImageImmediately(appleBtn, 'downloads.apple');
        }
        if (googleBtn) {
            imageOptimizer.loadImageImmediately(googleBtn, 'downloads.google');
        }
    };
    
    waitForOptimizer();
}

// ===== VIDEO HERO ULTRA-OPTIMIZADO =====
function initializeHeroVideoFallback() {
    const heroVideo = document.getElementById('hero-video');
    const heroFallbackImage = document.querySelector('.hero__phone-app-image');
    const heroMobileVideo = document.getElementById('hero-mobile-video');
    
    // Configurar video móvil
    if (heroMobileVideo && isMobile) {
        heroMobileVideo.muted = true;
        heroMobileVideo.autoplay = true;
        heroMobileVideo.loop = true;
        heroMobileVideo.playsInline = true;
        heroMobileVideo.preload = 'auto';
        
        heroMobileVideo.addEventListener('loadeddata', () => {
            console.log('Video móvil del hero cargado correctamente');
        });
        
        heroMobileVideo.addEventListener('error', (e) => {
            console.error('Error cargando video móvil del hero:', e);
            const mobileVideoContainer = document.querySelector('.hero__mobile-video');
            if (mobileVideoContainer) {
                mobileVideoContainer.style.display = 'none';
            }
        });
    }
    
    if (!heroVideo || !heroFallbackImage) return;
    
    // En móvil, usar siempre imagen estática para el video del teléfono
    if (isMobile) {
        heroVideo.style.display = 'none';
        heroFallbackImage.style.display = 'block';
        heroFallbackImage.style.zIndex = '2';
        console.log('Video del teléfono deshabilitado en móvil, usando imagen estática');
        return;
    }
    
    // En desktop, intentar cargar video del teléfono
    heroVideo.muted = true;
    heroVideo.autoplay = true;
    heroVideo.loop = true;
    heroVideo.playsInline = true;
    heroVideo.preload = 'auto';
    
    heroVideo.addEventListener('loadeddata', () => {
        heroVideo.classList.remove('loading');
        heroVideo.classList.add('loaded');
        console.log('Video del hero cargado correctamente');
    });
    
    heroVideo.addEventListener('error', (e) => {
        console.error('Error cargando video del hero:', e);
        showVideoFallback();
    });
    
    heroVideo.addEventListener('stalled', () => {
        console.warn('Video del hero interrumpido, mostrando fallback');
        showVideoFallback();
    });
    
    function showVideoFallback() {
        heroVideo.style.display = 'none';
        heroFallbackImage.style.display = 'block';
        heroFallbackImage.style.zIndex = '2';
        console.log('Mostrando imagen de fallback para el video del hero');
    }
    
    setTimeout(() => {
        if (heroVideo.readyState < 2) {
            showVideoFallback();
        }
    }, 2000);
}

// ===== UTILIDADES ULTRA-OPTIMIZADAS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== OPTIMIZACIONES DE RENDIMIENTO ULTRA-AGRESIVAS =====
function initializePerformanceOptimizations() {
    if (!performanceMode) {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                preloadCriticalResources();
            });
        } else {
            setTimeout(preloadCriticalResources, 5000);
        }
    }
    
    if (isMobile) {
        const elementsToOptimize = document.querySelectorAll('.hero__phone, .nav__logo, .floating-widget__main-btn');
        elementsToOptimize.forEach(element => {
            element.style.willChange = 'transform';
        });
        
        const featureElements = document.querySelectorAll('.feature__phone, .phone');
        featureElements.forEach(element => {
            element.style.willChange = 'auto';
        });
    }
    
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            handleResize();
        }, isMobile ? 1000 : 500);
    });
}

function preloadCriticalResources() {
    const criticalResources = [
        './assets/phones/Hero.avif',
        './assets/logo.avif'
    ];
    
    criticalResources.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

function handleResize() {
    const wasMobile = isMobile;
    isMobile = window.innerWidth <= 1023;
    
    if (wasMobile !== isMobile) {
        detectDeviceCapabilities();
        
        // Reinicializar componentes si es necesario
        if (imageOptimizer) {
            setupImageLazyLoading();
        }
        
        // Asegurar visibilidad de secciones en móvil
        ensureMobileSectionsVisibility();
    }
}

// ===== ACCESIBILIDAD ULTRA-OPTIMIZADA =====
function initializeAccessibility() {
    // Mejorar navegación por teclado
    const interactiveElements = document.querySelectorAll('button, a, input, [tabindex]');
    
    interactiveElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.classList.add('keyboard-focus');
        });
        
        element.addEventListener('blur', () => {
            element.classList.remove('keyboard-focus');
        });
        
        element.addEventListener('mousedown', () => {
            element.classList.remove('keyboard-focus');
        });
    });
    
    // Mejorar feedback táctil en móvil
    if (isMobile) {
        const touchElements = document.querySelectorAll('button, .btn, .nav__link');
        touchElements.forEach(element => {
            element.addEventListener('touchstart', () => {
                element.style.transform = 'scale(0.95)';
            });
            element.addEventListener('touchend', () => {
                element.style.transform = '';
            });
        });
    }
}

// ===== CORRECCIÓN CRÍTICA PARA VISIBILIDAD EN MÓVIL =====
function ensureMobileSectionsVisibility() {
    if (window.innerWidth <= 1023) {
        const sections = document.querySelectorAll('.features, .videos, .faq, .contact');
        
        sections.forEach(section => {
            // Forzar estilos de visibilidad
            section.style.display = 'block';
            section.style.visibility = 'visible';
            section.style.opacity = '1';
            section.style.position = 'relative';
            section.style.zIndex = '1';
            section.style.transform = 'none';
            section.style.minHeight = 'auto';
            section.style.height = 'auto';
            section.style.overflow = 'visible';
            
            // Asegurar que los contenedores internos también sean visibles
            const containers = section.querySelectorAll('.features__container, .features__grid, .videos__container, .videos__main-container, .faq__container, .contact__container, .contact__grid');
            containers.forEach(container => {
                container.style.display = 'block';
                container.style.visibility = 'visible';
                container.style.opacity = '1';
                container.style.position = 'relative';
                container.style.transform = 'none';
                container.style.overflow = 'visible';
            });
            
            // Configuración específica para grids
            const featuresGrid = section.querySelector('.features__grid');
            if (featuresGrid) {
                featuresGrid.style.display = 'flex';
                featuresGrid.style.flexDirection = 'column';
            }
            
            const contactGrid = section.querySelector('.contact__grid');
            if (contactGrid) {
                contactGrid.style.display = 'grid';
                contactGrid.style.gridTemplateColumns = '1fr';
            }
        });
        
        console.log('Visibilidad de secciones móviles asegurada');
    }
}

// ===== INICIALIZACIÓN PRINCIPAL ULTRA-OPTIMIZADA =====
document.addEventListener('DOMContentLoaded', () => {
    detectDeviceCapabilities();
    
    imageOptimizer = new UltraOptimizedImageLoader();
    
    initializeLanguageSystem();
    initializeLanguageSwitcher();
    initializeNavigation();
    initializeScrollEffects();
    initializeVideoPlayer();
    initializeFAQ();
    initializeHeroVideoFallback();
    initializeAccessibility();
    initializeFloatingWidget();
    
    setupImageLazyLoading();
    
    if (!performanceMode) {
        initializeIntersectionObserver();
    }
    
    initializePerformanceOptimizations();
    
    // Asegurar visibilidad de secciones en móvil
    ensureMobileSectionsVisibility();
    
    // También ejecutar después de un pequeño delay para asegurar que se aplique
    setTimeout(ensureMobileSectionsVisibility, 100);
    setTimeout(ensureMobileSectionsVisibility, 500);
    
    console.log(`StarFlex Ultra-Optimizado - Móvil: ${isMobile}, Modo rendimiento: ${performanceMode}`);
});

// Ejecutar en resize para asegurar que se mantenga
window.addEventListener('resize', debounce(ensureMobileSectionsVisibility, 250));

// ===== MANEJO DE ERRORES ULTRA-OPTIMIZADO =====
window.addEventListener('error', (e) => {
    console.error('Error en la aplicación:', e.error);
    
    if (isMobile && e.error && e.error.message.includes('video')) {
        console.log('Error de video detectado, forzando fallback de imagen');
        const heroVideo = document.getElementById('hero-video');
        const heroImage = document.querySelector('.hero__phone-app-image');
        if (heroVideo && heroImage) {
            heroVideo.style.display = 'none';
            heroImage.style.display = 'block';
            heroImage.style.zIndex = '2';
        }
    }
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Promise rechazada:', e.reason);
});

// ===== LIMPIEZA AL SALIR =====
window.addEventListener('beforeunload', () => {
    if (imageOptimizer && imageOptimizer.intersectionObserver) {
        imageOptimizer.intersectionObserver.disconnect();
    }
});

// ===== SOPORTE PARA PWA OPTIMIZADO =====
if ('serviceWorker' in navigator && !isMobile && !performanceMode) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registrado:', registration);
            })
            .catch(registrationError => {
                console.log('SW falló:', registrationError);
            });
    });
}
