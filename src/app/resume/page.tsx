import { SectionShell } from "@/components/section-shell";
import { Wheel } from "@/components/wheel";
import { site } from "@/data/site";

export default function ExperiencePage() {
  return (
    <SectionShell index="01" title={site.experience.statement} copy={site.experience.credibility}>
      <h3 className="h3">What he does</h3>
      <div className="mt-5 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
        {site.experience.skills.map((skill) => (
          <div
            key={skill}
            className="group flex items-center gap-3 bg-background p-5 text-base text-foreground"
          >
            <Wheel className="h-4 w-4" />
            {skill}
          </div>
        ))}
      </div>

      <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-5 border-t border-line-strong pt-6">
        <div>
          <dt className="label">Experience</dt>
          <dd className="mt-1 text-base text-foreground">{site.tenure}</dd>
        </div>
        <div>
          <dt className="label">Based in</dt>
          <dd className="mt-1 text-base text-foreground">{site.location}</dd>
        </div>
        <div>
          <dt className="label">Focus</dt>
          <dd className="mt-1 text-base text-foreground">{site.focus}</dd>
        </div>
      </dl>
    </SectionShell>
  );
}
