// Controla o hambúrguer do menu mobile
const btn = document.querySelector('.hamburger');
const nav = document.getElementById('primary-nav');
const navLinks = nav ? nav.querySelectorAll('a') : [];
const themeToggleBtn = document.querySelector('[data-theme-toggle]');

const THEME_STORAGE_KEY = 'abm-theme';
const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Obtém preferência de tema vinda do sistema
const getSystemTheme = () => (themeMediaQuery.matches ? 'dark' : 'light');

// Aplica o tema e, opcionalmente, persiste a escolha e roda a animação do botão
const applyTheme = (theme, { persist = false, animate = false } = {}) => {
  if (theme !== 'dark' && theme !== 'light') return;

  document.documentElement.setAttribute('data-theme', theme);

  if (themeToggleBtn) {
    const label = theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro';
    themeToggleBtn.setAttribute('aria-label', label);

    if (animate) {
      themeToggleBtn.classList.remove('rippling');
      void themeToggleBtn.offsetWidth;
      themeToggleBtn.classList.add('rippling');
      window.setTimeout(() => themeToggleBtn.classList.remove('rippling'), 650);
    }
  }

  if (persist) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
    }
  }
};

// Recupera a última escolha salva do usuário
const savedTheme = (() => {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch (error) {
    return null;
  }
})();

applyTheme(savedTheme || getSystemTheme());

if (themeToggleBtn) {
  // Alterna entre claro/escuro a cada clique
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || getSystemTheme();
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme, { persist: true, animate: true });
  });
}

if (!savedTheme) {
  // Atualiza o tema quando o usuário muda a preferência do sistema
  themeMediaQuery.addEventListener('change', (event) => {
    applyTheme(event.matches ? 'dark' : 'light');
  });
}

if (btn && nav) {
  // Abre/fecha menu mobile e sincroniza estado visual
  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.classList.toggle('is-active', isOpen);
  });

  navLinks.forEach((link) => {
    // Fecha o menu ao navegar por um item
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.remove('is-active');
      }
    });
  });

  document.addEventListener('click', (e) => {
    // Fecha ao clicar fora do menu
    if (!nav.contains(e.target) && !btn.contains(e.target) && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.classList.remove('is-active');
    }
  });

  document.addEventListener('keydown', (e) => {
    // Habilita fechar via tecla Escape para acessibilidade
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.classList.remove('is-active');
      btn.focus();
    }
  });
}

// Adiciona efeito de ripple ao clicar em botões
document.addEventListener('click', (e) => {
  const button = e.target.closest('button, a');
  if (!button) return;

  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple-effect');

  button.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
});

// Efeito de parallax suave ao mover o mouse no header
document.addEventListener('mousemove', (e) => {
  const header = document.querySelector('header');
  if (!header) return;

  const logo = header.querySelector('.logo img');
  if (logo) {
    logo.style.transform = 'none';
  }
});

// Adiciona interação ao avatar
const avatar = document.querySelector('.avatar img');
if (avatar) {
  avatar.addEventListener('mouseenter', () => {
    avatar.style.animationPlayState = 'paused';
  });

  avatar.addEventListener('mouseleave', () => {
    avatar.style.animationPlayState = 'running';
  });
}

// Efeito de corações caindo ao clicar no coração do footer
const heartIcon = document.querySelector('.heart-icon');
const heartWrapper = document.querySelector('.heart-wrapper');
if (heartIcon && heartWrapper) {
  heartWrapper.addEventListener('click', () => {
    createFallingHearts();
  });
}

function createFallingHearts() {
  const numberOfHearts = 15; // Quantidade de corações
  
  for (let i = 0; i < numberOfHearts; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('falling-heart');
      heart.innerHTML = '❤️';
      
      // Posição aleatória no eixo X
      const randomX = Math.random() * 100;
      heart.style.left = randomX + 'vw';
      
      // Duração aleatória da animação
      const randomDuration = 2 + Math.random() * 2; // Entre 2 e 4 segundos
      heart.style.animationDuration = randomDuration + 's';
      
      // Tamanho aleatório
      const randomSize = 20 + Math.random() * 20; // Entre 20px e 40px
      heart.style.fontSize = randomSize + 'px';
      
      // Delay aleatório
      const randomDelay = Math.random() * 0.5;
      heart.style.animationDelay = randomDelay + 's';
      
      document.body.appendChild(heart);
      
      // Remove o coração após a animação
      setTimeout(() => {
        heart.remove();
      }, (randomDuration + randomDelay) * 1000);
    }, i * 100); // Pequeno delay entre cada coração
  }
}
