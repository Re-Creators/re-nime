import { Link } from "react-router-dom";

function RelationCard({ img, relationType, type, status, title }) {
  return (
    <div className="min-w-[250px] max-w-[400px] white-space-normal mr-4 md:min-w-fit bg-primary grid grid-cols-detail-relation gap-3">
      <img src={img} alt="" className="w-full bg-cover" />
      <div className="py-3 flex flex-col capitalize">
        <h3 className="font-semibold text-sm text-active">{relationType}</h3>
        <Link
          to="#"
          className="hover:text-active text-sm line-clamp-2 md:text-base"
        >
          {title}
        </Link>
        <div className="mt-auto text-xs text-gray-400">
          {type} · {status}
        </div>
      </div>
    </div>
  );
}

export default RelationCard;
