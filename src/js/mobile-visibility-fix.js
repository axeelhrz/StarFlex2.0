// ===== CORRECCIÓN DE VISIBILIDAD Y ESPACIADO MÓVIL =====

// Función para forzar la visibilidad y optimizar espaciado en móvil
function forceVisibilityAndOptimizeSpacing() {
    const isMobile = window.innerWidth <= 1023;
    
    if (isMobile) {
        // Seleccionar todas las secciones principales
        const sections = document.querySelectorAll('.features, .videos, .faq, .contact');
        
        sections.forEach(section => {
            // Forzar estilos de visibilidad
            section.style.display = 'block';
            section.style.visibility = 'visible';
            section.style.opacity = '1';
            section.style.position = 'relative';
            section.style.zIndex = '1';
            
            // Remover cualquier clase que pueda estar ocultando la sección
            section.classList.remove('hidden', 'invisible');
            
            // Optimizaciones específicas para la sección de características
            if (section.classList.contains('features')) {
                // Optimizar padding de la sección
                section.style.paddingTop = 'clamp(2rem, 4vh, 3rem)';
                section.style.paddingBottom = 'clamp(1rem, 2vh, 1.5rem)';
                
                // Optimizar el header
                const header = section.querySelector('.features__header');
                if (header) {
                    header.style.marginBottom = 'clamp(1.5rem, 3vh, 2rem)';
                }
                
                // Optimizar el grid
                const grid = section.querySelector('.features__grid');
                if (grid) {
                    grid.style.display = 'grid';
                    grid.style.gridTemplateColumns = '1fr';
                    grid.style.gap = 'clamp(1.5rem, 3vh, 2rem)';
                    grid.style.visibility = 'visible';
                    grid.style.opacity = '1';
                }
            }
            
            // Asegurar que los contenedores internos también sean visibles
            const containers = section.querySelectorAll('.features__grid, .videos__main-container, .faq__container, .contact__grid');
            containers.forEach(container => {
                container.style.display = container.classList.contains('features__grid') || container.classList.contains('contact__grid') ? 'grid' : 'block';
                container.style.visibility = 'visible';
                container.style.opacity = '1';
            });
            
            // Forzar visibilidad de elementos individuales
            const elements = section.querySelectorAll('.feature, .contact__channel, .faq__item, .videos__header, .videos__player-container');
            elements.forEach(element => {
                element.style.display = element.classList.contains('feature') || element.classList.contains('contact__channel') ? 'flex' : 'block';
                element.style.visibility = 'visible';
                element.style.opacity = '1';
                element.style.transform = 'none';
                element.style.animation = 'none';
                
                // Para elementos flex, asegurar la dirección correcta
                if (element.classList.contains('feature') || element.classList.contains('contact__channel')) {
                    element.style.flexDirection = 'column';
                    element.style.alignItems = 'center';
                    element.style.textAlign = 'center';
                }
            });
        });
        
        // Optimizaciones específicas para características
        const features = document.querySelectorAll('.feature');
        features.forEach((feature, index) => {
            // Optimizar espaciado individual
            feature.style.gap = 'clamp(1rem, 2vh, 1.25rem)';
            feature.style.padding = 'clamp(1rem, 2vh, 1.5rem) 0';
            feature.style.marginBottom = '0';
            
            const phone = feature.querySelector('.feature__phone');
            const content = feature.querySelector('.feature__content');
            
            if (phone) {
                phone.style.order = '1';
                phone.style.display = 'block';
                phone.style.visibility = 'visible';
                phone.style.opacity = '1';
                phone.style.width = 'clamp(180px, 55vw, 240px)';
                phone.style.height = 'clamp(360px, 110vw, 480px)';
                phone.style.margin = '0 auto clamp(0.75rem, 1.5vh, 1rem) auto';
                phone.style.flexShrink = '0';
            }
            
            if (content) {
                content.style.order = '2';
                content.style.display = 'flex';
                content.style.flexDirection = 'column';
                content.style.alignItems = 'center';
                content.style.textAlign = 'center';
                content.style.visibility = 'visible';
                content.style.opacity = '1';
                content.style.padding = 'clamp(0.75rem, 1.5vh, 1rem) clamp(1rem, 3vw, 1.5rem)';
                content.style.width = '100%';
                content.style.maxWidth = '100%';
                
                // Optimizar elementos internos del contenido
                const title = content.querySelector('.feature__title');
                const description = content.querySelector('.feature__description');
                const list = content.querySelector('.feature__list');
                
                if (title) {
                    title.style.fontSize = 'clamp(1.4rem, 5vw, 1.8rem)';
                    title.style.marginBottom = 'clamp(0.75rem, 1.5vh, 1rem)';
                    title.style.lineHeight = '1.2';
                    title.style.width = '100%';
                    title.style.textAlign = 'center';
                }
                
                if (description) {
                    description.style.fontSize = 'clamp(0.9rem, 2.5vw, 1rem)';
                    description.style.marginBottom = 'clamp(0.75rem, 1.5vh, 1rem)';
                    description.style.lineHeight = '1.5';
                    description.style.maxWidth = '100%';
                    description.style.textAlign = 'center';
                }
                
                if (list) {
                    list.style.display = 'flex';
                    list.style.flexDirection = 'column';
                    list.style.alignItems = 'flex-start';
                    list.style.textAlign = 'left';
                    list.style.width = '100%';
                    list.style.maxWidth = '400px';
                    list.style.margin = '0 auto';
                    list.style.padding = '0';
                    
                    // Optimizar elementos de la lista
                    const listItems = list.querySelectorAll('.feature__list-item');
                    listItems.forEach((item, itemIndex) => {
                        item.style.fontSize = 'clamp(0.85rem, 2.2vw, 0.95rem)';
                        item.style.padding = 'clamp(0.25rem, 0.5vh, 0.375rem) 0';
                        item.style.marginBottom = 'clamp(0.25rem, 0.5vh, 0.375rem)';
                        item.style.lineHeight = '1.4';
                        item.style.gap = 'clamp(0.5rem, 1vw, 0.75rem)';
                        item.style.width = '100%';
                        item.style.textAlign = 'left';
                        item.style.display = 'flex';
                        item.style.alignItems = 'flex-start';
                        
                        // Asegurar que es el último elemento no tenga margin bottom
                        if (itemIndex === listItems.length - 1) {
                            item.style.marginBottom = '0';
                            item.style.paddingBottom = '0';
                        }
                    });
                }
            }
        });
        
        // Asegurar que los elementos de la app del teléfono sean visibles
        const phoneImages = document.querySelectorAll('.phone__app-image');
        phoneImages.forEach(img => {
            img.style.display = 'block';
            img.style.visibility = 'visible';
            img.style.opacity = '1';
            img.style.margin = '0';
            img.style.padding = '0';
        });
        
        // Optimizar contenedores del teléfono
        const phones = document.querySelectorAll('.phone');
        phones.forEach(phone => {
            phone.style.margin = '0';
            phone.style.padding = '0';
            
            const screen = phone.querySelector('.phone__screen');
            if (screen) {
                screen.style.margin = '8px';
                screen.style.width = 'calc(100% - 16px)';
                screen.style.height = 'calc(100% - 16px)';
            }
            
            const phoneContent = phone.querySelector('.phone__content');
            if (phoneContent) {
                phoneContent.style.margin = '0';
                phoneContent.style.padding = '0';
            }
        });
        
        // Forzar visibilidad de elementos de FAQ
        const faqItems = document.querySelectorAll('.faq__item');
        faqItems.forEach(item => {
            item.style.display = 'block';
            item.style.visibility = 'visible';
            item.style.opacity = '1';
            
            const question = item.querySelector('.faq__question');
            if (question) {
                question.style.display = 'flex';
                question.style.visibility = 'visible';
                question.style.opacity = '1';
                question.style.pointerEvents = 'auto';
                question.style.cursor = 'pointer';
            }
        });
        
        // Forzar visibilidad de elementos de contacto
        const contactChannels = document.querySelectorAll('.contact__channel');
        contactChannels.forEach(channel => {
            channel.style.display = 'flex';
            channel.style.flexDirection = 'column';
            channel.style.alignItems = 'center';
            channel.style.visibility = 'visible';
            channel.style.opacity = '1';
            
            const btn = channel.querySelector('.contact__channel-btn');
            if (btn) {
                btn.style.display = 'inline-flex';
                btn.style.visibility = 'visible';
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
                btn.style.cursor = 'pointer';
            }
        });
        
        // Asegurar que los headers de sección sean visibles
        const headers = document.querySelectorAll('.features__header, .videos__header, .faq__header, .contact__header');
        headers.forEach(header => {
            header.style.display = 'block';
            header.style.visibility = 'visible';
            header.style.opacity = '1';
            header.style.textAlign = 'center';
            
            // Optimizar spacing específico para features header
            if (header.classList.contains('features__header')) {
                header.style.marginBottom = 'clamp(1.5rem, 3vh, 2rem)';
            } else {
                header.style.marginBottom = 'var(--space-4xl)';
            }
        });
        
        // Optimizaciones adicionales para pantallas muy pequeñas
        if (window.innerWidth <= 480) {
            const featuresSection = document.querySelector('.features');
            if (featuresSection) {
                featuresSection.style.paddingTop = 'clamp(1.5rem, 3vh, 2rem)';
                featuresSection.style.paddingBottom = 'clamp(0.75rem, 1.5vh, 1rem)';
                
                const featuresGrid = featuresSection.querySelector('.features__grid');
                if (featuresGrid) {
                    featuresGrid.style.gap = 'clamp(1rem, 2vh, 1.5rem)';
                }
                
                features.forEach(feature => {
                    feature.style.gap = 'clamp(0.75rem, 1.5vh, 1rem)';
                    feature.style.padding = 'clamp(0.75rem, 1.5vh, 1rem) 0';
                    
                    const phone = feature.querySelector('.feature__phone');
                    if (phone) {
                        phone.style.width = 'clamp(160px, 60vw, 200px)';
                        phone.style.height = 'clamp(320px, 120vw, 400px)';
                        phone.style.margin = '0 auto clamp(0.5rem, 1vh, 0.75rem) auto';
                    }
                });
            }
        }
        
        console.log('Visibilidad móvil y espaciado optimizado para todas las secciones');
    }
}

// Función para verificar y corregir la visibilidad
function checkAndFixVisibility() {
    const isMobile = window.innerWidth <= 1023;
    
    if (isMobile) {
        const sections = ['features', 'videos', 'faq', 'contact'];
        
        for (let i = 0; i < sections.length; i++) {
            const sectionName = sections[i];
            const section = document.querySelector(`.${sectionName}`);
            if (section) {
                const computedStyle = window.getComputedStyle(section);
                const isHidden = computedStyle.display === 'none' || 
                               computedStyle.visibility === 'hidden' || 
                               computedStyle.opacity === '0';
                
                if (isHidden) {
                    console.warn(`Sección ${sectionName} estaba oculta en móvil, forzando visibilidad`);
                    forceVisibilityAndOptimizeSpacing();
                    break;
                }
            }
        }
    }
}

// Función para optimizar el espaciado específicamente
function optimizeFeatureSpacing() {
    const isMobile = window.innerWidth <= 1023;
    
    if (isMobile) {
        const featuresSection = document.querySelector('.features');
        if (featuresSection) {
            // Aplicar clase CSS personalizada para espaciado optimizado
            featuresSection.classList.add('features--mobile-optimized');
            
            // Forzar estilos inline para asegurar que se apliquen
            const style = document.createElement('style');
            style.textContent = `
                @media (width <= 1023px) {
                    .features--mobile-optimized {
                        padding: clamp(2rem, 4vh, 3rem) var(--section-padding-x) clamp(1rem, 2vh, 1.5rem) !important;
                    }
                    .features--mobile-optimized .features__grid {
                        gap: clamp(1.5rem, 3vh, 2rem) !important;
                    }
                    .features--mobile-optimized .feature {
                        gap: clamp(1rem, 2vh, 1.25rem) !important;
                        padding: clamp(1rem, 2vh, 1.5rem) 0 !important;
                        margin-bottom: 0 !important;
                    }
                }
                @media (width <= 480px) {
                    .features--mobile-optimized .features__grid {
                        gap: clamp(1rem, 2vh, 1.5rem) !important;
                    }
                    .features--mobile-optimized .feature {
                        gap: clamp(0.75rem, 1.5vh, 1rem) !important;
                        padding: clamp(0.75rem, 1.5vh, 1rem) 0 !important;
                    }
                }
            `;
            
            // Agregar el estilo al head si no existe
            if (!document.querySelector('#mobile-spacing-optimization')) {
                style.id = 'mobile-spacing-optimization';
                document.head.appendChild(style);
            }
        }
    }
}

// Ejecutar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    forceVisibilityAndOptimizeSpacing();
    optimizeFeatureSpacing();
    
    // Verificar después de un breve delay para asegurar que todos los estilos se han aplicado
    setTimeout(() => {
        checkAndFixVisibility();
        optimizeFeatureSpacing();
    }, 500);
});

// Ejecutar en resize para manejar cambios de orientación
window.addEventListener('resize', () => {
    setTimeout(() => {
        forceVisibilityAndOptimizeSpacing();
        optimizeFeatureSpacing();
        checkAndFixVisibility();
    }, 100);
});

// Ejecutar cuando se detecte que el dispositivo es móvil
if (window.innerWidth <= 1023) {
    // Aplicar inmediatamente si ya estamos en móvil
    forceVisibilityAndOptimizeSpacing();
    optimizeFeatureSpacing();
}

// Observador de mutaciones para detectar cambios dinámicos que puedan ocultar secciones
const observer = new MutationObserver((mutations) => {
    const isMobile = window.innerWidth <= 1023;
    if (isMobile) {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && 
                (mutation.attributeName === 'style' || mutation.attributeName === 'class')) {
                const target = mutation.target;
                if (target.classList.contains('features') || 
                    target.classList.contains('videos') || 
                    target.classList.contains('faq') || 
                    target.classList.contains('contact')) {
                    
                    const computedStyle = window.getComputedStyle(target);
                    const isHidden = computedStyle.display === 'none' || 
                                   computedStyle.visibility === 'hidden' || 
                                   computedStyle.opacity === '0';
                    
                    if (isHidden) {
                        console.warn('Sección ocultada dinámicamente, restaurando visibilidad');
                        forceVisibilityAndOptimizeSpacing();
                        optimizeFeatureSpacing();
                    }
                }
            }
        });
    }
});

// Observar cambios en el body
observer.observe(document.body, {
    attributes: true,
    subtree: true,
    attributeFilter: ['style', 'class']
});

// Exportar funciones para uso global
window.forceVisibilityAndOptimizeSpacing = forceVisibilityAndOptimizeSpacing;
window.checkAndFixVisibility = checkAndFixVisibility;
window.optimizeFeatureSpacing = optimizeFeatureSpacing;