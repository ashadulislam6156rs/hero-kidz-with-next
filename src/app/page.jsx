import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black">
      <main className="max-w-7xl mx-auto px-5 py-2 min-h-screen bg-base-100">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
        <button className="btn btn-primary">Click</button>
      </main>
    </div>
  );
}
