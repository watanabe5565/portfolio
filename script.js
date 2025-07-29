// ===== タイピングテキスト =====
window.addEventListener('DOMContentLoaded', () => {
  const text = "新卒エンジニア志望 / プログラミングでシステムを作りたい";
  const heroSub = document.getElementById('hero-sub');
  heroSub.textContent = text;
});

// ===== スクロール時に各セクションをフェードイン =====
window.addEventListener('scroll', () => {
  document.querySelectorAll('.container').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
});
