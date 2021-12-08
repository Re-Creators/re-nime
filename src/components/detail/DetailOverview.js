import { Link } from "react-router-dom";
import { DetailContext } from "../../context/detailContext";
import { useContext } from "react";

function DetailOverview({ tes }) {
  const { data } = useContext(DetailContext);

  return (
    <div className="text-white">
      {/* Relations preview */}
      {data.relations.edges.length > 0 && (
        <div className="mb-3">
          <h1>Relations</h1>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {data.relations.edges.map((relation) => (
              <div
                key={relation.id}
                className="bg-primary grid grid-cols-detail-relation gap-3"
              >
                <img
                  src={relation.node.coverImage.large}
                  alt=""
                  className="w-full bg-cover"
                />
                <div className="py-3 flex flex-col capitalize">
                  <h3 className="font-semibold text-sm text-active">
                    {relation.relationType.toLowerCase()}
                  </h3>
                  <Link
                    to="/anime/8343/monogatari"
                    className="hover:text-active"
                  >
                    {relation.node.title.userPreferred}
                  </Link>
                  <div className="mt-auto text-xs text-gray-400">
                    {relation.node.type.toLowerCase()} ·{" "}
                    {relation.node.status.toLowerCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Characters Preview */}
      {data.characterPreview.edges.length > 0 && (
        <div className="mb-3">
          <h1>Characters</h1>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {data.characterPreview.edges.map((char) => (
              <div key={char.id} className="bg-primary flex h-detail-card">
                {/* Character */}
                <div className="w-1/2 flex gap-2">
                  <img
                    src={char.node.image.large}
                    alt=""
                    className="h-full bg-cover w-16"
                  />
                  <div className="h-full flex flex-col py-2">
                    <Link
                      to="/anime/8343/monogatari"
                      className="hover:text-active text-xs"
                    >
                      {char.node.name.userPreferred}
                    </Link>
                    <div className="mt-auto text-xs text-gray-400">
                      {char.role.toLowerCase()}
                    </div>
                  </div>
                </div>
                {/* Voice Actor */}
                <div className="w-1/2 flex gap-2 flex-row-reverse">
                  <img
                    src={char.voiceActors[0]?.image.large}
                    alt=""
                    className="h-full bg-cover w-16"
                  />
                  <div className="h-full flex flex-col py-2">
                    <Link
                      to={"/anime/8343/monogatari"}
                      className="hover:text-active text-xs"
                    >
                      {char.voiceActors[0]?.name.userPreferred}
                    </Link>
                    <div className="mt-auto text-xs text-right text-gray-400">
                      {char.voiceActors[0]?.language}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Staff preview */}
      <div className="mb-3">
        <h1>Staff</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {data.staffPreview.edges.map((staff) => (
            <div key={staff.id} className="bg-primary flex h-detail-card">
              {/* Character */}
              <div className="w-1/2 flex gap-2">
                <img
                  src={staff.node.image.large}
                  alt=""
                  className="h-full bg-cover w-16"
                />
                <div className="h-full flex flex-col py-2">
                  <Link
                    to="/anime/8343/monogatari"
                    className="hover:text-active text-xs"
                  >
                    {staff.node.name.userPreferred}
                  </Link>
                  <div className="mt-auto text-xs text-gray-400">
                    {staff.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailOverview;
