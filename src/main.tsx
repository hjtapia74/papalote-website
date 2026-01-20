import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from '@/components/ui/provider'
import { OfferingProvider } from '@/context/OfferingContext'
import App from './App.tsx'
import './i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <OfferingProvider>
        <App />
      </OfferingProvider>
    </Provider>
  </StrictMode>,
)
