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
                "to": [
                    "https://www.w3.org/ns/activitystreams#Public"
                ],
                "cc": [
                    "https://mastodon.social/users/jugtej"
                ],
                "object": "https://getdigip.in/jugtej/blogs/blog1/jsonFile"
            }
        ]
    };

    return new Response(JSON.stringify(content), {
        headers: {
            'Content-Type': 'application/activity+json'
        }
    });
}