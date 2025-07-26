import { HERO_CONTENT } from "../constants";
import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="pt-28 lg:pt-36">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <div className="mb-8 border border-neutral-800 px-3 py-2 rounded-full text-xs">
          {HERO_CONTENT.updates}
        </div>
        <h1 className="text-5xl lg:text-7xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent">
          {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
            <span key={index}>
              {text}
              <br />
            </span>
          ))}
        </h1>

        <p className="mt-6 text-neutral-400 max-w-xl">
          {HERO_CONTENT.subHeading}
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transtion-hover duration-300"
          >
            {HERO_CONTENT.actions.primary}
          </a>
          <a
            href="#"
            className="inline-block border border-neutral-700 hover:bg-neutral-700 text-white py-3 px-6 rounded-lg font-medium transtion-hover duration-300"
          >
            {HERO_CONTENT.actions.secondary}
          </a>
        </div>
        <div className="py-10">
          <p className="text-gray-400 text-center mt-8">
            {HERO_CONTENT.trustedByText}
          </p>
        </div>

        <div className="mt-12">
          <img
            src={heroImage}
            alt="Animathic Interface"
            className="w-full h-auto rounded-3xl border border-neutral-800 mb-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
