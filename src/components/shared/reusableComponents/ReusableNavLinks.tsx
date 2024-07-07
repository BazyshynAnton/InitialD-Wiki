import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ReusableLinks() {
  const pathname = usePathname()

  return (
    <ul>
      <li>
        <Link
          className={`${pathname === '/introduction' ? 'active' : ''}`}
          href="/introduction"
        >
          Introduction
        </Link>
      </li>
      <li>
        <Link
          className={`${pathname === '/character' ? 'active' : ''}`}
          href="/character"
        >
          Character
        </Link>
      </li>
      <li>
        <Link
          className={`${pathname === '/initiald_product' ? 'active' : ''}`}
          href="/initiald_product"
        >
          Initial D -Product-
        </Link>
      </li>
      <li>
        <Link className={`${pathname === '/' ? 'active' : ''}`} href="/">
          Goods
        </Link>
      </li>
      <li>
        <Link className={`${pathname === '/' ? 'active' : ''}`} href="#">
          Youtube
        </Link>
      </li>
      <li>
        <Link className={`${pathname === '/' ? 'active' : ''}`} href="#">
          Twitter
        </Link>
      </li>
    </ul>
  )
}
