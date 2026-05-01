export async function getProductsData() {
  const res = await fetch("https://suncart-omega.vercel.app/data.json");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
