import Link from "next/link";
import { FaHome, FaSearch } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

const Error_404 = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-base-100">
      {/* Icon */}
      <div className="text-primary text-7xl mb-4">
        <MdErrorOutline />
      </div>

      {/* Text */}
      <h1 className="text-6xl font-extrabold text-primary">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mt-4">
        পেজটি খুঁজে পাওয়া যায়নি
      </h2>

      <p className="mt-4 text-gray-600 max-w-xl">
        দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে, নাম পরিবর্তন
        হয়েছে অথবা বর্তমানে উপলব্ধ নয়।
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn btn-primary gap-2">
          <FaHome /> Back To Home
        </Link>

        <Link href="/products" className="btn btn-outline gap-2">
          <FaSearch /> প্রোডাক্ট দেখুন
        </Link>
      </div>

      {/* Footer text */}
      <p className="mt-10 text-sm text-gray-400">
        Hero Kidz © {new Date().getFullYear()} — Learn with Joy 💛
      </p>
    </section>
  );
};

export default Error_404;
