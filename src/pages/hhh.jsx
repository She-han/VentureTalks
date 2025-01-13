 <div className="items-center justify-center mt-8 mb-4 px-10 md:px-20 mx-auto min-h-screen p-8 text-white max-w-[1400px]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-5xl font-extrabold">
          Partnership Opportunities
        </h1>
        <p className="text-lg text-gray-300">
          Explore our sponsorship tiers and be part of the Venture Talks journey.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-1">
        {sponsorshipOptions.slice(0, 2).map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-12 rounded-xl shadow-xl ${option.color}`}
          >
            <h2 className="mb-4 text-3xl font-bold">{option.tier}</h2>
            <p className="mb-4 text-xl font-semibold">{option.price}</p>
            <ul className="mb-6 space-y-4 list-disc">
              {option.benefits.map((benefit, i) => (
                <li key={i}>
                  <span className="font-bold text-gray-200">{benefit.title}</span>{" "}
                  <span className="font-medium text-gray-300">{benefit.description}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <h3 className="mb-2 text-lg font-bold">Sponsor Options:</h3>
              {option.options.map((opt, i) => (
                <p key={i} className="text-gray-200">
                  {opt.episodes}: <span className="font-medium text-gray-200">{opt.price}</span>
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>