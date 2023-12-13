const Shimmer = () => {
    return (
      <>
        <div className='flex flex-wrap' data-testid='shimmer'>
          {Array(12)
            .fill([])
            .map((e, index) => (
              <div key={index} className=' m-2 p-3 w-80 h-80'>
                <div className='w-full h-1/2 border rounded-xl bg-64  animate-pulse bg-zinc-200'></div>
                <div className='w-[90%] h-[10%] mt-3 border rounded-full bg-64 animate-pulse bg-zinc-200 '></div>
                <div className='w-[70%] h-[7%]  mt-3 border rounded-full bg-64  animate-pulse bg-zinc-200'></div>
              </div>
            ))}
        </div>
      </>
    );
  };
export default Shimmer;


  export const ShimmerRecommemdedVideo = () => {
    return (
      <div className='h-24 grid grid-cols-12 bg-gray-50 mb-2 '>
          <div className='col-span-5 bg-gray-300 mr-2 rounded-lg '></div>
          <div className='col-span-7 bg-gray-100 grid grid-rows-4 py-1 '>
              <div className='row-span-1  py-2 w-11/12'><p className='bg-gray-300 h-1/2 rounded-lg '></p> </div>
              <div className='row-span-1  py-2 w-10/12'><p className='bg-gray-300 h-1/2 rounded-lg '></p> </div>
              <div className='row-span-1  py-2 w-3/4'><p className='bg-gray-300 h-1/2 rounded-lg'></p> </div>
              <div className='row-span-1  py-2 w-1/2'><p className='bg-gray-300 h-1/2 rounded-lg'></p> </div>
          </div>
      </div>
    )
  }
  