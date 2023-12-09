import React, { useRef, useEffect } from 'react';
import { tags } from '../../utils/constant';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Tag from './Tag';
import { useSelector } from 'react-redux';

const TagList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const scrollRef = useRef(null);

  const prevIcon = () => {
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const itemWidth = parseInt(getComputedStyle(scrollRef.current.children[0]).width);
        scrollRef.current.scrollLeft = scrollLeft - itemWidth * 3;
      }
    });
  };

  const nextIcon = () => {
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const itemWidth = parseInt(getComputedStyle(scrollRef.current.children[0]).width);
        scrollRef.current.scrollLeft = scrollLeft + itemWidth * 3;
      }
    });
  };

  useEffect(() => {
    // Add any additional setup logic here
  }, []);

  return (
    <div className={`tags mx-2 sticky z-40 flex items-center ${
          isMenuOpen
            ? "lg:w-[calc(100vw-19rem)] w-[calc(100vw-8rem)]"
            : "lg:w-[calc(100vw-8rem)] w-[calc(100vw-3rem)]"
        } min-w-[250px]
        pt-2`}
    >
      <button onClick={prevIcon} className="hover:rounded-full w-10 h-10 hover:bg-gray-100">
        <FiChevronLeft className="inline-block" />
      </button>

      <div ref={scrollRef} className=" flex w-full overflow-x-hidden text-sm ">
        {tags.map((btnName, index) => {
          return <Tag key={index} Tagname={btnName} />
        })}
      </div>
      <button onClick={nextIcon} className="hover:rounded-full w-10 h-10  top-[4.5rem] right-20 hover:bg-gray-100 z-50">
      <FiChevronRight className="inline-block" />
      </button>
    </div>
  );
};

export default TagList;

