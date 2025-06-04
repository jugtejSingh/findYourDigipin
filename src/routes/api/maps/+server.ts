import { API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    const params = url.searchParams;
    const googleUrl = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&${params.toString()}`;

    const response = await fetch(googleUrl);
    const data = await response.text();

    return new Response(data, {
        headers: {
            'Content-Type': 'application/javascript'
        }
    });
}