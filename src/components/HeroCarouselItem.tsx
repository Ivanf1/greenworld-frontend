interface Props {
  leftImg: string;
  profileImg: string;
  name: string;
  title: string;
  content: string;
}

const HeroCarouselItem = ({ leftImg, profileImg, name, title, content }: Props) => {
  return (
    <div className="grid lg:grid-cols-2">
      <img src={leftImg} alt="" className="hidden lg:block h-full object-cover" />
      <div className="bg-white flex flex-col items-center pt-6 pb-10 md:pt-10 md:pb-16 lg:py-20 gap-10 mx-auto">
        <div className="flex flex-col items-center gap-2">
          <img src={profileImg} alt="" className="rounded-full max-w-[120px]" />
          <p className="text-xs ">{name}</p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-semi-bold text-xl text-primary-text">{title}</h2>
          <p className="text-center px-7 lg:max-w-[70%]">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCarouselItem;
