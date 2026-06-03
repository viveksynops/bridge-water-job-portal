'use client'

import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const blur = useTransform(scrollYProgress, [0, 0.75], [0, 12])
  const filter = useTransform(blur, (v) => `blur(${v}px)`)
  const y = useTransform(scrollYProgress, [0, 1], ['0px', '-40px'])

  return (
    <section
      ref={ref}
      className="mx-auto flex w-full max-w-[68rem] flex-col items-center px-6 pb-20 pt-14 text-center sm:px-10 lg:px-28 lg:pb-16 lg:pt-14"
    >
      <motion.div
        style={{ opacity, filter, y }}
        className="flex flex-col items-center"
      >
        <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col items-center">
          <motion.div variants={item}>
            <Badge
              variant="secondary"
              className="h-11 rounded-full px-5 text-sm font-normal leading-[1.4] text-muted-foreground"
            >
              Global Job Finder Plus Portal
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 max-w-[68rem] text-[3.25rem] font-semibold leading-[1.08] sm:text-[4.5rem]"
          >
            Connecting top talent with leading opportunities
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-[40rem] text-base leading-[1.45] text-muted-foreground sm:text-lg"
          >
            Find jobs that match your skills and career goals. Our platform helps
            professionals connect with leading.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button className="h-12 rounded-md px-5 text-sm font-normal leading-[1.4]">
              View Services
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              variant="outline"
              className="h-12 rounded-md border-foreground/35 px-5 text-sm font-normal leading-[1.4]"
            >
              Find A Job
              <ArrowRight data-icon="inline-end" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
