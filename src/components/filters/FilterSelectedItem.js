function FilterSelectedItem({ items }) {
  return (
    <div className="flex gap-3">
      {items.map((item, index) => (
        <span
          className="py-1 px-3 bg-primary rounded-md cursor-pointer"
          key={index}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default FilterSelectedItem;
