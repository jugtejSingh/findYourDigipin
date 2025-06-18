import {json} from "@sveltejs/kit";

export function GET() {
    const content = {
        "@context": "https://www.w3.org/ns/activitystreams",
        "id": "https://getdigip.in/jugtej/outbox",
        "type": "OrderedCollection",
        "summary": "Bite-sized pieces of Software Engineering from a Garbage Code Connoisseur by Maho Pacheco",
        "totalItems": 24,
        "orderedItems": [
            {
                "@context": "https://www.w3.org/ns/activitystreams",
                "id": "https://getdigip.in/jugtej/blogs/blog1",
                "type": "Note",
                "content": "The Gendered Lens of AI: Unpacking Bias in Language  ... html content",
                "url": "https://maho.dev/2024/02/the-gendered-lens-of-ai-unpacking-bias-in-language-models/",
                "attributedTo": "https://getdigip.in/jugtej/actor",
                "to": [
                    "https://www.w3.org/ns/activitystreams#Public"
                ],
                "cc": [],
                "published": "2024-02-18T21:06:38-08:00",
                "tag": [
                    {
                        "Type": "Mention",
                        "Href": "https://hachyderm.io/users/mapache",
                        "Name": "@mapache@hachyderm.io"
                    },
                    {
                        "Type": "Hashtag",
                        "Href": "https://maho.dev/tags/ai",
                        "Name": "#ai"
                    },
                ],
            }
        ]
    }

    const response = new Response(JSON.stringify(content), {headers: {'Content-Type': 'application/activity+json'}});

    return response;
}