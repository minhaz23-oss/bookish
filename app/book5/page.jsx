import Image from "next/image";
import Link from 'next/link';
import productImg from "@/public/product5.jpg";

const page = () => {
  return (
    <main className="w-full mt-10 pb-10">
      <div className="flex flex-col md:flex-row flex-center gap-5 md:gap-10">
        <div className="w-[250px] float-right">
          <Image src={productImg} className="rounded-[8px] mb-4" />
          <Link href= 'https://amzn.to/49t2ldy' className=" primary-btn px-5 py-2 rounded-[5px] mt-2">
            Buy it from amazon
          </Link>
        </div>
        <div className="w-full">
          <div className="w-full min-h-[80px] bg-violet/[60%] flex items-center justify-between p-4 rounded-[10px] flex-wrap">
            <h1 className="font-bold text-[20px] sm:text-[25px] lg:text-[30px] uppercase leading-none">
              The 7 Habits of Highly Effective People
            </h1>
            <p className="min-w-[100px] px-2 text-[16px] sm:text-[18px] bg-white text-violet rounded-[3px] flex flex-center mt-1">
              Stephen R. Covey
            </p>
          </div>
          <p className="mt-2">
            Are you looking to enhance your personal and professional
            effectiveness? "The 7 Habits of Highly Effective People" by Stephen
            R. Covey provides a comprehensive framework for achieving success
            and fulfillment in all areas of life. This timeless classic offers
            practical insights and actionable advice that have empowered
            millions of readers worldwide.
          </p>
          <h1 className="text-[20px] font-bold mt-3">
            About the Author: Stephen R. Covey
          </h1>
          <p className="mt-1">
            Stephen R. Covey was a renowned author, educator, and leadership
            expert. With decades of experience in personal development and
            organizational effectiveness, Covey's teachings continue to
            inspire individuals and businesses to achieve greatness and live
            with purpose.
          </p>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-[20px] font-bold mt-3">
          Why You Should Buy This Book:
        </h1>
        <p className="mt-1">
          "The 7 Habits of Highly Effective People" offers a roadmap to
          personal and professional success. By adopting the seven timeless
          habits outlined in this book, you can transform your life and achieve
          your goals with greater efficiency and effectiveness.
        </p>
        <h1 className="text-[20px] font-bold mt-3">What the Book is About:</h1>
        <p className="mt-1">
          At its core, "The 7 Habits of Highly Effective People" explores the
          principles of personal and interpersonal effectiveness. Covey
          introduces a holistic approach to self-improvement, focusing on
          principles such as proactivity, prioritization, and synergy to
          cultivate lasting success and fulfillment.
        </p>
        <h1 className="text-[20px] font-bold mt-3">
          Benefits of Buying This Book:
        </h1>
        <p className="mt-1">
          By investing in "The 7 Habits of Highly Effective People," you're
          investing in your personal and professional growth. Here are just a
          few of the benefits you'll gain from reading this transformative
          book:
        </p>
        <ol>
          <li>
            1.{" "} <span className="font-bold mr-1">Personal Development:</span> Learn
            proven strategies for enhancing your effectiveness and achieving
            your goals with greater clarity and purpose.
          </li>
          <li>
            2.{" "} <span className="font-bold mr-1">Leadership Skills:</span> Develop
            essential leadership skills and learn how to inspire and empower
            others to achieve their full potential.
          </li>
          <li>
            3.{" "} <span className="font-bold mr-1">Effective Communication:</span> Improve
            your communication skills and build stronger relationships both
            personally and professionally.
          </li>
          <li>
            4.{" "} <span className="font-bold mr-1">Time Management:</span> Master the art
            of time management and productivity to maximize your efficiency
            and effectiveness in all areas of life.
          </li>
          <li>
            5.{" "} <span className="font-bold mr-1">Personal Fulfillment:</span> Experience
            greater fulfillment and satisfaction as you align your actions with
            your values and goals.
          </li>
        </ol>

        <h1 className="text-[20px] font-bold mt-3">Conclusion:</h1>
        <p className="mt-1">
          In conclusion, "The 7 Habits of Highly Effective People" is a
          timeless guide to personal and professional effectiveness. With its
          practical wisdom and actionable advice, this book has the power to
          transform your habits, mindset, and ultimately, your life. So, why
          wait? Dive into "The 7 Habits of Highly Effective People" today and
          unlock your full potential.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <button className="secondary-btn w-[250px] py-2 rounded-[8px] mt-3">
          Buy it from Amazon
        </button>
      </div>
    </main>
  );
};

export default page;

