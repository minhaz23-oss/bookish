import Image from "next/image";
import Link from 'next/link'
import productImg from "@/public/product1.jpg";
const page = () => {
  return (
    <main className=" w-full mt-10 pb-10">
      <div className="flex flex-col md:flex-row flex-center gap-5  md:gap-10">
        <div className=" w-[250px] float-right ">
          <Image src={productImg} className=" rounded-[8px] mb-4 " />
          <Link href= 'https://amzn.to/3xFU1K6' className=" primary-btn px-5 py-2 rounded-[5px] mt-2">
            Buy it from amazon
          </Link>
        </div>
        <div className=" w-full">
          <div className="w-full min-h-[80px] bg-violet/[60%] flex items-center justify-between p-4 rounded-[10px] flex-wrap">
            <h1 className=" font-bold text-[20px] sm:text-[25px] lg:text-[30px] uppercase leading-none">
              the power of now
            </h1>
            <p className=" min-w-[100px] px-2 text-[16px] sm:text-[18px]   bg-white text-violet rounded-[3px] flex flex-center mt-1">
              Eckhart Tolle
            </p>
          </div>
          <p className=" mt-2">
            Ever feel like you're constantly pulled between the past and the
            future, missing out on the present moment? If so, Eckhart Tolle's
            "The Power of Now" might be the guiding light you need. Published in
            1997, this international bestseller has become a spiritual
            touchstone for countless readers, offering a powerful path to inner
            peace and present-moment awareness.
          </p>
          <h1 className=" text-[20px] font-bold mt-3">
            About the Author: Eckhart Tolle
          </h1>
          <p className="mt-1">
            Before diving into the book itself, let's meet the man behind the
            wisdom: Eckhart Tolle. A spiritual teacher and author, Tolle's life
            took an unexpected turn after a profound inner transformation. This
            experience led him to devote his life to helping others discover the
            peace and joy that lies within, through present-moment awareness.
          </p>
        </div>
      </div>
      <div className=" w-full">
        <h1 className=" text-[20px] font-bold mt-3">
          Why You Should Buy This Book:
        </h1>
        <p className="mt-1">
          Now, you might be wondering, why should you embrace "The Power of
          Now"? The answer is crystal clear: this book holds the key to
          unlocking profound serenity and fulfillment in your life. Whether
          you're grappling with stress, discontent, or simply seeking greater
          clarity, Tolle's teachings offer a pathway to liberation from the
          burdens of the past and future anxieties..
        </p>
        <h1 className=" text-[20px] font-bold mt-3">What the Book is About:</h1>
        <p className="mt-1">
          At its core, "The Power of Now" illuminates the transformative
          potential of living fully in the present moment. Tolle delves into the
          nature of human consciousness, unveiling the destructive patterns of
          the ego and the liberating essence of pure awareness. Through
          practical guidance and illuminating insights, he invites readers to
          awaken to the eternal Now – the only moment where true peace and
          contentment reside.
        </p>
        <h1 className=" text-[20px] font-bold mt-3">
          Benefits of Buying This Book:
        </h1>
        <p className="mt-1">
          By embracing "The Power of Now," you're embarking on a journey of
          profound self-discovery and liberation. Here are just a few of the
          benefits awaiting you:
        </p>
        <ol>
          <li>
            1. <span className="font-bold mr-1">Clarity:</span> Gain a deeper
            understanding of the nature of consciousness and the illusory nature
            of time.
          </li>
          <li>
            2. <span className="font-bold mr-1">Presence:</span> Cultivate
            mindfulness and presence, allowing you to savor the richness of each
            moment.
          </li>
          <li>
            3. <span className="font-bold mr-1">Peace:</span> Experience inner
            peace and freedom from the incessant chatter of the mind.
          </li>
          <li>
            4. <span className="font-bold mr-1">Joy:</span> Discover a newfound
            sense of joy and fulfillment in the simple act of being.
          </li>
          <li>
            5. <span className="font-bold mr-1">Transformation:</span> Witness a
            profound transformation as you embrace the power of presence in your
            daily life.
          </li>
        </ol>

        <h1 className=" text-[20px] font-bold mt-3">Conclusion:</h1>
        <p className="mt-1">
          In conclusion, "The Power of Now" by Eckhart Tolle stands as a
          timeless guidebook for anyone seeking to transcend suffering and
          discover the profound beauty of the present moment. With its
          illuminating insights and practical wisdom, this book has the power to
          revolutionize your relationship with yourself and the world around
          you. So, why wait? Embrace the timeless wisdom of "The Power of Now"
          today and embark on a journey towards boundless peace and fulfillment.
        </p>
      </div>
      <div className=" w-full flex justify-center">
        <button className="secondary-btn w-[250px] py-2 rounded-[8px] mt-3 ">
          Buy it from amazon
        </button>
      </div>
    </main>
  );
};

export default page;
