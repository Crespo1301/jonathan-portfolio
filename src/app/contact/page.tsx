import { SectionShell } from "@/components/section-shell";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <SectionShell
      eyebrow="Contact and intake"
      title="The contact route doubles as the content checklist until Jonathan's final contact details are ready."
      copy="Once his preferred email, links, and CTA are confirmed, this page can become a real outreach surface. For now it keeps the project organized."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="card-surface rounded-[24px] p-6">
          <h3 id="content-checklist" className="text-xl font-semibold">
            Content checklist
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
            {site.contentNeeds.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="card-surface rounded-[24px] p-6">
          <h3 className="text-xl font-semibold">Brief questions to answer before the design pass</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
            {site.intakeQuestions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </SectionShell>
  );
}
