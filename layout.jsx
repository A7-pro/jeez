import { Inter } from 'next/font/google'
import './globals.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

const inter = Inter({ subsets: ['latin', 'arabic'] })

export const metadata = {
  title: 'Jeez - Task Management',
  description: 'Organize and track your tasks efficiently',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <I18nextProvider i18n={i18n}>
          {children}
        </I18nextProvider>
      </body>
    </html>
  )
} 
