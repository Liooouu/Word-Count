import "@/styles/globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";

export default function App({ Component, pageProps }) {
  return ( 
  <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
  </>
  )}
