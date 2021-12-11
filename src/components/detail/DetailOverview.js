import { DetailContext } from "../../context/detailContext";
import { useContext } from "react";
import RelationCard from "../Cards/RelationCard";
import CharacterCard from "../Cards/CharacterCard";
import StaffCard from "../Cards/StaffCard";
import RelationCardSmall from "../Cards/RelationCardSmall";

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
              // <RelationCard
              //   key={relation.id}
              //   type={relation.node.type}
              //   relationType={relation.relationType}
              //   status={relation.node.status}
              //   title={relation.node.title.userPreferred}
              // />
              <RelationCardSmall key={relation.id} />
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
              <CharacterCard
                key={char.id}
                charImg={char.node.image.large}
                charName={char.node.name.userPreferred}
                charRole={char.role}
                vaImg={char.voiceActors[0]?.image.large}
                va={char.voiceActors[0]?.name.userPreferred}
                vaLang={char.voiceActors[0]?.language}
              />
            ))}
          </div>
        </div>
      )}

      {/* Staff preview */}
      <div className="mb-3">
        <h1>Staff</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
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
