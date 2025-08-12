export default async function Product({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const product = (await params).productId;
  return <h1>Page about product {product}</h1>;
}
