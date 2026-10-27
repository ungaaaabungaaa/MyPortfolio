import { BlurFade } from "@/components/magicui/blur-fade";
import { Terminal } from "@/components/ui/terminal";
import { BLUR_FADE_DELAY } from "./constants";
import styles from "./cli-tools-section.module.css";

export function CLIToolsSection() {
  return (
    <section id="cli-tools" aria-labelledby="cli-tool-heading">
      <div className="space-y-8 w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center py-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Qeth · v0.1.0
              </div>
              <h2 id="cli-tool-heading" className="text-3xl font-bold tracking-tighter sm:text-5xl">
                My CLI Tool
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                One CLI for local RAG checks, agent traces, bounded crawling,
                and offline survey routes.
              </p>
            </div>
          </div>
          <div className="space-y-4 w-full px-4">
            <Terminal sequence={false} className={`w-full max-w-full ${styles.terminal}`}>
              <span className="text-muted-foreground">
                # Install with npm. Requires Node.js 22.18 or newer.
              </span>
              <span className="text-green-500">
                npm install -g @ungaaaabungaaa/qeth
              </span>
              <span className="mt-2 text-muted-foreground">
                # Or install with Homebrew.
              </span>
              <span className="text-green-500">
                brew install ungaaaabungaaa/tap/qeth
              </span>
              <span className="mt-2 text-muted-foreground">
                # See available commands and options.
              </span>
              <span className="text-blue-500">qeth --help</span>
              <span className="mt-2 text-muted-foreground">
                # 1. Check local documents or chunk JSON for duplicates and missing fields.
              </span>
              <span className="text-blue-500">
                qeth rag scan ./docs --json
              </span>
              <span className="mt-2 text-muted-foreground">
                # 2. Summarize timings, errors, tokens, and supplied costs in a saved trace.
              </span>
              <span className="text-blue-500">
                qeth trace ./run.json --json
              </span>
              <span className="mt-2 text-muted-foreground">
                # 3. Crawl one site with page/depth limits and robots.txt checks.
              </span>
              <span className="text-blue-500">
                qeth crawl https://example.com --max-pages 5 --max-depth 1 --json
              </span>
              <span className="mt-2 text-muted-foreground">
                # 4. Plan an offline survey route from a GeoJSON polygon.
              </span>
              <span className="text-blue-500">
                qeth mission plan ./area.geojson --spacing 20 --speed 5 --json
              </span>
              <span className="mt-2 text-muted-foreground">
                # Reports print to the terminal. Add --out to save a new JSON file.
              </span>
              <span className="text-blue-500">
                qeth trace ./run.json --json --out ./trace-report.json
              </span>
            </Terminal>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <a
                href="https://github.com/ungaaaabungaaa/qeth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-md px-2 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                GitHub &amp; documentation
              </a>
              <a
                href="https://www.npmjs.com/package/@ungaaaabungaaa/qeth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-md px-2 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                npm package
              </a>
              <a
                href="https://github.com/ungaaaabungaaa/homebrew-tap#install-qeth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-md px-2 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                Homebrew
              </a>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
