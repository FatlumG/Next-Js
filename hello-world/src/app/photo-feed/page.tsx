import Link from 'next/link';
import wonders from "./wonders";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-sm font-bold my-4">
        New Wonders of the World
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
        }}
      >
        {wonders.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full !h-[350px] object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
