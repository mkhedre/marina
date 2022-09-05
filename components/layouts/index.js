import { useRouter } from 'next/router';
import Navbar from './Navbar';

const Index = (props) => {
  console.log(props);
  const router = useRouter();
  return (
    <div className={router.locale === 'ar' ? 'rtl' : null}>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Index;
