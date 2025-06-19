import {json} from "@sveltejs/kit";

export function GET() {
    const content = {
        "@context": "https://www.w3.org/ns/activitystreams",
        "id": "https://getdigip.in/jugtej/outbox",
        "type": "OrderedCollection",
        "summary": "Bite-sized pieces of Software Engineering from a Garbage Code Connoisseur by Maho Pacheco",
        "totalItems": 24,
    }

    const response = new Response(JSON.stringify(content));

    return response;
}