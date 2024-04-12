import Image from "next/image";
import Link from 'next/link'
import productImg from "@/public/product4.jpg";

const page = () => {
  return (
    <main className="w-full mt-10 pb-10">
      <div className="flex flex-col md:flex-row flex-center gap-5 md:gap-10">
        <div className="w-[250px] float-right">
          <Image src={productImg} className="rounded-[8px] mb-4" />
          <Link href= 'https://amzn.to/3Jggn7O' className=" primary-btn px-5 py-2 rounded-[5px] mt-2">
            Buy it from amazon
          </Link>
        </div>
        <div className="w-full">
          <div className="w-full min-h-[80px] bg-violet/[60%] flex items-center justify-between p-4 rounded-[10px] flex-wrap">
            <h1 className="font-bold text-[20px] sm:text-[25px] lg:text-[30px] uppercase leading-none">
              The Subtle Art of Not Giving a F*ck
            </h1>
            <p className="min-w-[100px] px-2 text-[16px] sm:text-[18px] bg-white text-violet rounded-[3px] flex flex-center mt-1">
              Mark Manson
            </p>
          </div>
          <p className="mt-2">
            Fed up with the constant pressure to be positive and happy all the
            time? "The Subtle Art of Not Giving a F*ck" by Mark Manson flips
            the script on conventional self-help advice. This refreshing book
            advocates for embracing life's inevitable struggles and focusing on
            what truly matters, offering a counterintuitive approach to living
            a meaningful and fulfilling life.
          </p>
          <h1 className="text-[20px] font-bold mt-3">
            About the Author: Mark Manson
          </h1>
          <p className="mt-1">
            Mark Manson, a popular blogger and author, challenges societal
            norms and conventional wisdom in his unique style. With a blend of
            humor, candor, and practical wisdom, Manson encourages readers to
            confront uncomfortable truths and live authentically in a world
            filled with chaos and uncertainty.
          </p>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-[20px] font-bold mt-3">
          Why You Should Buy This Book:
        </h1>
        <p className="mt-1">
          "The Subtle Art of Not Giving a F*ck" offers a refreshing
          perspective on life and personal growth. By embracing the idea that
          not everything deserves your attention and energy, you can free
          yourself from unnecessary stress and focus on what truly matters.
        </p>
        <h1 className="text-[20px] font-bold mt-3">What the Book is About:</h1>
        <p className="mt-1">
          At its core, "The Subtle Art of Not Giving a F*ck" challenges the
          notion that positivity is the key to happiness. Instead, Manson
          argues that embracing life's struggles and accepting our limitations
          can lead to a more fulfilling and authentic existence.
        </p>
        <h1 className="text-[20px] font-bold mt-3">
          Benefits of Buying This Book:
        </h1>
        <p className="mt-1">
          By investing in "The Subtle Art of Not Giving a F*ck," you're
          investing in your mental and emotional well-being. Here are just a
          few of the benefits you'll gain from reading this thought-provoking
          book:
        </p>
        <ol>
          <li>
            1.{" "} <span className="font-bold mr-1">Authenticity:</span> Learn to
            embrace your flaws and imperfections, and live authentically
            without the need for constant validation.
          </li>
          <li>
            2.{" "} <span className="font-bold mr-1">Resilience:</span> Develop
            resilience in the face of adversity by adopting a mindset that
            accepts and learns from life's challenges.
          </li>
          <li>
            3.{" "} <span className="font-bold mr-1">Clarity:</span> Gain clarity
            on your values and priorities, and focus your energy on what truly
            matters in life.
          </li>
          <li>
            4.{" "} <span className="font-bold mr-1">Empowerment:</span> Feel
            empowered to take control of your life and make decisions that align
            with your authentic self.
          </li>
          <li>
            5.{" "} <span className="font-bold mr-1">Freedom:</span> Experience
            the freedom that comes from letting go of societal expectations and
            embracing your true desires and passions.
          </li>
        </ol>

        <h1 className="text-[20px] font-bold mt-3">Conclusion:</h1>
        <p className="mt-1">
          In conclusion, "The Subtle Art of Not Giving a F*ck" offers a
          refreshing and unconventional approach to living a meaningful and
          fulfilling life. With its witty insights and practical wisdom, this
          book challenges readers to reevaluate their priorities and embrace
          the messy reality of human existence. So, why wait? Dive into "The
          Subtle Art of Not Giving a F*ck" today and start living life on your
          own terms.
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
