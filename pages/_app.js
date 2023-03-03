import '@/styles/globals.css';
import 'animate.css/animate.min.css';
import Footer from '@/components/Footer';
import Navbar from 'components/Navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className='z-100 fixed top-0 left-0 right-0'>
        <Navbar />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
