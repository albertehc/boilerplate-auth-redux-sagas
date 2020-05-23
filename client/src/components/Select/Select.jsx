import React from "react";

export default ({ register, selects, type }) => (
  <select name={type} ref={register}>
    {selects?.map((e) => (
        <option key={e.id} value={e.value}>
          {e.text}
        </option>
      ))}
  </select>
);
