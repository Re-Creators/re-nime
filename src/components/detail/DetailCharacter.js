import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { CHARACTER_LIST } from "../../graphql/querySchema";
import CharacterCard from "../Cards/CharacterCard";

function DetailCharacter() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(CHARACTER_LIST, {
    variables: {
      id: id,
      page: 1,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      {data.Media.characters.edges.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mt-4 text-white">
          {data.Media.characters.edges.map((char) => (
            <CharacterCard
              key={char.id}
              charImg={char.node.image.large}
              charName={char.node.name.userPreferred}
              charRole={char.role}
              vaImg={char.voiceActorRoles[0]?.voiceActor.image.large}
              va={char.voiceActorRoles[0]?.voiceActor.name.userPreferred}
              vaLang={char.voiceActorRoles[0]?.voiceActor.language}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DetailCharacter;
