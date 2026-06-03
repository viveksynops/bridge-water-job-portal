'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function CompaniesSection() {
  return (
    <section className="bg-foreground py-24 text-background">
      <div className="mx-auto grid w-full max-w-[105rem] grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.04fr_0.96fr] lg:px-28">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative min-h-[43rem]"
        >
          <div className="absolute left-0 top-0 h-full w-[84%] overflow-hidden rounded-[1.15rem]">
            <Image
              src="/images/best-companies-interview.png"
              alt="Business interviewer handing a document to a candidate"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </div>

          <Card className="absolute right-0 top-[36%] w-full max-w-[24rem] rounded-xl border-0 bg-background px-0 py-0 text-foreground ring-0">
            <CardHeader className="grid-cols-[1fr_auto] px-6 pt-7">
              <CardTitle className="text-xl font-semibold leading-[1.25]">
                Review
              </CardTitle>
              <a
                href="#"
                className="text-base leading-[1.4] text-foreground underline underline-offset-2"
              >
                Recommended
              </a>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-12">
              <p className="max-w-[20rem] text-base leading-[1.4]">
                Our mission is to empower businesses every day with top talent
              </p>
              <Button className="mt-12 h-12 w-full rounded-md text-base font-normal leading-[1.4]">
                See recommendation
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="max-w-[38rem] text-[2.25rem] font-semibold leading-[1.15] sm:text-[2.5rem]">
            Get a Job at One of the Best Companies!
          </h2>
          <p className="mt-5 max-w-[42rem] text-lg leading-[1.4] text-background/90">
            Find great places to work. Get access to millions of company
            reviews. Company name or job title. Find Companies. Do you want to
            search for salaries?
          </p>

          <div className="mt-52 grid max-w-[40rem] grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold leading-[1.25]">Job Finding</h3>
              <div className="mt-4 flex flex-col gap-2 text-base leading-[1.4] text-background/90">
                <p>To increase impression</p>
                <p>Get skilled jobs</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold leading-[1.25]">Matched Skills</h3>
              <div className="mt-4 flex flex-col gap-2 text-base leading-[1.4] text-background/90">
                <p>Experienced job hunter</p>
                <p>Intern opportunities</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
