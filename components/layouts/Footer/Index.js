import React from 'react'
import styles from '@/styles/layout.module.scss'
import { Container, Grid } from '@mantine/core'
import Image from 'next/image'
import Logo from '@/public/Images/navbar/logo.svg'
import Link from 'next/link'
import { AiOutlineUser } from 'react-icons/ai'

const useful_links = [
  { href: '/home', title: 'Home' },
  { href: '/about', title: 'About Marina' },
  { href: '/mangment', title: 'The Board' },
  { href: '/guide', title: 'Owners Guide' },
  { href: '/whatToDo', title: 'What To Do?' },
  { href: '/whats_happening', title: 'Marina official news' },
  { href: '/whereToGo', title: 'Where To Go?' }
]

const where_links = [
  { href: '/restaurants', title: 'Restaurants' },
  { href: '/beaches', title: 'Beaches and Water Activites' },
  { href: '/hotels', title: 'Hotels & Rentals' },
  { href: '/healthcare', title: 'Healthcare' },
  { href: '/water_activites', title: 'Water Activites' }
]

const Index = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container} fluid px={20}>
        <div className='flex items-center justify-center gap-2'>
          <div className='flex-1'>
            <a className={styles.logo}>
              <Image alt='Logo' src={Logo} />
            </a>
          </div>
          <div className='flex-1 flex gap-1'>
            <div className='flex-1'>
              <h3 className={styles.footer_links__title}>USEFUL LINKS</h3>
              <ul>
                {useful_links.map((link, i) => {
                  return (
                    <li key={i}>
                      <Link href={link.href}>
                        <a className={styles.footer_links}>{link.title}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='flex-1'>
              <h3 className={styles.footer_links__title}>WHERE TO GO?</h3>
              <ul>
                {where_links.map((link, i) => {
                  return (
                    <li key={i}>
                      <Link href={link.href}>
                        <a className={styles.footer_links}>{link.title}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className={`${styles.last__item} flex-1`}>
            <Link href='/login'>
              <a className={styles.user}>
                <span className='text-[12px] md:text-xl lg:text-2xl text-white font-bold flex items-center flex-col'>
                  <AiOutlineUser className='text-3xl md:text-8xl mb-4' />
                  OWNERS LOGIN
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
