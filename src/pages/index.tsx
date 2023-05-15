import Card from "@/Components/Card";
import VideoCard from "@/Components/VideoCard";
import Banner from "@/widgets/Banner";
import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-center p-4 gap-8 ${inter.className} lg:p-12 lg:gap:12`}
      >
        <Banner title="Solda por Resistência" />
        <Card
          imgSrc="/solda_ponto2.webp"
          title="Entenda o processo da Soldagem por Resistência."
          description="A soldagem por resistência é uma das opções para unir metais comumente usado no ramo da soldagem. Pode ser vista em indústrias metalúrgicas, alimentícias, de linha branca, etc. Ela é sem dúvida o tipo de soldagem mais comuns na união de duas chapas de metal."
          index={0}
        />
        <Card
          imgSrc="/utilidades-da-solda.jpg"
          title="Utilização mais comum da solda por resistência."
          description="A utilização mais comum da solda por resistência é na produção de carrocerias, parte predominante na indústria automotiva. Para se ter uma ideia, a carroceria tem em média 4.500 pontos que necessitam de solda. Por isso, entender as características de uma boa máquina de solda é essencial para quem deseja desenvolver esse tipo de projeto."
          index={1}
        />
        <Card
          imgSrc="/como-e-feita-soldagem.jpg"
          index={2}
          title="Solda a Ponto"
          description="A utilização massiva da solda ponto na produção de carrocerias é a opção certa para esse tipo de serviço. Ela possibilita a soldagem de um ponto específico no qual todo o calor é concentrado. Isso é possível devido a força constante gerada pelos eletrodos, que restringem a área e garantem um melhor resultado!"
        />
        <Card
          imgSrc="/parametros-solda-a-ponto.webp"
          index={3}
          title="Parâmetros da Solda a Ponto"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis enim nibh, a imperdiet est malesuada eu. Ut sodales ornare faucibus. Duis eget dui bibendum, lobortis sapien ut, venenatis massa. Etiam non augue sed lectus pellentesque tempus. Curabitur ut tortor ex. Proin consectetur imperdiet volutpat. Nam eu elit at metus efficitur dignissim. Cras commodo mauris tristique magna elementum fermentum. Maecenas nisl odio, bibendum quis ligula maximus, sagittis tristique lectus. Nullam risus odio, viverra a rutrum ac, accumsan vitae neque. Morbi viverra nunc urna, vitae ultricies augue mollis et. Nam euismod tellus vitae ante cursus, at dictum tellus aliquet. Nunc sit amet lacus id felis vulputate convallis."
        />
        <VideoCard videoSrc="https://www.youtube.com/embed/0BIj51IcFlw" />
      </main>
      <Footer />
    </>
  );
}
