import profileImg from "../assets/profile-img.png";
import testA from "../assets/a.jpg";
import testB from "../assets/b.jpg";

interface TestimonianzaCardData {
  profileImg: string;
  name: string;
  location: string;
  date: string;
  comment: string;
  imgs: string[];
}

export const testimonianze: TestimonianzaCardData[] = Array(10).fill({
  profileImg: profileImg,
  name: "Marge",
  location: "Lago Maggiore",
  date: "23/04/2022",
  comment:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  imgs: [testA, testB, testA, testB, testA, testB, testA, testB, testA, testB],
});
