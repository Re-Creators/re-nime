import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

function Dropdown({
  title,
  items,
  multipleSelect = false,
  searchAble = false,
  setSelected,
}) {
  const [localItems, setLocalItems] = useState(items);
  const [showOption, setShowOption] = useState(false);
  const [selection, setSelection] = useState([]);
  const [inputFocus, setInputFocus] = useState(false);

  let domNode = useClickOutside(() => {
    setShowOption(false);
  });

  function onChangeHandler(e) {
    let keyword = e.target.value;

    if (keyword === "") {
      setLocalItems(items);
      return;
    }

    setLocalItems(
      items.filter((item) => item.toLowerCase().includes(keyword.toLowerCase()))
    );
  }

  function handleOnClick(item) {
    if (!selection.includes(item)) {
      if (!multipleSelect) {
        setSelected(title, [item]);
        setSelection([item]);
      } else {
        setSelected(title, [...selection, item]);
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection.filter(
        (current) => current !== item
      );
      setSelected(title, selectionAfterRemoval);
      setSelection(selectionAfterRemoval);
    }
  }

  function isItemInSelection(item) {
    if (selection.includes(item)) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <div className="capitalize">{title}</div>
      {/* Input */}
      <div className="relative mt-3">
        {selection.length > 0 ? (
          <IoIosClose
            className="w-6 h-6 abs-center right-3 icon-input cursor-pointer"
            onClick={() => {
              setSelection([]);
              setSelected(title, []);
            }}
          />
        ) : (
          <IoIosArrowDown className="w-4 h-4 abs-center right-3 icon-input cursor-pointer" />
        )}

        {!inputFocus && selection.length > 0 && (
          <div className="abs-center text-xs ml-2">
            <span
              className="py-1 px-2 bg-gray-600 rounded-md cursor-pointer mr-1"
              onClick={() => handleOnClick(selection[0])}
            >
              {selection[0]}
            </span>
            {selection.length > 1 && (
              <span className="py-1 px-2 bg-gray-600 rounded-md cursor-pointer">
                +{selection.length}
              </span>
            )}
          </div>
        )}

        <input
          type="text"
          onFocus={() => {
            setShowOption(true);
            setInputFocus(true);
          }}
          onChange={onChangeHandler}
          onBlur={() => setInputFocus(false)}
          placeholder="Any"
          className="w-full p-3 pr-9 rounded-lg outline-none text-xs"
          style={{ backgroundColor: "#282F44" }}
          readOnly={!searchAble}
        />
        {/* Option Component */}

        <div
          className={`rounded-md absolute w-full top-full mt-3 z-50 py-3 pl-3 ${
            showOption && "bg-primary"
          }`}
          ref={domNode}
        >
          {showOption && (
            <div className="max-h-option overflow-auto custom-scrollbar">
              <div className=" text-sm pr-1">
                {localItems.map((item, index) => (
                  <div
                    className="py-2 px-4 cursor-pointer hover:bg-secondary rounded-md my-1"
                    key={index}
                    onClick={() => handleOnClick(item)}
                  >
                    <div className="flex justify-between">
                      <span>{item}</span>
                      {isItemInSelection(item) && <BsCheckCircleFill />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
