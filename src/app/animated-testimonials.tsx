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
      designation: "Github",
      src: "/app1.webp",
    },
    {
      quote: "Simple Dribble Inspired Clone AIRBNB",
      name: "Airbnb Clone",
      designation: "Github",
      src: "/app2.webp",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
