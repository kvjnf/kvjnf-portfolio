import { RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

export function useOnClickOutSide(ref: RefObject<HTMLElement>, handler: (e) => void) {
  useEffect(
    () => {
      const listener = (event: Event) => {

        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}
