export async function getProductsData() {
  // লোকাল এবং প্রোডাকশন ইউআরএল অটোমেটিক হ্যান্ডেল করার জন্য
  const baseUrl = process.env.BETTER_AUTH_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/data.json`, {
      cache: "no-store", // লেটেস্ট ডেটা পাওয়ার জন্য এটি ব্যবহার করা ভালো
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // এরর হলে খালি অ্যারে রিটার্ন করা নিরাপদ
  }
}
