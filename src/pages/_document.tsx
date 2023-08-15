import { Html, Head, Main, NextScript } from 'next/document';
import Hotjar from '@hotjar/browser';

if (process.env.NODE_ENV == "production"){
    Hotjar.init(3614844, 6);
}

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
