(() => {
    const words = document.querySelectorAll('.word-split');
    const stages = document.querySelectorAll('[data-stage]');

    words.forEach((element) => {
        element.innerHTML = element.textContent.trim().split(/\s+/).map((word, index) => (
            `<span class="word" style="--word-delay:${index * 38}ms">${word}</span>`
        )).join(' ');
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    words.forEach((element) => revealObserver.observe(element));

    const updateStages = () => {
        stages.forEach((stage) => {
            const bounds = stage.getBoundingClientRect();
            const travel = Math.max(stage.offsetHeight - window.innerHeight, 1);
            const progress = Math.min(1, Math.max(0, -bounds.top / travel));
            stage.style.setProperty('--progress', progress.toFixed(4));
        });

        document.querySelectorAll('.notes-list li').forEach((row) => {
            const threshold = Number(row.dataset.note) * 0.18 + 0.2;
            row.classList.toggle('is-lit', Number(document.querySelector('[data-stage="notes"]').style.getPropertyValue('--progress')) >= threshold);
        });
    };

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateStages();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    updateStages();
})();