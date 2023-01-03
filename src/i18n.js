import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    // here we will place our translations...
                    description: {
                        context: 'Contextual information',
                        contextInfo: {
                            name: 'Name of the operator',
                            contact: 'Email',
                            country: 'Country',
                            city: 'City',
                            institution: 'Institution',
                            origin: 'Sample origin',
                            chronology: 'Chronology',
                            code: 'Code',
                            sex: 'Sex',
                            age: 'Documented Age',
                            type: 'Tooth type',
                            observation: 'Observations'
                        },
                        select: 'Please Select',
                        tooth: {
                            FULI: '	First upper left incisor',
                            FURI: '	First upper right incisor',
                            SULI: '	Second upper left incisor',
                            SURI: '	Secon upper right incisor',
                            ULC: '	Upper left canine',
                            URC: '	Upper right canine',
                            FULP: '	First upper left premolar',
                            FURP: '	First upper right premolar',
                            SULP: '	Second upper left premolar',
                            SURP: '	Second upper right premolar',
                            FLLI: '	First lower left incisor',
                            FLRI: '	First lower right incisor',
                            SLLI: '	Second lower left incisor',
                            SLRI: '	Secon lower right incisor',
                            LLC: '	Lower left canine',
                            LRC: '	Lower right canine',
                            FLLP: '	First lower left premolar',
                            FLRP: '	First lower right premolar',
                            SLLP: '	Second lower left premolar',
                            SLRP: '	Second lower right premolar',
                        },
                        metricData: 'Metric Data',
                        calculate: 'Calculate',
                        metricDataHelp: {
                            rl: 'Root Length',
                            pr: 'Periodontal recession',
                            rdt: 'Root Dentin Translucency'
                        },
                        tableResults: {
                            estAge: 'Estimated age',
                            estCorrAge: 'Corrected estimated age',
                            LIm: 'Middle lower limit',
                            LSm: 'Middle upper limit'
                        },
                        captchaTitle: 'Enter alphanumeric characters, it is case sensitive.',
                        captchaButton: 'Ok',
                        captchaReload: 'Reload Captcha',
                        tablefoot: 'Note: The range between the Middle lower limit and the Middle upper limit includes the 95% of the possible estimated ages',
                        recommendation:'(Use points for decimals)' 
                    }
                }
            },
            es: {
                translation: {
                    // here we will place our translations...
                    description: {
                        context: 'Información contextual',
                        contextInfo: {
                            name: 'Nombre del operador',
                            contact: 'Correo electrónico',
                            country: 'País',
                            city: 'Ciudad',
                            institution: 'Institución',
                            origin: 'Procedencia de la muestra',
                            chronology: 'Cronología',
                            code: 'Código',
                            sex: 'Sexo',
                            age: 'Edad documentada',
                            type: 'Tipo de diente',
                            observation: 'Observaciones'
                        },
                        select: 'Seleccione',
                        tooth: {
                            FULI: '	Primer incisivo superior izquierdo',
                            FURI: '	Primer incisivo superior derecho',
                            SULI: '	Segundo incisivo superior izquierdo',
                            SURI: '	Segundo incisivo superior derecho',
                            ULC: '	Canino superior izquierdo',
                            URC: '	Canino superior derecho',
                            FULP: '	Primer premolar superior izquierdo',
                            FURP: '	Primer premolar superior derecho',
                            SULP: '	Segundo premolar superior izquierdo',
                            SURP: '	Segundo premolar superior derecho',
                            FLLI: '	Primer incisivo inferior izquierdo',
                            FLRI: '	Primer incisivo inferior derecho',
                            SLLI: '	Segundo incisivo inferior izquierdo',
                            SLRI: '	Segundo incisivo inferior derecho',
                            LLC: '	Canino inferior izquierdo',
                            LRC: '	Canino inferior derecho',
                            FLLP: '	Primer premolar inferior izquierdo',
                            FLRP: '	Primer premolar inferior derecho',
                            SLLP: '	Segundo premolar inferior izquierdo',
                            SLRP: '	Segundo premolar inferior derecho',
                        },
                        metricData: 'Datos métricos',
                        calculate: 'Calcular',
                        metricDataHelp: {
                            rl: 'Longitud de la Raíz',
                            pr: 'Retracción periodontal',
                            rdt: 'Translucencia dentinal de la raíz'
                        },
                        tableResults: {
                            estAge: 'Edad estimada',
                            estCorrAge: 'Edad estimada corregida',
                            LIm: 'Límite inferior medio',
                            LSm: 'Límite superior medio'
                        },
                        captchaTitle: 'Ingrese caracteres alfanuméricos, distingue entre mayúsculas y minúsculas',
                        captchaButton: 'Validar',
                        captchaReload: 'Recargar Captcha',
                        tablefoot: 'Nota: El rango de valores entre el Límite inferior medio y el Límite superior medio incluye el 95% de las edades estimadas posibles',
                        recommendation:'(usar puntos para los decimales)'
                    }
                }
            }
        }
    });

export default i18n;
