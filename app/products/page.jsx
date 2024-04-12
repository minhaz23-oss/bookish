import Card from "@/components/Card";

const page = () => {
  const cards = [
    {
      id: 1,
      img: "product1.jpg",
      goto: 'https://amzn.to/3xFU1K6',
      name: "the power of now",
    },
    {
      id: 2,
      img: "product2.jpg",
      goto: 'https://amzn.to/3PUdSeP',
      name: "the psychology of money",
    },
    {
      id: 3,
      img: "product3.jpg",
      goto: 'https://amzn.to/49BlCtt',
      name: "atomic habits",
    },
    {
      id: 4,
      img: "product4.jpg",
      goto: 'https://amzn.to/3Jggn7O',
      name: "The Subtle Art of Not Giving a F*ck",
    },
    {
      id: 5,
      img: "product5.jpg",
      goto: 'https://amzn.to/49t2ldy',
      name: "7 habits of highly effective people",
    },
    {
      id: 6,
      img: "product6.jpg",
      goto:'https://amzn.to/4avNlNr',
      name: "How to Win Friends and Influence People",
    },
  ];
  return (
    <main className=" mt-5 w-full pb-20">
      <h1 className=" font-black text-[30px] sm:text-[40px] md:text-[60px] text-center uppercase leading-none">
        6 best <span className=" text-violet">self imporvment</span> books which
        can change your life and perspective
      </h1>
      <div className=" mt-7 flex w-full justify-between   flex-wrap">
        {cards.map((val) => (
          <Card key={val.id} img={val.img} name={val.name} id={val.id} goto={val.goto}/>
        ))}
      </div>
    </main>
  );
};

export default page;
