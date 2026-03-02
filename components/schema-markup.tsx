import type { JsonLd } from "@/lib/schema";

interface SchemaMarkupProps {
    schemas: JsonLd[];
}

/**
 * Renders one or more JSON-LD structured data blocks inside <script> tags.
 * Place this component at the top of any page component to inject schemas
 * into the <head> (Next.js automatically hoists <script> tags from page
 * components into the document head).
 */
export function SchemaMarkup({ schemas }: SchemaMarkupProps) {
    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}
