import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'کلینیک اروتز و پروتز سبز',
  description: 'شکم مصنوعی کلینیک اروتز و پروتز سبز',
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang} style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="max-image-preview:large" />
        {/* <meta
          name="msapplication-TileImage"
          content="https://cdn.pmlm.ir/assets/pmlmWeb/images/logo/pmlm-270x270.png"
        /> */}
        <meta name="theme-color" content="#711F7E" />
        <meta name="msapplication-navbutton-color" content="#711F7E" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#711F7E" />
        {/* <meta
          name="google-site-verification"
          content="9ocjO7VzE-x8E0DQtqw0Iu1kIX4WtuLu1pJZwhdcXUc"
        /> */}
        {/* <link
          rel="icon"
          href="https://cdn.pmlm.ir/assets/pmlmWeb/images/logo/pmlm-192x192.png"
        /> */}
      </Head>
      {/* <Script id={'chatBot'}>
        {`window.chatwootSettings = {
        customerName: "pmlm",
        projectId: "2928f710-f948-40c2-8a84-f397954ea751",
        position: 'right',
        color: "#711f7e",
        foreground: "#ffffff",
        apiGateway: "https://pmlm.chaata.cloud",
        copyRightText: "Powered By DolphinAI"
    };
    (function (d, t) {
        var BASE_URL = "https://pmlm.chaata.cloud/";
        var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
        g.src = BASE_URL + "packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g, s);
        g.onload = function () { window.chatwootSDK.run({ websiteToken: 'F2S21iikBX6ewTKeWptGEDmJ', baseUrl: BASE_URL }) }
    })(document, "script");`}
      </Script> */}
      <body>{children}</body>
    </html>
  );
}
