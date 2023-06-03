import Card from "@/Components/Card";
import VideoCard from "@/Components/VideoCard";
import AnimateInView from "@/utils/AnimateInView";
import Banner from "@/widgets/Banner";
import CalculoSolda from "@/widgets/CalculoSolda";
import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const imageCardsList = [
  {
    imgSrc: "/solda_ponto2.webp",
    shouldLazyLoad: false,
    cardTitle: "Entenda o processo da Soldagem por Resistência.",
    cardId: "section-card-1",
    cardDescription:
      "A soldagem por resistência é uma das opções para unir metais comumente usado no ramo da soldagem. Pode ser vista em indústrias metalúrgicas, alimentícias, de linha branca, etc. Ela é sem dúvida o tipo de soldagem mais comuns na união de duas chapas de metal.",
  },
  {
    imgSrc: "/utilidades-da-solda.jpg",
    shouldLazyLoad: true,
    cardTitle: "Utilização mais comum da solda por resistência.",
    cardId: "section-card-2",
    cardDescription:
      "A utilização mais comum da solda por resistência é na produção de carrocerias, parte predominante na indústria automotiva. Para se ter uma ideia, a carroceria tem em média 4.500 pontos que necessitam de solda. Por isso, entender as características de uma boa máquina de solda é essencial para quem deseja desenvolver esse tipo de projeto.",
  },
  {
    imgSrc: "/como-e-feita-soldagem.jpg",
    shouldLazyLoad: true,
    cardTitle: "Solda a Ponto.",
    cardId: "section-card-3",
    cardDescription:
      "A utilização massiva da solda ponto na produção de carrocerias é a opção certa para esse tipo de serviço. Ela possibilita a soldagem de um ponto específico no qual todo o calor é concentrado. Isso é possível devido a força constante gerada pelos eletrodos, que restringem a área e garantem um melhor resultado!",
  },
  {
    imgSrc: "/parametros-solda-a-ponto.webp",
    shouldLazyLoad: true,
    cardTitle: "Parâmetros da Solda a Ponto",
    cardId: "section-card-4",
    cardDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis enim nibh, a imperdiet est malesuada eu. Ut sodales ornare faucibus. Duis eget dui bibendum, lobortis sapien ut, venenatis massa. Etiam non augue sed lectus pellentesque tempus. Curabitur ut tortor ex. Proin consectetur imperdiet volutpat. Nam eu elit at metus efficitur dignissim. Cras commodo mauris tristique magna elementum fermentum. Maecenas nisl odio, bibendum quis ligula maximus, sagittis tristique lectus. Nullam risus odio, viverra a rutrum ac, accumsan vitae neque. Morbi viverra nunc urna, vitae ultricies augue mollis et. Nam euismod tellus vitae ante cursus, at dictum tellus aliquet. Nunc sit amet lacus id felis vulputate convallis.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Solda por Resistência</title>
        <link rel="icon" href="/next.svg" />
        <meta
          name="description"
          content="Saiba mais sobre Solda Por Resistência!"
        />
        <meta property="og:title" content="Solda Por Resistência" key="title" />
      </Head>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-center p-4 gap-8 ${inter.className} lg:p-12 lg:gap:12`}
      >
        <Banner title="Solda por Resistência" />
        {imageCardsList.map((card, index) => {
          return (
            <AnimateInView
              key={index}
              animationClass={
                index % 2 === 0
                  ? "animate-fade-in-left"
                  : "animate-fade-in-right"
              }
            >
              <Card
                id={card.cardId}
                imgSrc={card.imgSrc}
                title={card.cardTitle}
                description={card.cardDescription}
                shouldLazyLoad={card.shouldLazyLoad}
              />
            </AnimateInView>
          );
        })}
        <AnimateInView animationClass="animate-fade-in-left">
          <CalculoSolda />
        </AnimateInView>
        <AnimateInView animationClass="animate-fade-in-bottom">
          <VideoCard videoSrc="https://www.youtube.com/embed/0BIj51IcFlw" />
        </AnimateInView>
      </main>
      <Footer />
    </>
  );
}
