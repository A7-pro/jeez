import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-700">{t('language')}:</span>
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="border rounded px-2 py-1 text-sm"
      >
        <option value="en">English</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
} 
