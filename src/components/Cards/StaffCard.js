import { Link } from "react-router-dom";

function StaffCard({ img, name, role }) {
  return (
    <div className="bg-primary flex h-detail-card">
      <div className="w-1/2 flex gap-2">
        <img
          src={img}
          alt=""
          className="h-full object-cover object-center w-16"
        />
        <div className="h-full flex flex-col py-2">
          <Link
            to="/anime/8343/monogatari"
            className="hover:text-active text-xs"
          >
            {name}
          </Link>
          <div className="mt-auto text-xs text-gray-400">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default StaffCard;
