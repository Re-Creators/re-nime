import DetailHeader from "../components/detail/DetailHeader";
import { Outlet } from "react-router-dom";
import { AiFillStar, AiFillHeart } from "react-icons/ai";

function DetailPage() {
  let overview = `Timid Tadano is a total wallflower, and that’s just the way he
  likes it. But all that changes when he finds himself alone in a
  classroom on the first day of high school with the legendary Komi.
  He quickly realizes she isn’t aloof—she’s just super awkward. Now
  he’s made it his mission to help her on her quest to make 100
  friends! (Source: Viz Media) Lorem ipsum dolor sit amet
  consectetur adipisicing elit. Iure consectetur aut asperiores
  nulla doloribus minima accusamus nostrum deleniti! Voluptatibus
  magnam veritatis accusantium! Esse sequi dolorum animi repellat
  ea. Non, omnis. Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Sint ex illum vero! Sint a quia dolor, eveniet quam odit
  suscipit accusantium nam explicabo neque sit natus mollitia quasi
  saepe nostrum consectetur vel culpa at odio quod. Suscipit
  consequuntur recusandae magni quidem optio libero exercitationem
  <br>
  <br>
  quasi voluptatem cupiditate eum fugiat reiciendis dolor, culpa
  modi perspiciatis sequi ut obcaecati dignissimos nam vero! Aliquam
  provident optio adipisci voluptas placeat sunt quae doloribus
  vitae, voluptates illo ipsum nesciunt esse soluta ex animi rem
  obcaecati praesentium dicta facilis? Itaque enim pariatur, libero
  consequuntur eos quis tenetur laboriosam, ipsum quidem ut
  perferendis vitae, nostrum delectus a dolore eveniet laudantium
  aliquid quaerat fugit ullam debitis reiciendis beatae. At deleniti
  rem, enim natus ipsa vero tempora explicabo iste dolore pariatur
  voluptas veritatis, maxime eveniet. Ratione quo ullam soluta
  facilis itaque iste quibusdam sapiente distinctio minima maxime
  repudiandae nam voluptatum magni, eligendi enim aliquid non
  adipisci reiciendis vitae! Doloremque possimus perspiciatis modi
  dolorum sed voluptates omnis. Iusto nesciunt ad, quibusdam quod
  quo nisi tempora voluptate possimus quasi iure, iste maxime
  necessitatibus nobis provident dolorum facilis expedita molestias,
  sint corporis! Vitae omnis nesciunt voluptate ex accusantium,
  officiis inventore, culpa repudiandae debitis quasi architecto
  corrupti harum blanditiis dolores. Dignissimos, sunt praesentium?`;

  return (
    <div>
      <DetailHeader overview={overview} />
      <div className="mt-5 max-w-container mx-auto grid grid-cols-detail-content gap-10">
        <div className="text-white">
          <div className="text-xs font-semibold">
            <p className="flex items-center px-2 py-3 bg-primary capitalize rounded-md mb-5">
              <AiFillStar className="text-yellow-500 mr-3 w-4 h-4" />
              #6 Highest rated all the time
            </p>
            <p className="flex items-center px-2 py-3 bg-primary capitalize rounded-md">
              <AiFillHeart className="text-red-400 mr-3 w-4 h-4" />
              #296 most popular all time
            </p>
          </div>
          <div className="mt-5 bg-primary rounded-md px-3 py-3">
            <div className="mb-3">
              <div className="font-semibold">Format</div>
              <div className="text-sm">TV</div>
            </div>
            <div className="mb-3">
              <div className="font-semibold">Episodes</div>
              <div className="text-sm">22</div>
            </div>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
