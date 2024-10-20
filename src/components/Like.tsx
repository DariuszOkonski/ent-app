import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState<boolean>(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) {
    return <FaHeart color='#ff6b81' size={20} onClick={toggle} />;
  }

  return <FaRegHeart color='#ff6b81' size={20} onClick={toggle} />;
};

export default Like;
