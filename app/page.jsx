import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Link from 'next/link';
export default function Home() {
  const blogData = [
    {
      id:1,
      img: "product1.jpg",
      name: "the power of now",
      goto: 'https://amzn.to/3xFU1K6',
      author: "Eckhart Tolle",
      desc: 'The Power of Now" by Eckhart Tolle is a transformative guide to spiritual awakening and living in the present moment. Tolle explores the concept of mindfulness and the importance of transcending the ego to find inner peace and fulfillment. Through practical insights and exercises, he teaches readers how to quiet the incessant chatter of the mind, release attachment to past and future, and experience profound joy and serenity in the present moment. This timeless classic offers a roadmap to enlightenment, inviting readers to awaken to their true essence and live authentically in alignment with the eternal Now.',
    },
    {
      id:2,
      img: "product2.jpg",
      name: "the psychology of money",
      goto: 'https://amzn.to/3PUdSeP',
      author: "Morgan Housel",
      desc: 'The Psychology of Money" by Morgan Housel is a thought-provoking exploration of the psychological factors that influence our financial decisions and behaviors. Housel delves into the complex relationship between money and human psychology, offering insights into why people make irrational financial choices and how emotions such as fear, greed, and overconfidence can impact investment outcomes. Through engaging stories and practical wisdom, he highlights the importance of understanding ones own financial psychology and developing a mindset that promotes long-term wealth accumulation and financial well-being.',
    },
    {
      id:3,
      img: "product3.jpg",
      name: "atomic habits",
      goto: 'https://amzn.to/49BlCtt',
      author: "James Clear",
      desc: '"Atomic Habits" by James Clear is a groundbreaking book that explores the power of small habits in achieving remarkable results. Through engaging storytelling and practical advice, Clear delves into the science of habit formation, explaining how tiny changes can lead to remarkable transformations over time. Whether you want to build healthier habits, break bad ones, or simply improve your productivity and performance, "Atomic Habits" provides actionable strategies and insights to help you make lasting changes and achieve your goals.',
    },
    {
      id:4,
      img: "product4.jpg",
      name: "The Subtle Art of Not Giving a F*ck",
      goto: 'https://amzn.to/3Jggn7O',
      author: "Mark Manson",
      desc: '"The Subtle Art of Not Giving a F*ck" by Mark Manson is a refreshing take on self-help, offering unconventional yet practical advice for living a happier and more fulfilling life. Manson challenges traditional self-help tropes by advocating for embracing discomfort, accepting limitations, and focusing on what truly matters. Through humorous anecdotes and blunt honesty, he encourages readers to prioritize values that align with their authentic selves, let go of societal expectations, and cultivate resilience in the face of adversity. This book empowers readers to confront their fears, set healthier boundaries, and find meaning in lifes inevitable struggles.',
    },
    {
      id:5,
      img: "product5.jpg",
      name: "7 habits of highly effective people",
      goto: 'https://amzn.to/49t2ldy',
      author: "Stephen R. Covey",
      desc: '"The 7 Habits of Highly Effective People" is a renowned self-help book by Stephen R. Covey, offering practical guidance for personal and professional success. Covey presents seven powerful habits that can help individuals enhance their effectiveness and achieve their goals. From proactive behavior to empathetic communication and continuous self-improvement, this book provides actionable strategies for personal transformation and lasting impact.',
    },
    {
      id:6,
      img: "product6.jpg",
      name: "How to Win Friends and Influence People",
      goto:'https://amzn.to/4avNlNr',
      author: "Dale Carnegie",
      desc: '"How to Win Friends and Influence People" by Dale Carnegie is a seminal self-help book that provides timeless advice on interpersonal communication and building positive relationships. Carnegie offers practical techniques and strategies for winning people over, earning their trust, and influencing them effectively. Through real-life examples and anecdotes, he emphasizes the importance of empathy, active listening, and sincere appreciation in fostering meaningful connections with others.',
    },
  ];
  return (
    <main className=" w-full ">
      {/* header section */}
      <section
        className="w-full h-[300px] md:h-[400px] mt-10 rounded-[15px] flex flex-col flex-center p-5"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className=" font-black text-[30px] sm:text-[40px] md:text-[60px] text-center uppercase leading-none">
          Explore best self-help books and Dive into Their Stories
        </h1>
        <Link href='/products' className="primary-btn mt-3 px-[35px] py-[7px] rounded-[5px]">
          see books
        </Link>
      </section>
       {/* blog section */}
      <section id="blogs" className="mt-[40px]">
        <h1 className=" font-bold text-[25px] sm:text-[30px] text-center uppercase">Blogs</h1>
      {blogData.map((val,index) => (
         <Blog key={index} img={val.img} name={val.name} author={val.author} id={val.id} desc={val.desc} goto={val.goto}/>
      ))}
      </section>
      <section className=" mt-[40px]">
      <h1 className=" font-bold text-[25px] sm:text-[30px] text-center uppercase">About Us</h1>
      <div className=" w-full bg-white/5 border border-white rounded-[10px] flex flex-center p-3 mt-2">
         <p className="text-center font-semibold w-full lg:w-[60%]">welcome to <span className=" text-violet font-black">Bookish</span>, an affiliate site where you can find amazing and most read books all over the world. That one book can change your full life. Books are the greatest companions you can ever find . In our site you will be able to find those amazing books which will improve your daily life as well as your mind.</p>
      </div>
      </section>
      <Footer/>
    </main>
  );
}
