import { useContext, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { MyGroupContext } from "../Context";
import PopUpMenu from "./PopUpMenu";

export default function () {
  const { groups, clearGroups } = useContext(MyGroupContext);
  const [popUpVisible, setPopVisible] = useState(false);
  const cancelPopUp = () => setPopVisible(false);

  const table = (
    <Table>
      <tbody>
        {groups.map((el) => {
          return (
            <tr key={el.id}>
              <td>
                {el.type} {el.userNumber}
              </td>
              <td>position: {JSON.stringify(el.position)}</td>
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
