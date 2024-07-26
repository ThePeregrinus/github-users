import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { ThemeProvider } from './components/theme-provider.tsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { api } from './services/list.ts'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ApiProvider api={api}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ApiProvider>
)
