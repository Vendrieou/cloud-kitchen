import Header from'@/components/common/Header';
 import HeroSection from'./HeroSection';
 import AboutSection from'./AboutSection';
 import ContactSection from'./ContactSection';

const HomePage = () => {
  return (
    <div id="hero" className="w-full bg-[#f7f7f7] min-h-screen">
      <Header />
      
      {/* <main className="flex flex-col gap-[37px] sm:gap-[55px] lg:gap-[74px] items-center justify-center w-full"> */}
      <main className="flex flex-col items-center justify-center w-full">
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default HomePage