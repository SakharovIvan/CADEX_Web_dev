import { useContext, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { MyGroupContext } from "../Context";
import PopUpMenu from "./PopUpMenu";
import { getColor } from "../lib/Colors";

export default function () {
  const { groups, clearGroups, toggleGroup, toggle } =
    useContext(MyGroupContext);
  const [popUpVisible, setPopVisible] = useState(false);
  const cancelPopUp = () => {
    setPopVisible(false);
    toggleGroup(null);
  };

  const table = (
    <Table>
      <tbody>
        {groups.map((el) => {
          return (
            <tr
              className={toggle === el.id ? "table-active" : ""}
              key={el.id}
              onClick={() => {
                setPopVisible(true);
                toggleGroup(el.id);
              }}
            >
              <td>
                {el.type} {el.userNumber}
              </td>
              <td>Position: {JSON.stringify(el.position)}</td>
              <td>
                Fron color:{" "}
                <p
                  style={{
                    backgroundColor: getColor(...el.color[0]),
                    minWidth: "10px",
                    minHeight: "10px",
                  }}
                ></p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
  return (
    <>
      {table}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "120%",
          width: "40%",
        }}
      >
        {popUpVisible ? <PopUpMenu cancel={cancelPopUp} /> : <></>}
      </div>
      <div style={{ position: "absolute", bottom: "30px", left: "50%" }}>
        <Button onClick={() => clearGroups()}>Clear content</Button>
        <Button onClick={() => setPopVisible(true)}>Add Group</Button>
      </div>
    </>
  );
}
