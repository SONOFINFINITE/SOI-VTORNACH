import { Header } from '../../widgets/header/Header';
import { Hero } from '../../widgets/hero/Hero';
// Временная версия без фото основателя (переключить на About когда будут фото)
import { AboutNoPhoto as About } from '../../widgets/about/AboutNoPhoto';
// import { About } from '../../widgets/about/About';
import { PartnerProgram } from '../../widgets/partner/PartnerProgram';
import { Services } from '../../widgets/services/Services';
import { Advantages } from '../../widgets/advantages/Advantages';
import { Steps } from '../../widgets/steps/Steps';
import { Faq } from '../../widgets/faq/Faq';
import { Footer } from '../../widgets/footer/Footer';

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <PartnerProgram />
        <Services />
        <Advantages />
        <Steps />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
