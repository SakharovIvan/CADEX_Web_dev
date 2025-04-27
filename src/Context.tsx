import React, { createContext, useState } from "react";
import { Coordinates,  MyGroup, MyGroupForm } from "./lib/group.lib";
import { MyGroupContextValue } from "./lib/group.lib";
import { RandomCoordinates, RandomSize } from "./lib/Random";

export const MyGroupContext = createContext<MyGroupContextValue>({
  groups: [],
  addGroup: ({type,size,color}:MyGroupForm) => {},
  toggleGroup: () => {},
  clearGroups: () => {},
});

export const MyGroupProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [groups, setGroups] = useState<MyGroup[]>([]);

  const addGroup = ({userNumber,type,size,color}:MyGroupForm) => {
    const id = groups.length+1
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
  const toggleGroup = () => {};
  const clearGroups = () => {
    setGroups([]);
  };
  const contextValue: MyGroupContextValue = {
    groups,
    addGroup,
    toggleGroup,
    clearGroups,
  };

  return (
    <MyGroupContext.Provider value={contextValue}>
      {children}
    </MyGroupContext.Provider>
  );
};
