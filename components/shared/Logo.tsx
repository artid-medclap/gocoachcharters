import Link from "next/link";
import Image from "next/image";
import { siteMedia } from "@/lib/site-media";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export function Logo({ className, inverted = false }: LogoProps) {
  return (
    <Link
      href="/#top"
      className={cn(
        "flex items-center gap-3 text-lg font-bold tracking-tight",
        inverted ? "text-white" : "text-foreground"
      )}
    >
      <Image
        src={siteMedia.brand.logo}
        height={200}
        width={200}
        alt="GoCoach Charters"
        className={cn("h-12 w-auto object-contain", className)}
      />
    </Link>
  );
}
