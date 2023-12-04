import { fira } from './fonts'
import './globals.css'



export const metadata = {
  title: 'Ecosolution landing site',
  description: 'Testing task landing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={fira.className }>{children}</body>
    </html>
  )
}
