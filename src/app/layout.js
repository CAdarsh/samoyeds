import { Inter, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '700'] })
const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.className}`}>
        <div className="navbar">
          <div className='logo'>SAMOYEDS</div>
          <div className={`${ibmPlexMono.className} nav-elements`}>
            <span className='nav-element'>Dashboard</span>
            <span className='nav-element'>Projects</span>
            <span className='nav-element'>About</span>
            <span className='nav-element'>Safety</span>
            <span className='nav-element cta'>Start Simulation</span>
            <span className='nav-element avatar'>
              <img src="./user-avatar.png" alt="Avatar" />
            </span> 
          </div>
        </div>
        {children}</body>
    </html>
  )
}
