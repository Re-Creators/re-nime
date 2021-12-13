import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { CHARACTER_INFO } from "../graphql/querySchema";
import { getMonthName } from "../utils";
import ReactMarkdown from "react-markdown";

function CharacterPage() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(CHARACTER_INFO, {
    variables: {
      id: id,
      page: 1,
      sort: "POPULARITY_DESC",
      onList: null,
      withRoles: true,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="text-white mb-10">
      <div className="min-h-[408px] mt-5 mb-24">
        <div className="bg-primary h-full pt-12">
          <div className="grid grid-cols-[220px_auto_auto] min-w-container xl:max-w-[1300px] mx-auto py-14 gap-14">
            <img
              src={data.Character.image.large}
              alt=""
              className="absolute rounded-md shadow-md"
            />
            <div></div>
            <div className="">
              <h1 className="text-4xl font-semibold">
                {data.Character.name.full}
              </h1>
              <h3 className="mt-2">{data.Character.name.native}</h3>
            </div>
            <div>
              <button className="ml-auto bg-red-600 px-3 py-2 flex items-center gap-2 rounded-md ">
                <AiFillHeart className="text-white" />{" "}
                {data.Character.favourites}
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[220px_auto] min-w-container xl:max-w-[1300px] mx-auto gap-14">
          <div></div>
          <div className="mt-3">
            {data.Character.dateOfBirth.month && (
              <div>
                <span className="font-semibold">Birthday : </span>
                {getMonthName(data.Character.dateOfBirth.month)}{" "}
                {data.Character.dateOfBirth.day}{" "}
              </div>
            )}

            {data.Character.gender && (
              <div>
                <span className="font-semibold">Gender : </span>
                {data.Character.gender}
              </div>
            )}

            {data.Character.bloodType && (
              <div>
                <span className="font-semibold">Blood Type : </span>

                {data.Character.bloodType}
              </div>
            )}
            <div>
              <ReactMarkdown className="markdown whitespace-pre-line ">
                {data.Character.description}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 min-w-container mx-auto xl:max-w-[1300px]">
        <div className="text-right mb-2">Japanese</div>
        <div
          className="grid grid-cols-results justify-between gap-4
        "
        >
          {data.Character.media.edges.map((edge) => (
            <div className="flex flex-col relative">
              <Link to="/" className="h-card-result">
                <img
                  src={edge.node.coverImage.large}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </Link>
              <div>
                <Link to="/">{edge.node.title.userPreferred}</Link>
                {edge.voiceActorRoles.length > 0 && (
                  <div className="text-xs ">
                    <div>
                      {edge.voiceActorRoles[0].voiceActor.name.userPreferred}{" "}
                      {edge.voiceActorRoles[0].roleNotes}
                    </div>
                    <div className="absolute top-[180px] right-0 w-[65px] h-[85px] border-t-4 border-l-4 border-primary box-border cursor-pointer transform hover:scale-105 transition duration-300 rounded-sm">
                      <img
                        src={edge.voiceActorRoles[0].voiceActor.image.large}
                        alt=""
                        className="h-full w-full overflow-hidden "
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CharacterPage;
