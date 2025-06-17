import {json} from "@sveltejs/kit";

export function GET() {
    return json(
    {
        "@context": [
        "https://www.w3.org/ns/activitystreams",
        "https://w3id.org/security/v1"
    ],
        "id": "https://getdigip.in/blog",
        "type": "Person",
        "following": "https://mastodon.jgarr.net/following",
        "followers": "https://mastodon.jgarr.net/followers",
        "inbox": "https://mastodon.jgarr.net/inbox",
        "preferredUsername": "blog",
        "name": "Jugtej Singh",
        "summary": "Welcome to my website.",
        "url": "https://getdigip.in/blog",
        "manuallyApprovesFollowers": true,
        "discoverable": true,
        "published": "2000-01-01T00:00:00Z",

        "icon": {
        "type": "Image",
            "mediaType": "image/jpeg",
            "url": "https://mastodon.jgarr.net/icon.jpg"
    },
        "image": {
        "type": "Image",
            "mediaType": "image/jpeg",
            "url": "https://mastodon.jgarr.net/image.png"
    }
    })
}