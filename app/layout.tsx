import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Les échappées de Guillaume',description:'Un carnet de voyage en images, à partager en famille.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
