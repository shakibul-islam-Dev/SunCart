import Image from "next/image";

export default function Products({ items }) {
  const { image, name, rating, price } = items;
  return (
    <div>
      <Image src={image} alt={name} width={500} height={500} />
      <h1>{name}</h1>
      <h1>{rating}</h1>
      <h1>{price}</h1>
      <button>ViewDetails</button>
    </div>
  );
}
//   {
//     "id": 1,
//     "name": "Elite UV Aviators",
//     "brand": "SunShade",
//     "price": 30,
//     "discountPrice": 15,
//     "discountPercent": 50,
//     "rating": 4.9,
//     "stock": 12,
//     "isHot": true,
//     "description": "Premium polarized lenses with lightweight frames.",
//     "image": "https://images.unsplash.com/photo-1511499767390-903390e62bc0?q=80&w=800&auto=format&fit=crop",
//     "category": "Sunglasses"
//   },
