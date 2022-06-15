interface Props {
  name: string;
  profileImg: string;
  comment: string;
}

const UserComment = ({ name, profileImg, comment }: Props) => {
  return (
    <article>
      <header className="flex items-center space-x-5">
        <img className="profile-img" src={profileImg} alt="" />
        <h4 className="font-normal">{name}</h4>
      </header>
      <p className="mt-4 md:pl-[100px]">{comment}</p>
    </article>
  );
};

export default UserComment;
