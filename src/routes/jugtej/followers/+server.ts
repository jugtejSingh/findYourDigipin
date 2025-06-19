import {json} from "@sveltejs/kit";

export function GET() {
    const followers = {
        "@context": "https://www.w3.org/ns/activitystreams",
        "id": "https://getdigip.in/jugtej/followers",
        "type": "OrderedCollection",
        "totalItems": 1,
        "orderedItems": [
            "https://mastodon.social/users/jugtej",
        ]
    }

    const response = new Response(JSON.stringify(followers), {headers: {'Content-Type': 'application/activity+json'}});

    return response;
}