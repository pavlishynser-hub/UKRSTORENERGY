export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message, history } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    const systemPrompt = `Ти — AI-консультант компанії UKRSTORENERGY, офіційного дистриб'ютора KSTAR в Україні.
Твоя спеціалізація — промислові системи накопичення енергії (ESS/BESS) для бізнесу.

Ключова інформація про компанію та продукт:
- Обладнання: ESS KSTAR 125 kW / 241 kWh (інвертор + LFP батарея)
- Батарея: LiFePO₄, 6000–8000 циклів, гарантія 10 років
- Захист: IP54
- Режими: On-Grid / Off-Grid, 10+ сценаріїв EMS/BMS
- Масштабованість: від 50 kW до 3 MW
- Вартість: орієнтовно від $400/kW (залежить від конфігурації)
- Строк постачання: 90–120 днів (30 днів при наявності на складі)
- Оплата: 80% передоплата, 20% при доставці
- Монтаж під ключ: проектування, доставка, монтаж, пуско-наладка
- Контакти: +38 (067) 208-55-58, info@ukrstorenergy.com
- Адреса: Київська обл., с. Софіївська Борщагівка, вул. Кошова 122

Сценарії використання:
1. Арбітраж РДН — заряд вночі за дешевою ціною, розряд у пік
2. Трейдинг електроенергії на ринку
3. Власне споживання — зниження витрат
4. ДБЖ / Резервне живлення — захист від відключень
5. Інтеграція з СЕС/вітровою генерацією

Окупність: 3–6 років залежно від сценарію. Арбітраж РДН — найшвидше (2.5–4 роки).
Середня маржа арбітражу РДН: 6.97 грн/кВт·год (дані жовтень 2025 — березень 2026).

Правила відповідей:
- Відповідай українською мовою (якщо клієнт пише іншою — відповідай його мовою)
- Будь професійним, але дружнім
- Відповіді мають бути стислими (2-4 речення), якщо питання не потребує деталей
- Завжди пропонуй зв'язатися для точного розрахунку: +38 (067) 208-55-58
- Якщо питання не стосується енергетики/ESS — ввічливо поверни розмову до теми
- Не вигадуй інформацію, якої не знаєш — запропонуй зв'язатися зі спеціалістом`;

    const messages = [
        { role: 'system', content: systemPrompt },
        ...(history || []).slice(-10),
        { role: 'user', content: message }
    ];

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages,
                max_tokens: 300,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            const err = await response.text();
            console.error('OpenAI error:', err);
            return res.status(500).json({ error: 'AI service error' });
        }

        const data = await response.json();
        const reply = data.choices[0]?.message?.content || 'Вибачте, не вдалося отримати відповідь.';

        return res.status(200).json({ reply });
    } catch (error) {
        console.error('API error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
