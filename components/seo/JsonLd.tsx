type JsonLdProps = {
  data: Record<string, unknown>;
};

/** Renders a single JSON-LD script block (homepage and other routes). */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
