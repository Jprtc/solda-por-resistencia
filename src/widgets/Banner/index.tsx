interface BannerProps {
  title: string;
}

const Banner = ({ title }: BannerProps) => {
  return (
    <section className="bg-white-600 text-blue py-6 flex flex-col items-center justify-center text-center animate-fade-in-normal">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-2xl mt-4">
        Tudo aquilo que você precisa saber sobre solda por resistência
      </p>
    </section>
  );
};

export default Banner;
