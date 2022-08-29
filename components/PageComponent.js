import { useRouter } from 'next/router'
import React from 'react'
import Footer from '@/components/layouts/Footer/Index'
import ProgressiveImage from 'react-progressive-graceful-image'

const PageComponent = props => {
  const router = useRouter()
  return (
    <>
      <section className='page__header' style={{ minHeight: '130vh' }}>
        {/* <img src= alt='' /> */}
        <ProgressiveImage src={props.hero.src} placeholder='loading'>
          {(src, loading) => (
            <img
              className={`image${loading ? ' loading' : ' loaded'}`}
              src={src}
              alt='sea beach'
              width='100%'
              height='100%'
            />
          )}
        </ProgressiveImage>
        <div className='page__overlay'></div>
        <div className='page__hero__content flex-col'>
          <h1 className='page__title'>{props.title}</h1>
          {props.button && (
            <a
              href='/guid.pdf'
              className='text-white text-[11px] md:text-lg font-bold bg-[#0cceff] mt-3 md:mt-6 p-2 md:p-4 px-3 md:px-6 rounded-2xl'
              download
            >
              Download the guide
            </a>
          )}
        </div>
      </section>
      <div className={router.locale === 'ar' ? 'rtl' : 'ltr'}>
        {props.children}
        <Footer></Footer>
      </div>
    </>
  )
}

export default PageComponent
