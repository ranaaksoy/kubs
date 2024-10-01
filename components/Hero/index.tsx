import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-transparent">
      <Image
        src="/images/hero/gradient_creative.png"
        className="dark:hidden"
        fill
        priority
        sizes="100vw"
        alt="consulting hero gradient"
      />
      <Image
        src="/images/hero/gradient_creative_dark.png"
        className="hidden dark:block"
        fill
        alt="consulting hero gradient"
      />
      <section className="pb-16 pt-28 md:pt-32 lg:pb-40 lg:pt-36">
        <div className="container relative z-10">
          <div className="flex flex-wrap lg:flex-nowrap lg:items-center lg:justify-between lg:space-x-10">
            <div className="mb-12 lg:mb-0 lg:w-2/5">
              <h1 className="text-headings text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
                Boost the Growth{" "}
                <span className="relative inline-block before:absolute before:bottom-3 before:-z-[1] before:h-2 before:w-full before:rounded-lg before:bg-primary before:bg-gradient-to-l before:from-primary before:to-tertiary before:opacity-70">
                  of Your Company
                </span>
              </h1>
              <p className="mb-10 text-xl">
                Focus on engaging, reusable content that decrease the cost per
                leads.
              </p>
              <Button size="lg">
                Get Started
                <ChevronRightIcon
                  width={20}
                  height={20}
                  className="-mr-2 ml-4"
                />
              </Button>
            </div>
            <div className="relative w-full text-center lg:w-1/2 lg:text-right">
              <div className="absolute bottom-[10%] left-[5%] animate-fly rounded-[4rem] bg-white p-4 pr-11 shadow-sm sm:-left-[8%]">
                <div className="flex gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#D3E9FF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-[#007FFF]"
                    >
                      <path d="M4.41085 14.5259L7.81249 11.1243L10.6409 13.9527L13.7978 10.7958L12.0049 9.00293H17.0049V14.0029L15.212 12.21L10.6409 16.7811L7.81249 13.9527L5.33834 16.4268C6.77158 18.5823 9.22233 20.0029 12.0049 20.0029C16.4232 20.0029 20.0049 16.4212 20.0049 12.0029C20.0049 7.58465 16.4232 4.00293 12.0049 4.00293C7.5866 4.00293 4.00488 7.58465 4.00488 12.0029C4.00488 12.8845 4.14747 13.7327 4.41085 14.5259ZM2.87288 16.0841L2.86275 16.074L2.86662 16.0701C2.31276 14.8276 2.00488 13.4512 2.00488 12.0029C2.00488 6.48008 6.48204 2.00293 12.0049 2.00293C17.5277 2.00293 22.0049 6.48008 22.0049 12.0029C22.0049 17.5258 17.5277 22.0029 12.0049 22.0029C7.93574 22.0029 4.43426 19.5725 2.87288 16.0841Z"></path>
                    </svg>
                  </span>
                  <div className="text-left text-foreground">
                    <span className="block text-xs font-medium">
                      More organic traffic
                    </span>
                    <span className="block text-2xl font-bold leading-none">
                      150%
                    </span>
                  </div>
                </div>
              </div>
              <Image
                src="/images/hero/consulting_hero.png"
                width={600}
                height={600}
                alt="consulting hero"
                className="inline-block"
              />
              <div className="absolute right-[2%] top-1/3 animate-fly rounded-[4rem] bg-white p-4 pl-11 shadow-sm lg:-right-[5%]">
                <div className="flex gap-4">
                  <div className="text-left text-foreground">
                    <span className="block text-xs font-medium">
                      More inbound leads
                    </span>
                    <span className="block text-2xl font-bold leading-none">
                      86%
                    </span>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E3F9EE]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-[#44D88D]"
                    >
                      <path d="M21 4V6H20L15 13.5V22H9V13.5L4 6H3V4H21ZM6.4037 6L11 12.8944V20H13V12.8944L17.5963 6H6.4037Z"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
