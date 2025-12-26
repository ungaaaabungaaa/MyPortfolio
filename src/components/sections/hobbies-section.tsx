import { BlurFade } from "@/components/magicui/blur-fade";
import { BLUR_FADE_DELAY } from "./constants";

type Hobby = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  wrapperClassName?: string;
};

const hobbies: Hobby[] = [
  {
    title: "Crone Keyboard V.1",
    description:
      "Corne keyboard is a popular, split, ergonomic, mechanical keyboard with a 40% layout, featuring a 3x6 column staggered key layout with 3 thumb keys per half",
    imageSrc: "/hobbies/CroneKeyboardv1.png",
    imageAlt: "Crone Split Keyboard",
    imageClassName: "w-3/4",
    wrapperClassName: "mt-4",
  },
  {
    title: "CyberDeck",
    description:
      "Кибердек RA01 is a custom-made wearable computer, inspired by classic cyberpunk science fiction.",
    imageSrc: "/hobbies/psp.png",
    imageAlt: "CyberDeck",
    imageClassName: "w-3/4",
    wrapperClassName: "my-4",
  },
  {
    title: "6 Axis",
    description:
      "Arm has 6+1 degrees of freedom, which is the same as a typical industrial robot, thus necessary for displaying nearly all manufacturing & domestic uses.",
    imageSrc: "/hobbies/6axis.png",
    imageAlt: "6 Axis Industrial Arm",
    imageClassName: "w-2/4",
    wrapperClassName: "my-4",
  },
  {
    title: "Robotic Telescope",
    description:
      "The Ultrascope is an ARO (Automated Robotic Observatory) with two designs in the works, the Explorer, with a 3.5″ mirror, and the Odyssey, with an 8″ mirror",
    imageSrc: "/hobbies/telescope.png",
    imageAlt: "celestron telescope",
    imageClassName: "w-2/4",
    wrapperClassName: "my-4",
  },
  {
    title: "HomeLab",
    description:
      "small-scale environment meant to simulate different components of a business network.",
    imageSrc: "/hobbies/nas.png",
    imageAlt: "asus gaming router mesh supported",
    imageClassName: "w-full",
    wrapperClassName: "my-4",
  },
];

export function HobbiesSection() {
  return (
    <section id="hobbies">
      <div className="space-y-12 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center py-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Hands-On Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Hobbie Project&lsquo;s
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                from 3D printing & custom keyboards to cyberdecks & RAG apps, I
                love turning wild ideas into working prototypes
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {hobbies.map((hobby) => (
              <div
                key={hobby.title}
                className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-full h-auto lg:h-auto"
              >
                <h3 className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-semibold">
                  {hobby.title}
                </h3>
                <div className="text-base">
                  <span>{hobby.description}</span>
                </div>
                <div
                  className={`flex flex-1 w-full rounded-lg justify-center items-center ${
                    hobby.wrapperClassName ?? ""
                  }`}
                >
                  <img
                    src={hobby.imageSrc}
                    alt={hobby.imageAlt}
                    className={hobby.imageClassName ?? "w-full"}
                  />
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

