interface Props {
  leftImg: string;
  profileImg: string;
  name: string;
  title: string;
  content: string;
}

const HeroCarouselItem = ({ leftImg, profileImg, name, title, content }: Props) => {
  return (
    <div className="grid grid-cols-2">
      <img src={leftImg} alt="" className="hero-carousel-img w-full object-cover" />
      <div className="bg-primary flex flex-col items-center py-20 px-[20%] text-white gap-5 mx-auto">
        <img src={profileImg} alt="" className="rounded-full max-w-[160px]" />
        <p>{name}</p>
        <h2 className="font-semi-bold text-2xl">{title}</h2>
        <p className="text-center font-light px-[10%]">{content}</p>
      </div>
    </div>
  );
};

export default HeroCarouselItem;
