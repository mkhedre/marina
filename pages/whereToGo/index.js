import PageComponent from "@/components/PageComponent";
import WhereToGoCard from "@/components/whereToGo/WhereToGoCard";
import styles from "@/styles/whereToGo.module.scss";
import { Grid } from "@mantine/core";
import img from "../../public/Images/whereToGo/dan-gold-E6HjQaB7UEA-unsplash.jpg";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const { Col } = Grid;
const rows = [
  { title: "resturansts", href: "/restaurants" },
  { title: "beaches", href: "/beaches" },
  { title: "hotels", href: "/hotels" },
  { title: "healthcare", href: "/healthcare" },
  { title: "rentals", href: "/rentals" },
  { title: "waterActevities", href: "/water_activities" },
];

const Index = () => {
  const { t } = useTranslation("whereToGo");
  return (
    <PageComponent styles={styles} title="WHERE TO GO IN MARINA?" hero={img}>
      <div className="container mx-auto px-4 sm:px-10 mt-[100px]">
        {rows.map((row, i) => {
          return (
            <div key={i} className="flex flex-col mb-[100px]">
              <h2
                key={i}
                className="text-2xl md:text-7xl font-extrabold mb-2 md:mb-10"
              >
                {t(`${row.title}`)}
              </h2>
              <div className="flex flex-wrap gap-3 md:gap-6">
                <WhereToGoCard
                  link="/catalouge"
                  image="/images/whereToGo/dan-gold-E6HjQaB7UEA-unsplash.jpg"
                />
                <WhereToGoCard
                  link="/catalouge"
                  image="/images/whereToGo/dan-gold-E6HjQaB7UEA-unsplash.jpg"
                />
                <WhereToGoCard
                  link="/catalouge"
                  image="/images/whereToGo/dan-gold-E6HjQaB7UEA-unsplash.jpg"
                />
                <WhereToGoCard link={row.href} image="" />
              </div>
            </div>
          );
        })}
      </div>
    </PageComponent>
  );
};

export default Index;

export const getServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, [
        "whereToGo",
        "common",
      ])),
    },
  };
};
