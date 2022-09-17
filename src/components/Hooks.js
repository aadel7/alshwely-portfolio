// hooks.js
import { useRef, useState, useEffect } from 'react';

// Hooks - Click Outside
export const useOnClickOutside = (ref, handler) => {

  useEffect
    (
      () => {

        const listener = event => {

          if (!ref.current || ref.current.contains(event.target)) {

            return;

          }

          handler(event);

        };

        document.addEventListener('mousedown', listener);

        return () => {

          document.removeEventListener('mousedown', listener);

        };

      },

      [ref, handler],

    );

};

// Hook - Mouse Over
export const useHover = () => {

  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };

      }

    },

    [ref.current] // Recall only if ref changes

  );

  return [ref, value];

}