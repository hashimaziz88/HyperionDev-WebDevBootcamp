import Stack from "react-bootstrap/Stack";
function StackExample() {
  return (
    <div>
      <h3> Vertical Stack</h3>
      {/* Stacks allow for a quick Grid Layout
without the need for multiple Row & Col components */}
      {/* a Stack component with a standard vertical layout
       */}
      <Stack className="red-border" gap={2}>
        <div className="red-border">First item</div>
        <div className="red-border">Second item</div>
        <div className="red-border">Third item</div>
      </Stack>
      <h3>Horizontal Stack</h3>
      {/*
{/* a Stack component with a horizontal layout
*/}
      <Stack className="red-border" direction="horizontal" gap={2}>
        <div className="red-border">First item</div>
        <div className="red-border ">Second item</div>
        <div
          className="red-border
"
        >
          Third item
        </div>
      </Stack>
    </div>
  );
}
export default StackExample;
