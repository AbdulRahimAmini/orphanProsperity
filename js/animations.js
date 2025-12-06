// انیمیشن‌های صفحه درباره ما
document.addEventListener('DOMContentLoaded', function() {
    // انیمیشن اسکرول نرم
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // انیمیشن برای کارت‌های تیم هنگام اسکرول
    const teamCards = document.querySelectorAll('.team-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    teamCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(card);
    });
    
    // انیمیشن برای بخش داستان
    const storySection = document.querySelector('.story-section');
    if (storySection) {
        const storyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelector('.story-card').style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
            });
        }, { threshold: 0.2 });
        
        storyObserver.observe(storySection);
    }
    
    // تغییر رنگ نوار ناوبری هنگام اسکرول
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = '#f8f9fa';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // انیمیشن برای تیتر اصلی
    const heroTitle = document.querySelector('.hero-section h1');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 0.8s, transform 0.8s';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }
});
