import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../Redux/categorySlice';

const Tag = ({ Tagname }) => {

  const [active, setActive] = useState("All");

  const dispatch = useDispatch();

  const handlevideTag = (Tagname) => {
    if (active !== Tagname) {
      dispatch(changeCategory(Tagname));
      setActive(Tagname);
    }
  };

  return (
    <div>
      <button
        className={`px-3 w-fit py-2 mx-2 cursor-pointer hover:bg-zinc-300 rounded-lg ${
          active === Tagname
              ? "bg-slate-900 text-white "
              : "bg-zinc-100"
          }`}
          onClick={() => handlevideTag(Tagname)}
      >
        <span className="whitespace-nowrap">{Tagname}</span>
      </button>
    </div>
  );
};

export default Tag;
