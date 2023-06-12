import './globals.css'




export const metadata = {
  title: 'HSL Buss App',
  description: 'HSL buss app made by nextjs 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
            <link rel="icon" type="image/png" sizes="192x192"  href="./stop.png"></link>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide" />
      </head>
      <body>{children}</body>
    </html>
  )
}
