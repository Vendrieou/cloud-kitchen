"use client";

const WHATSAPP_NUMBER = '+6281377356803';

// Component for a single Daily Meal Card for reusability
type DailyMealCardProps = {
  day: string;
  src: string;
  alt: string;
  className?: string;
};

const DailyMealCard: React.FC<DailyMealCardProps> = ({ day, src, alt, className = '' }) => (
  <div className={`relative ${className} group cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl`}>
    {/* Replaced Next.js Image with standard HTML img tag to fix resolution error */}
    <img
      src={src}
      alt={alt}
      // Added a placeholder size, but layout is controlled by Tailwind classes
      width={512}
      height={512}
      className="w-full h-full object-cover rounded-[78px]"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-[#151538e5] text-[#f7f7f7] text-xl sm:text-2xl lg:text-3xl font-normal font-indie text-center p-4 rounded-[56px] opacity-90 transition-opacity group-hover:opacity-100">
      {day}
    </div>
  </div>
);

const HeroSection = () => {
  // Using a mock element instead of next/image, which was causing the build error.
  type MockImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
  };

  const MockImage: React.FC<MockImageProps> = ({ src, alt, width, height, className = '' }) => (
    <img src={src} alt={alt} width={width} height={height} className={className} />
  );

  interface SubscribeButtonEvent {
    // You can extend this interface if you need more specific event properties
    preventDefault?: () => void;
  }

  interface WindowType {
    open(url?: string, target?: string): void;
  }

  const SubscribeButton = (e: SubscribeButtonEvent): void => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    // Handler to directly generate and send the WhatsApp message
    const subscriptionMessage: string = "Hello! I'm interested in the 1 Month Subscription + 5 Days On Time delivery package. Please send me more details about signing up.";

    // 1. URL encode the message
    const encodedMessage: string = encodeURIComponent(subscriptionMessage);

    // 2. Construct the final WhatsApp URL
    const whatsappUrl: string = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // 3. Redirect the user to the WhatsApp link
    window.open(whatsappUrl, '_blank');
  }

  return (
    <section className="w-full relative overflow-hidden">
      <div className="w-full">

        {/* Main Stack Container - Height is set to ensure content and background fit */}
        {/* <div className="relative w-full h-[1200px] sm:h-[1400px] md:h-[1600px] lg:h-[1668px]"> */}
        <div className="relative w-full h-[1600px]">

          {/* Background Elements (Absolute) */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Yellow Circle - Top Left (Adjusted for better responsiveness) */}
            <div
              className="absolute w-[200px] h-[150px] sm:w-[300px] sm:h-[250px] lg:w-[472px] lg:h-[406px] bg-[#f3e16c] rounded-[236px]"
              style={{ left: '5%', top: '0px' }}
            />

            {/* Vector Wave - Top */}
            <div className="absolute w-full top-[100px] lg:top-[148px]">
              <MockImage
                src="/images/img_vector_1.png"
                alt="Wave decoration"
                width={1536}
                height={576}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Bottom Wave */}
            <div className="absolute w-full bottom-[450px] lg:bottom-[553px]">
              <MockImage
                src="/images/img_vector_2.png"
                alt="Wave decoration"
                width={1536}
                height={486}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Yellow Circle - Bottom Right (Adjusted for better responsiveness) */}
            <div
              className="absolute w-[200px] h-[150px] sm:w-[300px] sm:h-[250px] lg:w-[472px] lg:h-[406px] bg-[#f3e16c] rounded-[236px]"
              style={{ right: '5%', bottom: '400px' }}
            />
          </div>

          {/* CONTENT LAYER - Main Container (Still a single column, but content uses flex) */}
          <div className="relative z-10 w-full pt-[50px] px-4 max-w-[1440px] mx-auto flex flex-col gap-16 items-center">

            {/* 1. Subscription Card - Now at the top, centered */}
            <div className="w-full flex justify-end mr-64">
              <div className="bg-[#43b6b2e5] rounded-[78px] p-6 sm:p-8 lg:p-10 w-full max-w-sm transition-transform duration-300 hover:scale-[1.05] hover:shadow-2xl">
                <div className="flex flex-col gap-4 items-center">
                  <p className="text-[#f7f7f7] text-xl sm:text-2xl lg:text-3xl font-normal font-indie text-center w-full mt-2">
                    1 Month Subscription + 5 Days On Time delivery
                  </p>
                  <button
                    onClick={(e) => SubscribeButton(e)}
                    className="bg-[#151538e5] text-[#f7f7f7] text-xl sm:text-2xl lg:text-3xl font-normal font-indie rounded-[56px] px-8 sm:px-10 py-4 w-full flex items-center justify-center gap-4 transition-colors hover:bg-[#151538] active:scale-[0.98]"
                  >
                    <MockImage
                      src="/images/img_bellring_1.svg"
                      alt="Bell icon"
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Daily Menu Cards (Centered in 2 Logical Rows: 3, and 2) - FLEXBOX IMPLEMENTATION */}
            <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10 items-center">

              {/* Row 1: Monday, Tuesday, Wednesday (3 Cards using flex) */}
              <div id="menu" className="flex justify-center gap-6 sm:gap-8 lg:gap-10 w-full max-w-4xl">
                <DailyMealCard
                  day="Monday"
                  src="/images/img_rectangle_6.png"
                  alt="Monday meal"
                  className="w-1/3 h-auto aspect-[1/1.4] min-w-0"
                />
                <DailyMealCard
                  day="Tuesday"
                  src="/images/img_rectangle_7.png"
                  alt="Tuesday meal"
                  className="w-1/3 h-auto aspect-[1/1.4] min-w-0"
                />
                <DailyMealCard
                  day="Wednesday"
                  src="/images/img_rectangle_8.png"
                  alt="Wednesday meal"
                  className="w-1/3 h-auto aspect-[1/1.4] min-w-0"
                />
              </div>

              {/* Row 2: Thursday, Friday (2 Cards, Centered using a wider flex container) */}
              <div className="flex justify-center gap-6 sm:gap-8 lg:gap-10 w-full max-w-4xl">
                <div className="w-1/3 h-auto aspect-[1/1.4] min-w-0">
                  <DailyMealCard
                    day="Thursday"
                    src="/images/img_rectangle_6_512x386.png"
                    alt="Thursday meal"
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-1/3 h-auto aspect-[1/1.4] min-w-0">
                  <DailyMealCard
                    day="Friday"
                    src="/images/img_rectangle_7_512x386.png"
                    alt="Friday meal"
                    className="w-full h-auto"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection
