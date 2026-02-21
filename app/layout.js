import './globals.css'

export const metadata = {
  title: 'Natalia B. Llamas - Art Portfolio',
  description: 'Explore the creative works of Natalia B. Llamas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary text-secondary min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
