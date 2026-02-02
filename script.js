const skillsSection = document.querySelector('#skills');
const bars = document.querySelectorAll('.progress');

function animateSkills() {
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    bars.forEach(bar => {
      const finalPercent = parseInt(bar.dataset.percent);
      const span = bar.querySelector('.percent');
      let current = 0;

      bar.style.width = finalPercent + '%';

      const interval = setInterval(() => {
        if (current >= finalPercent) {
          clearInterval(interval);
        } else {
          current++;
          span.textContent = current + '%';
        }
      }, 20);
    });

    window.removeEventListener('scroll', animateSkills);
  }
}

window.addEventListener('scroll', animateSkills);
