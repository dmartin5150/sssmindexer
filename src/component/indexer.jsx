import { startTransition } from "react";
import "./indexer.css";


const Indexer = (index) => {

    const {start,end,docType} = index;

  const options = [
    { label: "H&P", value: 1 },
    { label: "Consent", value: 2 },
    { label: "Orders", value: 3 },
  ];
console.log(index);
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label>
            Starting index
            <input type="text" name="start" value={start} />
          </label>
          <label>
            Ending index
            <input type="text" name="end" value={end}/>
          </label>
          <select name="selectList" className="selectList" placeholder="Select" value={docType}>
              <option value="1">H&P</option> <option value="2">Consent</option>
            <option value="3">Orders</option>
          </select>
        </div>
        <button type="button">Add New Index</button>
      </form>
    </div>
  );
};

export default Indexer;
