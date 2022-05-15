import { createContext, useState, useContext } from "react";

interface ContextState {
  open: boolean;
  setOpen: (arg: boolean) => void;
}
interface Props {
  children: React.ReactElement;
}

const DropDownContext = createContext<ContextState>({
  open: false,
  setOpen: () => {}
});
;
function DropDownContextProvider({ children }: Props) {
  const [open, setOpen] = useState(false);

   return (
    <DropDownContext.Provider value={{ open, setOpen }}>
      {children}
    </DropDownContext.Provider>
   )
}

function useDropDownContext() {
    const context = useContext(DropDownContext);

    // if `undefined`, throw an error
    if (context === undefined) {
      throw new Error("useDropDownContext was used outside of its Provider");
    }
  
    return context;
}

export { useDropDownContext, DropDownContextProvider }