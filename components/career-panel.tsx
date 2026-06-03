import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CareerPanel() {
  return (
    <section className="grid min-h-[23.5rem] grid-cols-1 items-center gap-8 rounded-[1.15rem] bg-foreground p-7 text-background sm:p-10 lg:grid-cols-[1fr_0.82fr] lg:p-12">
      <div className="max-w-[28rem]">
        <h2 className="text-[2rem] font-semibold leading-[1.08] sm:text-[2.35rem]">
          Boost Your Career Success
        </h2>
        <p className="mt-4 max-w-[24rem] text-base leading-[1.4] text-background/95">
          Our mission is to empower businesses every day with top talent
        </p>
      </div>

      <Card className="justify-self-end rounded-[1.05rem] border-0 bg-background px-0 py-0 text-foreground ring-0 lg:max-w-[25rem]">
        <CardHeader className="grid-cols-[1fr_auto] px-6 pt-7 sm:px-7">
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
        <CardContent className="px-6 pb-6 pt-10 sm:px-7">
          <p className="max-w-[20rem] text-base leading-[1.4]">
            Our mission is to empower businesses every day with top talent
          </p>
          <Button className="mt-8 h-12 w-full rounded-[0.32rem] text-base font-medium leading-[1.4]">
            See recommendation
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
