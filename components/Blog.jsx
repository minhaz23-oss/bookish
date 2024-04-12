import Image from "next/image";
import Link from 'next/link'

const Blog = ({img,id,name,author,desc,goto}) => {
  return (
    <div className=" flex flex-col md:flex-row items-center md:justify-center bg-white/[5%] border border-white rounded-[10px] w-full min-h-[200px] px-10 py-5 gap-5 mt-3">
      <div>
        <Image
          src={`/${img}`}
          width={200}
          height={300}
          className="rounded-[8px] mb-4"
          alt="products"
        />
        <Link href={`${goto}`} className=" primary-btn px-5 py-2  rounded-[5px]">
          buy it from amazon
        </Link>
      </div>
      <div className=" w-full md:w-[80%]">
        <div className="w-full min-h-[80px] bg-violet/[60%] flex items-center justify-between p-4 rounded-[10px] flex-wrap">
          <h1 className=" font-bold text-[20px] sm:text-[25px] lg:text-[30px] uppercase leading-none">{id}. {name}</h1>
          <p className=" min-w-[100px] px-2 text-[16px] sm:text-[18px]   bg-white text-violet rounded-[3px] flex flex-center mt-1">
            {author}
          </p>
        </div>
        <div className=" w-full bg-violet/[20%] max-h-[300px] p-3 pb-2 rounded-[10px] border border-violet mt-3 overflow-hidden mb-4">
           <p>{desc}</p>
        </div>
        <Link href={`/book${id}`} className="secondary-btn w-full py-1  rounded-[5px]">Read full blog</Link>
      </div>
    </div>
  );
};

export default Blog;
