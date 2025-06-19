import {json} from "@sveltejs/kit";

export function GET() {
    const content = {
        "@context": "https://www.w3.org/ns/activitystreams",
        "id": "https://getdigip.in/jugtej/outbox",
        "type": "OrderedCollection",
        "summary": "Just my outbox",
        "totalItems": 1,
        "orderedItems" : [
            {
                // "@context": "https://www.w3.org/ns/activitystreams",
                // "id": "https://getdigip.in/blog1.json",
                // "type": "Note",
                // "content": "The Gendered Lens of AI: Unpacking Bias in Language  ... html content",
                // "url": "https://getdigip.in/jugtej/blogs/blog1",
                // "attributedTo": "https://jugtej@getdigip.in",
                // "to": [
                //     "https://www.w3.org/ns/activitystreams#Public"
                // ],
                // "cc": [],
                // "published": "2024-02-18T21:06:38-08:00",
                // "tag": [
                //     {
                //         "Type": "Mention",
                //         "Href": "https://hachyderm.io/users/mapache",
                //         "Name": "@mapache@hachyderm.io"
                //     },
                //     {
                //         "Type": "Hashtag",
                //         "Href": "https://maho.dev/tags/ai",
                //         "Name": "#ai"
                //     },
                // ],
                "type": "Create",
                "actor": "https://getdigip.in/jugtej/actor",
                "object": {
                    "type": "Note",
                    "content": "This is my new post"
                }
            }
        ]
    }

    const response = new Response(JSON.stringify(content), {headers: {'Content-Type': 'application/json'}});

    return response;
}