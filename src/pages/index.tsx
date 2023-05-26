import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from './header/header'
import Projects from './projects/projects';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Daniil V. - Personal Page</title>
                <meta name="description" content="My Personal Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
            </Head>
            <div className={inter.className}>
                <main>
                    <Header />
                    <Projects />
                </main>
                <div className="page-background"></div>
                <div id="overlay"></div>
            </div>
        </>
    )
}
