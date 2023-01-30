import { Fade } from "react-awesome-reveal";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineMail } from "react-icons/ai";

export const Contact = () => {
  return (
    <div id="contact" className="dark:bg-primary-900 text-white flex flex-col items-center gap-24 pt-20 pb-24 z-10 max-sm:gap-16 max-sm:pt-10 max-sm:pb-20 ">
      <Fade delay={100} className="w-4/6 flex flex-col items-center">
        <h1 className="text-4xl font-bold dark:text-white text-primary-900 max-sm:text-3xl">Contato 🤙</h1>
        <div className="text-black flex gap-20 max-lg:flex-col">
          <a href="mailto:samueltomasellidev@gmail.com">
            <div className="flex flex-col justify-center items-center dark:text-white hover:scale-110">
              <AiOutlineMail className="text-6xl text-primary-100 mb-2" />
              <h1 className="font-bold text-xl">E-mail</h1>
              <h2 className="font-normal">samueltomasellidev@gmail.com</h2>
            </div>
          </a>
          <a href="https://github.com/szcore">
            <div className="flex flex-col justify-center items-center dark:text-white hover:scale-110">
              <AiFillGithub className="text-6xl text-primary-100 mb-2" />
              <h1 className="font-bold text-xl">Github</h1>
              <h2 className="font-normal">@szcore</h2>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/samuel-tomaselli-637924224/">
            <div className="flex flex-col justify-center items-center dark:text-white hover:scale-110">
              <AiFillLinkedin className="text-6xl text-primary-100 mb-2" />
              <h1 className="font-bold text-xl">Linkedin</h1>
              <h2 className="font-normal text-">Samuel Tomaselli</h2>
            </div>
          </a>
          <a href=" ">
            <div className="flex flex-col justify-center items-center dark:text-white hover:scale-110">
              <AiFillInstagram className="text-6xl text-primary-100 mb-2" />
              <h1 className="font-bold text-xl">Instagram</h1>
              <h2 className="font-normal">@samuca_tomaselli</h2>
            </div>
          </a>
        </div>
      </Fade>
    </div>
  );
};
