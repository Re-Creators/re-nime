function FilterSelectedItem({ items, itemKey, onRemoveSelected }) {
  return (
    <div className="flex gap-3">
      {items.map((item, index) => (
        <span
          className="py-1 px-3 bg-primary rounded-md cursor-pointer"
          key={index}
          onClick={() => onRemoveSelected(itemKey, item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default FilterSelectedItem;
