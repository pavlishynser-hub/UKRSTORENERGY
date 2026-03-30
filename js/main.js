document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // i18n — LANGUAGE SWITCHER
    // ========================================

    const translations = {
        uk: {
            navSolutions: 'Рішення',
            navCalculator: 'Калькулятор',
            navTechnology: 'Технологія',
            navProjects: 'Проекти',
            navContacts: 'Контакти',
            navCta: 'Розрахувати',
            heroTitle: 'Системи накопичення<br>енергії для бізнесу',
            heroSubtitle: 'Зниження витрат на електроенергію.<br>Резервне живлення підприємств.',
            heroBtn1: 'Розрахувати економію',
            heroBtn2: 'Отримати консультацію',
            painTitle: 'Чому підприємства втрачають гроші<br>на електроенергії',
            solutionTitle: 'Energy Storage System —<br>рішення для бізнесу',
            usecasesTitle: 'Сценарії використання',
            calcTitle: 'Калькулятор економії',
            howTitle: 'Як працює система',
            advantagesTitle: 'Переваги системи',
            equipTitle: 'Обладнання',
            integrationsTitle: 'Інтеграції',
            projectsTitle: 'Реалізовані проекти',
            audienceTitle: 'Для кого це рішення',
            supplyTitle: 'Умови постачання',
            certsTitle: 'Сертифікати',
            contactsTitle: 'Контакти',
            formTitle: 'Залишити заявку',
            formSubmit: 'Надіслати заявку'
        },
        en: {
            navSolutions: 'Solutions',
            navCalculator: 'Calculator',
            navTechnology: 'Technology',
            navProjects: 'Projects',
            navContacts: 'Contacts',
            navCta: 'Request Calculation',
            heroTitle: 'Energy Storage Systems<br>for Business',
            heroSubtitle: 'Reduce energy costs.<br>Protect your business from outages.',
            heroBtn1: 'Calculate ROI',
            heroBtn2: 'Get Consultation',
            painTitle: 'Why businesses lose money<br>on electricity',
            solutionTitle: 'Energy Storage System —<br>solution for business',
            usecasesTitle: 'Use Cases',
            calcTitle: 'Savings Calculator',
            howTitle: 'How the system works',
            advantagesTitle: 'System advantages',
            equipTitle: 'Equipment',
            integrationsTitle: 'Integrations',
            projectsTitle: 'Completed projects',
            audienceTitle: 'Who is it for',
            supplyTitle: 'Supply terms',
            certsTitle: 'Certificates',
            contactsTitle: 'Contacts',
            formTitle: 'Submit a request',
            formSubmit: 'Send request'
        }
    };

    let currentLang = 'uk';

    function setLanguage(lang) {
        currentLang = lang;
        const t = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (t[key]) el.innerHTML = t[key];
        });
        document.documentElement.lang = lang === 'uk' ? 'uk' : 'en';

        document.querySelectorAll('.lang-switch__btn').forEach(btn => {
            btn.classList.toggle('lang-switch__btn--active', btn.dataset.lang === lang);
        });
    }

    document.querySelectorAll('.lang-switch').forEach(switcher => {
        switcher.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-switch__btn');
            if (!btn) return;
            setLanguage(btn.dataset.lang);
        });
    });

    // ========================================
    // STICKY HEADER — shows after scrolling past hero
    // ========================================

    const header = document.getElementById('header');
    const heroSection = document.getElementById('hero');

    window.addEventListener('scroll', () => {
        if (!heroSection) return;
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        header.classList.toggle('header--visible', window.scrollY > heroBottom - 80);
    });

    // ========================================
    // MOBILE MENU
    // ========================================

    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger--open');
        nav.classList.toggle('nav--open');
        document.body.classList.toggle('nav-is-open', nav.classList.contains('nav--open'));
    });

    nav.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('burger--open');
            nav.classList.remove('nav--open');
            document.body.classList.remove('nav-is-open');
        });
    });

    // ========================================
    // SCROLL ANIMATIONS
    // ========================================

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // ========================================
    // CALCULATOR
    // ========================================

    const steps = document.querySelectorAll('.calc__step');
    const panels = document.querySelectorAll('.calc__panel');
    let currentStep = 1;

    function showStep(n) {
        currentStep = n;
        panels.forEach(p => p.classList.remove('calc__panel--active'));
        steps.forEach(s => {
            s.classList.remove('calc__step--active', 'calc__step--done');
            const stepNum = parseInt(s.dataset.step);
            if (stepNum === n) s.classList.add('calc__step--active');
            if (stepNum < n) s.classList.add('calc__step--done');
        });
        document.getElementById(`calcStep${n}`).classList.add('calc__panel--active');
    }

    document.querySelectorAll('input[name="task"]').forEach(r => {
        r.addEventListener('change', () => {
            document.getElementById('calcNext1').disabled = false;
        });
    });

    const powerSlider = document.getElementById('powerSlider');
    const powerValueEl = document.getElementById('powerValue');
    const systemCostEl = document.getElementById('systemCost');

    function formatPower(kw) {
        if (kw >= 1000) return (kw / 1000).toFixed(kw % 1000 === 0 ? 0 : 1) + ' МВт';
        return kw + ' кВт';
    }

    function updateSlider() {
        const val = parseInt(powerSlider.value);
        powerValueEl.textContent = formatPower(val);
        const cost = val * 400;
        systemCostEl.textContent = '$' + cost.toLocaleString('en-US').replace(/,/g, ' ');
        const pct = (val - 3) / (3000 - 3) * 100;
        powerSlider.style.background = `linear-gradient(90deg, var(--accent) ${pct}%, var(--border) ${pct}%)`;
    }

    powerSlider.addEventListener('input', updateSlider);
    updateSlider();

    document.getElementById('calcNext1').addEventListener('click', () => showStep(2));
    document.getElementById('calcPrev2').addEventListener('click', () => showStep(1));

    document.getElementById('calcNext2').addEventListener('click', () => {
        calculateResults();
        showStep(3);
    });

    document.getElementById('calcPrev3').addEventListener('click', () => showStep(1));

    function calculateResults() {
        const task = document.querySelector('input[name="task"]:checked')?.value;
        const power = parseInt(powerSlider.value);

        const taskMultipliers = {
            arbitrage: { saving: 4.2, payback: 0.9, roi: 1.15 },
            trading:   { saving: 5.5, payback: 0.75, roi: 1.35 },
            own:       { saving: 3.0, payback: 1.1, roi: 0.95 },
            ups:       { saving: 1.8, payback: 1.4, roi: 0.70 },
            solar:     { saving: 3.8, payback: 0.95, roi: 1.10 }
        };

        const mult = taskMultipliers[task] || taskMultipliers.arbitrage;
        const baseSaving = power * mult.saving * 30;
        const totalCost = power * 800;
        const paybackYears = (totalCost / (baseSaving * 12)) * mult.payback;
        const roi = ((baseSaving * 12 * 10 - totalCost) / totalCost * 100) * mult.roi;

        document.getElementById('resultSaving').textContent =
            formatCurrency(Math.round(baseSaving)) + ' ₴';

        const years = Math.floor(paybackYears);
        const months = Math.round((paybackYears - years) * 12);
        let paybackText = '';
        if (years > 0) paybackText += `${years} р. `;
        if (months > 0) paybackText += `${months} міс.`;
        document.getElementById('resultPayback').textContent = paybackText || '< 1 міс.';

        document.getElementById('resultROI').textContent = Math.round(roi) + '%';

        animateNumbers();
    }

    function formatCurrency(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    function animateNumbers() {
        document.querySelectorAll('.calc__result-value').forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight;
            el.style.animation = 'fadeIn 0.5s ease';
        });
    }

    // ========================================
    // CHAT WIDGET
    // ========================================

    const chatWidget = document.getElementById('chatWidget');
    const chatToggle = document.getElementById('chatToggle');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');

    chatToggle.addEventListener('click', () => {
        chatWidget.classList.toggle('chat-widget--open');
        if (chatWidget.classList.contains('chat-widget--open')) {
            chatInput.focus();
        }
    });

    function addMessage(text, isUser) {
        const div = document.createElement('div');
        div.className = `chat-msg chat-msg--${isUser ? 'user' : 'bot'}`;
        div.innerHTML = `<p>${text}</p>`;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(msg) {
        const lower = msg.toLowerCase();

        if (lower.includes('вартість') || lower.includes('ціна') || lower.includes('коштує') || lower.includes('прайс')) {
            return 'Вартість системи залежить від потужності та конфігурації. Орієнтовний діапазон: від $40,000 (50 kW) до $2,400,000 (3 MW). Для точного розрахунку залиште заявку або зателефонуйте: +38 (067) 208-55-58.';
        }
        if (lower.includes('потужність') || lower.includes('kw') || lower.includes('квт')) {
            return 'Ми пропонуємо системи від 50 kW до 3 MW. Для підбору оптимальної потужності потрібно знати: ваше середньомісячне споживання, пікове навантаження та задачу (арбітраж, резерв, власні потреби).';
        }
        if (lower.includes('окупність') || lower.includes('окупається') || lower.includes('roi')) {
            return 'Строк окупності зазвичай складає 3–6 років в залежності від сценарію. При арбітражі РДН — найшвидше (2.5–4 роки). Спробуйте наш <a href="#calculator" style="color:var(--accent)">калькулятор</a> для орієнтовного розрахунку.';
        }
        if (lower.includes('сес') || lower.includes('сонячн') || lower.includes('solar') || lower.includes('pv')) {
            return 'ESS ідеально інтегрується з сонячними станціями. Система зберігає надлишкову генерацію СЕС та використовує її вночі або у пікові години, що суттєво підвищує ефективність вашої станції.';
        }
        if (lower.includes('гарантія') || lower.includes('цикл')) {
            return 'Ми надаємо гарантію 10 років на обладнання KSTAR. Ресурс батареї — 6000–8000 циклів, що відповідає 15–20 рокам роботи. Сервісне обслуговування включено.';
        }
        if (lower.includes('монтаж') || lower.includes('встановлення') || lower.includes('установка')) {
            return 'Ми надаємо послугу "під ключ": проектування, доставка, монтаж та пуско-наладка. Строк — 90–120 днів з моменту замовлення (30 днів при наявності на складі).';
        }

        return 'Дякую за запитання! Для детальної консультації рекомендую звернутися до нашого спеціаліста: +38 (067) 208-55-58 або залиште заявку у <a href="#contacts" style="color:var(--accent)">формі зворотного зв\'язку</a>.';
    }

    function handleChatSend() {
        const msg = chatInput.value.trim();
        if (!msg) return;

        addMessage(msg, true);
        chatInput.value = '';

        setTimeout(() => {
            addMessage(getBotResponse(msg), false);
        }, 600 + Math.random() * 400);
    }

    chatSend.addEventListener('click', handleChatSend);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleChatSend();
    });

    // ========================================
    // CONTACT FORM
    // ========================================

    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.btn');
        const origText = btn.textContent;
        btn.textContent = 'Надіслано ✓';
        btn.style.background = 'var(--accent-hover)';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = origText;
            btn.style.background = '';
            btn.disabled = false;
            form.reset();
        }, 3000);
    });

    // ========================================
    // ACTIVE NAV ON SCROLL
    // ========================================

    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav__link[href="#${id}"]`);
            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    link.classList.add('nav__link--active');
                } else {
                    link.classList.remove('nav__link--active');
                }
            }
        });
    });

});
