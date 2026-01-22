import { BlurFade } from "@/components/magicui/blur-fade";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { BLUR_FADE_DELAY } from "./constants";

export function CLIToolsSection() {
  return (
    <section id="cli-tools">
      <div className="space-y-12 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center py-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                CLI
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My CLI Tools 
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                building powerful CLI tools to automate workflows & enhance
                developer productivity.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full px-4">
            <Terminal className="w-full max-w-full">
              <TypingAnimation>
                &gt; npm install -g @muqeeth/cli-toolkit
              </TypingAnimation>

              <AnimatedSpan className="text-green-500">
                ✔ Resolving packages
              </AnimatedSpan>

              <AnimatedSpan className="text-green-500">
                ✔ Downloading core modules
              </AnimatedSpan>

              <AnimatedSpan className="text-green-500">
                ✔ Linking binaries
              </AnimatedSpan>

              <AnimatedSpan className="text-green-500">
                ✔ Installation complete
              </AnimatedSpan>

              <TypingAnimation className="text-blue-500">
                &gt; rag-scan ./docs
              </TypingAnimation>

              <AnimatedSpan className="text-green-500">
                ✔ Indexed 1,248 chunks
              </AnimatedSpan>

              <AnimatedSpan className="text-yellow-500">
                ⚠ Found 32 duplicate embeddings
              </AnimatedSpan>

              <AnimatedSpan className="text-red-500">
                ✖ 5 chunks missing metadata
              </AnimatedSpan>

              <AnimatedSpan className="text-blue-500">
                ℹ Hallucination risk score: 0.21 (LOW)
              </AnimatedSpan>

              <TypingAnimation className="text-blue-500">
                &gt; agentctl trace run.json
              </TypingAnimation>

              <AnimatedSpan className="text-green-500">
                ✔ Loaded agent execution trace
              </AnimatedSpan>

              <AnimatedSpan className="text-muted-foreground">
                → Tool call: web.search
              </AnimatedSpan>

              <AnimatedSpan className="text-muted-foreground">
                → Tool call: vector.query
              </AnimatedSpan>

              <AnimatedSpan className="text-yellow-500">
                ⚠ Prompt token spike detected (+38%)
              </AnimatedSpan>

              <TypingAnimation className="text-blue-500">
                &gt; webbrain crawl openai.com
              </TypingAnimation>

              <AnimatedSpan className="text-green-500">
                ✔ Discovered 214 entities
              </AnimatedSpan>

              <AnimatedSpan className="text-green-500">
                ✔ Built knowledge graph
              </AnimatedSpan>

              <AnimatedSpan className="text-blue-500">
                ℹ Exported graph.json & embeddings
              </AnimatedSpan>

              <TypingAnimation className="text-blue-500">
                &gt; mission-plan area.geojson --optimize battery
              </TypingAnimation>

              <AnimatedSpan className="text-green-500">
                ✔ Generated optimal flight path
              </AnimatedSpan>

              <AnimatedSpan className="text-green-500">
                ✔ Estimated mission time: 14m 32s
              </AnimatedSpan>

              <AnimatedSpan className="text-muted-foreground">
                → Risk zones avoided: 3
              </AnimatedSpan>

              <TypingAnimation className="text-muted-foreground">
                All systems operational 🚀
              </TypingAnimation>

              <TypingAnimation className="text-muted-foreground">
                Built by Muqeeth (Sammy) — curious builder & AI engineer.
              </TypingAnimation>
            </Terminal>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
