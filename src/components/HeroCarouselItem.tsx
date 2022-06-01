interface Props {
  leftImg: string;
  profileImg: string;
  name: string;
  title: string;
  content: string;
}

const HeroCarouselItem = ({ leftImg, profileImg, name, title, content }: Props) => {
  return (
    <div className="grid grid-cols-2 ">
      <img src={leftImg} alt="" className="hero-carousel-img h-full object-cover" />
      <div className="bg-white flex flex-col items-center py-20 gap-10 mx-auto">
        <div className="flex flex-col items-center gap-2">
          <img src={profileImg} alt="" className="rounded-full max-w-[120px]" />
          <p className="text-xs ">{name}</p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-semi-bold text-xl text-primary-text">{title}</h2>
          <p className="text-center max-w-[70%]">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCarouselItem;
