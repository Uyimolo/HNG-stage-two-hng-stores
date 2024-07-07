// import { useEffect, useState } from 'react';

// type LightBoxProps = {
//   images: string[] | undefined;
// };
// const LightBox = ({ images }: LightBoxProps) => {
//   const [currentImage, setCurrentImage] = useState<string>('');

//   useEffect(() => {
//     if (images) setCurrentImage(images[0]);
//   }, [images]);

//   return (
//     <div className='space-y-5 grid lg:space-y-0 lg:gap-[1%] lg:grid-cols-[1fr,80%] overflow-hidden'>
//       <div className='aspect-square bg-gray rounded-md overflow-hidden relative lg:order-2'>
//         <img
//           src={currentImage}
//           alt=''
//           className='w-[80%] object-contain aspect-square absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'
//         />
//       </div>
//       {/* thumbnails */}
//       <div className='w-full grid grid-cols-4 gap-2 lg:grid-cols-1 lg:grid-rows-4 lg:order-1 bg-white'>
//         {images?.map((image) => (
//           <div
//             className=' bg-gray aspect-square grid relative rounded-md '
//             onClick={() => setCurrentImage(image)}
//             onMouseOver={() => setCurrentImage(image)}>
//             <img
//               src={image}
//               alt=''
//               className='w-[80%] object-contain aspect-square absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 '
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LightBox;
