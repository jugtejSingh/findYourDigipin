import {json} from "@sveltejs/kit";

export function GET() {
    const content = {
        "@context": "https://www.w3.org/ns/activitystreams",
        "id": "https://getdigip.in/jugtej/outbox",
        "type": "OrderedCollection",
        "summary": "Just my outbox",
        "totalItems": 24,
        "orderedItems" : [
            {
                "@context": "https://www.w3.org/ns/activitystreams",
                "id": "https://mastodon.example/users/bob#votes/827164/activity",
                "to": "https://mastodon.example/users/alice",
                "actor": "https://mastodon.example/users/bob",
                "type": "Create",
                "object": {
                    "id": "https://getdigip.in/jugtej/blogs/blog1",
                    "type": "Note",
                    "name": "banana",
                    "attributedTo": "https://mastodon.example/users/bob",
                    "to": "https://mastodon.example/users/alice",
                    "inReplyTo": "https://mastodon.example/users/alice/statuses/1009947848598745"
                }
            }
        ]
    }

    const response = new Response(JSON.stringify(content));

    return response;
}