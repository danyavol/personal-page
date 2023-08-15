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
                <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
                    __html: `
                        (function(h,o,t,j,a,r){
                            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                            h._hjSettings={hjid:3614844,hjsv:6};
                            a=o.getElementsByTagName('head')[0];
                            r=o.createElement('script');r.async=1;
                            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                            a.appendChild(r);
                        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                    `
                }} />
            </>
        }
        <Component {...pageProps} />
    </>
}
