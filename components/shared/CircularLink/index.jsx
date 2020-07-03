import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
export const CircularLink = ({ url, fontClass, animation }) => {
  const [isIconHovered, setIsIconHovered] = useState(false);
  const iconScale = useSpring({
    transform: isIconHovered ? 'scale(1.1)' : 'scale(1)'
  });
  return (
    <animated.a
      href={url}
      className="rounded-full p-5 text-c100 bg-c000 hover:bg-c200 hover:text-c000"
      style={animation ? iconScale : null}
      onMouseEnter={() => {
        setIsIconHovered(true);
      }}
      onMouseLeave={() => {
        setIsIconHovered(false);
      }}
    >
      <div className="w-3 h-3 flex justify-center items-center">
        <i className={fontClass}></i>
      </div>
    </animated.a>
  );
};
