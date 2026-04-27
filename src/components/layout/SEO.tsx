import React from 'react';

export const SEO = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Textglow",
        "operatingSystem": "Chrome, Edge, Brave",
        "applicationCategory": "WritingAssistant",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1250"
        },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "highPrice": "39",
            "lowPrice": "0",
            "offerCount": "2"
        },
        "description": "The tailored AI writing assistant for Chrome. Instantly polish, rewrite, and fix grammar in emails, chats, and docs without copy-pasting.",
        "author": {
            "@type": "Organization",
            "name": "Textglow",
            "url": "https://textglow.io"
        }
    };

    return (
        <script type="application/ld+json">
            {JSON.stringify(schemaData)}
        </script>
    );
};
