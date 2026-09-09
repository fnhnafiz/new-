import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/hero.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* পেছনের line-art skyline — আলাদা ইমেজ লাগবে না, পুরোটা SVG */}
      <Skyline />

      <div className="wrapper relative z-10 grid items-center gap-10 pb-28 pt-14 lg:grid-cols-[1fr_600px] lg:gap-6 lg:pb-40 lg:pt-20">
        <div className="max-w-[560px]">
          <h1 className="text-[34px] font-bold leading-[1.15] text-white sm:text-[44px] lg:text-[62px]">
            Your degree abroad starts with an honest answer
          </h1>

          <p className="mt-5 max-w-[440px] text-[16px] leading-relaxed text-white/85 lg:text-[17px]">
            Check where your profile really stands, find courses that match your
            grades and budget, and get your SOP reviewed before you pay anyone a
            single fee.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/counseling" className="btn btn-white">
              Book free counseling
            </Link>
            <Link href="/visa-checker" className="btn btn-white-outline">
              Check visa chances
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
          <Image
            src={heroImage}
            alt="A student researching universities on her laptop"
            width={920}
            height={980}
            priority
            className="h-[500px] w-full object-cover drop-shadow-2xl"
          />
        </div>
      </div>

      {/* নিচের বাঁকানো কাটা — রেফারেন্সের মতো মাঝখানে নিচে নেমে যায় */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[60px] w-full lg:h-[110px]"
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 0 Q720 110 1440 0 L1440 110 L0 110 Z" fill="#ffffff" />
      </svg>
    </section>
  );
}

function Skyline() {
  return (
    <svg
      className="pointer-events-none absolute bottom-16 right-0 h-[70%] w-[85%] text-white/15 lg:bottom-24 lg:w-[62%]"
      viewBox="0 0 900 320"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      preserveAspectRatio="xMaxYMax meet"
      aria-hidden="true"
    >
      {/* বাঁ পাশের লম্বা হল */}
      <path d="M20 320V150h150v170" />
      <path d="M20 150l75-42 75 42" />
      {[45, 75, 105, 135].map((x) => (
        <path key={x} d={`M${x} 320v-70a10 10 0 0120 0v70`} />
      ))}

      {/* সরু টাওয়ার */}
      <path d="M200 320V90h44v230M222 90V52M200 118h44" />
      <path d="M210 320v-60a12 12 0 0124 0v60" />

      {/* মাঝের গম্বুজ */}
      <path d="M300 320V170h230v150" />
      <path d="M415 170V96" />
      <path d="M352 96a63 55 0 01126 0z" />
      <path d="M415 96V56a8 8 0 0116 0" />
      <path d="M340 320v-84a14 14 0 0128 0v84M400 320v-84a15 15 0 0130 0v84M462 320v-84a14 14 0 0128 0v84" />

      {/* ডান পাশের চ্যাপেল */}
      <path d="M560 320V140h180v180" />
      <path d="M560 140l90-46 90 46" />
      <path d="M590 320v-72a16 16 0 0132 0v72M678 320v-72a16 16 0 0132 0v72" />

      {/* কোণার স্পায়ার */}
      <path d="M770 320V120h60v200M800 120V78M770 152h60" />
      <path d="M860 320V180h30v140" />
    </svg>
  );
}
