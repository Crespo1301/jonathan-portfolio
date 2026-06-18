import { SectionShell } from "@/components/section-shell";
import { site } from "@/data/site";

export default function AboutPage() {
  return (
    <SectionShell
      eyebrow="About planning"
      title="The About page is waiting for Jonathan's actual voice, background, and goals."
      copy="This is the place for a short intro, a fuller personal story, values, strengths, and any career direction he wants public. Nothing here should be invented by us."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="placeholder-box rounded-[24px] p-6">
          <p className="text-sm font-semibold">Suggested image slot</p>
          <p className="mt-3 text-sm leading-6 text-muted">{site.placeholders.headshot}</p>
        </div>
        <div className="card-surface rounded-[24px] p-6">
          <h3 className="text-xl font-semibold">Recommended content inputs</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
            <li>Short bio, 60 to 90 words.</li>
            <li>Longer background story, 2 to 4 paragraphs.</li>
            <li>Core strengths or specialties he wants emphasized.</li>
            <li>What opportunities this site should attract first.</li>
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
