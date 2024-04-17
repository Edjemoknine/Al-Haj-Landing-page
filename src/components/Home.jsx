import { Star } from "lucide-react";

const Home = () => {
  const sponsors = [
    {
      img: "/Emirate.png",
      like: 7.5,
      reviews: 1200,
    },
    {
      img: "/facebook.png",
      like: 6.5,
      reviews: 10000,
    },
    {
      img: "/guard.png",
      like: 5.5,
      reviews: 354,
    },
    {
      img: "/quatar.png",
      like: 8.5,
      reviews: 700,
    },
  ];
  return (
    <>
      <section className="min-h-[50rem] h-[80vh] bg-[url('/mka.jpg')] bg-cover bg-no-repeat bg-center ">
        {/* <img src={makka} alt="" className="w-full h-full object-cover" /> */}
      </section>
      <div className="max-w-6xl mx-auto px-8 ">
        <div className="w-full flex justify-between my-6 items-center flex-wrap">
          {sponsors.map((item) => (
            <div
              key={item.img}
              className="flex flex-col gap-2 items-center text-center"
            >
              <img
                src={item.img}
                alt="img"
                className="w-28 h-20 object-contain"
              />
              <span className="flex items-center gap-1">
                <Star size={20} fill="#ffd700" stroke="#ffd700" />
                {item.like}
              </span>
              <p>{item.reviews} reviews</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
