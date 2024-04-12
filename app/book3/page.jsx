import Image from "next/image";
import Link from 'next/link'
import productImg from "@/public/product3.jpg";
const page = () => {
  return (
    <main className=" w-full mt-10 pb-10">
      <div className="flex flex-col md:flex-row flex-center gap-5  md:gap-10">
        <div className=" w-[250px] float-right ">
          <Image src={productImg} className=" rounded-[8px] mb-4" />
          <Link href= 'https://amzn.to/49BlCtt' className=" primary-btn px-5 py-2 rounded-[5px] mt-2">
            Buy it from amazon
          </Link>
        </div>
        <div className=" w-full">
          <div className="w-full min-h-[80px] bg-violet/[60%] flex items-center justify-between p-4 rounded-[10px] flex-wrap">
            <h1 className=" font-bold text-[20px] sm:text-[25px] lg:text-[30px] uppercase leading-none">
              atomic habits
            </h1>
            <p className=" min-w-[100px] px-2 text-[16px] sm:text-[18px]   bg-white text-violet rounded-[3px] flex flex-center mt-1">
              James Clear
            </p>
          </div>
          <p className=" mt-2">
            Have you ever felt stuck in a rut, wishing you could break bad
            habits and build good ones that actually last? If so, then James
            Clear's "Atomic Habits" might be the key you've been searching for.
            Published in 2018, this New York Times bestseller has become a
            phenomenon for a reason: it offers a practical, science-backed
            approach to changing your habits – for the better.
          </p>
          <h1 className=" text-[20px] font-bold mt-3">About the author:</h1>
          <p className="mt-1">
            First, let's meet the brilliant mind behind "Atomic Habits" – James
            Clear. As a renowned author, speaker, and expert in habit formation
            and behavior change, Clear has dedicated his life to helping
            individuals unlock their potential and achieve lasting success. With
            a background in science and psychology, he brings a unique blend of
            research-based insights and real-world experience to his work.
          </p>
        </div>
      </div>
      <div className=" w-full">
      <h1 className=" text-[20px] font-bold mt-3">Why You Should Buy This Book:</h1>
      <p className="mt-1">Now, you might be wondering, why should you buy "Atomic Habits"? The answer is simple: this book has the power to transform your life. Whether you're looking to break bad habits, build positive ones, or simply improve your daily routines, "Atomic Habits" offers a roadmap to success. Through Clear's engaging storytelling and practical advice, you'll learn how to harness the power of small habits to create remarkable changes over time.</p>
      <h1 className=" text-[20px] font-bold mt-3">What the Book is About:</h1>
      <p className="mt-1">At its core, "Atomic Habits" is about the power of tiny changes – what Clear refers to as atomic habits – to produce remarkable results. Drawing on insights from psychology, neuroscience, and behavioral economics, Clear explores the science behind habit formation and offers actionable strategies for building habits that stick. From the importance of setting clear goals to the role of environment and social influence, "Atomic Habits" provides a comprehensive framework for creating lasting change.</p>
      <h1 className=" text-[20px] font-bold mt-3">Benefits of Buying This Book:</h1>
      <p className="mt-1">By investing in "Atomic Habits," you're investing in yourself. Here are just a few of the benefits you'll gain from reading this book:</p>
      <ol>
        <li>
        1. <span className=' font-bold mr-1'>Clarity:</span> Gain a deeper understanding of how habits work and why they're crucial for personal growth.
        </li>
        <li>
        2. <span className=' font-bold mr-1'>Empowerment:</span> Learn practical strategies for breaking bad habits and cultivating positive ones.
        </li>
        <li>
        3. <span className=' font-bold mr-1'>Motivation:</span> Feel inspired to take action and make meaningful changes in your life.
        </li>
        <li>
        4. <span className=' font-bold mr-1'>Confidence:</span> Build self-confidence as you see the impact of small habits accumulate over time.
        </li>
        <li>
        5. <span className=' font-bold mr-1'>Transformation:</span> Experience a profound transformation as you apply the principles of "Atomic Habits" to your daily life.
        </li>
      </ol>
      <h1 className=" text-[20px] font-bold mt-3">Conclusion:</h1>
      <p className="mt-1">In conclusion, "Atomic Habits" by James Clear is a must-read for anyone looking to unlock their potential and achieve their goals. With its practical insights, engaging storytelling, and actionable advice, this book has the power to transform your habits, your mindset, and ultimately, your life. So, what are you waiting for? Dive into "Atomic Habits" today and start your journey towards a brighter, more fulfilling future.</p>
      
      </div>
      <div className=" w-full flex justify-center">
      <button className="secondary-btn w-[250px] py-2 rounded-[8px] mt-3 ">Buy it from amazon</button>
      </div>
    </main>
  );
};

export default page;
