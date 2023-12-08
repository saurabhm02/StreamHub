import React, { useRef, useEffect } from 'react';
import { tags } from '../../utils/constant';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Tag from './Tag';

const TagList = () => {
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
    <div className="flex sticky top-[64px] z-40 bg-white pb-2">
      <button onClick={prevIcon} className="hover:rounded-full w-10 h-10 mr-2 hover:bg-gray-100 fixed z-50">
        <FiChevronLeft className="inline-block" />
        </button>
      <div ref={scrollRef} className="max-w-[86%] overflow-x-hidden flex mx-12">
        {
          tags.map((btnName, index) => {
            return <Tag key={index} name={btnName} />
          })
        }
      </div>
      <button onClick={nextIcon} className="hover:rounded-full w-10 h-10 ml-2 right-20 hover:bg-gray-100 fixed z-50">
      <FiChevronRight className="inline-block" />
      </button>
    </div>
  );
};

export default TagList;
