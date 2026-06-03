import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section className="bg-[linear-gradient(135deg,oklch(0.68_0.22_31)_0%,oklch(0.86_0.13_78)_57%,oklch(0.47_0.11_108)_100%)] px-6 py-20 sm:px-10 lg:px-28">
      <div className="mx-auto w-full max-w-[105rem]">
        <div className="grid min-h-[40rem] grid-cols-1 gap-12 overflow-hidden rounded-[1.4rem] bg-background px-14 py-16 lg:grid-cols-[0.82fr_1fr]">
          <div className="relative flex flex-col">
            <div className="pointer-events-none absolute -bottom-44 -left-64 size-[54rem] rounded-full border-[4.5rem] border-muted/45" />
            <div className="relative z-10 max-w-[38rem]">
              <h2 className="text-[2.25rem] font-semibold leading-[1.15] sm:text-[2.5rem]">
                Ready to Get Started
              </h2>
              <p className="mt-5 text-lg leading-[1.4] text-muted-foreground">
                Verixa is your trusted platform for discovering job
                opportunities that match your skills, experience, and career
                aspirations.
              </p>
            </div>

            <Button className="relative z-10 mt-auto h-12 w-fit rounded-md px-5 text-sm font-normal leading-[1.4]">
              Send Message
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>

          <form className="grid content-start gap-7" aria-label="Contact form">
            <div className="grid gap-3">
              <Label
                htmlFor="contact-name"
                className="text-base font-normal leading-[1.4]"
              >
                Name
              </Label>
              <Input
                id="contact-name"
                placeholder="Enter your name"
                className="h-12 rounded-md border-0 bg-muted px-4 text-base leading-[1.4] placeholder:text-muted-foreground"
              />
            </div>

            <div className="grid gap-3">
              <Label
                htmlFor="contact-phone"
                className="text-base font-normal leading-[1.4]"
              >
                Phone
              </Label>
              <Input
                id="contact-phone"
                placeholder="Enter your phone Number"
                className="h-12 rounded-md border-0 bg-muted px-4 text-base leading-[1.4] placeholder:text-muted-foreground"
              />
            </div>

            <div className="grid gap-3">
              <Label
                htmlFor="contact-subject"
                className="text-base font-normal leading-[1.4]"
              >
                Subject
              </Label>
              <Input
                id="contact-subject"
                placeholder="Write your subject"
                className="h-12 rounded-md border-0 bg-muted px-4 text-base leading-[1.4] placeholder:text-muted-foreground"
              />
            </div>

            <div className="grid gap-3">
              <Label
                htmlFor="contact-message"
                className="text-base font-normal leading-[1.4]"
              >
                Your message
              </Label>
              <Textarea
                id="contact-message"
                placeholder="What comes to your mind?"
                className="min-h-[8rem] resize-y rounded-md border-0 bg-muted px-4 py-3 text-base leading-[1.4] placeholder:text-muted-foreground"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
