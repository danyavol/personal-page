import { isProduction } from '@/helpers/getEnvironment'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
    return <>
        {
            isProduction && <>
                <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-R7ND9RKK8F" />
                <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-R7ND9RKK8F');
                    `
                }} />
            </>
        }
        <Component {...pageProps} />
    </>
}
