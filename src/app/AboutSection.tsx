"use client";
import { useEffect, useState} from'react';
import RatingBar from '@/components/ui/RatingBar';

const AboutSection = () => {
    const [isFixed, setIsFixed] = useState(false);
  const scrollThreshold = 300; // Change this value to adjust when the element becomes fixed

  useEffect(() => {
    const handleScroll = () => {
      // Use window.scrollY > scrollThreshold to determine if the Up button should be fixed
      setIsFixed(window.scrollY > scrollThreshold);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures this runs only on mount and unmount

  return (
    <section id="about" className="w-full relative">
      <div className="w-full">
        {/* About Us Title with Up Button */}
        {/* Changed justify-between to justify-center on mobile/small screens for better center alignment of the text */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-center items-center mb-[37px] sm:mb-[55px] lg:mb-[74px] mx-[18px] sm:mx-[27px] lg:mx-[37px]">
          {/* Centering the title: Ensures the text is centered on all screen sizes */}
          <h2 className="text-[#000000] text-[48px] sm:text-[72px] lg:text-[96px] font-normal leading-[71px] sm:leading-[106px] lg:leading-[141px] text-center w-full sm:w-auto">
            About Us
          </h2>
          
          {/* Up Button: Fixed position is conditionally applied */}
          {/* Added z-50 to ensure it is on top of all other content */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Added click handler to scroll to top
            className={`bg-[#d9d9d9] rounded-[74px] px-[25px] sm:px-[37px] lg:px-[50px] py-[13px] sm:py-[19px] lg:py-[26px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 ${
              isFixed 
                ? 'z-50 fixed bottom-5 right-5 shadow-lg' // Fixed when scrolled past threshold
                : 'relative top-0 right-0 sm:top-10 sm:left-5' // Relative/positioned on mobile/at top
            }`}
          >
            {/* The actual component/mock for Image */}
            <svg className="w-[19px] h-[19px] sm:w-[28px] sm:h-[28px] lg:w-[38px] lg:h-[38px] mb-[2px] sm:mb-[3px] lg:mb-[4px]" fill="#000000" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
            </svg>
            <span className="text-[#000000] text-[18px] sm:text-[27px] lg:text-[36px] font-normal leading-[26px] sm:leading-[40px] lg:leading-[53px] text-center">
              UP
            </span>
          </button>
        </div>

        {/* About Content Card */}
        <div className="relative w-full h-[570px]">
          {/* Background Wave */}
          <div className="absolute inset-0">
            {/* Using a mock image or actual Image component if available */}
            <img
              src="/images/img_vector_4.png"
              alt="Wave background"
              width={1536}
              height={576}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content Card - Centering ensured by transform-x-1/2 on left-1/2 */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[85%] lg:w-[1336px] bg-[#43b6b2e5] rounded-[78px] px-[28px] sm:px-[42px] lg:px-[56px] py-[14px] sm:py-[21px] lg:py-[28px] mt-[10px] sm:mt-[15px] lg:mt-[20px] shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-[18px] sm:gap-[27px] lg:gap-[36px] w-full">
              {/* Text Content */}
              <div className="flex flex-col gap-[3px] sm:gap-[4px] lg:gap-[6px] w-full lg:w-[54%]">
                <h3 className="text-[#ffffff] text-[24px] sm:text-[36px] lg:text-[48px] font-normal leading-[35px] sm:leading-[53px] lg:leading-[71px] text-left">
                  Cloud Kitchen
                </h3>
                
                <div className="flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px]">
                  <RatingBar 
                    rating={5}
                    maxRating={5}
                    readonly={true}
                    size="medium"
                    color="#f3e16c"
                    emptyColor="#d9d9d9"
                  />
                  <p className="text-[#ffffff] text-[16px] sm:text-[24px] lg:text-[32px] font-normal leading-[23px] sm:leading-[35px] lg:leading-[47px] text-left">
                    "Making moments delightful"
                  </p>
                </div>
              </div>

              {/* Illustration */}
              <div className="w-full lg:w-[36%]">
                {/* Using a mock image or actual Image component if available */}
                <img
                  src="/images/img_group_18.svg"
                  alt="Cloud Kitchen illustration"
                  width={440}
                  height={282}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-[#ffffff] text-[16px] sm:text-[24px] lg:text-[32px] font-normal leading-[23px] sm:leading-[34px] lg:leading-[46px] text-left w-full lg:w-[80%] mt-[18px] sm:mt-[27px] lg:mt-[36px]">
              Kami merupakan jasa catering hemat yang terus berkembang di kalanagan pekerja kantoran dan anak muda
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
