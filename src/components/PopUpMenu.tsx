import { useContext, useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { MyGroupContext } from "../Context";
import { GROUPTYPES, MyGroupForm } from "../lib/group.lib";
import * as THREE from "three";
import { getColor } from "../lib/Colors";

export default function ({ cancel }: { cancel: () => void }) {
  const { groups,toggle, addGroup } = useContext(MyGroupContext);
  const [form, setForm] = useState({
    userNumber: 1,
    type: "",
    Length: 0,
    Width: 0,
    Height: 0,
  });

  function createGroup() {
    const type =
      form.type === GROUPTYPES.BOX || form.type === ""
        ? GROUPTYPES.BOX
        : GROUPTYPES.PYRAMID;
    const newGroup: MyGroupForm = {
      userNumber: form.userNumber,
      type,
      size: {
        Length: form.Length,
        Width: form.Width,
        Height: form.Height,
      },
      color: [
        [Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random()],
        [Math.random(), Math.random(), Math.random()],
      ],
    };
    addGroup(newGroup);
  }


  return (
    <>
    {toggle!==null? (<>
    <Table>
      <tbody>
        <tr>
          <td>id</td>
          <td>{toggle}</td>
        </tr>
        <tr>
          <td>position</td>
          <td>{JSON.stringify(groups[toggle-1]?.position)}</td>
        </tr>
        <tr>
          <td>size</td>
          <td>{JSON.stringify(groups[toggle-1]?.size)}</td>
        </tr>
        <tr>
          <td>id</td>
          <td><p style={{backgroundColor:getColor(...groups[toggle-1]?.color[0])}}>_</p><p style={{backgroundColor:getColor(...groups[toggle-1]?.color[1])}}> _</p><p style={{backgroundColor:getColor(...groups[toggle-1]?.color[2])}}>_</p></td>
        </tr>
      </tbody>
    </Table>
    <Button onClick={cancel}>Cancel</Button>

    </>):
      (    <>
        <Form>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Select
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value={GROUPTYPES.BOX}>{GROUPTYPES.BOX}</option>
              <option value={GROUPTYPES.PYRAMID}>{GROUPTYPES.PYRAMID}</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Length</Form.Label>
            <Form.Control
              type="length"
              placeholder="1"
              value={form.Length}
              onChange={(e) =>
                setForm({ ...form, Length: Number(e.target.value) })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Width</Form.Label>
            <Form.Control
              type="width"
              placeholder="1"
              value={form.Width}
              onChange={(e) =>
                setForm({ ...form, Width: Number(e.target.value) })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="height"
              placeholder="1"
              value={form.Height}
              onChange={(e) =>
                setForm({ ...form, Height: Number(e.target.value) })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>userNumber</Form.Label>
            <Form.Control
              type="id"
              placeholder={`${form.userNumber}`}
              value={form.userNumber}
              onChange={(e) =>
                setForm({ ...form, userNumber: Number(e.target.value) })
              }
            />
          </Form.Group>
  
          <Button onClick={() => createGroup()}>OK</Button>
          <Button onClick={cancel}>Cancel</Button>
        </Form>
      </>)

    }
</>
  );
}
