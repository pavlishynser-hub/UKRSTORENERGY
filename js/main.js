document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // i18n — LANGUAGE SWITCHER
    // ========================================

    const translations = {
        uk: {
            navSolutions: 'Рішення', navCalculator: 'Калькулятор', navTechnology: 'Технологія',
            navProjects: 'Проекти', navContacts: 'Контакти', navCta: 'Розрахувати',
            heroTitle: 'Системи накопичення<br>енергії для бізнесу',
            heroSubtitle: 'Зниження витрат на електроенергію.<br>Резервне живлення підприємств.',
            heroBtn1: 'Розрахувати економію', heroBtn2: 'Отримати консультацію',
            painTitle: 'Чому підприємства втрачають гроші<br>на електроенергії',
            pain1h: 'Дорога електроенергія', pain1p: 'Зростання тарифів щороку збільшує витрати підприємства на 15–25%',
            pain2h: 'Пікові навантаження', pain2p: 'Залежність від РДН та пікових тарифів суттєво підвищує вартість кВт·год',
            pain3h: 'Відключення електроенергії', pain3p: 'Аварійні та планові відключення зупиняють виробництво та логістику',
            pain4h: 'Нестача потужності', pain4p: 'Обмежена потужність мережі не дозволяє масштабувати бізнес',
            pain5h: 'Нестабільна якість', pain5p: 'Перепади напруги пошкоджують обладнання та скорочують його ресурс',
            pain6h: 'Простої виробництва', pain6p: 'Кожна година простою — прямі фінансові збитки та зрив контрактів',
            solutionTitle: 'Energy Storage System —<br>рішення для бізнесу',
            solutionDesc: 'Система накопичує дешеву електроенергію та використовує її у години пікового навантаження — це суттєво знижує витрати.',
            solutionLi1: 'Резервне живлення', solutionLi2: 'Стабільність роботи підприємства', solutionLi3: 'Оптимізація споживання електроенергії',
            usecasesTitle: 'Сценарії використання',
            uc1h: 'Арбітраж РДН', uc1p: 'Заряд у дешеві години, розряд у пікові — максимальна економія',
            uc2h: 'Трейдинг електроенергії', uc2p: 'Активна торгівля на енергетичному ринку з максимальним прибутком',
            uc3h: 'Власні потреби', uc3p: 'Зниження витрат на електроенергію для власного споживання',
            uc4h: 'ДБЖ / Резерв', uc4p: 'Надійний захист від відключень та аварійних ситуацій',
            uc5h: 'Разом з генерацією', uc5p: 'Інтеграція з СЕС, вітровою та іншою генерацією',
            calcTitle: 'Калькулятор економії', calcSubtitle: 'Дізнайтесь, скільки ваше підприємство може зекономити з ESS',
            calcStep1: 'Задача', calcStep2: 'Потужність', calcStep3: 'Результат',
            calcQ: 'Оберіть основну задачу',
            calcOpt1: 'Арбітраж РДН', calcOpt2: 'Трейдинг', calcOpt3: 'Власні потреби', calcOpt4: 'ДБЖ / Резерв', calcOpt5: 'З генерацією',
            calcNext: 'Далі', calcPrev: 'Назад', calcCalc: 'Розрахувати',
            calcPowerTitle: 'Потужність системи', calcSysCost: 'Вартість системи:',
            calcResultTitle: 'Результат розрахунку',
            calcR1: 'Економія на місяць', calcR2: 'Строк окупності', calcR3: 'ROI за 10 років',
            calcDisclaimer: '* Розрахунок є орієнтовним. Для точного розрахунку зверніться до нашого спеціаліста.',
            calcRecalc: 'Перерахувати', calcExact: 'Отримати точний розрахунок',
            howTitle: 'Як працює система', howSubtitle: 'Система накопичує електроенергію та використовує її в потрібний момент',
            advantagesTitle: 'Переваги системи',
            adv1h: 'Офіційний дистриб\'ютор KSTAR', adv1p: 'Сертифіковане обладнання з повною гарантією виробника',
            adv2h: 'Гарантія 10 років', adv2p: '6000–8000 циклів заряду-розряду — надійність на десятиліття',
            adv3h: 'EMS / BMS', adv3p: '10+ сценаріїв роботи для оптимального управління енергією',
            adv4h: 'On-Grid / Off-Grid', adv4p: 'Повна автономність або робота паралельно з мережею',
            adv5h: 'Масштабованість', adv5p: 'Можливість додавання нових модулів при зростанні потреб',
            equipTitle: 'Обладнання',
            equipSpecInverter: 'Інвертор', equipSpecCapacity: 'Ємність батареї', equipSpecProtection: 'Захист',
            equipSpecCycles: 'Цикли', equipSpecWarranty: 'Гарантія', equipSpecWarrantyVal: '10 років',
            equipSpecBattery: 'Тип батареї', equipBtn: 'Запросити специфікацію',
            integrationsTitle: 'Інтеграції', intSubtitle: 'Система працює з різними джерелами генерації',
            int1: 'Сонячні станції', int2: 'Вітрова генерація', int3: 'Газова генерація', int4: 'Гідро', int5: 'Дизель генератори',
            projectsTitle: 'Реалізовані проекти',
            proj1tag: 'Київська область', proj1h: 'Промислове підприємство', proj1p: 'ESS 250 kW / 480 kWh — арбітраж РДН та резервне живлення',
            proj2tag: 'Київ', proj2h: 'Логістичний центр', proj2p: 'ESS 125 kW / 241 kWh — зниження витрат на електроенергію',
            proj3tag: 'Київська область', proj3h: 'Агропідприємство', proj3p: 'ESS 500 kW / 960 kWh — інтеграція з СЕС та резерв',
            audienceTitle: 'Для кого це рішення',
            aud1: 'Агробізнес', aud2: 'ТРЦ', aud3: 'ЖК / Девелопмент', aud4: 'Промисловість', aud5: 'Логістика', aud6: 'Нафтогаз', aud7: 'SMB',
            supplyTitle: 'Умови постачання',
            sup1h: 'Строк постачання', sup1a: '90–120 днів', sup1as: 'стандартне замовлення', sup1b: '30 днів', sup1bs: 'при наявності на складі',
            sup2h: 'Умови оплати', sup2a: '80% передоплата', sup2as: 'при підписанні контракту', sup2b: '20% при доставці', sup2bs: 'після монтажу та пуско-наладки',
            sup3h: 'Монтаж під ключ', sup3a: 'Повний цикл', sup3as: 'проектування, монтаж, пуско-наладка', sup3b: 'Сервісне обслуговування', sup3bs: 'гарантійне та постгарантійне',
            certsTitle: 'Сертифікати',
            cert1h: 'KSTAR', cert1p: 'Офіційний сертифікат дистриб\'ютора',
            cert2h: 'CE / IEC', cert2p: 'Європейські сертифікати відповідності',
            cert3h: 'Україна', cert3p: 'Сертифікація відповідно до законодавства України',
            contactsTitle: 'Контакти', contactPhone: 'Телефон', contactEmail: 'Email', contactAddress: 'Адреса',
            contactAddr: 'Київська обл., с. Софіївська Борщагівка, вул. Кошова 122',
            formTitle: 'Залишити заявку', formSubmit: 'Надіслати заявку',
            formName: 'Ваше ім\'я', formPhone: 'Телефон', formEmail: 'Email',
            formInterest: 'Що вас цікавить?', formOpt1: 'Розрахунок економії', formOpt2: 'Консультація', formOpt3: 'Специфікація обладнання', formOpt4: 'Проект під ключ',
            formMsg: 'Повідомлення (необов\'язково)',
            blogTitle: 'Блог', blogSubtitle: 'Корисні матеріали про енергозбереження, ESS-технології та оптимізацію витрат',
            blogMore: 'Показати більше статей',
            footerDesc: 'Офіційний дистриб\'ютор KSTAR в Україні.<br>Системи накопичення енергії для бізнесу.',
            footerCopy: '&copy; 2025–2026 UKRSTORENERGY. Всі права захищено.',
            chatStatus: 'AI Енергетичний консультант', chatPlaceholder: 'Ваше питання...',
            notifyTitle: 'Безкоштовний розрахунок ROI',
            notifyDesc: 'Дізнайтесь, скільки заощадить ваш бізнес з ESS — за 2 хвилини',
            notifyCta: 'Розрахувати'
        },
        en: {
            navSolutions: 'Solutions', navCalculator: 'Calculator', navTechnology: 'Technology',
            navProjects: 'Projects', navContacts: 'Contacts', navCta: 'Request Calculation',
            heroTitle: 'Energy Storage Systems<br>for Business',
            heroSubtitle: 'Reduce energy costs.<br>Protect your business from outages.',
            heroBtn1: 'Calculate ROI', heroBtn2: 'Get Consultation',
            painTitle: 'Why businesses lose money<br>on electricity',
            pain1h: 'Expensive electricity', pain1p: 'Annual tariff growth increases business costs by 15–25%',
            pain2h: 'Peak loads', pain2p: 'Dependence on DAM and peak tariffs significantly increases kWh costs',
            pain3h: 'Power outages', pain3p: 'Emergency and scheduled outages stop production and logistics',
            pain4h: 'Power shortage', pain4p: 'Limited grid capacity prevents business scaling',
            pain5h: 'Unstable quality', pain5p: 'Voltage fluctuations damage equipment and reduce its lifespan',
            pain6h: 'Production downtime', pain6p: 'Every hour of downtime means direct financial losses and contract breaches',
            solutionTitle: 'Energy Storage System —<br>solution for business',
            solutionDesc: 'The system stores cheap electricity and uses it during peak hours — significantly reducing costs.',
            solutionLi1: 'Backup power', solutionLi2: 'Business operation stability', solutionLi3: 'Energy consumption optimization',
            usecasesTitle: 'Use Cases',
            uc1h: 'DAM Arbitrage', uc1p: 'Charge during off-peak, discharge during peak — maximum savings',
            uc2h: 'Energy Trading', uc2p: 'Active trading on the energy market with maximum profit',
            uc3h: 'Own Consumption', uc3p: 'Reducing electricity costs for own consumption',
            uc4h: 'UPS / Backup', uc4p: 'Reliable protection against outages and emergencies',
            uc5h: 'With Generation', uc5p: 'Integration with solar, wind, and other generation',
            calcTitle: 'Savings Calculator', calcSubtitle: 'Find out how much your business can save with ESS',
            calcStep1: 'Task', calcStep2: 'Power', calcStep3: 'Result',
            calcQ: 'Select the main task',
            calcOpt1: 'DAM Arbitrage', calcOpt2: 'Trading', calcOpt3: 'Own Consumption', calcOpt4: 'UPS / Backup', calcOpt5: 'With Generation',
            calcNext: 'Next', calcPrev: 'Back', calcCalc: 'Calculate',
            calcPowerTitle: 'System power', calcSysCost: 'System cost:',
            calcResultTitle: 'Calculation result',
            calcR1: 'Monthly savings', calcR2: 'Payback period', calcR3: 'ROI over 10 years',
            calcDisclaimer: '* This is an estimate. Contact our specialist for an accurate calculation.',
            calcRecalc: 'Recalculate', calcExact: 'Get exact calculation',
            howTitle: 'How the system works', howSubtitle: 'The system stores electricity and uses it when needed',
            advantagesTitle: 'System advantages',
            adv1h: 'Official KSTAR Distributor', adv1p: 'Certified equipment with full manufacturer warranty',
            adv2h: '10-Year Warranty', adv2p: '6,000–8,000 charge-discharge cycles — reliability for decades',
            adv3h: 'EMS / BMS', adv3p: '10+ operating scenarios for optimal energy management',
            adv4h: 'On-Grid / Off-Grid', adv4p: 'Full autonomy or parallel operation with the grid',
            adv5h: 'Scalability', adv5p: 'Ability to add new modules as needs grow',
            equipTitle: 'Equipment',
            equipSpecInverter: 'Inverter', equipSpecCapacity: 'Battery capacity', equipSpecProtection: 'Protection',
            equipSpecCycles: 'Cycles', equipSpecWarranty: 'Warranty', equipSpecWarrantyVal: '10 years',
            equipSpecBattery: 'Battery type', equipBtn: 'Request specification',
            integrationsTitle: 'Integrations', intSubtitle: 'The system works with various generation sources',
            int1: 'Solar plants', int2: 'Wind generation', int3: 'Gas generation', int4: 'Hydro', int5: 'Diesel generators',
            projectsTitle: 'Completed projects',
            proj1tag: 'Kyiv region', proj1h: 'Industrial enterprise', proj1p: 'ESS 250 kW / 480 kWh — DAM arbitrage and backup power',
            proj2tag: 'Kyiv', proj2h: 'Logistics center', proj2p: 'ESS 125 kW / 241 kWh — reducing electricity costs',
            proj3tag: 'Kyiv region', proj3h: 'Agricultural enterprise', proj3p: 'ESS 500 kW / 960 kWh — solar integration and backup',
            audienceTitle: 'Who is it for',
            aud1: 'Agriculture', aud2: 'Shopping malls', aud3: 'Residential / Development', aud4: 'Industry', aud5: 'Logistics', aud6: 'Oil & Gas', aud7: 'SMB',
            supplyTitle: 'Supply terms',
            sup1h: 'Delivery time', sup1a: '90–120 days', sup1as: 'standard order', sup1b: '30 days', sup1bs: 'if in stock',
            sup2h: 'Payment terms', sup2a: '80% prepayment', sup2as: 'upon contract signing', sup2b: '20% on delivery', sup2bs: 'after installation and commissioning',
            sup3h: 'Turnkey installation', sup3a: 'Full cycle', sup3as: 'design, installation, commissioning', sup3b: 'Service maintenance', sup3bs: 'warranty and post-warranty',
            certsTitle: 'Certificates',
            cert1h: 'KSTAR', cert1p: 'Official distributor certificate',
            cert2h: 'CE / IEC', cert2p: 'European compliance certificates',
            cert3h: 'Ukraine', cert3p: 'Certification according to Ukrainian legislation',
            contactsTitle: 'Contacts', contactPhone: 'Phone', contactEmail: 'Email', contactAddress: 'Address',
            contactAddr: 'Kyiv region, Sofiyivska Borshchahivka, Koshova st. 122',
            formTitle: 'Submit a request', formSubmit: 'Send request',
            formName: 'Your name', formPhone: 'Phone', formEmail: 'Email',
            formInterest: 'What are you interested in?', formOpt1: 'Savings calculation', formOpt2: 'Consultation', formOpt3: 'Equipment specification', formOpt4: 'Turnkey project',
            formMsg: 'Message (optional)',
            blogTitle: 'Blog', blogSubtitle: 'Useful materials about energy saving, ESS technologies, and cost optimization',
            blogMore: 'Show more articles',
            footerDesc: 'Official KSTAR distributor in Ukraine.<br>Energy storage systems for business.',
            footerCopy: '&copy; 2025–2026 UKRSTORENERGY. All rights reserved.',
            chatStatus: 'AI Energy Consultant', chatPlaceholder: 'Your question...',
            notifyTitle: 'Free ROI Calculation',
            notifyDesc: 'Find out how much your business can save with ESS — in 2 minutes',
            notifyCta: 'Calculate'
        }
    };

    let currentLang = 'uk';

    function setLanguage(lang) {
        currentLang = lang;
        const t = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (!t[key]) return;
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else if (el.tagName === 'OPTION') {
                el.textContent = t[key];
            } else {
                el.innerHTML = t[key];
            }
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
    const burgerHeader = document.getElementById('burgerHeader');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavClose = document.getElementById('mobileNavClose');

    function openMobileNav() {
        mobileNav.classList.add('mobile-nav--open');
        document.body.classList.add('nav-is-open');
    }

    function closeMobileNav() {
        mobileNav.classList.remove('mobile-nav--open');
        document.body.classList.remove('nav-is-open');
    }

    if (burger) {
        burger.addEventListener('click', () => {
            mobileNav.classList.contains('mobile-nav--open') ? closeMobileNav() : openMobileNav();
        });
    }

    if (burgerHeader) {
        burgerHeader.addEventListener('click', () => {
            mobileNav.classList.contains('mobile-nav--open') ? closeMobileNav() : openMobileNav();
        });
    }

    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', closeMobileNav);
    }

    mobileNav.querySelectorAll('.mobile-nav__link').forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    if (mobileNav.querySelector('.mobile-nav__logo')) {
        mobileNav.querySelector('.mobile-nav__logo').addEventListener('click', closeMobileNav);
    }

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
            const n = document.getElementById('siteNotify');
            if (n && n.classList.contains('site-notify--visible')) {
                n.classList.add('site-notify--hiding');
                n.classList.remove('site-notify--visible');
                sessionStorage.setItem('use_notify_dismissed', '1');
                setTimeout(() => n.classList.remove('site-notify--hiding'), 500);
            }
        }
    });

    const chatHistory = [];

    function addMessage(text, isUser) {
        const div = document.createElement('div');
        div.className = `chat-msg chat-msg--${isUser ? 'user' : 'bot'}`;
        div.innerHTML = `<p>${text}</p>`;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function addTypingIndicator() {
        const div = document.createElement('div');
        div.className = 'chat-msg chat-msg--bot chat-msg--typing';
        div.innerHTML = '<p><span class="typing-dots"><span>.</span><span>.</span><span>.</span></span></p>';
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return div;
    }

    async function getAIResponse(msg) {
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: msg, history: chatHistory })
            });
            const data = await res.json();
            if (data.reply) return data.reply;
            return 'Вибачте, сталася помилка. Зателефонуйте нам: +38 (067) 208-55-58';
        } catch {
            return 'Вибачте, сервіс тимчасово недоступний. Зв\'яжіться з нами: +38 (067) 208-55-58';
        }
    }

    async function handleChatSend() {
        const msg = chatInput.value.trim();
        if (!msg) return;

        addMessage(msg, true);
        chatHistory.push({ role: 'user', content: msg });
        chatInput.value = '';
        chatInput.disabled = true;
        chatSend.disabled = true;

        const typing = addTypingIndicator();

        const reply = await getAIResponse(msg);

        typing.remove();
        addMessage(reply, false);
        chatHistory.push({ role: 'assistant', content: reply });

        chatInput.disabled = false;
        chatSend.disabled = false;
        chatInput.focus();
    }

    chatSend.addEventListener('click', handleChatSend);
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleChatSend();
    });

    // ========================================
    // DELAYED NOTIFICATION
    // ========================================

    const siteNotify = document.getElementById('siteNotify');
    const notifyClose = document.getElementById('notifyClose');
    const notifyCta = document.getElementById('notifyCta');
    const NOTIFY_DISMISSED_KEY = 'use_notify_dismissed';

    function showNotification() {
        if (sessionStorage.getItem(NOTIFY_DISMISSED_KEY)) return;
        if (chatWidget.classList.contains('chat-widget--open')) return;
        siteNotify.classList.add('site-notify--visible');
    }

    function hideNotification(permanent) {
        siteNotify.classList.add('site-notify--hiding');
        siteNotify.classList.remove('site-notify--visible');
        if (permanent) sessionStorage.setItem(NOTIFY_DISMISSED_KEY, '1');
        setTimeout(() => siteNotify.classList.remove('site-notify--hiding'), 500);
    }

    notifyClose.addEventListener('click', () => hideNotification(true));

    notifyCta.addEventListener('click', () => {
        hideNotification(true);
        chatWidget.classList.add('chat-widget--open');
        chatInput.focus();
    });

    setTimeout(showNotification, 25000);

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
    // BLOG — SHOW MORE
    // ========================================

    const blogMoreBtn = document.getElementById('blogMore');
    if (blogMoreBtn) {
        blogMoreBtn.addEventListener('click', () => {
            const hidden = document.querySelectorAll('.blog__card--hidden');
            hidden.forEach(card => {
                card.classList.remove('blog__card--hidden');
                observer.observe(card);
            });
            blogMoreBtn.parentElement.style.display = 'none';
        });
    }

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
