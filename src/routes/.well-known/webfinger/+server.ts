import {json} from "@sveltejs/kit";

export function GET({ url }: { url: string }) {
    return json({
        "subject": "acct:blog@getdigip.in",
        "aliases": [
        "https://getdigip.in/blog"
    ],
        "links": [
        {
            "rel": "self",
            "type": "application/activity+json",
            "href": "https://getdigip.in/blog"
        },
        {
            "rel":"http://webfinger.net/rel/profile-page",
            "type":"text/html",
            "href":"https://getdigip.in/blog"
        }
    ]
    })
}