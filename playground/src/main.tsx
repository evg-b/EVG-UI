import { createRoot } from 'react-dom/client'

import App from './App/App'

const container = document.getElementById('root')
if (!container) throw new Error('Playground root element was not found')

createRoot(container).render(<App />)
