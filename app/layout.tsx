import type { Metadata } from "next";
import { Quicksand, Lora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const quicksand = Quicksand({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const lora = Lora({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

// Quicksand and Lora
export const metadata: Metadata = {
  title: "Steve Olorunpomi",
  authors: [
    {
      name: "Steve Olorunpomi",
      url: "https://steveolorunpomi.com",
    },
  ],
  keywords: [
    "Steve Olorunpomi",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "Blog",
    "Tech",
  ],
  openGraph: {
    title: "Steve Olorunpomi",
    description: "Official Website for Steve Olorunpomi",
    url: "https://steveolorunpomi.com",
    siteName: "Steve Olorunpomi",
    images: [
      {
        url: "https://steveolorunpomi.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Steve Olorunpomi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steve Olorunpomi",
    description: "Official Website for Steve Olorunpomi",
    creator: "@steveolorunpomi",
    images: ["https://steveolorunpomi.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  themeColor: "#ffffff",
  colorScheme: "light dark",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "6iBoHYZLiLjxVDNFSW_rz9Vgq10x56-v-ENncastdBA",
    yandex: "yandex-verification=your-verification-code",
  },
  creator: "Steve Olorunpomi",
  publisher: "Steve Olorunpomi",
  description: "Official Website for Steve Olorunpomi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} ${lora.className} antialiased`}
      >
        <div className="px-6 p-2 md:px-20">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
