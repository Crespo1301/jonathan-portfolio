import { SectionShell } from "@/components/section-shell";

const sampleSlots = [
  "Featured project or work sample",
  "Experience highlight with metric or result",
  "Case-study style proof block",
];

export default function WorkPage() {
  return (
    <SectionShell
      eyebrow="Work structure"
      title="This page is ready for proof, projects, or experience highlights once Jonathan chooses what should be public."
      copy="We have not guessed whether the site should lean toward sales, career growth, creative work, or a broader personal brand. The page structure stays flexible on purpose."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {sampleSlots.map((slot) => (
          <article key={slot} className="card-surface rounded-[24px] p-6">
            <div className="placeholder-box rounded-[18px] p-5">
              <p className="text-sm font-semibold text-foreground">{slot}</p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Add title, one-sentence summary, proof image or screenshot, and optional result number.
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
