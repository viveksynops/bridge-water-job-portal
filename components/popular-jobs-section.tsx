'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const popularJobs = [
  {
    title: 'Mid Level UI/UX Designer',
    salary: '$5000',
    tags: ['1 - 3 Years', 'Developer', 'Hybrid Flexible'],
  },
  {
    title: 'Frontend Developer (React)',
    salary: '$3500',
    tags: ['3 - 4 Years', 'Creative', 'Remote Only'],
  },
  {
    title: 'Digital Marketing Specialist',
    salary: '$6500',
    tags: ['1 - 3 Years', 'Verified', 'HR'],
  },
  {
    title: 'Junior HR Executive',
    salary: '$4000',
    tags: ['6 - 9 Years', 'High Salary', 'Marketing'],
  },
]

const listContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export function PopularJobsSection() {
  return (
    <section className="w-full bg-muted/35 px-6 py-16 sm:px-10 lg:px-28">
      <div className="mx-auto grid w-full max-w-[105rem] grid-cols-1 gap-10 lg:grid-cols-[0.89fr_1.11fr] xl:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="self-start rounded-[1.45rem] bg-[linear-gradient(135deg,oklch(0.68_0.22_31)_0%,oklch(0.86_0.13_78)_56%,oklch(0.47_0.11_108)_100%)] p-8 sm:p-12 lg:p-10 xl:p-16"
        >
          <div className="relative aspect-[0.925] overflow-hidden rounded-[1.05rem] border border-background/80">
            <Image
              src="/images/popular-jobs-interview.png"
              alt="Candidate interviewing for a popular job"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col gap-6"
        >
          {popularJobs.map((job) => (
            <motion.div
              key={job.title}
              variants={cardItem}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <Card className="min-h-[8.8rem] justify-between gap-5 rounded-[1rem] border-0 bg-card px-7 py-5 ring-0 sm:px-8">
                <div className="grid grid-cols-[1fr_auto] gap-8">
                  <h3 className="text-[1.6rem] font-semibold leading-[1.12] sm:text-[1.8rem]">
                    {job.title}
                  </h3>
                  <p className="text-[1.55rem] font-medium leading-none sm:text-[1.7rem]">
                    {job.salary}
                  </p>
                </div>

                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex flex-wrap gap-3">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border bg-background px-2 py-1 text-sm leading-[1.3]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-flex w-fit items-center gap-3 border-b border-foreground pb-1 text-base leading-[1.4]"
                  >
                    Read More
                    <ArrowRight className="size-7" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
