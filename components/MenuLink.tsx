'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuLinkProps {
  href: string
  label: string
  icon: React.ReactNode
}

export default function MenuLink({ href, label, icon }: MenuLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={`tooltip tooltip-bottom ${pathname === href ? 'active' : ''}`}
      data-tip={label}
    >
      {icon}
    </Link>
  )
}
