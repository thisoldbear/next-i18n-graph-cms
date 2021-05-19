import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Header() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/" locale="en">
        <a style={{
          margin: "10px",
          padding: "10px",
          ...(router.locale === "en" && {
            border: "1px solid red"
          })
        }}>🇬🇧 GB</a>
      </Link>

      <Link href="/" locale="cy-GB">
      <a style={{
          margin: "10px",
          padding: "10px",
          ...(router.locale === "cy-GB" && {
            border: "1px solid red"
          })
        }}>🏴󠁧󠁢󠁷󠁬󠁳󠁿 Cymraeg</a>
      </Link>
    </nav>
  )
}
