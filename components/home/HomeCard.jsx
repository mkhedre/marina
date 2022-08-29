import { Button } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const HomeCard = ({ title, image, reverse, t }) => {
  return (
    <div
      className={`container mx-auto flex items-center gap-3 sm:gap-10 mt-[90px] ${reverse &&
        'flex-row-reverse'}`}
    >
      <div className='relative h-[240px] md:h-[100vh]  flex-1 rounded-[40px] overflow-hidden'>
        {<Image src={image} layout='fill' objectFit='cover' alt={title} /> || (
          <Skeleton count={10} />
        )}
      </div>
      <div className={`flex-1 ${reverse && 'text-right'}`}>
        <h3 className='text-2xl md:text-8xl font-extrabold mb-8 leading'>
          {title}
        </h3>
        <Link href='/blog'>
          <Button className={styles.btn}>{t('readNowBtn')}</Button>
        </Link>
      </div>
    </div>
  )
}

export default HomeCard
