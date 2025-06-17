import {json} from "@sveltejs/kit";

export function GET() {
    return json(
        {
            "@context": [
                "https://www.w3.org/ns/activitystreams",
                "https://w3id.org/security/v1"
            ],
            "id": "https://getdigip.in/jugtej",
            "type": "Person",
            "preferredUsername": "jugtej",
            "name": "Jugtej Singh",
            "summary": "Welcome to my website.",
            "url": "https://getdigip.in/",
            "published": "2000-01-01T00:00:00Z",
            "manuallyApprovesFollowers": true,
            "discoverable": true,
            "inbox": "https://getdigip.in/jugtej/inbox",
            "outbox": "https://getdigip.in/jugtej/outbox",
            "followers": "https://getdigip.in/jugtej/followers",
            "following": "https://getdigip.in/jugtej/following",
            "icon": {
                "type": "Image",
                "mediaType": "image/jpeg",
                "url": "https://getdigip.in/icon.jpg"
            },
            "image": {
                "type": "Image",
                "mediaType": "image/jpeg",
                "url": "https://getdigip.in/image.png"
            },
            "publicKey": {
                "id": "https://getdigip.in/jugtej#main-key",
                "owner": "https://getdigip.in/jugtej",
                "publicKeyPem": "-----BEGIN PUBLIC KEY-----\n...your key here...\n-----END PUBLIC KEY-----"
            }
        })
}