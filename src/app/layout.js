import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ConvexClientProvider } from "@/providers/convex-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nerd.lat Learn - Aprende a usar Nerd.lat",
  description: "Descubre cómo usar Nerd.lat de manera efectiva. Guías, consejos, trucos y todo lo que necesitas para aprovechar al máximo esta herramienta de IA.",
  keywords: "Nerd.lat, IA, inteligencia artificial, prompts, aprendizaje, guías, tutoriales",
  authors: [{ name: "Nerd.lat Team" }],
  creator: "Nerd.lat",
  publisher: "Nerd.lat",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://docs.nerd.lat",
    siteName: "Nerd.lat Learn",
    title: "Nerd.lat Learn - Aprende a usar Nerd.lat",
    description: "Descubre cómo usar Nerd.lat de manera efectiva. Guías, consejos, trucos y todo lo que necesitas para aprovechar al máximo esta herramienta de IA.",
    images: [
      {
        url: "https://docs.nerd.lat/socialmedia.png",
        width: 2880,
        height: 1620,
        alt: "Nerd.lat Learn - Aprende a usar Nerd.lat",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nerdlat",
    creator: "@nerdlat",
    title: "Nerd.lat Learn - Aprende a usar Nerd.lat",
    description: "Descubre cómo usar Nerd.lat de manera efectiva. Guías, consejos, trucos y todo lo que necesitas para aprovechar al máximo esta herramienta de IA.",
    images: ["https://docs.nerd.lat/socialmedia.png"],
  },
  other: {
    "theme-color": "#000000",
    "msapplication-TileColor": "#000000",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Nerd.lat Learn",
    "application-name": "Nerd.lat Learn",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/lentes.svg" sizes="any" />
        <link rel="icon" href="/lentes.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/lentes.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Nerd.lat Learn" />
        <meta name="application-name" content="Nerd.lat Learn" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* WhatsApp specific meta tags */}
        <meta property="og:image:width" content="2880" />
        <meta property="og:image:height" content="1620" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Nerd.lat Learn - Aprende a usar Nerd.lat" />
        
        {/* Additional social media meta tags */}
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://docs.nerd.lat" />
        <meta property="og:site_name" content="Nerd.lat Learn" />
        <meta property="og:title" content="Nerd.lat Learn - Aprende a usar Nerd.lat" />
        <meta property="og:description" content="Descubre cómo usar Nerd.lat de manera efectiva. Guías, consejos, trucos y todo lo que necesitas para aprovechar al máximo esta herramienta de IA." />
        <meta property="og:image" content="https://docs.nerd.lat/socialmedia.png" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nerdlat" />
        <meta name="twitter:creator" content="@nerdlat" />
        <meta name="twitter:title" content="Nerd.lat Learn - Aprende a usar Nerd.lat" />
        <meta name="twitter:description" content="Descubre cómo usar Nerd.lat de manera efectiva. Guías, consejos, trucos y todo lo que necesitas para aprovechar al máximo esta herramienta de IA." />
        <meta name="twitter:image" content="https://docs.nerd.lat/socialmedia.png" />
        <meta name="twitter:image:alt" content="Nerd.lat Learn - Aprende a usar Nerd.lat" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7EHCLZPXGN"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7EHCLZPXGN');
          `}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
