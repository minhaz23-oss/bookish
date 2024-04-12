import Image from "next/image";
import Link from 'next/link';
import productImg from "@/public/product6.jpg";

const page = () => {
  return (
    <main className="w-full mt-10 pb-10">
      <div className="flex flex-col md:flex-row flex-center gap-5 md:gap-10">
        <div className="w-[250px] float-right">
          <Image src={productImg} className="rounded-[8px] mb-4" />
          <Link href= 'https://amzn.to/4avNlNr' className=" primary-btn px-5 py-2 rounded-[5px] mt-2">
            Buy it from amazon
          </Link>
        </div>
        <div className="w-full">
          <div className="w-full min-h-[80px] bg-violet/[60%] flex items-center justify-between p-4 rounded-[10px] flex-wrap">
            <h1 className="font-bold text-[20px] sm:text-[25px] lg:text-[30px] uppercase leading-none">
              How to Win Friends and Influence People
            </h1>
            <p className="min-w-[100px] px-2 text-[16px] sm:text-[18px] bg-white text-violet rounded-[3px] flex flex-center mt-1">
              Dale Carnegie
            </p>
          </div>
          <p className="mt-2">
            Looking to improve your social skills and build meaningful
            relationships? "How to Win Friends and Influence People" by Dale
            Carnegie is the ultimate guide to mastering the art of
            interpersonal communication and influence. Packed with practical
            tips and timeless wisdom, this classic book has empowered millions
            to achieve success in both their personal and professional lives.
          </p>
          <h1 className="text-[20px] font-bold mt-3">
            About the Author: Dale Carnegie
          </h1>
          <p className="mt-1">
            Dale Carnegie was a renowned author, speaker, and expert in
            interpersonal communication. With a passion for helping others
            unlock their full potential, Carnegie's teachings continue to
            inspire individuals to become more confident, charismatic, and
            influential in their interactions with others.
          </p>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-[20px] font-bold mt-3">
          Why You Should Buy This Book:
        </h1>
        <p className="mt-1">
          "How to Win Friends and Influence People" offers invaluable insights
          into human behavior and communication. By mastering the principles
          outlined in this book, you can enhance your social skills, build
          stronger relationships, and influence others with integrity and
          empathy.
        </p>
        <h1 className="text-[20px] font-bold mt-3">What the Book is About:</h1>
        <p className="mt-1">
          At its core, "How to Win Friends and Influence People" explores
          fundamental principles of human psychology and communication. Carnegie
          shares practical techniques for winning people over, handling
          conflicts gracefully, and becoming a more effective communicator in
          all areas of life.
        </p>
        <h1 className="text-[20px] font-bold mt-3">
          Benefits of Buying This Book:
        </h1>
        <p className="mt-1">
          By investing in "How to Win Friends and Influence People," you're
          investing in your personal and professional growth. Here are just a
          few of the benefits you'll gain from reading this transformative
          book:
        </p>
        <ol>
          <li>
            1.{" "} <span className="font-bold mr-1">Improved Communication:</span> Learn
            proven techniques for communicating more effectively and
            persuasively in any situation.
          </li>
          <li>
            2.{" "} <span className="font-bold mr-1">Enhanced Relationships:</span> Build
            stronger, more meaningful relationships with friends, family, and
            colleagues based on mutual respect and understanding.
          </li>
          <li>
            3.{" "} <span className="font-bold mr-1">Influence:</span> Gain insight into
            the principles of influence and persuasion, and learn how to
            inspire others to take action and achieve common goals.
          </li>
          <li>
            4.{" "} <span className="font-bold mr-1">Confidence:</span> Boost your
            confidence and self-esteem by mastering the art of interpersonal
            communication and social interaction.
          </li>
          <li>
            5.{" "} <span className="font-bold mr-1">Professional Success:</span> Apply the
            timeless principles outlined in this book to advance your career and
            achieve success in the workplace.
          </li>
        </ol>

        <h1 className="text-[20px] font-bold mt-3">Conclusion:</h1>
        <p className="mt-1">
          In conclusion, "How to Win Friends and Influence People" is an
          essential read for anyone looking to improve their social skills,
          enhance their relationships, and achieve greater success in life.
          With its practical advice and timeless wisdom, this book has the
          power to transform your interactions and unlock new opportunities for
          personal and professional growth. So, why wait? Dive into "How to
          Win Friends and Influence People" today and start building the
          connections that will shape your future.
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
