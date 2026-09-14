window.UKRSTOR_EQUIPMENT = {
    industrial: {
        defaultInv: 50,
        defaultBat: 220,
        inverters: [50, 100, 125, 150, 250],
        batteries: [220, 240, 260],
        inverterData: {
            50:  { efficiency: '≥ 98.0%', pricePerKwh: 200 },
            100: { efficiency: '≥ 98.2%', pricePerKwh: 190 },
            125: { efficiency: '≥ 98.5%', pricePerKwh: 185 },
            150: { efficiency: '≥ 98.5%', pricePerKwh: 180 },
            250: { efficiency: '≥ 98.8%', pricePerKwh: 170 }
        },
        protection: 'IP54',
        cycles: '6000–8000',
        batteryType: 'EVE LFP (LiFePO₄)',
        modelPrefix: 'ESS KSTAR',
        image: 'images/IMG_2527.webp',
        imageAlt: {
            uk: 'Обладнання KSTAR ESS — промислова акумуляторна станція',
            en: 'KSTAR ESS equipment — industrial battery storage'
        }
    },
    residentialInverters: [
        { kw: 8, model: 'E8KT' },
        { kw: 10, model: 'E10KT' },
        { kw: 12, model: 'E12KT' }
    ],
    residentialBatteries: [
        { kwh: 10.2, modules: 2 },
        { kwh: 20.4, modules: 4 },
        { kwh: 30.6, modules: 6 },
        { kwh: 40.8, modules: 8 }
    ],
    residential: {
        defaultInv: 10,
        defaultBat: 20.4,
        protection: 'IP66 / IP65',
        cycles: '6000+',
        batteryType: 'BluE-PACK5.1 LFP (LiFePO₄)',
        efficiency: '≥ 97.2%',
        images: {
            inverter: 'images/kstar-e10kt-black.jpg',
            battery: 'images/kstar-blue-pack-5-1.webp'
        },
        imageAlt: {
            uk: 'KSTAR BluE — гібридний інвертор E8KT / E10KT / E12KT',
            en: 'KSTAR BluE — hybrid inverter E8KT / E10KT / E12KT'
        },
        batteryAlt: {
            uk: 'KSTAR BluE-PACK5.1 — модуль LiFePO₄ 5.12 kWh',
            en: 'KSTAR BluE-PACK5.1 — LiFePO₄ module 5.12 kWh'
        }
    }
};
