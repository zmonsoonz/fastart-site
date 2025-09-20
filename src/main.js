// Переключение вкладок преимуществ
import './styles/style.scss';

document.addEventListener('DOMContentLoaded', function() {
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
            console.log(id)
            if (id === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };

    const images = document.querySelectorAll('.demo-screen img');
    // const steps = document.querySelectorAll('.demo-step');
    // const prevBtn = document.getElementById('prev-btn');
    // const nextBtn = document.getElementById('next-btn');
    let currentStep = 1;
    
    // Автоматическое переключение каждые 4 секунды
    let autoPlay = setInterval(nextStep, 4000);
    
    function updateDisplay() {
        // Скрыть все изображения
        images.forEach(img => img.classList.remove('active'));
        // Показать текущее изображение
        document.getElementById('img' + currentStep).classList.add('active');
        
        // Обновить шаги
        // steps.forEach(step => step.classList.remove('active'));
        // steps[currentStep - 1].classList.add('active');
        
        // Сбросить авто-плей
        clearInterval(autoPlay);
        autoPlay = setInterval(nextStep, 4000);
    }
    
    function nextStep() {
        currentStep = currentStep >= images.length ? 1 : currentStep + 1;
        updateDisplay();
    }
    
    function prevStep() {
        currentStep = currentStep <= 1 ? images.length : currentStep - 1;
        updateDisplay();
    }
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('overlay');
    
    // Открытие/закрытие меню
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Закрытие меню при клике на overlay
    overlay.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    // Обработчики кнопок
    // nextBtn.addEventListener('click', nextStep);
    // prevBtn.addEventListener('click', prevStep);
    
    // Обработчики шагов
    // steps.forEach(step => {
    //     step.addEventListener('click', function() {
    //         currentStep = parseInt(this.getAttribute('data-step'));
    //         updateDisplay();
    //     });
    // });
})
  