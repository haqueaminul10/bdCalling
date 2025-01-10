import Navbar from '@/Components/header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />{' '}
    </>
  );
}
