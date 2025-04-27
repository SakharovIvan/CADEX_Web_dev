import React, { createContext, useState } from "react";
import { Coordinates, MyGroup, MyGroupForm } from "./lib/group.lib";
import { MyGroupContextValue } from "./lib/group.lib";
import { RandomCoordinates, RandomSize } from "./lib/Random";

export const MyGroupContext = createContext<MyGroupContextValue>({
  groups: [],
  addGroup: ({ type, size, color }: MyGroupForm) => {},
  toggle: null,
  toggleGroup: (id: number | null) => {},
  clearGroups: () => {},
});

export const MyGroupProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [groups, setGroups] = useState<MyGroup[]>([]);
  const [toggle, setToggle] = useState<number | null>(null);
  const addGroup = ({ userNumber, type, size, color }: MyGroupForm) => {
    const id = groups.length + 1;
    const position: Coordinates = RandomCoordinates(1, 15);
    const newGroup: MyGroup = {
      userNumber,
      id,
      color,
      position,
      type,
      size,
    };
    setGroups([...groups, newGroup]);
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
