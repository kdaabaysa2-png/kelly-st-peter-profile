import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Profile from './Profile'
import './profile.css'

const root = document.getElementById('root')
if (!root) throw new Error('Missing page root')
createRoot(root).render(<StrictMode><Profile /></StrictMode>)
