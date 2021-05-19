import Head from 'next/head'
import Link from 'next/link'
import Page from '../components/page'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <main>
          {router.locale === "en" &&
            <p>
              <Link href="/about">
                <a>/about</a>
              </Link>
            </p>
          }
          {router.locale === "cy-GB" &&
            <p>
              <Link href="/about" locale="cy-GB">
                <a>/amdano</a>
              </Link>
            </p>
          }
        </main>
      </Page>
    </div>
  )
}
