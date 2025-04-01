import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
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
  return <AnimatedTestimonials testimonials={testimonials} />;
}
