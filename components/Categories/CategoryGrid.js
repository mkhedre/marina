import { Button, Container, Grid } from '@mantine/core';
import styles from '@/styles/categories.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const CategoryGrid = ({ items }) => {
  const { t } = useTranslation('wheretogo');

  function createMarkup(item) {
    return {
      __html: item.desc.en,
    };
  }
  const getBackground = (src, alt) => {
    if (!src) return <div className={styles.placeholder__img}></div>;
    return <Image width={366} height={366} src={src} alt={alt}></Image>;
  };
  return (
    <Grid className={styles.items}>
      {items.map((item, i) => {
        return (
          <div key={i} className={styles.item}>
            <h3 className={styles.item__title}>{`${item.name.en}`}</h3>
            <div className="flex gap-6">
              <div className={styles.item__body}>
                {getBackground(
                  item.img_collection.responsive_urls[0],
                  item.alt
                )}
                <div className="flex flex-col justify-between flex-1">
                  <p
                    className={styles.desc}
                    dangerouslySetInnerHTML={createMarkup(item)}
                  />
                  <div className={styles.buttons}>
                    <Link href={`/whereToGo/catalouge/${item.id}`}>
                      <Button uppercase className={styles.btn1}>
                        more info
                      </Button>
                    </Link>
                    <Link href={'/'}>
                      <Button uppercase className={styles.btn2}>
                        call now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Grid>
  );
};

export default CategoryGrid;
