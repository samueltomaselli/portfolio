type Props = {
  url: string;
};

export const ProjectBox1 = ({ url }: Props) => {
  return (
    <div className="flex justify-center items-center h-56 border-2 border-primary-100 rounded-xl hover:cursor-pointer hover:scale-105 shadow-sm transition-all shadow-primary-100 max-lg:w-2/3 max-sm:w-full relative">
      <div className="absolute w-full h-full bg-gray-800/80 transition-opacity delay-150 opacity-0 z-10 rounded-xl border-2 dark:border-black hover:opacity-100 text-primary-100 font-bold text-xl flex flex-col justify-center items-center gap-6">
        <a href="">Visitar site</a>
        <a href="">Repositório</a>
      </div>
      <img src={url} className="w-full h-full rounded-xl border-2 dark:border-black " alt="" />
    </div>
  );
};
