import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from './header/header'
import About from './about/about'
import Contact from './contact/contact'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] });

const DynamicProjects = dynamic(() => import('../components/projects/projects'), { ssr: false });

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

                    <h3 style={{ color: "red", textAlign: "center" }}>Site is in progress... Will be available soon</h3>
                    {/* <About /> */}
                    <DynamicProjects />
                    {/* <Contact /> */}
                </main>
                <div className="page-background"></div>
                <div id="overlay"></div>
            </div>
        </>
    )
}
