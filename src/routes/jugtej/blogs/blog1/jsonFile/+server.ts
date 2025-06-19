import { json } from "@sveltejs/kit";

export function GET() {
  const post = {
    "@context": "https://www.w3.org/ns/activitystreams",
    "id": "ttps://getdigip.in/jugtej/blogs/blog1/jsonFile",
    "type": "Note",
    "attributedTo": "https://getdigip.in/jugtej/actor",  // Fixed: added https://
    "content": "Hello, fediverse! This is my first post. 👋",
    "published": "2024-06-19T15:00:00Z",
    "to": [
      "https://www.w3.org/ns/activitystreams#Public"
    ],
    "cc": [
      "https://getdigip.in/jugtej/followers"
    ],
    "replies": {
      "id": "https://getdigip.in/jugtej/blogs/blog1/jsonFile/replies",
      "type": "Collection",
      "totalItems": 0
    }
  };

  return new Response(JSON.stringify(post), {
    headers: {
      'Content-Type': 'application/activity+json'
    }
  });
}