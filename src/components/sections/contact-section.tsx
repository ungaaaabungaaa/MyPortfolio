import { BlurFade } from "@/components/magicui/blur-fade";
import { CalPopup } from "@/components/cal";
import Link from "next/link";
import { BLUR_FADE_DELAY } from "./constants";

type ContactSectionProps = {
  emailUrl: string;
};

export function ContactSection({ emailUrl }: ContactSectionProps) {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me a dm{" "}
              <Link href={emailUrl} className="text-blue-500 hover:underline">
                with a direct question on Email
              </Link>{" "}
              and I&apos;ll reply when I can—assuming it&apos;s not something I
              didn&apos;t ask for
            </p>
            <br />
            <CalPopup />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

