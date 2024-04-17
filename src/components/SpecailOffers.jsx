const SpecailOffers = () => {
  const offers = [
    {
      id: 1,
      img: "/haj1.jpg",
      title: "Hajj Package",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 1000,
    },
    {
      id: 2,
      title: "Hajj Package",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 1200,
      img: "/Haj.jpg",
    },
    {
      id: 3,
      title: "Umrah Package",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 500,
      img: "/umra.jpg",
    },
    {
      id: 4,
      title: "Umrah Package",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: 800,
      img: "/umrah.jpg",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-8 my-20">
      <div className="flex justify-center items-center text-center flex-col my-10">
        <h1 className="text-3xl font-semibold mb-2">
          Hajj And Umrah Special Offers
        </h1>
        <p>Don't miss out thesse special offers</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {offers.map((item) => (
          <div key={item.id}>
            <div className="h-48">
              <img
                src={item.img}
                alt="offers"
                className="w-full rounded-lg object-cover h-full"
              />
            </div>
            <div className="flex flex-col gap-1 mt-2 items-start">
              <h2 className="font-semibold">{item.title}</h2>
              <h3 className="font-semibold text-[#ffe02d]">${item.price}.00</h3>
              <p className="text-xs truncate max-w-60 mb-1">
                {item.description}
              </p>
              <button className="bg-[#ffd9038f] hover:shadow-md duration-300 hover:bg-[#ffd700] text-sm rounded-full px-4 py-1">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecailOffers;
