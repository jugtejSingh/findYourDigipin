import {json} from "@sveltejs/kit";

export function GET() {
    const content = {
        "@context": "https://www.w3.org/ns/activitystreams",
        "id": "https://maho.dev/socialweb/outbox",
        "type": "OrderedCollection",
        "summary": "Bite-sized pieces of Software Engineering from a Garbage Code Connoisseur by Maho Pacheco",
        "totalItems": 24,
        "orderedItems": [
            {
                "@context": "https://www.w3.org/ns/activitystreams",
                "id": "https://maho.dev/socialweb/notes/1dff22b5faf3fbebc5aaf2bb5b5dbe2c",
                "type": "Note",
                "content": "The Gendered Lens of AI: Unpacking Bias in Language  ... html content",
                "url": "https://maho.dev/2024/02/the-gendered-lens-of-ai-unpacking-bias-in-language-models/",
                "attributedTo": "https://maho.dev/@blog",
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
                "replies": {
                    "id": "https://maho.dev/socialweb/replies/1dff22b5faf3fbebc5aaf2bb5b5dbe2c",
                    "type": "Collection",
                    "first": {
                        "type": "CollectionPage",
                        "next": "https://maho.dev/socialweb/replies/1dff22b5faf3fbebc5aaf2bb5b5dbe2c?page=true",
                        "partOf": "https://maho.dev/socialweb/replies/1dff22b5faf3fbebc5aaf2bb5b5dbe2c",
                        "items": []
                    }
                }
            }
        ]
    }

    const response = new Response(JSON.stringify(content), {headers: {'Content-Type': 'application/activity+json'}});

    return response;
}