import { Metadata } from "next";
import { resolve } from "path";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${id}`);
    }, 1000);
  });

  return {
    title: `Product ${title}`,
  };
};

export default async function Product({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const product = (await params).productId;
  return <h1>Page about product {product}</h1>;
}
