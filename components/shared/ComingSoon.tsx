import { Construction } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { sectionTitleClass } from "@/lib/typography";

interface ComingSoonProps {
  title: string;
  description: string;
}

export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-600">
        <Construction className="h-8 w-8" />
      </span>
      <div className="space-y-3">
        <h1 className={`text-foreground ${sectionTitleClass}`}>
          {title}
        </h1>
        <p className="mx-auto max-w-md text-body-text">{description}</p>
      </div>
      <Button href="/">Back to home</Button>
    </Container>
  );
}
