import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Row } from "react-bootstrap";
import _interface from "./components/interface";
import MyScene from "./components/Scene";
import { MyGroupProvider } from "./Context";

function App() {
  
  return (
    <div className="App info">
      <MyGroupProvider>    
        <Row >
        <Col sm={4} style={{position:'relative'}}>
          <_interface></_interface>
        </Col>
        <Col sm={8} className="TreeScreen">
          <MyScene></MyScene>
        </Col>
      </Row>
      </MyGroupProvider>

    </div>
  );
}

export default App;
