'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { JobSuccessCard } from '@/components/job-success-card'
import { CareerPanel } from '@/components/career-panel'

export function FeaturedSection() {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start 0.25'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [120, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.55], [0, 1])

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="mx-auto grid w-full max-w-[105rem] grid-cols-1 gap-5 px-6 pb-8 sm:px-10 lg:grid-cols-[1.38fr_1fr_1fr] lg:px-28"
    >
      <div className="relative min-h-[32rem] overflow-hidden rounded-[1.15rem] lg:row-span-2 lg:min-h-[46rem]">
        <Image
          src="/images/candidate-workspace.png"
          alt="Professional candidate smiling at a laptop"
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <JobSuccessCard />

      <div className="relative min-h-[23rem] overflow-hidden rounded-[1.15rem] lg:min-h-0">
        <Image
          src="/images/hiring-team.png"
          alt="Hiring support team working with a tablet"
          fill
          sizes="(min-width: 1024px) 30vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="lg:col-span-2">
        <CareerPanel />
      </div>
    </motion.section>
  )
}
