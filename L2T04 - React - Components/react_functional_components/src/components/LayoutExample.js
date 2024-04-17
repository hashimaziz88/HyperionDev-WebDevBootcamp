import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Create the LayoutExample component
function LayoutExample() {
  return (
    // Create an instance of the Container component which will
    // automate the layout
    <Container>
      {/* The Container component can have standard HTML elements as children
       */}
      <h2>Layout Example</h2>
      <hr />
      <h3> Rows and Columns Auto Layout </h3>
      {/* Using the Row & Col components we can create a Grid Layout */}
      <Row>
        <Col className="red-border">Row 1 : Column 1 of 2</Col>
        <Col className="red-border">Row 1 : Column 2 of 2</Col>
      </Row>
      <Row>
        <Col className="red-border">Row 2 : Column 1 of 3</Col>
        <Col className="red-border">Row 2 : Column 2 of 3</Col>
        <Col className="red-border">Row 2 : Column 3 of 3</Col>
      </Row>
      <h3> Rows and Columns Specified sizes </h3>
      <Row>
        {/* We specify the size of the first column
         */}
        <Col xs={3} className="red-border">
          Row 1 : Column 1 of 2
        </Col>
        {/* The second column fills up the remaining space */}
        <Col className="red-border">Row 1 : Column 2 of 2</Col>
      </Row>
      <Row>
        {/* Each of the Columns has a fixed size
         */}
        <Col xs={2} className="red-border">
          Row 2 : Column 1 of 3
        </Col>
        <Col xs={3} className="red-border">
          Row 2 : Column 2 of 3
        </Col>
        <Col xs={4} className="red-border">
          Row 2 : Column 3 of 3
        </Col>
      </Row>
    </Container>
  );
}
export default LayoutExample;
