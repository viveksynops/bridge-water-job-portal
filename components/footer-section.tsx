'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const footerColumns = [
  {
    title: 'Company',
    links: ['About Us', 'Jobs', 'Contact', 'Blog'],
  },
  {
    title: 'Support',
    links: ['License', 'Style Guide', 'Changelog', '404'],
  },
  {
    title: 'Social',
    links: ['Facebook', 'LinkedIn', 'Instagram', 'Twitter'],
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export function FooterSection() {
  return (
    <footer className="relative mx-auto w-full max-w-[105rem] overflow-hidden bg-background px-6 pb-12 pt-16 sm:px-10 lg:px-28">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.34fr]"
      >
        <div>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.45fr_1fr_1fr_1fr]">
            <motion.p
              variants={item}
              className="max-w-[31rem] text-lg leading-[1.45]"
            >
              Discover Job Opportunities That Match Your Skills, Experience,
              And Career Goals With Verixa.
            </motion.p>

            {footerColumns.map((column) => (
              <motion.div key={column.title} variants={item}>
                <h2 className="text-xl font-semibold leading-[1.25]">
                  {column.title}
                </h2>
                <nav className="mt-4 flex flex-col gap-3" aria-label={column.title}>
                  {column.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-base leading-[1.4] text-muted-foreground"
                    >
                      {link}
                    </a>
                  ))}
                </nav>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={item}
          className="relative min-h-[22rem] overflow-hidden rounded-[1.15rem]"
        >
          <Image
            src="/images/footer-workspace.png"
            alt="Professional working on a laptop"
            fill
            sizes="(min-width: 1024px) 25vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute -bottom-[5.6rem] left-0 select-none text-[13rem] font-semibold leading-none tracking-[-0.04em] text-muted/45">
        VERIXA
      </div>
    </footer>
  )
}
