import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
//THIS IS FOR SHOW COLUMN AFTER EACH LETTER TYPING
// const SearchFIlter = ({ filter, setFilter }) => {
//   return (
//     <div>
//       <label htmlFor="search">Search</label>
//       <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
//     </div>
//   );
// };

//THIS IS FOR SHOW COLUMN AFTER BREAK 1s WHILE TYPING
const SearchFIlter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((x) => {
    setFilter(x || undefined);
  }, 1000);
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};
export default SearchFIlter;
