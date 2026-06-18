import { SectionShell } from "@/components/section-shell";

export default function ResumePage() {
  return (
    <SectionShell
      eyebrow="Resume and experience"
      title="Resume, timeline, and skills will land here once Jonathan confirms what should be visible."
      copy="This route gives us a clean place for a downloadable resume, experience timeline, skill groups, and contact-ready proof points without forcing them into the homepage."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card-surface rounded-[24px] p-6">
          <h3 className="text-lg font-semibold">Suggested public items</h3>
          <p className="mt-3 text-sm leading-6 text-muted">
            Resume PDF, current role, prior roles, certifications, selected achievements, and a shortlist of tools or strengths.
          </p>
        </div>
        <div className="card-surface rounded-[24px] p-6">
          <h3 className="text-lg font-semibold">Optional private items</h3>
          <p className="mt-3 text-sm leading-6 text-muted">
            Exact dates, employer details, compensation-sensitive metrics, or anything Jonathan wants kept off the public site.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
