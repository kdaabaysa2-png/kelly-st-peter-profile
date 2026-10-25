import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Profile from './Profile'
import TeamSite from './Team'
import './profile.css'

const root = document.getElementById('root')
if (!root) throw new Error('Missing page root')
const path = window.location.pathname.replace(/\/$/, '') || '/'
const route = path === '/team' ? 'home' : path === '/team/agents' ? 'agents' : path === '/team/join' ? 'join' : path.startsWith('/team/agents/') ? 'profile' : null
createRoot(root).render(<StrictMode>{route ? <TeamSite route={route} /> : <Profile />}</StrictMode>)
