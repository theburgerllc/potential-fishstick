import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Clients from '../components/Clients';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Burger Consulting LLC - Where AI Meets NYC Hustle</title>
        <meta name="description" content="15 years shaping global retail. 5 years engineering AI breakthroughs. Your competitive edge—designed and delivered from New York." />
        <meta name="keywords" content="AI consulting, business automation, AI solutions, New York, machine learning, process optimization" />
        <meta property="og:title" content="Burger Consulting LLC - Where AI Meets NYC Hustle" />
        <meta property="og:description" content="Transform your business with practical AI solutions. From automation to optimization, we deliver results that matter." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://burgerconsulting.com" />
        <meta property="og:image" content="https://burgerconsulting.com/brand_logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Burger Consulting LLC - Where AI Meets NYC Hustle" />
        <meta name="twitter:description" content="Transform your business with practical AI solutions." />
        <link rel="canonical" href="https://burgerconsulting.com" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Clients />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
