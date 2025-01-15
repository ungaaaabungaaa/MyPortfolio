import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "React Native app, similar to BookMyShow",
      name: "MaSeat?",
      designation: "PlayStore | AppStore",
      src: "/app3.webp",
    },
    {
      quote: "An OLLMA 3.2-powered education app",
      name: "Failerrrr",
      designation: "Devloper Mode",
      src: "/app1.webp",
    },
    {
      quote: "Simple Dribble Inspired Clone AIRBNB",
      name: "AIRBNB Clone",
      designation: "Devloper Mode",
      src: "/app2.webp",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
