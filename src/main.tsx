
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './AzulMarino.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter } from 'react-router'


const queryClient = new QueryClient()



createRoot(document.getElementById('root')!).render(
  
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
)
