import { ReactNode } from "react";

type SectionShellProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  children?: ReactNode;
};

export function SectionShell({ eyebrow, title, copy, children }: SectionShellProps) {
  return (
    <section className="py-14 sm:py-18">
      <div className="shell">
        <div className="max-w-3xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {copy ? <p className="mt-4 copy-balance text-base leading-7 muted-copy sm:text-lg">{copy}</p> : null}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
