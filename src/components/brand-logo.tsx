import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  title?: string;
};

export function BrandLogo({
  className,
  title = "Uday Ahire layout mark",
}: BrandLogoProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      role="img"
      aria-label={title}
      className={cn("size-10", className)}
    >
      <rect
        x="10"
        y="10"
        width="76"
        height="76"
        rx="24"
        fill="currentColor"
        opacity="0.04"
      />
      <rect
        x="24"
        y="24"
        width="14"
        height="48"
        rx="7"
        fill="currentColor"
      />
      <rect
        x="46"
        y="24"
        width="26"
        height="12"
        rx="6"
        fill="currentColor"
      />
      <path
        d="M54 40H64C68.418 40 72 43.582 72 48V55.5C72 57.091 71.526 58.646 70.638 59.966L62.12 72H54C49.582 72 46 68.418 46 64V48C46 43.582 49.582 40 54 40Z"
        fill="currentColor"
      />
    </svg>
  );
}
