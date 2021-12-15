import { DetailContext } from "../../context/detailContext";
import { useContext } from "react";
import RelationCard from "../Cards/RelationCard";
import CharacterCard from "../Cards/CharacterCard";
import StaffCard from "../Cards/StaffCard";
import RelationCardSmall from "../Cards/RelationCardSmall";
import parse from "html-react-parser";

function DetailOverview() {
  const { data } = useContext(DetailContext);
  return (
    <div className="text-white">
      {data && (
        <div className="md:hidden text-white mb-3">
          <h2 className="my-3">Description</h2>
          <div className="bg-primary p-5 text-sm">
            {parse(data.description)}
          </div>
        </div>
      )}

      {/* Relations preview */}
      {data.relations.edges.length > 0 && (
        <div className="mb-3">
          <h1>Relations</h1>
          {data.relations.edges.length > 4 ? (
            <div className="flex  flex-wrap gap-5">
              {data.relations.edges.map((relation) => (
                <RelationCardSmall
                  img={relation.node.coverImage.large}
                  key={relation.id}
                  type={relation.node.type}
                  relationType={relation.relationType}
                  status={relation.node.status}
                  title={relation.node.title.userPreferred}
                />
              ))}
            </div>
          ) : (
            <div className="flex overflow-x-auto md:grid grid-cols-2 gap-4 mt-4">
              {data.relations.edges.map((relation) => (
                <RelationCard
                  img={relation.node.coverImage.large}
                  key={relation.id}
                  type={relation.node.type}
                  relationType={relation.relationType}
                  status={relation.node.status}
                  title={relation.node.title.userPreferred}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Characters Preview */}
      {data.characterPreview.edges.length > 0 && (
        <div className="mb-3">
          <h1>Characters</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {data.characterPreview.edges.map((char) => (
              <CharacterCard
                key={char.id}
                id={char.node.id}
                charImg={char.node.image.large}
                charName={char.node.name.userPreferred}
                charRole={char.role}
                vaImg={char.voiceActors[0]?.image.large}
                vaName={char.voiceActors[0]?.name.userPreferred}
                vaLang={char.voiceActors[0]?.language}
              />
            ))}
          </div>
        </div>
      )}

      {/* Staff preview */}
      <div className="mb-3">
        <h1>Staff</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {data.staffPreview.edges.map((staff) => (
            <StaffCard
              key={staff.id}
              img={staff.node.image.large}
              name={staff.node.name.userPreferred}
              role={staff.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailOverview;
