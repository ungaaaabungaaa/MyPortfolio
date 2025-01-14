import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "React Native app, similar to BookMyShow, offering detailed navigation to event halls or locations using AR vision for a more immersive & interactive experience",
      name: "MaSeat?",
      designation: "PlayStore | AppStore",
      src: "/app3.webp",
    },
    {
      quote:
        "An OLLMA 3.2-powered education app that predicts recurring questions based on patterns from previous exams",
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
