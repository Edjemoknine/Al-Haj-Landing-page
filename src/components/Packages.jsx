const Packages = () => {
  const packages = [
    {
      title: "Al-Aqsa Packages",
      description: "Al-Aqsa Packages",
      image: "/aqsa.jpg",
      link: "https://www.al-aqsa.com/al-aqsa-packages/",
    },
    {
      title: "Al-Madinah Packages",
      description: "Al-Aqsa Packages",
      image: "/madina.jpg",
      link: "https://www.al-aqsa.com/al-aqsa-packages/",
    },
    {
      title: "Al-Masjid Packages",
      description: "Al-Aqsa Packages",
      image: "/madinah.jpg",
      link: "https://www.al-aqsa.com/al-aqsa-packages/",
    },
    {
      title: "Al-Turk Packages",
      description: "Al-Aqsa Packages",
      image: "/turk.jpg",
      link: "https://www.al-aqsa.com/al-aqsa-packages/",
    },
  ];
  return (
    <div className="h-screen max-w-6xl mx-auto px-8 my-20">
      <div className="flex justify-center items-center text-center flex-col my-10">
        <h1 className="text-4xl font-semibold mb-4">All Inclusive Packages</h1>
        <p className="max-w-md">
          All Inclusive Umrah and Hajj packages with the best hotels .With our
          offers you get best confortable tours{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {packages.map((item) => (
          <article
            key={item}
            className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
          >
            <img
              alt=""
              src={item.image}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <time
                  datetime="2022-10-10"
                  className="block text-xs text-white/90"
                >
                  {" "}
                  10th Oct 2022{" "}
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-white">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Packages;
