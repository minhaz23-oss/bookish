import Image from "next/image";
import Link from 'next/link'
import productImg from "@/public/product2.jpg";

const page = () => {
  return (
    <main className="w-full mt-10 pb-10">
      <div className="flex flex-col md:flex-row flex-center gap-5 md:gap-10">
        <div className="w-[250px] float-right">
          <Image src={productImg} className="rounded-[8px] mb-4" />
          <Link href= 'https://amzn.to/3PUdSeP' className=" primary-btn px-5 py-2 rounded-[5px] mt-2">
            Buy it from amazon
          </Link>
        </div>
        <div className="w-full">
          <div className="w-full min-h-[80px] bg-violet/[60%] flex items-center justify-between p-4 rounded-[10px] flex-wrap">
            <h1 className="font-bold text-[20px] sm:text-[25px] lg:text-[30px] uppercase leading-none">
              The Psychology of Money
            </h1>
            <p className="min-w-[100px] px-2 text-[16px] sm:text-[18px] bg-white text-violet rounded-[3px] flex flex-center mt-1">
            Morgan Housel
            </p>
          </div>
          <p className="mt-2">
            Are you struggling to make sense of your financial decisions and
            behaviors? Dive into "The Psychology of Money" and unlock the
            secrets to mastering your relationship with wealth. This eye-opening
            book explores the psychological factors that influence our financial
            choices, offering invaluable insights for building long-term wealth
            and security.
          </p>
          <h1 className="text-[20px] font-bold mt-3">
            About the Author: Morgan Housel
          </h1>
          <p className="mt-1">
            Before delving into the book's content, let's get acquainted with
            the brilliant mind behind it. Morgan Housel, a renowned expert in
            finance and psychology, brings a wealth of knowledge and experience
            to the table. With a keen understanding of human behavior and its
            impact on financial decision-making, they offer practical strategies
            for achieving financial success and security.
          </p>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-[20px] font-bold mt-3">
          Why You Should Buy This Book:
        </h1>
        <p className="mt-1">
          "The Psychology of Money" isn't just another book about finances –
          it's a roadmap to financial empowerment and freedom. By unraveling the
          psychological underpinnings of money management, this book empowers
          readers to make informed decisions and take control of their financial
          futures.
        </p>
        <h1 className="text-[20px] font-bold mt-3">What the Book is About:</h1>
        <p className="mt-1">
          At its core, "The Psychology of Money" delves into the intricate
          relationship between psychology and financial decision-making. Through
          compelling narratives and insightful analysis, the author sheds light
          on the hidden drivers behind our monetary choices, offering readers a
          deeper understanding of their own financial behaviors.
        </p>
        <h1 className="text-[20px] font-bold mt-3">
          Benefits of Buying This Book:
        </h1>
        <p className="mt-1">
          By investing in "The Psychology of Money," you're investing in your
          financial well-being and future prosperity. Here are just a few of the
          benefits you'll gain from reading this enlightening book:
        </p>
        <ol>
          <li>
            1. <span className="font-bold mr-1">Financial Wisdom:</span> Gain
            valuable insights into the psychological factors that influence
            financial decision-making, enabling you to make smarter choices with
            your money.
          </li>
          <li>
            2. <span className="font-bold mr-1">Wealth Building:</span> Learn
            practical strategies for building long-term wealth and financial
            security, tailored to your individual psychology and behavior.
          </li>
          <li>
            3. <span className="font-bold mr-1">Money Mindset:</span> Transform
            your relationship with money and cultivate a healthier mindset
            towards wealth and abundance.
          </li>
          <li>
            4. <span className="font-bold mr-1">Financial Freedom:</span>{" "}
            Discover how to break free from limiting beliefs and behaviors that
            may be holding you back from achieving your financial goals.
          </li>
          <li>
            5. <span className="font-bold mr-1">Empowerment:</span> Feel
            empowered to take control of your financial future and create the
            life of abundance you deserve.
          </li>
        </ol>

        <h1 className="text-[20px] font-bold mt-3">Conclusion:</h1>
        <p className="mt-1">
          In conclusion, "The Psychology of Money" offers a unique perspective
          on wealth and financial well-being, blending insights from psychology
          and finance to empower readers to make smarter decisions and achieve
          lasting prosperity. With its practical wisdom and actionable advice,
          this book has the power to transform your relationship with money and
          set you on the path to financial freedom. So, why wait? Dive into "The
          Psychology of Money" today and take control of your financial destiny.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <button className="secondary-btn w-[250px] py-2 rounded-[8px] mt-3">
          Buy it from amazon
        </button>
      </div>
    </main>
  );
};

export default page;
