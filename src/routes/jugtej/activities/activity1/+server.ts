import { json } from "@sveltejs/kit";

export function GET() {
    const activity = {
        "@context": "https://www.w3.org/ns/activitystreams",
        "id": "https://getdigip.in/jugtej/activities/activity1",
        "type": "Create",
        "actor": "https://getdigip.in/jugtej/actor",
        "published": "2024-06-19T15:00:00Z",
        "to": [
            "https://www.w3.org/ns/activitystreams#Public"
        ],
        "cc": [
            "https://getdigip.in/jugtej/followers"
        ],
        "object": "https://getdigip.in/jugtej/blogs/blog1/jsonFile"
    };

    return new Response(JSON.stringify(activity), {
        headers: {
            'Content-Type': 'application/activity+json'
        }
    });
}