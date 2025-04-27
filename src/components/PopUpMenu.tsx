import { useContext, useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { MyGroupContext } from "../Context";
import { GROUPTYPES, MyGroupForm } from "../lib/group.lib";
import * as THREE from "three";

export default function ({ cancel }: { cancel: () => void }) {
  const { groups, addGroup } = useContext(MyGroupContext);
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
      color: new THREE.Color(Math.random(), Math.random(), Math.random()),
    };
    addGroup(newGroup);
  }

  return (
    <>
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
          <Form.Label>id</Form.Label>
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
    </>
  );
}
