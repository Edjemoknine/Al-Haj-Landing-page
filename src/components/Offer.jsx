import { Book, CreditCard, PersonStanding, TowerControl } from "lucide-react";
import { FaPray } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
const Offer = () => {
  const offers = [
    {
      icon: CreditCard,
      name: "Hajj offer",
      desc: "We have over then 40 payment ways",
    },
    {
      icon: Book,
      name: "Hajj offer",
      desc: "No hestling in visa process",
    },
    {
      icon: TowerControl,
      name: "Hajj offer",
      desc: "Our guide will lead you all",
    },
    {
      icon: PersonStanding,
      name: "Hajj offer",
      desc: "Best Ramadn Hajj Package",
    },
    {
      icon: FaPray,
      name: "Umrah offer",
      desc: "We have over then 40 payment ways",
    },
    {
      icon: GoPackage,
      name: "Umrah offer",
      desc: "We have over then 40 payment ways",
    },
  ];
  return (
    <div className="bg-light">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 grid-cols-1 gap-10 min-h-screen">
        <div className="pt-20 flex flex-col gap-3 items-start">
          <h1 className="md:text-4xl font-semibold mb-2">What Do We Offer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            natus eius quod necessitatibus, ipsum et incidunt mollitia, ex quo
            in, deleniti voluptatibus suscipit. Similique molestias tempore
            nesciunt dicta vitae voluptas.
          </p>
          <button className="bg-[#ffd9038f] hover:shadow-md duration-300 hover:bg-[#ffd700] text-sm rounded-full px-4 py-1">
            Learn More
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {offers.map((item) => (
              <div key={item.icon} className="flex items-center gap-2">
                <div className="text-sm rounded-full px-4 py-1">
                  <div className="flex items-center justify-center">
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <h2 className="text-lg font-semibold ">{item.name}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative after:absolute after:top-0 after:z-0 after:content-['*'] after:w-full after:skew-x-12 after:h-full after:bg-[#ffd700] ">
          <img
            src="/ihram.png"
            alt="Oferes"
            className="h-full object-contain w-full z-20 relative"
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
