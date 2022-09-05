import CategoryGrid from '@/components/Categories/CategoryGrid';
import PageComponent from '@/components/PageComponent';
import styles from '@/styles/categories.module.scss';
import img from '@/public/Images/categories/hermansyah-7uXn7nudorc-unsplash.jpg';
const cols = [
  {
    title: 'SUPREME CAFE - GATE 2',
    src: '',
    alt: 'SUPREME CAFE - GATE 2',
    href1: '',
    href2: '',
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containingLorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: 'SUPREME CAFE - GATE 2',
    src: '',
    alt: 'SUPREME CAFE - GATE 2',
    href1: '',
    href2: '',
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containingLorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: 'SUPREME CAFE - GATE 2',
    src: '',
    alt: 'SUPREME CAFE - GATE 2',
    href1: '',
    href2: '',
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containingLorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: 'SUPREME CAFE - GATE 2',
    src: '',
    alt: 'SUPREME CAFE - GATE 2',
    href1: '',
    href2: '',
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containingLorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: 'SUPREME CAFE - GATE 2',
    src: '',
    alt: 'SUPREME CAFE - GATE 2',
    href1: '',
    href2: '',
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containingLorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: 'SUPREME CAFE - GATE 2',
    src: '',
    alt: 'SUPREME CAFE - GATE 2',
    href1: '',
    href2: '',
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containingLorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: 'SUPREME CAFE - GATE 2',
    src: '',
    alt: 'SUPREME CAFE - GATE 2',
    href1: '',
    href2: '',
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containingLorem Ipsum passages, and more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.`,
  },
];

const Index = ({ data }) => {
  return (
    <PageComponent styles={styles} title="BEACHES" hero={img.src}>
      <div
        className={`${styles.category__container} container mx-auto  px-4 sm:px-10 mt-11 flex flex-col`}
      >
        <CategoryGrid items={data}></CategoryGrid>
        <div className={styles.ad}>AD AREA</div>
      </div>
    </PageComponent>
  );
};

export default Index;

export const getServerSideProps = async (context) => {
  const Catalog_type_id = 45;
  const res = await fetch(
    `https://admin.marina.com.eg/api/data/catalogs?catalog_type_id=${Catalog_type_id}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
