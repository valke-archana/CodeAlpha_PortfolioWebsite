// Year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const iconOpen = document.getElementById('menuIconOpen');
    const iconClose = document.getElementById('menuIconClose');
    menuBtn.addEventListener('click', () => {
      const open = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      iconOpen.classList.toggle('hidden', !open === false);
      iconClose.classList.toggle('hidden', open === false);
      iconOpen.classList.toggle('hidden');
      iconClose.classList.toggle('hidden');
    });
    // Close mobile nav when clicking a link
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    }));

    // Read more toggles
    document.querySelectorAll('[data-readmore]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = document.querySelector(btn.getAttribute('data-readmore'));
        if (!target) return;
        const isHidden = target.classList.contains('hidden');
        target.classList.toggle('hidden');
        btn.textContent = isHidden ? 'Show less' : 'Read more';
      });
    });

    // Copy email
    const emailLink = document.getElementById('emailLink');
    const copyEmail = document.getElementById('copyEmail');
    copyEmail.addEventListener('click', async () => {
      const email = emailLink.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        showToast('Email copied to clipboard');
      } catch {
        showToast('Copy not supported on this browser');
      }
    });

    // Demo buttons
    const demoModal = document.getElementById('demoModal');
    const closeDemo = document.getElementById('closeDemo');
    document.querySelectorAll('[data-demo]').forEach(btn => {
      btn.addEventListener('click', () => {
        demoModal.classList.remove('hidden');
      });
    });
    closeDemo.addEventListener('click', () => demoModal.classList.add('hidden'));
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) demoModal.classList.add('hidden');
    });

    // Contact form (Demo)
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thanks! This is a demo form. Please email me.');
    });

    // Simple toast
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toastText');
    let toastTimer = null;
    function showToast(message) {
      toastText.textContent = message;
      toast.classList.remove('hidden');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.add('hidden'), 2400);
    }