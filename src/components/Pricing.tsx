import { motion } from "framer-motion";
import { PLANS_CONTENT } from "../constants";
import type { TargetAndTransition } from "framer-motion";

type PlansVariantType = {
  hidden: TargetAndTransition;
  visible: (i: number) => TargetAndTransition;
};

const Pricing = () => {
  const childVariants: PlansVariantType = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  return (
    <section id="pricing">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <motion.div
          className="text-center mb-12 border-t border-neutral-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to bg-neutral-600 bg-clip-text text-transparent">
            {PLANS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4">{PLANS_CONTENT.sectionDescription}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
        >
          {PLANS_CONTENT.plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={childVariants}
              className={`p-8 rounded-xl shadow-lg bg-neutral-950 ${
                plan.popular
                  ? "border border-blue-900/80"
                  : "border border-neutral-800"
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-blue-600 text-white text-xs font-medium py-1 px-3 rounded-full uppercase">
                    {PLANS_CONTENT.popularBadge}
                  </span>
                </div>
              )}
              <h3 className="text-lg lg:text-xl mb-4 tracking-tighter uppercase font-semibold">
                {plan.name}
              </h3>
              <p className="text-neutral-400 mb-6">{plan.description}</p>
              <div className="text-2xl lg:text-3xl font-medium mb-6">
                {plan.price}
              </div>
              <ul className="mb-8 space-y-2 text-neutral-400">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-neutral-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 font-medium text-white rounded-lg cursor-pointer transition-hover duration-300">
                {PLANS_CONTENT.ctaText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
