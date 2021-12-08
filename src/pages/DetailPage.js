import DetailHeader from "../components/detail/DetailHeader";
import { Outlet, useParams } from "react-router-dom";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { useQuery } from "@apollo/client";
import { DETAIL_ANIME } from "../graphql/querySchema";
import { DetailContext } from "../context/detailContext";

function DetailPage() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(DETAIL_ANIME, {
    variables: {
      id: id,
      type: "ANIME",
      isAdult: false,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <DetailHeader
        overview={data.Media.description}
        title={data.Media.title.userPreferred}
        bannerImg={data.Media.bannerImage}
        coverImg={data.Media.coverImage.large}
      />
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
          {/* Content tab */}
          <DetailContext.Provider value={{ data: data.Media }}>
            <Outlet />
          </DetailContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
