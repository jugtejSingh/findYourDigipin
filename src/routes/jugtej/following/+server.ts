// @ts-ignore
export function GET({ params, url }) {
    const username = params.username;
    const page = url.searchParams.get('page');

    if (!page) {
        // Return the collection summary
        const following = {
            "@context": "https://www.w3.org/ns/activitystreams",
            "id": `https://getdigip.in/${username}/following`,
            "type": "OrderedCollection",
            "totalItems": 1,
            "orderedItems": [
                "https://mastodon.social/users/jugtej",
            ]
        };

        return new Response(JSON.stringify(following), {
            headers: {
                'Content-Type': 'application/activity+json'
            }
        });
    }
}