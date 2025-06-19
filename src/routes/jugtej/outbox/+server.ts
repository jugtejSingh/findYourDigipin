import { json } from "@sveltejs/kit";

export function GET() {
    const content = {
        "@context": "https://www.w3.org/ns/activitystreams",
        "id": "https://getdigip.in/jugtej/outbox",
        "type": "OrderedCollection",
        "totalItems": 1,
        "orderedItems": [
            {
                "id": "https://getdigip.in/jugtej/activities/activity1",
                "type": "Create",
                "actor": "https://getdigip.in/jugtej/actor",
                "published": "2024-01-01T00:00:00Z",
                "to": ["https://www.w3.org/ns/activitystreams#Public"],
                "cc": ["https://getdigip.in/jugtej/followers"],
                "object": {
                    "id": "https://getdigip.in/jugtej/blogs/blog1",
                    "type": "Note",
                    "attributedTo": "https://getdigip.in/jugtej/actor",
                    "content": "Your post content here",
                    "published": "2024-01-01T00:00:00Z",
                    "to": ["https://www.w3.org/ns/activitystreams#Public"],
                    "cc": ["https://getdigip.in/jugtej/followers"]
                }
            }
        ]
    }

    return new Response(JSON.stringify(content), {
        headers: {
            'Content-Type': 'application/activity+json'
        }
    });
}