/* eslint-disable @next/next/no-img-element */
import PageComponent from '@/components/PageComponent'
import { Button, Container, Grid } from '@mantine/core'
import React, { useState } from 'react'
import img from '@/public/Images/destination/119277797_1463920827128195_1627776416064335089_n.jpg'
import styles from '@/styles/destination.module.scss'
import galleryImage from '@/public/Images/destination/207953735_1689188864601389_2045187446582029162_n.jpg'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Index = () => {
  const grid__gallery = [
    { src: module.require('/public/Images/destination/asmak 1.jpg') },
    { src: module.require('/public/Images/destination/asmak 2.jpg') },
    {
      src: module.require(
        '/public/Images/destination/215409773_1693676017486007_4382343387638120319_n.jpg'
      )
    },
    {
      src: module.require(
        '/public/Images/destination/221725334_1699466720240270_3472526649330689396_n.jpg'
      )
    },
    {
      src: module.require(
        '/public/Images/destination/217233419_1691419304378345_578493532468730081_n.jpg'
      )
    },
    {
      src: module.require(
        '/public/Images/destination/193328816_1703822936471315_6583428522993377401_n.jpg'
      )
    },
    { src: module.require('/public/Images/destination/asmak 1.jpg') }
  ]

  const [src, setSrc] = useState(galleryImage.src)
  console.log(src)
  return (
    <PageComponent styles={styles} title='ASMAK RESTAURANT' hero={img}>
      <div className='container mx-auto px-4 sm:px-10 mt-11'>
        <div className={styles.page__content}>
          <h2>A MATCH MADE IN HEAVEAN</h2>
          <div className={styles.gallery__nav}>
            <img className={styles.img} src={src} alt='Gallery'></img>
            <ul className={styles.gallery__switcher}>
              {grid__gallery.map((img, i) => {
                return (
                  <li key={i}>
                    {(
                      <Image
                        onClick={e => setSrc(e.target.src)}
                        className={styles.img}
                        src={img.src}
                        alt='Gallery Item'
                      />
                    ) || <Skeleton />}
                  </li>
                )
              })}
            </ul>
          </div>
          <p>
            Ever been looking for a one true seafood meal? Asmak is your
            destination as they offer an authentic variety of seafood made
            especially for the enthusiast and real lovers, located in our
            beloved marina, Asmak enjoys an astonishing lake view and an
            outstanding service level for all marina tenants.
          </p>
          <Button uppercase className={styles.btn}>
            call now
          </Button>
          {/* <div className={styles.similar}>
            <h2 style={{ textAlign: "center" }}>SIMILER PLACES</h2>
            <Grid className={styles.similar__grid} justify={"space-between"}>
              <Grid.Col span={2}>
                <Link href={""}>
                  <Image
                    alt="similar"
                    src={module.require(
                      "/public/Images/destination/37420805_399746423765574_2114855627560845312_n.jpg"
                    )}
                  ></Image>
                </Link>
              </Grid.Col>
              <Grid.Col span={2}>
                <Link href={""}>
                  <Image
                    alt="similar"
                    src={module.require(
                      "/public/Images/destination/37420805_399746423765574_2114855627560845312_n.jpg"
                    )}
                  ></Image>
                </Link>{" "}
              </Grid.Col>
              <Grid.Col span={2}>
                <Link href={""}>
                  <Image
                    alt="similar"
                    src={module.require(
                      "/public/Images/destination/37420805_399746423765574_2114855627560845312_n.jpg"
                    )}
                  ></Image>
                </Link>{" "}
              </Grid.Col>
              <Grid.Col span={2}>
                <Link href={""}>
                  <Image
                    alt="similar"
                    src={module.require(
                      "/public/Images/destination/37420805_399746423765574_2114855627560845312_n.jpg"
                    )}
                  ></Image>
                </Link>{" "}
              </Grid.Col>
            </Grid>

            <div className="center">
              <Link href={"/restaurants"}>
                <Button
                  style={{ marginTop: "53px" }}
                  uppercase
                  className={styles.btn}
                >
                  view more
                </Button>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </PageComponent>
  )
}

export default Index
