import './globals.css'
import { ReactQueryProvider } from '../providers/ReactQueryProvider'
import { ReduxProvider } from '../providers/ReduxProvider'
import { ThemeToggle } from './components/ThemeToggle'
import { Providers } from './store/ReduxProvider'
import { CartIcon } from './components/CartIcon'
import Header from './components/Header'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ReactQueryProvider>
            <Header />
            <Providers>{children}</Providers>
          </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
