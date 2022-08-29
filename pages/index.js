import { Button, Container, Grid } from '@mantine/core'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import Logo from '@/public/Images/navbar/logo.svg'
import Link from 'next/link'
import HomeCard from '@/components/home/HomeCard'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ProgressiveImage from 'react-progressive-graceful-image'

const { Col } = Grid

const Home = () => {
  const { t } = useTranslation('home')
  return (
    <>
      <section className={styles.home} style={{ minHeight: '130vh' }}>
        <ProgressiveImage src='/Images/home/hero.jpg' placeholder='loading'>
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

        <Container className={styles.home__container} fluid px={20}>
          <div className={styles.home__title}>
            <p className={styles.discover}>{t('discover')}</p>
            <h1 className='text-2xl sm:text-4xl lg:text-6xl leading-tight mt-4'>
              {t('textOneHeader')} <br /> {t('textTwoHeader')} <br />
              {t('textThreeHeader')}
              {t('yourTrue')}
            </h1>
            <p className='text-lg'>{t('discriptionHeader')}</p>
            <Link href={'/whereToGo'}>
              <Button uppercase className={styles.header__btn}>
                {t('distinationBtn')}
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <section className={styles.looking__for}>
        <Container fluid px={20}>
          <h2 className='text-[#3a3a3a] text-2xl sm:text-6xl uppercase mb-6'>
            {t('discoverDistance')}
          </h2>
          <Grid
            className={styles.grid__container}
            justify={'space-between'}
            columns={10}
          >
            <Col span={2}>
              <Link href={'/water_activities'}>
                <div className={`${styles.grid__item} cursor-pointer `}>
                  {(
                    <Image
                      src='/Images/home/mink-mingle-g0Qdolm3K14-unsplash.jpg'
                      layout='fill'
                      objectFit='cover'
                      alt='BEACHS'
                    />
                  ) || <Skeleton />}
                  <h3>BEACHS & WATER ACTIVITIES</h3>
                </div>
              </Link>
            </Col>
            <Col span={2}>
              <Link href={'/restaurants'}>
                <div className={`${styles.grid__item} cursor-pointer `}>
                  <Image
                    src='/Images/home/daan-evers-tKN1WXrzQ3s-unsplash.jpg'
                    layout='fill'
                    objectFit='cover'
                    alt='RESTAURANTS'
                  />
                  <h3>RESTAURANTS</h3>
                </div>
              </Link>
            </Col>
            <Col span={2}>
              <Link href={'/hotels'}>
                <div className={`${styles.grid__item} cursor-pointer `}>
                  {(
                    <Image
                      src='/Images/home/reisetopia-aI6Su7Mu9Ro-unsplash.jpg'
                      layout='fill'
                      objectFit='cover'
                      alt='HOTELS'
                    />
                  ) || <Skeleton />}

                  <h3>HOTELS & RENTALS</h3>
                </div>
              </Link>
            </Col>
            <Col span={2}>
              <Link href={'/healthcare'}>
                <div className={`${styles.grid__item} cursor-pointer `}>
                  {(
                    <Image
                      src='/Images/home/usman-yousaf-MP9W9DtdoBI-unsplash.jpg'
                      layout='fill'
                      objectFit='cover'
                      alt='HEALTHCARE'
                    />
                  ) || <Skeleton />}

                  <h3>HEALTHCARE</h3>
                </div>
              </Link>
            </Col>
            <Col span={2}>
              <div className={`${styles.grid__item} cursor-pointer `}>
                {(
                  <Image
                    src='/Images/home/linus-nylund-UCIZh0-OYPw-unsplash.jpg'
                    layout='fill'
                    objectFit='cover'
                    alt='MARINA'
                  />
                ) || <Skeleton />}

                <h3>MARINA OFFICIAL NEWS</h3>
              </div>
            </Col>
          </Grid>
          <div className={styles.see__more}>
            <Link href={'/whatToDo'}>
              <Button uppercase className={styles.btn}>
                {t('exploreMoreBtn')}
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <Container fluid px={20}>
        <section>
          <HomeCard
            title='General Assembly  Meeting'
            image='/Images/home/linus-nylund-UCIZh0-OYPw-unsplash.jpg'
            t={t}
          />
          <HomeCard
            title='Winter Access Policy'
            image='/Images/home/linus-nylund-UCIZh0-OYPw-unsplash.jpg'
            reverse='true'
            t={t}
          />
          <HomeCard
            title='Change of work schedule statement'
            image='/Images/home/linus-nylund-UCIZh0-OYPw-unsplash.jpg'
            t={t}
          />
          <HomeCard
            title='Being a part of new El Alamin city'
            image='/Images/home/linus-nylund-UCIZh0-OYPw-unsplash.jpg'
            reverse='true'
            t={t}
          />
        </section>
      </Container>

      <Container fluid px={20}>
        <div className={styles.know__more}>
          <h2 className='text-[#3a3a3a] text-2xl sm:text-5xl font-extrabold mb-6'>
            {t('wannaKnowMore')}
          </h2>
          <Link href='/about'>
            <Button size='xl' uppercase className={styles.btn}>
              {t('readNowBtn')}
            </Button>
          </Link>
        </div>
      </Container>

      <section className={styles.footer}>
        <a className={styles.footer_logo}>
          <Image src={Logo} alt='logo'></Image>
        </a>
      </section>
    </>
  )
}

export default Home

export const getServerSideProps = async context => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['home', 'common']))
    }
  }
}
