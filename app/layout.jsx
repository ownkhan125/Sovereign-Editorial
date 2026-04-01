import './globals.css'

export const metadata = {
  title: 'The Sovereign Editorial',
  description: 'A Vision for Tomorrow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-surface text-on-surface font-body selection:bg-secondary/20">
        {children}
      </body>
    </html>
  )
}
