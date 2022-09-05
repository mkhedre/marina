import React from 'react';
import styles from '@/styles/whatToDo.module.scss';
import img from '@/public/Images/whatToDo/daan-evers-tKN1WXrzQ3s-unsplash.jpg';
import PageComponent from '@/components/PageComponent';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import WhatToDoCard from '@/components/whatToDo/WhatToDoCard';

const Index = ({ blogs }) => {
  const { t } = useTranslation('todo');
  return (
    <>
      <PageComponent styles={styles} title={t('what')} hero={img.src}>
        <section className={styles.sectionOne}>
          <div className="container px-4 mx-auto sm:px-10 mt-11">
            {blogs.slice(1, 4).map((blog, index) => (
              <WhatToDoCard
                key={index}
                image={blog.img_collection.responsive_urls[0]}
                titleOne={blog.title.en}
                titleTwo=""
                t={t}
              />
            ))}
            {/* <WhatToDoCard
              image="/Images/whatToDo/Card-one.jpg"
              titleOne="TOP 10 THINGS TO DO"
              titleTwo="IN MARINA"
              t={t}
            />
            <WhatToDoCard
              image="/Images/whatToDo/Card-two.jpg"
              titleOne="A NEW RESTAURANT"
              titleTwo="IN MARINA"
              t={t}
            />
            <WhatToDoCard
              image="/Images/whatToDo/Card-three.jpg"
              titleOne="HOW TO SPEND"
              titleTwo="IN MARINA"
              t={t}
            />
            <WhatToDoCard
              image="/Images/whatToDo/Card-four.jpg"
              titleOne="WANNA SWIM?"
              titleTwo=""
              t={t}
            /> */}
          </div>
        </section>
      </PageComponent>
    </>
  );
};

export default Index;

export const getServerSideProps = async (context) => {
  const blogs = await fetch('https://admin.marina.com.eg/api/data/blogs').then(
    (res) => res.json()
  );
  return {
    props: {
      blogs,
      ...(await serverSideTranslations(context.locale, ['todo', 'common'])),
    },
  };
};
