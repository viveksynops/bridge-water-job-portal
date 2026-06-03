'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Thompson',
    quote:
      'Verixa offers great tools for tracking applicants and organising interviews. It has made our recruitment process smoother and more organised.',
    image: '/images/testimonial-sarah.png',
  },
  {
    name: 'Steve kal',
    quote:
      "Verixa's job alerts kept me updated with relevant positions daily. I finally landed a role that perfectly matches my skills and aspirations.",
    image: '/images/testimonial-steve.png',
  },
  {
    name: 'Lee Atkins',
    quote:
      'Verixa offers great tools for tracking applicants and organizing interviews. It has made our recruitment process smoother and more organized.',
    image: '/images/testimonial-lee.png',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export function TestimonialsSection() {
  return (
    <section className="mx-auto w-full max-w-[105rem] bg-background px-6 py-24 sm:px-10 lg:px-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-[44rem]"
      >
        <h2 className="text-[2.25rem] font-semibold leading-[1.15] sm:text-[2.5rem]">
          Insight From Our Users
        </h2>
        <p className="mt-5 max-w-[34rem] text-lg leading-[1.4] text-muted-foreground">
          Highlighting authentic testimonials from users who found success with
          Verixa.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3"
      >
        {testimonials.map((testimonial) => (
          <motion.article
            key={testimonial.name}
            variants={cardItem}
            className="relative min-h-[31rem] overflow-hidden rounded-[1.15rem]"
          >
            <Image
              src={testimonial.image}
              alt={`${testimonial.name} testimonial portrait`}
              fill
              sizes="(min-width: 1024px) 31vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.32)_55%,rgba(0,0,0,0.88)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-background">
              <h3 className="text-[1.75rem] font-semibold leading-[1.12]">
                {testimonial.name}
              </h3>
              <p className="mt-5 text-base leading-[1.45] sm:text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
