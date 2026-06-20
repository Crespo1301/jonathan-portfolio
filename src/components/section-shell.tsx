import { ReactNode } from "react";

type SectionShellProps = {
  index?: string;
  title: string;
  copy?: string;
  children?: ReactNode;
  bordered?: boolean;
};

export function SectionShell({
  index,
  title,
  copy,
  children,
  bordered = true,
}: SectionShellProps) {
  return (
    <section className={bordered ? "border-t border-border" : undefined}>
      <div className="shell py-16 sm:py-24">
        <div className="grid gap-6 md:grid-cols-[5rem_1fr] md:gap-10">
          {index ? (
            <div className="index pt-1 md:pt-2">{index}</div>
          ) : (
            <div className="hidden md:block" />
          )}
          <div>
            <h2 className="h2 measure">{title}</h2>
            {copy ? <p className="lead measure mt-5">{copy}</p> : null}
          </div>
        </div>
        {children ? (
          <div className="mt-12 md:grid md:grid-cols-[5rem_1fr] md:gap-10">
            <div className="hidden md:block" />
            <div>{children}</div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
