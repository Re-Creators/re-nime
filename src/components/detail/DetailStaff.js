import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { STAFF_LIST } from "../../graphql/querySchema";
import StaffCard from "../Cards/StaffCard";
function DetailStaff() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(STAFF_LIST, {
    variables: {
      id: id,
      page: 1,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="grid grid-cols-2 gap-4 mt-4 text-white">
      {data.Media.staff.edges.map((staff) => (
        <StaffCard
          img={staff.node.image.large}
          name={staff.node.name.userPreferred}
          role={staff.role}
        />
      ))}
    </div>
  );
}

export default DetailStaff;
