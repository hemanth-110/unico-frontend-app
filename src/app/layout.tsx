import './globals.css'
import { ReactQueryProvider } from '../providers/ReactQueryProvider'
import { ReduxProvider } from '../providers/ReduxProvider'
import { Providers } from './store/ReduxProvider'
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
