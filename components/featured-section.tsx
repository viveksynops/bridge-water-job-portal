'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { JobSuccessCard } from '@/components/job-success-card'
import { CareerPanel } from '@/components/career-panel'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export function FeaturedSection() {
  return (
    <section className="mx-auto grid w-full max-w-[105rem] grid-cols-1 gap-5 px-6 pb-8 sm:px-10 lg:grid-cols-[1.38fr_1fr_1fr] lg:px-28">
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="relative min-h-[32rem] overflow-hidden rounded-[1.15rem] lg:row-span-2 lg:min-h-[46rem]"
      >
        <Image
          src="/images/candidate-workspace.png"
          alt="Professional candidate smiling at a laptop"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        custom={1}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <JobSuccessCard />
      </motion.div>

      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="relative min-h-[23rem] overflow-hidden rounded-[1.15rem] lg:min-h-0"
      >
        <Image
          src="/images/hiring-team.png"
          alt="Hiring support team working with a tablet"
          fill
          sizes="(min-width: 1024px) 30vw, 100vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="lg:col-span-2"
      >
        <CareerPanel />
      </motion.div>
    </section>
  )
}
