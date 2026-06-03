'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { ProfileMockup } from '@/components/profile-mockup'
import { UploadMockup } from '@/components/upload-mockup'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export function ProcessSection() {
  return (
    <section className="mx-auto w-full max-w-[105rem] px-6 pb-24 pt-20 sm:px-10 lg:px-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="mx-auto max-w-[52rem] text-center"
      >
        <h2 className="text-[2.25rem] font-semibold leading-[1.15] sm:text-[2.5rem]">
          A Smooth Process With Outstanding Results
        </h2>
        <p className="mx-auto mt-5 max-w-[38rem] text-lg leading-[1.4] text-muted-foreground">
          Highlighting the smooth and efficient process from job search to
          landing a role.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1 }}
        >
          <Card className="min-h-[36rem] rounded-[1.15rem] border bg-muted/35 px-12 pb-12 pt-10 ring-0">
            <ProfileMockup />
            <div className="mt-12">
              <h3 className="text-[2rem] font-semibold leading-[1.12]">
                Professional Profile Creation
              </h3>
              <p className="mt-4 text-lg leading-[1.4] text-muted-foreground">
                Create a professional profile that highlights your skills &
                experience.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.2 }}
        >
          <Card className="min-h-[36rem] rounded-[1.15rem] border bg-muted/35 px-12 pb-12 pt-10 ring-0">
            <UploadMockup />
            <div className="mt-12">
              <h3 className="text-[2rem] font-semibold leading-[1.12]">
                Smart Application System
              </h3>
              <p className="mt-4 text-lg leading-[1.4] text-muted-foreground">
                Apply to multiple jobs quickly using our streamlined application
                system.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
