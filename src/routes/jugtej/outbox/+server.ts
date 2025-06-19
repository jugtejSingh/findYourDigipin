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
                "published": new Date().toISOString(),
                "to": [
                    "https://www.w3.org/ns/activitystreams#Public"
                ],
                "cc": [
                    "https://mastodon.social/@jugtej"
                ],
                "object": {
                    "id": "https://getdigip.in/jugtej/blogs/blog1/jsonFile",
                    "type": "Note",
                    "attributedTo": "https://getdigip.in/jugtej/actor",
                    "content": "Hello, fediverse! This is my first post. 👋",
                    "published": new Date().toISOString(),
                    "to": [
                        "https://www.w3.org/ns/activitystreams#Public"
                    ],
                    "cc": [
                        "https://mastodon.social/@jugtej"
                    ],
                    "url": "https://getdigip.in/jugtej/blogs/blog1/jsonFile",
                    "sensitive": false,
                    "atomUri": "https://getdigip.in/jugtej/blogs/blog1/jsonFile",
                    "replies": {
                        "id": "https://getdigip.in/jugtej/blogs/blog1/jsonFile/replies",
                        "type": "Collection",
                        "first": {
                            "type": "CollectionPage",
                            "items": []
                        }
                    }
                }
            }
        ]
    };


    return new Response(JSON.stringify(content), {
        headers: {
            'Content-Type': 'application/activity+json'
        }
    });
}