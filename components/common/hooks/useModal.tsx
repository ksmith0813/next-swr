import { Dispatch, SetStateAction, useState } from 'react';

export type UseModalProps = {
  showing: boolean;
  setShowing: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
};

export const useModal = () => {
  const [showing, setShowing] = useState(false);

  const toggle = () => setShowing(!showing);

  return { showing, setShowing, toggle };
};
