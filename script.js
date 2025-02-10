// 네비게이션 버튼 이벤트 리스너
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
        // 버튼이 속한 카드 컨테이너 찾기
        const container = button.closest('.cards-container');
        const wrapper = container.querySelector('.cards-wrapper');
        const cards = container.querySelector('.cards');
        const cardWidth = cards.querySelector('.card').offsetWidth;
        
        // 스크롤 방향 결정 (이전/다음)
        const scrollAmount = button.classList.contains('prev') ? -cardWidth : cardWidth;
        
        // 부드러운 스크롤 효과
        wrapper.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});

// 섹션 전환 애니메이션을 위한 Intersection Observer 설정
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1 // 섹션이 10% 이상 보일 때 애니메이션 실행
};

// Intersection Observer 콜백 함수
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 섹션이 화면에 보이면 애니메이션 실행
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 모든 섹션에 애니메이션 효과 적용
sections.forEach(section => {
    // 초기 상태 설정
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    // observer 시작
    observer.observe(section);
});
