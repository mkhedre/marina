import CategoryGrid from "@/components/Categories/CategoryGrid";
import PageComponent from "@/components/PageComponent";
import { Container } from "@mantine/core";
import styles from "@/styles/categories.module.scss";
import img from "@/public/Images/categories/dan-gold-E6HjQaB7UEA-unsplash.jpg";
const cols = [
  {
    title: "SUPREME CAFE - GATE 2",
    src: "",
    alt: "SUPREME CAFE - GATE 2",
    href1: "/catalouge",
    href2: "",
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containingLorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: "SUPREME CAFE - GATE 2",
    src: "",
    alt: "SUPREME CAFE - GATE 2",
    href1: "/catalouge",
    href2: "",
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containingLorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: "SUPREME CAFE - GATE 2",
    src: "",
    alt: "SUPREME CAFE - GATE 2",
    href1: "/catalouge",
    href2: "",
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containingLorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: "SUPREME CAFE - GATE 2",
    src: "",
    alt: "SUPREME CAFE - GATE 2",
    href1: "/catalouge",
    href2: "",
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containingLorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: "SUPREME CAFE - GATE 2",
    src: "",
    alt: "SUPREME CAFE - GATE 2",
    href1: "/catalouge",
    href2: "",
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containingLorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.`,
  },
];
const Index = () => {
  return (
    <PageComponent styles={styles} title="RESTAURANTS" hero={img}>
      <div
        className={`${styles.category__container} container mx-auto  px-4 sm:px-10 mt-11 flex flex-col`}
      >
        <CategoryGrid items={cols}></CategoryGrid>
        <div className={styles.ad}>AD AREA</div>
      </div>
    </PageComponent>
  );
};

export default Index;
