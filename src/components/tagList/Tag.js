import React from 'react';

const Tag = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-1 m-2 rounded-md bg-zinc-100 hover:bg-zinc-200 text-lg" style={{ whiteSpace: 'nowrap' }}>
        {name}
      </button>
    </div>
  );
};

export default Tag;
