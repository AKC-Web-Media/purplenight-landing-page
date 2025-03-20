import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-200 to-slate-100 text-white">
      <div className=" max-w-[1152px] container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              style={{ fontFamily: "Poppins" }}
              className="text-black text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Purplenight, the balance of reading and AI
            </h1>
            <p className="text-lg text-gray-800 mb-8">
              Purplenight has got it the balance between book reading and AI
              without compromising the knowledge.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2"
                onClick={() =>
                  window.open(
                    "https://purplenight.hyperingenious.tech",
                    "_blank"
                  )
                }
              >
                Try out now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 text-black border-black px-8 py-4 rounded-full font-semibold hover:bg-purple-400/10 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <img
              src="https://atlasti.com/media/pages/guides/literature-review/literature-review-overview/61f7527c48-1739281542/literature-review-objectives-of-lr-atlas.ti-patrick-tomasso.jpg"
              alt="Digital Innovation"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-xl p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="bg-gray-300/90 p-3 rounded-lg">
                  <Rocket className="w-6 h-6 text-black" />
                </div>
                <div>
                  <p className="font-semibold text-black">
                    Loved by Avid Readers.
                  </p>
                  <p className="text-sm text-black">People enjoy reading it.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
