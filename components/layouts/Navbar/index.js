import { Navbar } from '@mantine/core'
import React from 'react'
import styles from '@/styles/layout.module.scss'
import Hamburger from './Hamburger'
import SocialLinks from './SocialLinks'
import Logo from '@/public/Images/navbar/logo.svg'
import Image from 'next/image'
import { useRecoilState, useRecoilValue } from 'recoil'
import { navState } from '@/atoms'
import Link from 'next/link'

const navLinks = [
  { href: '/', title: 'HOME' },
  { href: '/about', title: 'ABOUT MARINA' },
  { href: '/mangment', title: 'THE BOARD' },
  { href: '/guide', title: 'OWNERS GUIDE' },
  { href: '/whatToDo', title: 'WHAT TO DO?' },
  { href: '/whats_happening', title: 'Marina Official News' },
  { href: '/whereToGo', title: 'WHERE TO GO?' }
]

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useRecoilState(navState)
  return (
    <Navbar
      mt={20}
      px={20}
      className={styles.navbar}
      style={{ position: isNavOpen && 'fixed' }}
      height={64}
    >
      <Hamburger />
      <Link href='/'>
        <a className={styles.logo}>
          <Image alt='Logo' src={Logo} />
        </a>
      </Link>
      <SocialLinks />
      <div
        style={isNavOpen ? { top: '0' } : { top: '-150%' }}
        className={styles.nav__menu}
      >
        <ul className={styles.list}>
          {navLinks.map((link, i) => {
            return (
              <li key={i}>
                <Link href={link.href}>
                  <a
                    onClick={() => setIsNavOpen(false)}
                    className={styles.item}
                  >
                    {link.title}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Navbar>
  )
}

export default Index
