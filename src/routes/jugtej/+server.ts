import {json} from "@sveltejs/kit";

export function GET() {
    const content = {
        "@context": "https://www.w3.org/ns/activitystreams",
        "id": "https://getdigip.in/jugtej",
        "type": "Person",
        "preferredUsername": "jugtej",
        "name": "Jugtej Singh2001",
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
            "publicKeyPem": "-----BEGIN PUBLIC KEY-----\n" +
                "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp6QUSxsV5bNBwlaAt1NK\n" +
                "j65hrMOrpZz4/ANDKBPMwka3kZaYXfkaVSoz9YeA/ipjEO/jdkn09Eg2uiCU0/7B\n" +
                "+S91uUbXn46iqD0stgsHqmkUSLx+ZeBA0pQGx6mJZaCF1GfxPcR3OpMfTb9psqxA\n" +
                "otkeCrdkKO47o0xWq9aqAY24P8qpgwUOslwd+YIrWIgS1/WIdnSjzOYgURmVY+sn\n" +
                "mOkJek8UKBOLJtRXcjQANIM/CayuYW7937/lBLeZnIOUKF0otlLZqBB5I3+gzQAs\n" +
                "VHG3wUK45oaQQ+YaP5F1cBWspqzUr2X2wuaNIQpLU18Oifg05fOPHYgDt+3AHw1R\n" +
                "aQIDAQAB\n" +
                "-----END PUBLIC KEY-----\n"
        },
        "attachment": [
            {
                "type": "PropertyValue",
                "name": "Blog",
                "value": "<a href=\"https://getdigip.in/jugtej\"><span>Hello</span></a>"
            },]
    }

    const response = new Response(JSON.stringify(content), {headers: {'Content-Type': 'application/activity+json'}});

    return response;
}