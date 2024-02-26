import { useState } from "react";
import data from "../accordion/data.js";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
    let copyMultiple = [...multiSelection]    // copy multiple selection, we don't want to mess with original array
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)

    if (findIndexOfCurrentId === -1) { // indexOf = -1 means current is not in the array
      copyMultiple.push(getCurrentId)
    }
    else {
      copyMultiple.splice(findIndexOfCurrentId, 1) // splice is used for delete item from the array, this line means remove with the index (findIndexOfCUrrent is the index), and remove 1 item
    }
    setMultiSelection(copyMultiple)
  }

  return (
    <div className='acc-wrapper'>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className='accordion'>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className='item'>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className='title'
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection ? multiSelection.indexOf(dataItem.id) !== -1 && (
                <div className="content">{dataItem.answer}</div>
              ) : selected === dataItem.id && (
                <div className="content">{dataItem.answer}</div>
              )}
              {/* {selected === dataItem.id || multiSelection.indexOf(dataItem.id) !== -1 ? (
                <div className='content'>{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
