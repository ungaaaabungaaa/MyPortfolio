import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { BLUR_FADE_DELAY } from "./constants";

const testimonials = [
  {
    quote: "React Native App, Similar To BookMyShow",
    name: "SEATS",
    designation: "1.2.12",
    src: "/app3.webp",
  },
  {
    quote: "An OLLMA 3.2-Powered Education App",
    name: "FAILER",
    designation: "2.1.0",
    src: "/app1.webp",
  },
  {
    quote: "Simple Dribble Inspired Clone AIRBNB",
    name: "AIRBNB CLONE",
    designation: "1.4.0",
    src: "/app2.webp",
  },
];

export function AppsSection() {
  return (
    <section className="hidden md:block" id="apps">
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              AppStore
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My APP&apos;s
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Trying Out Flutter & React Native.
            </p>
          </div>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </BlurFade>
    </section>
  );
}

