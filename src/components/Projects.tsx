import { Fade, Slide } from "react-awesome-reveal";
import { ProjectBox } from "./ProjectBox";
import projeto1 from "../assets/projeto-1.png";
import projeto2 from "../assets/projeto-2.png";
import projeto3 from "../assets/projeto-3.png";
import projeto4 from "../assets/projeto-4.png";
import projeto5 from "../assets/projeto-5.png";
import projeto6 from "../assets/projeto-6.png";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <div id="projects" className="dark:bg-primary-900 text-white bg-white flex flex-col items-center gap-24 pt-20 pb-20 z-10 max-sm:gap-16 max-sm:pt-10 max-sm:pb-10">
      <Fade delay={100} duration={1500} className="w-4/6 max-w-5xl flex flex-col items-center max-sm:w-4/5">
        <h1 className="text-4xl font-bold dark:text-white text-primary-900 max-sm:text-3xl">{t("projects-title")}</h1>
        <div className="w-full rounded-xl flex flex-col justify-start items-start gap-24 dark:text-white text-primary-900 max-lg:flex-col">
          <Slide delay={100} duration={1500} triggerOnce>
            <ProjectBox img={projeto2} title={"Hertel Advocacia"} type={"vanilla"} reverse={true} site={true}>
              Sendo minha primeira experiência como freelancer, o website Hertel Advocacia busca oferecer aos clientes uma plataforma intuitiva e acessível, permitindo que se
              obtenham informações precisas sobre os serviços e especializações do escritório de maneira ágil e eficiente.
            </ProjectBox>
            <ProjectBox img={projeto3} title={"LatestNews"} type={"react"} site={false}>
              LatestNews é uma aplicação que, através da API NewsApi, fornece notícias atualizadas e com opção de busca e filtro por título, autor e descrição, tornando fácil a
              busca por notícias relevantes e atuais.
            </ProjectBox>
            <ProjectBox img={projeto4} title={"TakeNotes"} type={"react"} reverse={true} site={true}>
              TakeNotes é um aplicativo de anotações que permite que você adicione, edite e exclua suas ideias e pensamentos de forma fácil e eficiente. Com ele, você pode manter
              suas anotações organizadas e acessíveis a todo momento.
            </ProjectBox>
            <ProjectBox img={projeto6} title={"MoviesTDB"} type={"react"} site={false}>
              MoviesDTB é uma aplicação que oferece uma ampla seleção de filmes, graças à sua integração com a API MoviesDB. Com uma interface intuitiva, os usuários podem
              rapidamente encontrar informações detalhadas sobre filmes, incluindo sinopse, nota do público, duração, custo e arrecadação.
            </ProjectBox>
            <ProjectBox img={projeto5} title={"WeatherWeb"} type={"react"} reverse={true} site={false}>
              Integrado com a API OpenWeatherMap, WeatherWeb é uma aplicação que oferece informações sobre o tempo em qualquer lugar do mundo. Através de uma interface simples, os
              usuários podem obter informações precisas que incluem clima, temperatura, velocidade do vento e umidade do ar.
            </ProjectBox>
          </Slide>
        </div>
      </Fade>
    </div>
  );
};
