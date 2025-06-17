import {json} from "@sveltejs/kit";

export function GET() {
    return json({
        "@context": "https://www.w3.org/ns/activitystreams",
        "id": "https://getdigip.in/blog",
        "type": "Person",
        "following": "https://hachyderm.io/users/mapache/following",
        "followers": "https://hachyderm.io/users/mapache/followers",
        "inbox": "https://activitypubdotnet.azurewebsites.net/api/Inbox",
        "outbox": "https://maho.dev/socialweb/outbox",
        "preferredUsername": "blog",
        "name": "Maho Pacheco - Blog",
        "summary": "Bite-sized pieces of Software Engineering from a Garbage Code Connoisseur",
        "url": "https://maho.dev/",
        "discoverable": true,
        "memorial": false,
        "icon": {
            "type": "Image",
            "mediaType": "image/png",
            "url": "https://maho.dev/img/avatar.png"
        },
        "image": {
            "type": "Image",
            "mediaType": "image/png",
            "url": "https://maho.dev/img/avatar.png"
        },
        "publicKey": {
            "@context": "https://w3id.org/security/v1",
            "@type": "Key",
            "id": "https://maho.dev/@blog#main-key",
            "owner": "https://maho.dev/@blog",
            "publicKeyPem": "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA68oSTjzLryZ+lLIu8N5+\nCZdQPKaN6xZCY93uzJ8b4wjOecEykQcGU2J+ejOzMXHP4o4N+Rc0xnxyAs9ZN5AX\ndYSObpdfGQvrvdHanu+iTyRKETKMbSHtJzk5dZW8l+pPnX2YWKVgSfCG2SALZprg\nzxyhbtTLq8JoN8b5TgEA1B12Rya3aBNNXDT1/eeU+/HqwtKN2nLAdvACbccPAtg1\nVeKdcSgmS2o51JR4MjJWcCgM2HrAZUepF1XM59Yeq136QGviJpfAFX6gS7POvi7r\n3iaH0GzuUzR+WJSHgoJ65VzC9wy4Vpw/jt8CNtlW13iFRasHARTwFe+1FhuZayPG\neQIDAQAB\n-----END PUBLIC KEY-----"
        },
        "attachment": [
            {
                "type": "PropertyValue",
                "name": "Blog",
                "value": "<a href=\"https://maho.dev\" target=\"_blank\" rel=\"nofollow noopener noreferrer me\" translate=\"no\"><span class=\"invisible\">https://</span><span class=\"\">maho.dev</span><span class=\"invisible\"></span></a>"
            },
            {
                "type": "PropertyValue",
                "name": "LinkedIn",
                "value": "<a href=\"https://www.linkedin.com/in/mahomedalid\" target=\"_blank\" rel=\"nofollow noopener noreferrer me\" translate=\"no\"><span class=\"invisible\">https://www.</span><span class=\"\">linkedin.com/in/mahomedalid</span><span class =\"invisible\"></span></a>"
},
    {
        "type": "PropertyValue",
        "name": "GitHub",
        "value": "<a href=\"https://github.com/mahomedalid\" target=\"_blank\" rel=\"nofollow noopener noreferrer me\" translate=\"no\"><span class=\"invisible\">https://</span><span class=\"\">github.com/mahomedalid</span><span class=\"invisible\"></span></a>"
    }
]
    })
}