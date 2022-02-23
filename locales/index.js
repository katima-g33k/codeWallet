import { locale } from 'expo-localization';
import i18n from 'i18n-js';

import en from './en.json';
import fr from './fr.json';

i18n.translations = { en, fr };
i18n.locale = locale;
i18n.fallbacks = true;
