import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.tsx'
import { store } from './app/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* with provider we can access the store from any component */}
    <Provider store={store}>
      <App /> {/* App component is the root component of the application and All children can access Redux*/}
    </Provider>
  </StrictMode>,
)
