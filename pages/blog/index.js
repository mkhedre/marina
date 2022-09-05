import { Button, Container, Grid } from '@mantine/core';
import React from 'react';
import styles from '@/styles/blog.module.scss';
import PageComponent from '@/components/PageComponent';
import img from '@/public/Images/blog/frank-mckenna-eXHeq48Z-Q4-unsplash.jpg';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Index = () => {
  const { t } = useTranslation('blog');
  return (
    <>
      <PageComponent styles={styles} title={t('wanna')} hero={img.src}>
        <div className="container mx-auto">
          <section className={styles.sectionOne}>
            <div>
              <h3 className={styles.ContantnOne}>{t('headerOne')}</h3>

              <p className={styles.text}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                <br></br>
                The point ofusing Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
                &apos;Content here
                <br></br>
                content here&apos;, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                <br></br>
                Ipsum as their default model text, and a search for &apos;lorem
                ipsum&apos; will uncover many web sites still in their infancy.
                <br></br>
              </p>

              <p className={styles.text}>
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                <br></br>
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                <br></br>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form,{' '}
                <br></br>
                by injected humour, or randomised words which don&apos;t look
                even slightly believable. If you are going to use a passage of
                <br></br>
                Lorem Ipsum, you need to be sure there isn&apos;t anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum{' '}
                <br></br>
                generators on the Internet tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
                <br></br>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum{' '}
                <br></br>
                which looks reasonable. The generated Lorem Ipsum is therefore
                always free from repetition, injected humour, or non-<br></br>
                characteristic words etc.
              </p>

              {/* <div className={styles.imgBlog}></div> */}

              <p className={styles.text}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                <br></br>
                The point ofusing Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
                &apos;Content here
                <br></br>
                content here&apos;, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem{' '}
                <br></br>
                Ipsum as their default model text, and a search for &apos;lorem
                ipsum&apos; will uncover many web sites still in their infancy.
                <br></br>
              </p>

              <p className={styles.text}>
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                <br></br>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form,{' '}
                <br></br>
                by injected humour, or randomised words which don&apos;t look
                even slightly believable. If you are going to use a passage of
                <br></br>
                Lorem Ipsum, you need to be sure there isn&apos;t anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum{' '}
                <br></br>
                generators on the Internet tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
                <br></br>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum{' '}
                <br></br>
                which looks reasonable. The generated Lorem Ipsum is therefore
                always free from repetition, injected humour, or non-<br></br>
                characteristic words etc.
              </p>
            </div>
          </section>

          <section className={styles.sectionTwo}>
            <div>
              <span className={styles.headerOne}>
                <p>{t('headerTwo')}</p>
              </span>
              <div className="container mx-auto p-[10px] flex justify-center gap-2">
                <div>
                  <div className={styles.cardBlog}></div>
                </div>
                <div>
                  <div className={styles.cardBlog}></div>
                </div>
                <div>
                  <div className={styles.cardBlog}></div>
                </div>
                <div>
                  <div className={styles.cardBlog}></div>
                </div>
              </div>
            </div>
          </section>

          <div className={styles.ViewMore}>
            <Link href="/whatToDo">
              <Button className={styles.ViewMoreButton}>
                {t('viewMoreButton')}
              </Button>
            </Link>
          </div>
        </div>
      </PageComponent>
    </>
  );
};

export default Index;

export const getServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['blog', 'common'])),
    },
  };
};
