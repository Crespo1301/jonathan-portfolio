import { Wheel } from "@/components/wheel";

type PlaceholderProps = {
  label: string;
  dims: string;
  className?: string;
};

// Intentional content-pending slot. Premium solid empty state (no dashed box),
// labeled with the ideal image dimensions to request from Jonathan.
export function Placeholder({ label, dims, className }: PlaceholderProps) {
  return (
    <div
      className={`group flex flex-col items-center justify-center gap-3 border border-line-strong bg-surface-strong p-6 text-center ${className ?? ""}`}
    >
      <Wheel className="h-6 w-6" />
      <span className="label">{label}</span>
      <span className="text-xs text-muted">{dims}</span>
    </div>
  );
}
