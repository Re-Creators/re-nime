function Option({ title }) {
  return (
    <div className="rounded-md absolute w-full top-full mt-3 z-50 bg-primary py-3 pl-3">
      <div className="max-h-option overflow-auto custom-scrollbar">
        <div className="font-semibold">{title}</div>
        <div className=" text-sm pr-3">
          <div className="py-2 px-4 cursor-pointer hover:bg-secondary rounded-md my-1">
            Action
          </div>
        </div>
      </div>
    </div>
  );
}

export default Option;
