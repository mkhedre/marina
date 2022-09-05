/* eslint-disable @next/next/no-img-element */
import PageComponent from '@/components/PageComponent';
import { Button, Container, Grid } from '@mantine/core';
import React, { useState, useContext } from 'react';
import img from '@/public/Images/destination/119277797_1463920827128195_1627776416064335089_n.jpg';
import styles from '@/styles/destination.module.scss';
import galleryImage from '@/public/Images/destination/207953735_1689188864601389_2045187446582029162_n.jpg';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import dynamic from 'next/dynamic';
// import { UserContext } from '..';
const Product = ({ data, locale }) => {
  // const grid__gallery = [
  //   { src: module.require('/public/Images/destination/asmak 1.jpg') },
  //   { src: module.require('/public/Images/destination/asmak 2.jpg') },
  //   {
  //     src: module.require(
  //       '/public/Images/destination/215409773_1693676017486007_4382343387638120319_n.jpg'
  //     ),
  //   },
  //   {
  //     src: module.require(
  //       '/public/Images/destination/221725334_1699466720240270_3472526649330689396_n.jpg'
  //     ),
  //   },
  //   {
  //     src: module.require(
  //       '/public/Images/destination/217233419_1691419304378345_578493532468730081_n.jpg'
  //     ),
  //   },
  //   {
  //     src: module.require(
  //       '/public/Images/destination/193328816_1703822936471315_6583428522993377401_n.jpg'
  //     ),
  //   },
  //   { src: module.require('/public/Images/destination/asmak 1.jpg') },
  // ];
  function createMarkup(item) {
    return {
      __html: locale === 'en' ? item.desc.en : item.desc.ar,
    };
  }

  return (
    <PageComponent
      styles={styles}
      title={locale === 'en' ? data.name.en : data.name.ar}
      hero={data.cover_collection.responsive_urls[0]}
    >
      <div className="container px-4 mx-auto sm:px-10 mt-11">
        <div className={styles.page__content}>
          <h2>A MATCH MADE IN HEAVEAN</h2>
          <div className={styles.gallery__nav}>
            <img
              className={styles.img}
              src={data.cover_collection.responsive_urls[1]}
              alt="Gallery"
            ></img>
            <ul className={styles.gallery__switcher}>
              {data.cover_collection.responsive_urls.map((item, i) => {
                return (
                  <li key={i}>
                    {(
                      <Image
                        // onClick={(e) => setSrc(e.target.src)}
                        className={styles.img}
                        src={item}
                        alt="Gallery Item"
                        width={70}
                        height={70}
                      />
                    ) || <Skeleton />}
                  </li>
                );
              })}
            </ul>
          </div>
          <p dangerouslySetInnerHTML={createMarkup(data)} />

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
  );
};

export default dynamic(() => Promise.resolve(Product), { ssr: false });

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://admin.marina.com.eg/api/data/catalogs/details?id=${id}`
  );
  const data = await res.json();
  return {
    props: {
      locale: context.locale,
      data,
    },
  };
};

// export async function getStaticPaths() {
// //   const req = await fetch(`https://admin.marina.com.eg/api/data/catalogs`);
// //   const products = await req.json();
// //   const paths = products.map((product) => {
// //     return {
// //       params: { id: product.id.toString() },
// //     };
// //   });
// //   return {
// //     paths,
// //     fallback: false,
// //   };
// // }

// // export async function getStaticProps(context) {
// //   const { id } = context.params;
// //   const res = await fetch(
// //     `https://admin.marina.com.eg/api/data/catalogs/details?id=${id}`
// //   );
// //   const product = await res.json();
// //   return {
// //     props: { product },
// //   };
// // }

// export async function getStaticPaths() {
//   const elements = await fetch(
//     'https://admin.marina.com.eg/api/data/catalogs'
//   ).then((res) => res.json());

//   const paths = elements.map((element) => {
//     return {
//       params: { id: element.id.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }
