import {json} from "@sveltejs/kit";

export function GET() {
    return json({
        "subject": "acct:jugtej@getdigip.in",
        "aliases": [
            "https://getdigip.in/jugtej/actor"
        ],
        "links": [
            {
                "rel": "self",
                "type": "application/activity+json",
                "href": "https://getdigip.in/jugtej/actor"
            },
            {
                "rel":"http://webfinger.net/rel/profile-page",
                "type":"text/html",
                "href":"https://getdigip.in/jugtej"
            }
        ]
    })
}