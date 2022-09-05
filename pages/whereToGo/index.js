import PageComponent from '@/components/PageComponent';
import WhereToGoCard from '@/components/whereToGo/WhereToGoCard';
import styles from '@/styles/whereToGo.module.scss';
import { Grid } from '@mantine/core';
import img from '../../public/Images/whereToGo/dan-gold-E6HjQaB7UEA-unsplash.jpg';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
const { Col } = Grid;

const Index = ({ Catalog }) => {
  const rows = [
    { title: 'resturansts', href: '/restaurants', catalog_type_id: 25 },
    { title: 'beaches', href: '/beaches', catalog_type_id: 45 },
    { title: 'hotels', href: '/hotels', catalog_type_id: 65 },
    { title: 'healthcare', href: '/healthcare', catalog_type_id: 85 },
    { title: 'rentals', href: '/rentals', catalog_type_id: 55 },
    {
      title: 'waterActevities',
      href: '/water_activities',
      catalog_type_id: 75,
    },
  ];

  const { t } = useTranslation('whereToGo');
  return (
    <PageComponent styles={styles} title={t('whereToGo')} hero={img.src}>
      <div className="container mx-auto px-4 sm:px-10 mt-[100px]">
        {rows.map((row, i) => {
          return (
            <div key={i} className="flex flex-col mb-[100px]">
              <h2
                key={i}
                className="mb-2 text-2xl font-extrabold md:text-7xl md:mb-10"
              >
                {t(`${row.title}`)}
              </h2>
              <div className="flex flex-wrap gap-3 md:gap-6">
                {Catalog.filter(
                  (item) => item.catalog_type_id === row.catalog_type_id
                )
                  .slice(0, 3)
                  .map((item, i) => {
                    return (
                      <WhereToGoCard
                        key={i}
                        link={`/whereToGo/catalouge/${item.id}`}
                        image={item.img_collection.responsive_urls[0]}
                      />
                    );
                  })}
                {/* <WhereToGoCard
                 
                  image="/images/whereToGo/dan-gold-E6HjQaB7UEA-unsplash.jpg"
                />
                <WhereToGoCard
                  link="/catalouge"
                  image="/images/whereToGo/dan-gold-E6HjQaB7UEA-unsplash.jpg"
                />
                <WhereToGoCard
                  link="/catalouge"
                  image="/images/whereToGo/dan-gold-E6HjQaB7UEA-unsplash.jpg"
                /> */}
                <WhereToGoCard link={row.href} image="" />
              </div>
            </div>
          );
        })}
      </div>
    </PageComponent>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });

export const getServerSideProps = async (context) => {
  const Catalog = await fetch(
    'https://admin.marina.com.eg/api/data/catalogs'
  ).then((res) => res.json());
  return {
    props: {
      Catalog,
      ...(await serverSideTranslations(context.locale, [
        'whereToGo',
        'common',
      ])),
    },
  };
};
