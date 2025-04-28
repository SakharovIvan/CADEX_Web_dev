import React, { createContext, useState } from "react";
import { Coordinates, MyGroup, MyGroupForm } from "./lib/group.lib";
import { MyGroupContextValue } from "./lib/group.lib";
import { RandomCoordinates, RandomSize } from "./lib/Random";

export const MyGroupContext = createContext<MyGroupContextValue>({
  groups: [],
  addGroup: (groupArray: MyGroupForm[]) => {},
  toggle: null,
  toggleGroup: (id: number | null) => {},
  clearGroups: () => {},
});

export const MyGroupProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [groups, setGroups] = useState<MyGroup[]>([]);
  const [toggle, setToggle] = useState<number | null>(null);
  const addGroup = (groupArray: MyGroupForm[]) => {
    
    const newgroupArray= groupArray.map((el)=>{
      const id = groups.length +el.userNumber;
      const position: Coordinates = RandomCoordinates(1, 15);
      return {
        ...el,id,position
      }
    })

    setGroups([...groups, ...newgroupArray]);
  };
  
  const toggleGroup = (id: number | null) => {
    console.log(`${id} was clicked`);
    setToggle(id);
  };

  const clearGroups = () => {
    setGroups([]);
  };
  const contextValue: MyGroupContextValue = {
    groups,
    addGroup,
    toggle,
    toggleGroup,
    clearGroups,
  };

  return (
    <MyGroupContext.Provider value={contextValue}>
      {children}
    </MyGroupContext.Provider>
  );
};
