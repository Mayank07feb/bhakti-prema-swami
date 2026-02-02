export async function GET() {
  return new Response(
    JSON.stringify([
      {
        id: 1,
        title: "Understanding Bhagavad Gita",
        excerpt: "An introduction to the philosophy of the Gita.",
        author: "A.C. Bhaktivedanta Swami",
        date: "1966-02-19",
      },
      {
        id: 2,
        title: "Karma Yoga Explained",
        excerpt: "How action without attachment leads to liberation.",
        author: "Ved Vyasa",
        date: "1970-05-12",
      },
      {
        id: 3,
        title: "Bhakti vs Jnana",
        excerpt: "Devotion or knowledge — which path is supreme?",
        author: "Srila Prabhupada",
        date: "1972-08-01",
      },
    ]),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
