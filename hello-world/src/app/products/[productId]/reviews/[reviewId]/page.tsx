export default async function Review({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const product = (await params).productId;
  const review = (await params).reviewId;

  return (
    <h1>
      Review {review} for product {product}!
    </h1>
  );
}
