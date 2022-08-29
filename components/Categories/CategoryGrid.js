import { Button, Container, Grid } from "@mantine/core";
import styles from "@/styles/categories.module.scss";
import Image from "next/image";
import Link from "next/link";

const CategoryGrid = ({ items }) => {
  const getBackground = (src, alt) => {
    if (!src) return <div className={styles.placeholder__img}></div>;
    return <Image width={366} height={366} src={src} alt={alt}></Image>;
  };
  return (
    <Grid className={styles.items}>
      {items.map((item, i) => {
        return (
          <div key={i} className={styles.item}>
            <h3 className={styles.item__title}>{item.title}</h3>
            <div className="flex gap-6">
              <div className={styles.item__body}>
                {getBackground(item.src, item.alt)}
                <div className="flex-1 flex flex-col justify-between">
                  <p className={styles.desc}>{item.details}</p>
                  <div className={styles.buttons}>
                    <Link href={item.href1}>
                      <Button uppercase className={styles.btn1}>
                        more info
                      </Button>
                    </Link>
                    <Link href={item.href2}>
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
