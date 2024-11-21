import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider
      theme={{
        fontFamily: poppins.style.fontFamily,
        headings: { fontFamily: poppins.style.fontFamily },
      }}
      forceColorScheme="light"
    >
      <Head>
        <title>Paryn Design | Kreativní služby pro Vaši značku</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta
          name="description"
          content="Spojuji kreativitu a strategii, abych vaší značce dodal nový rozměr. Specializuji se na brand identitu, logotvorbu, webové stránky, tiskoviny a další kreativní služby."
        />
        <meta
          name="keywords"
          content="Paryn Design, kreativní služby, brand identita, logotvorba, bannery, tiskoviny, návrhy na textil, webové stránky, správa sociálních sítí, fotografie"
        />
        <meta name="author" content="Paryn Design" />
        <meta
          property="og:title"
          content="Paryn Design | Kreativní služby pro Vaši značku"
        />
        <meta
          property="og:description"
          content="Specializuji se na brand identitu, logotvorbu, webové stránky, tiskoviny a další kreativní služby, které dodají vaší značce nový rozměr."
        />
        <meta property="og:image" content="/favicon.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.paryndesign.cz/" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
