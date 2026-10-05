document.addEventListener('DOMContentLoaded', () => {

    // Hero playlist: play clip 1, then clip 2, then back to 1. Init may already
    // have run from the inline script so autoplay is not blocked.
    window.initHeroPlaylist && window.initHeroPlaylist();

    // ========================================
    // i18n — LANGUAGE SWITCHER
    // ========================================

    const translations = {
        uk: {
            navSolutions: 'Рішення', navAbout: 'Про компанію', navPartnership: 'Партнерство', navCharging: 'Зарядки', navCalculator: 'Калькулятор', navTechnology: 'Технологія',
            navProjects: 'Проекти', navContacts: 'Контакти', navCta: 'Розрахувати',
            pageTitle: 'UKRSTORENERGY — Системи накопичення енергії ESS KSTAR для бізнесу в Україні',
            pageDesc: 'Офіційний дистриб\'ютор KSTAR ESS в Україні. Промислові системи накопичення енергії (ESS/BESS) — зниження витрат на електроенергію до 40%, резервне живлення, арбітраж РДН.',
            aboutKicker: 'Про компанію',
            aboutTitle: 'Розвиваємо енергетичну інфраструктуру України',
            aboutLead: 'UKRSTORENERGY SOLUTIONS — локальна платформа для реалізації енергетичних проєктів.',
            aboutSkill1: 'Технології', aboutSkill2: 'Інжиніринг', aboutSkill3: 'Впровадження<br>та сервіс',
            aboutFounderKicker: 'Засновник / Founder',
            aboutName: 'Олександр Строганов',
            aboutRole: 'Founder &amp; Managing Partner,<br>UKRSTORENERGY SOLUTIONS',
            aboutYears: 'років управлінського та підприємницького досвіду',
            aboutQuote1: 'Сьогодні мій основний фокус — розвиток систем накопичення енергії та BESS-проєктів в Україні.',
            aboutQuote2: 'UKRSTORENERGY SOLUTIONS я створив як локальну платформу для реалізації енергетичних проєктів — від технології та інжинірингу до впровадження, сервісу й розвитку бізнесу.',
            aboutPartner: 'Ми відкриті до стратегічного партнерства та інвестицій у розвиток енергетичної інфраструктури України.',
            aboutCta: 'Обговорити партнерство →',
            heroTitle: 'Системи накопичення<br>енергії для бізнесу<br>та побутових споживачів',
            heroSubtitle: 'Зниження витрат на електроенергію.<br>Резервне живлення бізнесу та дому.',
            heroTitleBiz: 'Системи накопичення<br>енергії для бізнесу',
            heroTitleHome: 'Системи накопичення<br>енергії',
            heroSubtitleBiz: 'Менше витрат на електроенергію.<br>Безперебійна робота підприємства.',
            heroSubtitleHome: 'Менше витрат на електроенергію.<br>Резервне живлення вашого дому.',
            heroAudBiz: 'Для бізнесу', heroAudHome: 'Для дому',
            heroHint: 'Попередній розрахунок за 2 хвилини',
            heroConsultTitle: 'Потрібна консультація?',
            heroConsultText: 'Зв\'яжемося та підберемо рішення',
            heroCall: 'Зателефонувати', heroWrite: 'Написати',
            heroBtn1: 'Розрахувати економію', heroBtn2: 'Отримати консультацію',
            painTitle: 'Чому підприємства втрачають гроші<br>на електроенергії',
            painTitleMobile: 'Чому підприємства<br>обирають наші<br>системи',
            pain1h: 'Дорога електроенергія', pain1p: 'Зростання тарифів щороку збільшує витрати підприємства на 15–25%',
            pain2h: 'Пікові навантаження', pain2p: 'Залежність від РДН та пікових тарифів суттєво підвищує вартість кВт·год',
            pain3h: 'Відключення електроенергії', pain3p: 'Аварійні та планові відключення зупиняють виробництво та логістику',
            pain4h: 'Нестача потужності', pain4p: 'Обмежена потужність мережі не дозволяє масштабувати бізнес',
            pain5h: 'Нестабільна якість', pain5p: 'Перепади напруги пошкоджують обладнання та скорочують його ресурс',
            pain6h: 'Простої виробництва', pain6p: 'Кожна година простою — прямі фінансові збитки та зрив контрактів',
            solutionTitle: 'Energy Storage System —<br>рішення для бізнесу',
            solutionDesc: 'Система накопичує дешеву електроенергію та використовує її у години пікового навантаження — це суттєво знижує витрати.',
            solutionLi1: 'Резервне живлення', solutionLi2: 'Стабільність роботи підприємства', solutionLi3: 'Оптимізація споживання електроенергії',
            usecasesTitle: '5 сценаріїв використання ESS для бізнесу',
            usecasesSubtitle: 'Натисніть на сценарій, щоб дізнатися принцип роботи, вигоди та варіанти впровадження',
            ucMore: 'Детальніше',
            uc1h: 'Арбітраж РДН', uc1p: 'Заряд у дешеві години, розряд у пікові — максимальна економія',
            uc2h: 'Трейдинг електроенергії', uc2p: 'Активна торгівля на енергетичному ринку з максимальним прибутком',
            uc3h: 'Власні потреби', uc3p: 'Зниження витрат на електроенергію для власного споживання',
            uc4h: 'Резервне живлення', uc4p: 'Захист бізнесу від відключень — миттєве переключення за <20 мс',
            uc5h: 'Разом з генерацією', uc5p: 'Інтеграція з СЕС, вітровою та іншою генерацією',
            calcTitle: 'Калькулятор економії', calcSubtitle: 'Дізнайтесь, скільки ваше підприємство може зекономити з ESS',
            calcStep1: 'Задача', calcStep2: 'Потужність', calcStep3: 'Результат',
            calcQ: 'Оберіть основну задачу',
            calcOpt1: 'Арбітраж РДН', calcOpt2: 'Трейдинг', calcOpt3: 'Власні потреби', calcOpt4: 'Резервне живлення', calcOpt5: 'З генерацією',
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
            equipTitle: 'Обладнання', equipSubtitle: 'Оберіть сценарій використання, потужність інвертора та ємність батареї',
            equipInvLabel: 'Інвертор', equipBatLabel: 'Батарея', equipBatLabelHome: 'Ємність батареї',
            equipSolIndKicker: 'Промислові рішення', equipSolIndTitle: 'Для промислових потреб', equipSolIndMeta: 'Підприємства · офіси · комерція',
            equipSolHomeKicker: 'Побутові рішення', equipSolHomeTitle: 'Для побутових потреб', equipSolHomeMeta: 'Будинок · квартира · таунхаус',
            equipSwipe: 'Гортайте між рішеннями',
            equipBadgeInd: 'Промислова ESS', equipBadgeHome: 'Побутова ESS',
            equipSpecInverter: 'Інвертор', equipSpecCapacity: 'Ємність батареї', equipSpecProtection: 'Захист',
            equipSpecModel: 'Модель інвертора', equipSpecModules: 'Модулі батареї',
            equipSpecEfficiency: 'ККД інвертора',
            equipSpecCycles: 'Цикли', equipSpecWarranty: 'Гарантія', equipSpecWarrantyVal: '10 років',
            equipSpecBattery: 'Тип батареї', equipSpecPrice: 'Орієнтовна вартість',
            equipBtn: 'Запросити специфікацію',
            equipBridgeKicker: 'Також ставимо',
            equipBridgeTitle: 'DC-зарядні станції для авто',
            equipBridgeMeta: 'KSTAR GreenFlow 120–480 кВт · окремо або разом з ESS',
            chgKicker: 'KSTAR GreenFlow',
            chgTitle: 'DC-зарядні станції для бізнесу',
            chgSubtitle: 'Швидкі зарядки 120–480 кВт. Працюють окремо або в парі з ESS — заряд у дешеві години, дохід з першого дня.',
            chgBadge: 'DC Fast Charge',
            chgLead: 'Той самий KSTAR, що й у системах накопичення. Менше сервісних викликів, більше контрактів, швидша окупність.',
            chgStat1: 'Потужність', chgStat2: 'Піковий ККД', chgStat3: 'Діапазон напруги', chgStat4: 'Модулі',
            chgCta: 'Запросити специфікацію зарядки',
            chgScene: 'Один зарядник — будь-який EV. Повна потужність на 400V і 800V.',
            chg1h: 'Стабільні 96% ККД', chg1p: 'SiC-технологія знижує втрати енергії і витрати на електрику щороку.',
            chg2h: '6 рівнів електробезпеки', chg2p: 'Страховики довіряють. Менше аварійних викликів на об’єкті.',
            chg3h: 'Масштаб модулями', chg3p: 'Одна шафа, гнучкі модулі 30/40 кВт. Зростаєте разом із майданчиком.',
            chg4h: 'Монтаж за години', chg4p: 'Готові підключати. Виручка з першого дня, без довгого простою майданчика.',
            chg5h: 'Налаштування в одному додатку', chg5p: 'Запуск за хвилини. Без зайвої інженерії на місці.',
            chg6h: 'Віддалений моніторинг', chg6p: 'Контроль станцій з будь-якої точки. Живі дані по парку.',
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
            contactAddr: 'м. Київ, Святошинський район, 03179, пр-т Берестейський (Перемоги), 131, приміщення 3',
            formTitle: 'Залишити заявку', formSubmit: 'Надіслати заявку',
            formName: 'Ім\'я', formCompany: 'Компанія', formPhone: 'Телефон', formEmail: 'Email',
            formInterest: 'Що вас цікавить?', formOpt1: 'Розрахунок економії', formOpt2: 'Консультація', formOpt3: 'Специфікація обладнання', formOpt4: 'Проект під ключ', formOpt5: 'DC-зарядні станції',
            formOptPartnership: 'Стратегічне партнерство',
            formMsg: 'Повідомлення (необов\'язково)', formMsgRequired: 'Повідомлення',
            partnershipKicker: 'Інвестиції та стратегічне партнерство',
            partnershipTitle: 'Будуємо ринок систем накопичення <span class="partnership__accent">енергії</span> в Україні',
            partnershipLead: '<strong>UKRSTORENERGY SOLUTIONS</strong> відкрита до співпраці зі стратегічними інвесторами та технологічними партнерами, готовими інвестувати у розвиток BESS-бізнесу в Україні.',
            partnershipPlatform: 'Локальна платформа',
            partnershipPlatformNote: 'Від розвитку проєкту до сервісу',
            partnershipStep1h: 'Розвиток проєктів', partnershipStep1p: 'Робота з клієнтами',
            partnershipStep2h: 'Технічна інтеграція', partnershipStep2p: 'Монтаж та commissioning',
            partnershipStep3h: 'Сервіс', partnershipStep3p: 'Розвиток інфраструктури',
            partnershipCardKicker: 'Відкриті до партнерства',
            partnershipCardText: 'Ми шукаємо партнерів, готових не просто постачати обладнання, а <strong>будувати бізнес в Україні разом з нами</strong>.',
            partnershipCta: 'Обговорити партнерство →',
            partnershipCardNote: 'Для інвесторів і технологічних партнерів',
            blogTitle: 'Блог', blogSubtitle: 'Корисні матеріали про енергозбереження, ESS-технології та оптимізацію витрат',
            blogMore: 'Показати більше статей',
            footerDesc: 'Офіційний дистриб\'ютор KSTAR в Україні.<br>Системи накопичення енергії та зарядні станції для бізнесу.',
            footerCopy: '&copy; 2025–2026 UKRSTORENERGY. Всі права захищено.',
            chatStatus: 'AI Енергетичний консультант', chatPlaceholder: 'Ваше питання...',
            chatWelcome1: 'Вітаю! Я AI енергетичний консультант UKRSTORENERGY. Можу:',
            chatWelcome2: '📊 Розрахувати економію та ROI',
            chatWelcome3: '💰 Оцінити вартість системи',
            chatWelcome4: '⚡ Підібрати потужність',
            chatWelcome5: '🔋 Порадити з інтеграцією',
            chatWelcome6: 'Напишіть "Скільки коштує?" або опишіть ваш бізнес — і я зроблю розрахунок!',
            notifyTitle: 'Безкоштовний розрахунок ROI',
            notifyDesc: 'Дізнайтесь, скільки заощадить ваш бізнес з ESS — за 2 хвилини',
            notifyCta: 'Розрахувати'
        },
        en: {
            navSolutions: 'Solutions', navAbout: 'Company', navPartnership: 'Partnership', navCharging: 'Charging', navCalculator: 'Calculator', navTechnology: 'Technology',
            navProjects: 'Projects', navContacts: 'Contact', navCta: 'Talk to us',
            pageTitle: 'UKRSTORENERGY SOLUTIONS — BESS platform in Ukraine | Projects, delivery, partnerships',
            pageDesc: 'Ukrainian company for battery energy storage. Local project development, technical integration, commissioning and service. Open to manufacturers, investors and long-term partners.',
            aboutKicker: 'Ukrainian company',
            aboutTitle: 'A local platform for energy storage in Ukraine',
            aboutLead: '<strong>UKRSTORENERGY SOLUTIONS</strong> is established in Ukraine. We originate BESS projects, integrate the technology on site, and keep systems in service.',
            aboutSkill1: 'Project<br>development', aboutSkill2: 'Technical<br>integration', aboutSkill3: 'Service<br>capability',
            aboutFounderKicker: 'Founder',
            aboutName: 'Oleksandr Strohanov',
            aboutRole: 'Founder &amp; Managing Partner,<br>UKRSTORENERGY SOLUTIONS',
            aboutYears: 'years building and running businesses, now focused on energy storage in Ukraine',
            aboutQuote1: 'I built this company in Ukraine to take BESS projects from the first client conversation to a working, serviced asset.',
            aboutQuote2: 'We already deliver industrial storage locally. We are now looking for manufacturers, investors and funds who want a long-term partner on the ground — not a one-off shipment.',
            aboutPartner: 'Strategic capital and technology partners are welcome. The aim is a lasting BESS business in Ukraine, not a short supply deal.',
            aboutCta: 'Talk about partnership →',
            heroTitle: 'A Ukrainian company for<br>battery energy storage',
            heroSubtitle: 'Local project development. Technical delivery. Service after commissioning.<br>Open to manufacturers, investors and long-term partners.',
            heroTitleBiz: 'BESS projects<br>developed in Ukraine',
            heroTitleHome: 'Energy storage<br>for homes',
            heroSubtitleBiz: 'We originate, integrate and service industrial storage.<br>A local partner for technology and capital.',
            heroSubtitleHome: 'Lower electricity costs.<br>Backup power when the grid fails.',
            heroAudBiz: 'Industry &amp; partners', heroAudHome: 'Homes',
            heroHint: 'A first-look estimate in two minutes',
            heroConsultTitle: 'Coming from LinkedIn?',
            heroConsultText: 'Write to us — partnership or a live project',
            heroCall: 'Call', heroWrite: 'Email',
            heroBtn1: 'See the economics', heroBtn2: 'Start a conversation',
            painTitle: 'Why Ukrainian industry<br>is installing storage now',
            painTitleMobile: 'Why sites<br>in Ukraine<br>need BESS',
            pain1h: 'Rising power cost', pain1p: 'Tariffs keep climbing. Storage lets a site buy cheap hours and avoid expensive peaks.',
            pain2h: 'Peak-price exposure', pain2p: 'Day-ahead market spreads are wide. That is a commercial case for BESS, not only a technical one.',
            pain3h: 'Unreliable grid', pain3p: 'Outages stop plants and warehouses. Storage keeps critical loads running.',
            pain4h: 'Grid constraints', pain4p: 'Many sites cannot get more grid capacity. Storage unlocks growth without a new connection.',
            pain5h: 'Power quality', pain5p: 'Voltage swings damage equipment. A well-integrated BESS stabilises the site.',
            pain6h: 'Cost of downtime', pain6p: 'An hour offline is lost output and broken contracts. That is why operators pay for backup.',
            solutionTitle: 'What we deliver<br>on the ground',
            solutionDesc: 'We are the local team: we find the site, structure the use case, integrate KSTAR storage, commission it, and stay for service.',
            solutionLi1: 'Backup when the grid fails', solutionLi2: 'Stable operations on site', solutionLi3: 'Lower cost of consumed power',
            usecasesTitle: 'How industrial storage is used in Ukraine',
            usecasesSubtitle: 'These are the cases we develop with clients — from first model to commissioned system.',
            ucMore: 'How it works',
            uc1h: 'Day-ahead arbitrage', uc1p: 'Charge in cheap hours, discharge in peaks — the core commercial case on the Ukrainian market',
            uc2h: 'Market participation', uc2p: 'Trade stored energy where the market allows, with a local team on the asset',
            uc3h: 'On-site consumption', uc3p: 'Cut the site’s electricity bill without changing the production process',
            uc4h: 'Backup power', uc4p: 'Switch to battery in under 20 ms when the grid drops',
            uc5h: 'With generation', uc5p: 'Pair storage with solar, wind or other on-site generation',
            calcTitle: 'First-look economics', calcSubtitle: 'A directional view of savings — not a bankable model. We refine it with you.',
            calcStep1: 'Use case', calcStep2: 'Power', calcStep3: 'Result',
            calcQ: 'What is the main job of the system?',
            calcOpt1: 'Day-ahead arbitrage', calcOpt2: 'Trading', calcOpt3: 'On-site use', calcOpt4: 'Backup', calcOpt5: 'With generation',
            calcNext: 'Next', calcPrev: 'Back', calcCalc: 'Estimate',
            calcPowerTitle: 'System power', calcSysCost: 'Indicative system cost:',
            calcResultTitle: 'Indicative result',
            calcR1: 'Monthly saving', calcR2: 'Payback', calcR3: '10-year ROI',
            calcDisclaimer: '* Directional only. A real project needs site data and a local engineering review.',
            calcRecalc: 'Change inputs', calcExact: 'Request a proper review',
            howTitle: 'How the system works', howSubtitle: 'The battery stores power and releases it when the site or the market needs it.',
            advantagesTitle: 'Why partners work with us',
            adv1h: 'Official KSTAR distributor', adv1p: 'Certified equipment and a manufacturer warranty, with a Ukrainian counterpart',
            adv2h: '10-year warranty class', adv2p: '6,000–8,000 cycles — industrial life, not a pilot box',
            adv3h: 'EMS / BMS', adv3p: 'Multiple operating modes so the same asset can serve backup and commercial use',
            adv4h: 'On-grid and off-grid', adv4p: 'Parallel with the network, or hold critical loads when it fails',
            adv5h: 'Built to grow', adv5p: 'Add modules as the site or the portfolio grows',
            equipTitle: 'Equipment we integrate', equipSubtitle: 'Industrial and residential KSTAR storage — sized to the site, then installed and serviced here.',
            equipInvLabel: 'Inverter', equipBatLabel: 'Battery', equipBatLabelHome: 'Battery capacity',
            equipSolIndKicker: 'Industrial', equipSolIndTitle: 'For plants and commercial sites', equipSolIndMeta: 'Industry · offices · logistics',
            equipSolHomeKicker: 'Residential', equipSolHomeTitle: 'For homes', equipSolHomeMeta: 'House · apartment · townhouse',
            equipSwipe: 'Switch between offerings',
            equipBadgeInd: 'Industrial ESS', equipBadgeHome: 'Home ESS',
            equipSpecInverter: 'Inverter', equipSpecCapacity: 'Battery capacity', equipSpecProtection: 'Protection',
            equipSpecModel: 'Inverter model', equipSpecModules: 'Battery modules',
            equipSpecEfficiency: 'Inverter efficiency',
            equipSpecCycles: 'Cycles', equipSpecWarranty: 'Warranty', equipSpecWarrantyVal: '10 years',
            equipSpecBattery: 'Battery type', equipSpecPrice: 'Indicative cost',
            equipPriceOnRequest: 'Priced per project', equipBtn: 'Request a specification',
            equipBridgeKicker: 'Also in the offering',
            equipBridgeTitle: 'DC fast charging for EVs',
            equipBridgeMeta: 'KSTAR GreenFlow 120–480 kW · standalone or with BESS',
            chgKicker: 'KSTAR GreenFlow',
            chgTitle: 'DC charging we can deploy with storage',
            chgSubtitle: '120–480 kW chargers. Standalone, or paired with BESS so the site charges off-peak and earns from day one.',
            chgBadge: 'DC Fast Charge',
            chgLead: 'Same manufacturer as our storage stack. One local team for integration and service.',
            chgStat1: 'Power', chgStat2: 'Peak efficiency', chgStat3: 'Voltage range', chgStat4: 'Modules',
            chgCta: 'Request charger details',
            chgScene: 'One charger, 400 V and 800 V vehicles, full power.',
            chg1h: '96% peak efficiency', chg1p: 'SiC hardware cuts losses — lower electricity cost over the life of the site.',
            chg2h: 'Six-layer electrical safety', chg2p: 'Built for insured commercial sites, not a light-duty pedestal.',
            chg3h: 'Modular scale', chg3p: 'One cabinet, 30/40 kW modules. Grow the depot without a new architecture.',
            chg4h: 'Hours, not months, to connect', chg4p: 'Prepared for fast commissioning so the site is not idle.',
            chg5h: 'One commissioning app', chg5p: 'Go live without a large on-site engineering crew.',
            chg6h: 'Remote operations', chg6p: 'Live fleet data after handover — we stay on the asset.',
            integrationsTitle: 'What we connect to', intSubtitle: 'Storage sits with the generation the site already has — or plans to add.',
            int1: 'Solar', int2: 'Wind', int3: 'Gas generation', int4: 'Hydro', int5: 'Diesel',
            projectsTitle: 'Projects already in operation',
            proj1tag: 'Kyiv region', proj1h: 'Industrial plant', proj1p: '250 kW / 480 kWh BESS — delivered for day-ahead use and backup',
            proj2tag: 'Kyiv', proj2h: 'Logistics hub', proj2p: '125 kW / 241 kWh BESS — delivered to cut the site’s power bill',
            proj3tag: 'Kyiv region', proj3h: 'Agribusiness', proj3p: '500 kW / 960 kWh BESS — delivered with solar and backup',
            audienceTitle: 'Who we build for',
            aud1: 'Agribusiness', aud2: 'Retail &amp; malls', aud3: 'Developers', aud4: 'Industry', aud5: 'Logistics', aud6: 'Oil &amp; gas', aud7: 'Mid-size business',
            supplyTitle: 'How a delivery usually runs',
            sup1h: 'Lead time', sup1a: '90–120 days', sup1as: 'standard order', sup1b: '30 days', sup1bs: 'when stock is available',
            sup2h: 'Payment', sup2a: '80% advance', sup2as: 'on contract', sup2b: '20% on delivery', sup2bs: 'after install and commissioning',
            sup3h: 'Turnkey on site', sup3a: 'Full local cycle', sup3as: 'design, install, commission', sup3b: 'Service', sup3bs: 'warranty and after-warranty',
            certsTitle: 'Credentials',
            cert1h: 'KSTAR', cert1p: 'Official distributor in Ukraine',
            cert2h: 'CE / IEC', cert2p: 'European conformity on the equipment',
            cert3h: 'Ukraine', cert3p: 'Certified for use under Ukrainian rules',
            contactsTitle: 'Contact', contactPhone: 'Phone', contactEmail: 'Email', contactAddress: 'Office',
            contactAddr: 'Kyiv, Sviatoshynskyi district, 03179, 131 Beresteyskyi (Peremohy) Avenue, premises 3',
            formTitle: 'Write to the team', formSubmit: 'Send',
            formName: 'Name', formCompany: 'Company / fund', formPhone: 'Phone', formEmail: 'Email',
            formInterest: 'What brings you here?', formOpt1: 'Project economics', formOpt2: 'A conversation', formOpt3: 'Equipment specification', formOpt4: 'A turnkey site', formOpt5: 'DC charging',
            formOptPartnership: 'Strategic partnership or investment',
            formMsg: 'Message (optional)', formMsgRequired: 'Tell us who you are and what you want to explore',
            partnershipKicker: 'Investment and long-term partnership',
            partnershipTitle: 'A local partner to build the <span class="partnership__accent">BESS</span> market in Ukraine',
            partnershipLead: '<strong>UKRSTORENERGY SOLUTIONS</strong> is a Ukrainian company. We develop projects here, integrate the technology, commission it, and service it. We are looking for manufacturers, investors and funds who want that local capability — and a multi-year partnership, not a single container.',
            partnershipPlatform: 'What we do here',
            partnershipPlatformNote: 'From the first site visit to an operating asset',
            partnershipStep1h: 'Project development', partnershipStep1p: 'Local clients, sites, and commercial structure',
            partnershipStep2h: 'Technical integration', partnershipStep2p: 'Engineering, installation, commissioning',
            partnershipStep3h: 'Service', partnershipStep3p: 'After handover: operations support and growth',
            partnershipCardKicker: 'Who this is for',
            partnershipCardText: 'If you manufacture storage, invest in infrastructure, or want a ground partner in Ukraine, we want a conversation about <strong>building this market together for the long run</strong>.',
            partnershipCta: 'Open a partnership conversation →',
            partnershipCardNote: 'Manufacturers · investors · funds · strategic partners',
            blogTitle: 'Notes from the market', blogSubtitle: 'Context on storage, economics and delivery in Ukraine — for partners who want more than a brochure.',
            blogMore: 'More articles',
            footerDesc: 'Ukrainian BESS platform. Official KSTAR distributor.<br>Project development, integration, service — and long-term partnerships.',
            footerCopy: '&copy; 2025–2026 UKRSTORENERGY SOLUTIONS. All rights reserved.',
            chatStatus: 'UKRSTORENERGY assistant', chatPlaceholder: 'Your question…',
            chatWelcome1: 'Hello — this is the UKRSTORENERGY assistant. I can help with:',
            chatWelcome2: '📊 Directional savings and payback',
            chatWelcome3: '🏭 What we deliver on industrial sites',
            chatWelcome4: '🤝 Partnership or investment conversations',
            chatWelcome5: '⚡ Sizing and integration questions',
            chatWelcome6: 'Say if you are a manufacturer, investor or operator — I will point you to the right next step.',
            notifyTitle: 'For partners and operators',
            notifyDesc: 'See how a BESS case looks in Ukraine — or go straight to a partnership conversation.',
            notifyCta: 'Open the estimate'
        }
    };

    let currentLang = 'uk';
    const LANG_KEY = 'use-lang';

    function readLang() {
        try {
            const fromUrl = (new URLSearchParams(window.location.search).get('lang') || '').toLowerCase();
            if (fromUrl === 'en' || fromUrl === 'uk') return fromUrl;
            const stored = localStorage.getItem(LANG_KEY);
            if (stored === 'en' || stored === 'uk') return stored;
        } catch (e) { /* ignore */ }
        return 'uk';
    }

    function writeLangUrl(lang) {
        try {
            const url = new URL(window.location.href);
            if (lang === 'en') url.searchParams.set('lang', 'en');
            else url.searchParams.delete('lang');
            history.replaceState(null, '', url.pathname + url.search + url.hash);
        } catch (e) { /* ignore */ }
    }

    function setLanguage(lang) {
        currentLang = lang === 'en' ? 'en' : 'uk';
        const t = translations[currentLang];
        if (!t) return;
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
        const partnerForm = document.getElementById('contactForm');
        if (partnerForm && partnerForm.classList.contains('contacts__form--partnership') && t.formMsgRequired) {
            const msg = partnerForm.querySelector('textarea[name="message"]');
            if (msg) msg.placeholder = t.formMsgRequired;
        }
        document.documentElement.lang = currentLang;
        if (t.pageTitle) document.title = t.pageTitle;
        const desc = document.querySelector('meta[name="description"]');
        if (desc && t.pageDesc) desc.setAttribute('content', t.pageDesc);
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        const ogLocale = document.querySelector('meta[property="og:locale"]');
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogTitle && t.pageTitle) ogTitle.setAttribute('content', t.pageTitle);
        if (ogDesc && t.pageDesc) ogDesc.setAttribute('content', t.pageDesc);
        if (ogLocale) ogLocale.setAttribute('content', currentLang === 'en' ? 'en_US' : 'uk_UA');
        if (ogUrl) ogUrl.setAttribute('content', currentLang === 'en' ? 'https://use.net.ua/?lang=en' : 'https://use.net.ua/');
        document.querySelectorAll('.lang-switch__btn').forEach(btn => {
            btn.classList.toggle('lang-switch__btn--active', btn.dataset.lang === currentLang);
        });
        const chatToggle = document.getElementById('chatToggle');
        if (chatToggle && t.chatStatus) chatToggle.setAttribute('aria-label', t.chatStatus);
        try { localStorage.setItem(LANG_KEY, currentLang); } catch (e) { /* ignore */ }
        writeLangUrl(currentLang);
        applyHeroCopy();
    }

    function isMobileHero() {
        return window.matchMedia('(max-width: 768px), (max-device-width: 500px)').matches;
    }

    function currentAudience() {
        const active = document.querySelector('.hero-audience__btn.is-active');
        return (active && active.dataset.audience) || 'business';
    }

    function applyHeroCopy() {
        const t = translations[currentLang];
        const title = document.querySelector('.hero__title');
        const subtitle = document.querySelector('.hero__subtitle');
        if (!title || !subtitle || !t) return;
        if (isMobileHero()) {
            const home = currentAudience() === 'home';
            title.innerHTML = home ? t.heroTitleHome : t.heroTitleBiz;
            subtitle.innerHTML = home ? t.heroSubtitleHome : t.heroSubtitleBiz;
        } else {
            title.innerHTML = t.heroTitle;
            subtitle.innerHTML = t.heroSubtitle;
        }
    }

    function setHeroAudience(audience, options) {
        const silent = options && options.silent;
        document.querySelectorAll('.hero-audience__btn').forEach((btn) => {
            const on = btn.dataset.audience === audience;
            btn.classList.toggle('is-active', on);
            btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        applyHeroCopy();
        if (!silent && window.setEquipSolution) {
            window.setEquipSolution(audience === 'home' ? 'home' : 'industrial');
        }
    }

    function scrollToEquipment() {
        const equipment = document.getElementById('equipment');
        if (!equipment) return;
        equipment.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const heroAudience = document.getElementById('heroAudience');
    if (heroAudience) {
        heroAudience.addEventListener('click', (e) => {
            const btn = e.target.closest('.hero-audience__btn');
            if (!btn) return;
            setHeroAudience(btn.dataset.audience);
            if (isMobileHero()) scrollToEquipment();
        });
    }
    window.addEventListener('resize', applyHeroCopy);

    document.querySelectorAll('.lang-switch').forEach(switcher => {
        switcher.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-switch__btn');
            if (!btn) return;
            setLanguage(btn.dataset.lang);
        });
    });
    setLanguage(readLang());

    // ========================================
    // STICKY HEADER — shows after scrolling past hero
    // ========================================

    const header = document.getElementById('header');
    const heroSection = document.getElementById('hero');

    window.addEventListener('scroll', () => {
        if (!heroSection || !header) return;
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

    if (mobileNav) {
        mobileNav.querySelectorAll('.mobile-nav__link').forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });

        if (mobileNav.querySelector('.mobile-nav__logo')) {
            mobileNav.querySelector('.mobile-nav__logo').addEventListener('click', closeMobileNav);
        }
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
    // EQUIPMENT CONFIGURATOR
    // ========================================

    const inverterOptions = document.getElementById('inverterOptions');
    const batteryOptions = document.getElementById('batteryOptions');
    const equipSolutions = document.getElementById('equipSolutions');
    const EQUIP = window.UKRSTOR_EQUIPMENT;

    if (inverterOptions && batteryOptions && EQUIP) {
        const STORAGE_KEY = 'use_equip_cfg';
        const solOrder = ['industrial', 'home'];
        const industrial = EQUIP.industrial;
        const residential = EQUIP.residential;
        const resInverters = EQUIP.residentialInverters;
        const resBatteries = EQUIP.residentialBatteries;

        function loadSaved() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                return raw ? JSON.parse(raw) : {};
            } catch (err) {
                return {};
            }
        }

        function includesNum(list, value) {
            return list.some((item) => Number(item) === Number(value));
        }

        const saved = loadSaved();
        const selection = {
            industrial: {
                inv: includesNum(industrial.inverters, saved.industrial && saved.industrial.inv)
                    ? Number(saved.industrial.inv)
                    : industrial.defaultInv,
                bat: includesNum(industrial.batteries, saved.industrial && saved.industrial.bat)
                    ? Number(saved.industrial.bat)
                    : industrial.defaultBat
            },
            home: {
                inv: resInverters.some((item) => item.kw === Number(saved.home && saved.home.inv))
                    ? Number(saved.home.inv)
                    : residential.defaultInv,
                bat: resBatteries.some((item) => item.kwh === parseFloat(saved.home && saved.home.bat))
                    ? parseFloat(saved.home.bat)
                    : residential.defaultBat
            }
        };

        let selectedSol = saved.sol === 'home' ? 'home' : 'industrial';

        function persist() {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify({
                    sol: selectedSol,
                    industrial: selection.industrial,
                    home: selection.home
                }));
            } catch (err) { /* private mode */ }
        }

        function formatKwh(value) {
            return Number.isInteger(value) ? String(value) : String(value);
        }

        function homeInverter() {
            return resInverters.find((item) => item.kw === selection.home.inv) || resInverters[1];
        }

        function homeBattery() {
            return resBatteries.find((item) => item.kwh === selection.home.bat) || resBatteries[1];
        }

        function renderOptionButtons() {
            if (selectedSol === 'industrial') {
                inverterOptions.innerHTML = industrial.inverters.map((value) => {
                    const active = value === selection.industrial.inv ? ' equip-config__btn--active' : '';
                    return `<button type="button" class="equip-config__btn equip-config__btn--inv${active}" data-inv="${value}">${value} kW</button>`;
                }).join('');
                batteryOptions.innerHTML = industrial.batteries.map((value) => {
                    const active = value === selection.industrial.bat ? ' equip-config__btn--active' : '';
                    return `<button type="button" class="equip-config__btn equip-config__btn--bat${active}" data-bat="${value}">${value} kWh</button>`;
                }).join('');
                return;
            }

            inverterOptions.innerHTML = resInverters.map((item) => {
                const active = item.kw === selection.home.inv ? ' equip-config__btn--active' : '';
                return `<button type="button" class="equip-config__btn equip-config__btn--inv${active}" data-inv="${item.kw}">${item.kw} kW</button>`;
            }).join('');
            batteryOptions.innerHTML = resBatteries.map((item) => {
                const active = item.kwh === selection.home.bat ? ' equip-config__btn--active' : '';
                return `<button type="button" class="equip-config__btn equip-config__btn--bat${active}" data-bat="${item.kwh}">${formatKwh(item.kwh)} kWh</button>`;
            }).join('');
        }

        function updateCarousel() {
            const idx = solOrder.indexOf(selectedSol);
            if (equipSolutions) {
                equipSolutions.dataset.index = String(idx);
                equipSolutions.querySelectorAll('.equip-sol').forEach((card) => {
                    const on = card.dataset.sol === selectedSol;
                    card.classList.toggle('equip-sol--active', on);
                    card.setAttribute('aria-pressed', on ? 'true' : 'false');
                });
            }
            const prevBtn = document.getElementById('equipSolPrev');
            const nextBtn = document.getElementById('equipSolNext');
            if (prevBtn) prevBtn.disabled = idx <= 0;
            if (nextBtn) nextBtn.disabled = idx >= solOrder.length - 1;
        }

        function setSpecValue(el, val) {
            if (!el) return;
            if (el.textContent === val) return;
            el.textContent = val;
            const spec = el.closest('.equip__spec');
            if (!spec) return;
            spec.classList.remove('equip__spec--changed');
            void spec.offsetWidth;
            spec.classList.add('equip__spec--changed');
        }

        function updateEquipSpecs() {
            const t = translations[currentLang];
            const isHome = selectedSol === 'home';
            const modelEl = document.getElementById('equipModelName');
            const invEl = document.getElementById('specInverter');
            const capEl = document.getElementById('specCapacity');
            const effEl = document.getElementById('specEfficiency');
            const priceEl = document.getElementById('specPrice');
            const protEl = document.getElementById('specProtection');
            const cyclesEl = document.getElementById('specCycles');
            const batTypeEl = document.getElementById('specBatteryType');
            const badgeEl = document.getElementById('equipBadge');
            const photoEl = document.getElementById('equipPhoto');
            const photoBatEl = document.getElementById('equipPhotoBat');
            const imageEl = document.getElementById('equipImage');
            const modelSpecEl = document.getElementById('specInverterModel');
            const modulesEl = document.getElementById('specModules');
            const batLabelEl = document.getElementById('equipBatLabelText');

            let name;
            let invText;
            let capText;
            let eff;
            let price;
            let prot;
            let cycles;
            let batType;
            let badgeKey;
            let alt;
            let imgSrc;

            if (isHome) {
                const inv = homeInverter();
                const bat = homeBattery();
                name = `KSTAR ${inv.model} / ${formatKwh(bat.kwh)} kWh`;
                invText = inv.kw + ' kW';
                capText = formatKwh(bat.kwh) + ' kWh';
                eff = residential.efficiency;
                price = t.equipPriceOnRequest;
                prot = residential.protection;
                cycles = residential.cycles;
                batType = residential.batteryType;
                badgeKey = 'equipBadgeHome';
                alt = residential.imageAlt[currentLang];
                imgSrc = 'images/kstar-e10kt-black.jpg';
                if (modelSpecEl) modelSpecEl.textContent = inv.model;
                if (modulesEl) modulesEl.textContent = `${bat.modules} × BluE-PACK5.1`;
            } else {
                const inv = industrial.inverterData[selection.industrial.inv];
                if (!inv) return;
                const kw = selection.industrial.inv;
                const bat = selection.industrial.bat;
                const totalPrice = bat * inv.pricePerKwh;
                name = `${industrial.modelPrefix} — ${kw}kW / ${bat}kWh`;
                invText = kw + ' kW';
                capText = bat + ' kWh';
                eff = inv.efficiency;
                price = '~$' + totalPrice.toLocaleString('en-US').replace(/,/g, ' ');
                prot = industrial.protection;
                cycles = industrial.cycles;
                batType = industrial.batteryType;
                badgeKey = 'equipBadgeInd';
                alt = industrial.imageAlt[currentLang];
                imgSrc = industrial.image;
            }

            if (modelEl) modelEl.textContent = name;
            if (badgeEl) {
                badgeEl.textContent = t[badgeKey] || badgeEl.textContent;
                badgeEl.dataset.i18n = badgeKey;
            }
            if (photoEl) {
                if (photoEl.getAttribute('src') !== imgSrc) photoEl.src = imgSrc;
                if (alt) photoEl.alt = alt;
            }
            if (photoBatEl) {
                photoBatEl.hidden = true;
            }
            if (imageEl) {
                imageEl.classList.toggle('equip__image--home', isHome);
                imageEl.classList.toggle('equip__image--industrial', !isHome);
            }
            document.querySelectorAll('.equip__spec--home-only').forEach((el) => {
                el.hidden = !isHome;
            });
            if (batLabelEl) {
                const key = isHome ? 'equipBatLabelHome' : 'equipBatLabel';
                batLabelEl.dataset.i18n = key;
                batLabelEl.textContent = t[key];
            }

            setSpecValue(invEl, invText);
            setSpecValue(capEl, capText);
            setSpecValue(effEl, eff);
            setSpecValue(priceEl, price);
            setSpecValue(protEl, prot);
            setSpecValue(cyclesEl, cycles);
            setSpecValue(batTypeEl, batType);
        }

        function flashSwitch() {
            const equip = document.querySelector('#equipment .equip');
            if (!equip) return;
            equip.classList.add('is-switching');
            window.setTimeout(() => equip.classList.remove('is-switching'), 220);
        }

        function setSolution(solId, options) {
            const force = options && options.force;
            if (solOrder.indexOf(solId) === -1) return;
            const changed = solId !== selectedSol;
            if (!changed && !force) return;
            selectedSol = solId;
            persist();
            updateCarousel();
            renderOptionButtons();
            if (changed) flashSwitch();
            updateEquipSpecs();
        }
        window.setEquipSolution = setSolution;

        const zoneInv = document.getElementById('zoneInverter');
        const zoneBat = document.getElementById('zoneBattery');
        const equipDim = document.getElementById('equipDim');
        let zoneTimer = null;

        function flashZone(zone) {
            if (!zone) return;
            if (zoneTimer) clearTimeout(zoneTimer);
            if (zoneInv) zoneInv.classList.remove('equip__zone--active');
            if (zoneBat) zoneBat.classList.remove('equip__zone--active');
            if (equipDim) equipDim.classList.remove('equip__dim--active');
            void zone.offsetWidth;
            zone.classList.add('equip__zone--active');
            if (equipDim) equipDim.classList.add('equip__dim--active');
            zoneTimer = setTimeout(() => {
                zone.classList.remove('equip__zone--active');
                if (equipDim) equipDim.classList.remove('equip__dim--active');
            }, 2500);
        }

        const swipeRoot = document.getElementById('equipSolutionsViewport') || equipSolutions;
        if (equipSolutions) {
            equipSolutions.addEventListener('click', (e) => {
                const card = e.target.closest('.equip-sol');
                if (!card) return;
                setSolution(card.dataset.sol);
            });
        }

        if (swipeRoot) {
            let touchX = null;
            swipeRoot.addEventListener('touchstart', (e) => {
                touchX = e.changedTouches[0].clientX;
            }, { passive: true });
            swipeRoot.addEventListener('touchend', (e) => {
                if (touchX == null) return;
                const dx = e.changedTouches[0].clientX - touchX;
                touchX = null;
                if (Math.abs(dx) < 40) return;
                const idx = solOrder.indexOf(selectedSol);
                const next = dx < 0
                    ? solOrder[Math.min(solOrder.length - 1, idx + 1)]
                    : solOrder[Math.max(0, idx - 1)];
                setSolution(next);
            }, { passive: true });
        }

        const prevSol = document.getElementById('equipSolPrev');
        const nextSol = document.getElementById('equipSolNext');
        if (prevSol) prevSol.addEventListener('click', () => {
            const idx = solOrder.indexOf(selectedSol);
            setSolution(solOrder[Math.max(0, idx - 1)]);
        });
        if (nextSol) nextSol.addEventListener('click', () => {
            const idx = solOrder.indexOf(selectedSol);
            setSolution(solOrder[Math.min(solOrder.length - 1, idx + 1)]);
        });

        inverterOptions.addEventListener('click', (e) => {
            const btn = e.target.closest('.equip-config__btn');
            if (!btn) return;
            inverterOptions.querySelectorAll('.equip-config__btn').forEach((b) => b.classList.remove('equip-config__btn--active'));
            btn.classList.add('equip-config__btn--active');
            const value = Number(btn.dataset.inv);
            if (selectedSol === 'industrial') selection.industrial.inv = value;
            else selection.home.inv = value;
            persist();
            updateEquipSpecs();
            if (selectedSol !== 'home') flashZone(zoneInv);
        });

        batteryOptions.addEventListener('click', (e) => {
            const btn = e.target.closest('.equip-config__btn');
            if (!btn) return;
            batteryOptions.querySelectorAll('.equip-config__btn').forEach((b) => b.classList.remove('equip-config__btn--active'));
            btn.classList.add('equip-config__btn--active');
            const value = parseFloat(btn.dataset.bat);
            if (selectedSol === 'industrial') selection.industrial.bat = value;
            else selection.home.bat = value;
            persist();
            updateEquipSpecs();
            if (selectedSol !== 'home') flashZone(zoneBat);
        });

        const originalSetLanguage = setLanguage;
        setLanguage = function(lang) {
            originalSetLanguage(lang);
            updateEquipSpecs();
        };

        updateCarousel();
        renderOptionButtons();
        updateEquipSpecs();
    }

    // ========================================
    // CALCULATOR
    // ========================================

    const powerSlider = document.getElementById('powerSlider');

    if (powerSlider) {
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
    } // end if (powerSlider)

    // ========================================
    // CHAT WIDGET
    // ========================================

    const chatWidget = document.getElementById('chatWidget');
    const chatToggle = document.getElementById('chatToggle');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');

    if (chatToggle) {
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
                body: JSON.stringify({ message: msg, history: chatHistory, siteLang: currentLang })
            });
            const data = await res.json();
            if (data.reply) return data.reply;
            return currentLang === 'en'
                ? 'Sorry, an error occurred. Call us: +380 (96) 555 40 18 or +380 (95) 555 40 17'
                : 'Вибачте, сталася помилка. Зателефонуйте нам: +380 (96) 555 40 18 або +380 (95) 555 40 17';
        } catch {
            return currentLang === 'en'
                ? 'Sorry, the service is temporarily unavailable. Contact us: +380 (96) 555 40 18 or +380 (95) 555 40 17'
                : 'Вибачте, сервіс тимчасово недоступний. Зв\'яжіться з нами: +380 (96) 555 40 18 або +380 (95) 555 40 17';
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
        if (window.matchMedia('(max-width: 768px), (max-device-width: 500px)').matches) return;
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
    } // end if (chatToggle)

    // ========================================
    // CONTACT FORM
    // ========================================

    const form = document.getElementById('contactForm');
    if (form) {
    const emailField = form.querySelector('input[name="email"]');
    const messageField = form.querySelector('textarea[name="message"]');
    const sourceField = form.querySelector('input[name="source"]');
    const interestField = form.querySelector('select[name="interest"]');

    function setPartnershipMode(on) {
        const t = translations[currentLang] || translations.uk;
        if (emailField) emailField.required = on;
        if (messageField) {
            messageField.required = on;
            const key = on ? 'formMsgRequired' : 'formMsg';
            if (t[key]) messageField.placeholder = t[key];
        }
        if (sourceField) sourceField.value = on ? 'partnership' : '';
        form.classList.toggle('contacts__form--partnership', on);
    }

    function openPartnershipForm() {
        setPartnershipMode(true);
        if (interestField) interestField.value = 'partnership';
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const nameField = form.querySelector('input[name="name"]');
        window.setTimeout(() => { if (nameField) nameField.focus(); }, 400);
    }

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
            setPartnershipMode(false);
        }, 3000);
    });

    document.querySelectorAll('.js-charging-cta').forEach((link) => {
        link.addEventListener('click', () => {
            setPartnershipMode(false);
            if (interestField) interestField.value = 'charging';
        });
    });

    document.querySelectorAll('.js-partnership-cta').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            openPartnershipForm();
        });
    });

    if (interestField) {
        interestField.addEventListener('change', () => {
            setPartnershipMode(interestField.value === 'partnership');
        });
    }
    } // end if (form)

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
