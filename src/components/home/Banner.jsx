import Image from "next/image";
import React from "react";
import Link from "next/link";
import { fontBangla } from "@/app/layout";

const Banner = () => {
  return (
    <section className="bg-base-100">
      <div className=" py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className={`${fontBangla.className}`}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            ভালোবাসা ও যত্নে গড়ে তুলি 
            <span className="text-primary"> আগামীর প্রজন্ম</span>
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            শিশুদের জন্য একটি নিরাপদ, আনন্দময় ও শিক্ষাবান্ধব পরিবেশ— যেখানে তারা
            শেখে, আবিষ্কার করে এবং আত্মবিশ্বাসের সাথে এগিয়ে যায়।
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="/admission" className="btn btn-primary">
              Get Started
            </Link>
            <Link href="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>

        {/* Banner Image */}
        <div className="flex justify-center">
          <Image
            src="/assets/hero.png"
            alt="Kids learning happily"
            width={500}
            height={500}
            priority
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
