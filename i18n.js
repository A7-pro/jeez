import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'add_task': 'Add Task',
      'task_title': 'Task Title',
      'due_date': 'Due Date',
      'priority': 'Priority',
      'high': 'High',
      'medium': 'Medium',
      'low': 'Low',
      'save': 'Save',
      'delete': 'Delete',
      'edit': 'Edit',
      'no_tasks': 'No tasks yet',
      'contact': 'Contact',
      'made_by': 'Made by ALsharif',
      'tasks': 'Tasks',
      'language': 'Language'
    }
  },
  ar: {
    translation: {
      'add_task': 'إضافة مهمة',
      'task_title': 'عنوان المهمة',
      'due_date': 'تاريخ الاستحقاق',
      'priority': 'الأولوية',
      'high': 'عالية',
      'medium': 'متوسطة',
      'low': 'منخفضة',
      'save': 'حفظ',
      'delete': 'حذف',
      'edit': 'تعديل',
      'no_tasks': 'لا توجد مهام حتى الآن',
      'contact': 'تواصل معنا',
      'made_by': 'تم التطوير بواسطة الشريف',
      'tasks': 'المهام',
      'language': 'اللغة'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n; 
