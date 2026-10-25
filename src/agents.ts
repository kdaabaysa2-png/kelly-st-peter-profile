export type AgentProfile = {
  id: string
  slug: string
  fullName: string
  role: string
  profileImage: string
  location: string
  bio: string
  messengerUrl: string
  contactNumber?: string
  email: string
  isActive: boolean
  isVerified: boolean
  displayOrder: number
}

// Add only real people who have approved publication of these details.
// Keep drafts inactive. Set isVerified only after St. Peter confirms the status.
export const agents: AgentProfile[] = [
  {
    id: 'khessa-daabay',
    slug: 'khessa-daabay',
    fullName: 'Khessa Daabay',
    role: 'St. Peter · Unit Manager',
    profileImage: '/images/profile/khessa-800.webp',
    location: 'Cagayan de Oro City, Philippines',
    bio: 'Khessa helps families compare traditional life plans, understand payment schedules, and prepare for the application process.',
    messengerUrl: 'https://m.me/cwb.salesagent1',
    email: 'kdaabay.sa2@gmail.com',
    isActive: true,
    isVerified: false,
    displayOrder: 1,
  },
]

export const publicAgents = agents
  .filter(agent => agent.isActive)
  .sort((a, b) => a.displayOrder - b.displayOrder)

