import React, { useState } from "react";
import {
  Card,
  Form,
  Row,
  Col,
  Container,
  Modal,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomButton from "./Button"; // Importing the CustomButton component
import GlobalState from "../store/GlobalState"; // Importing the GlobalState context
import "./BalanceManager.css"; // Importing custom CSS styles for BalanceManager

const BalanceManager = () => {
  // State variables using the useState hook
  const [showModal, setShowModal] = useState(false); // State for showing/hiding the modal
  const [amount, setAmount] = useState(""); // State for storing the amount input value
  const [errorMessage, setErrorMessage] = useState(""); // State for storing error messages

  // Function to close the modal
  const handleCloseModal = () => setShowModal(false);

  // Function to show the modal
  const handleShowModal = () => setShowModal(true);

  // Function to handle withdrawing money
  const handleWithdraw = (dispatch, amount) => {
    const withdrawAmount = parseFloat(amount); // Parse the input amount to a float
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
      dispatch({ type: "WITHDRAW", payload: withdrawAmount }); // Dispatching a withdrawal action
      setAmount(""); // Clearing the amount input field
    }
  };

  // Function to handle applying interest
  const handleInterest = (dispatch, state) => {
    if (state.balance < 0) {
      // If balance is negative, set an error message
      setErrorMessage("Cannot apply interest to a negative balance.");
      return;
    }
    dispatch({ type: "ADD_INTEREST" }); // Dispatching an action to add interest
  };

  // Function to handle applying charges
  const handleCharges = (dispatch, state) => {
    if (state.balance < 0) {
      // If balance is negative, set an error message
      setErrorMessage("Cannot apply charges to a negative balance.");
      return;
    }
    dispatch({ type: "CHARGES" }); // Dispatching an action to apply charges
  };

  return (
    <GlobalState>
      {(
        { state, dispatch } // Rendering the GlobalState context and accessing state and dispatch functions
      ) => (
        <Container className="d-flex justify-content-center align-items-center h-100">
          <Card
            style={{ width: "25rem" }}
            className={`text-center ${
              state.balance < 0 ? "negative-balance" : ""
            }`}
          >
            <Card.Header as="h5" className="text-black">
              Banking App
            </Card.Header>
            <Card.Body>
              {/* Displaying error message if it exists */}
              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}
              <Card.Text className="text-black">
                {state.balance < 0 ? (
                  <>
                    <span>
                      Balance is negative: -R {Math.abs(state.balance)}
                    </span>
                    <br />
                    <span>Please deposit funds</span>
                  </>
                ) : (
                  `Current Balance: R${state.balance}`
                )}
              </Card.Text>

              {/* Form for entering amount */}
              <Form>
                <Form.Group as={Row} controlId="formAmount">
                  <Form.Label column sm="4" className="text-black">
                    Amount:
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="number"
                      step="any"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </Col>
                </Form.Group>
                {/* Buttons for depositing and withdrawing */}
                <CustomButton
                  variant="success"
                  onClick={() => {
                    const depositAmount = parseFloat(amount);
                    if (!isNaN(depositAmount) && depositAmount > 0) {
                      dispatch({ type: "DEPOSIT", payload: depositAmount });
                      setAmount("");
                    }
                  }}
                  text="Deposit"
                />
                <CustomButton
                  variant="danger"
                  onClick={() => {
                    const withdrawAmount = parseFloat(amount);
                    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
                      if (state.balance - withdrawAmount < 0) {
                        handleShowModal(); // Show modal if withdrawing into negative balance
                      } else {
                        handleWithdraw(dispatch, amount);
                      }
                    }
                  }}
                  text="Withdraw"
                />
              </Form>
            </Card.Body>
            <Card.Footer>
              {/* Button to add interest */}
              <CustomButton
                variant="primary"
                onClick={() => handleInterest(dispatch, state)}
                text="Add Interest (5%)"
              />
              {/* Button to apply charges */}
              <CustomButton
                variant="primary"
                onClick={() => handleCharges(dispatch, state)}
                text="Apply Charges (15%)"
              />
            </Card.Footer>
          </Card>

          {/* Modal for confirming withdrawal from negative balance */}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Withdrawal</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-black">
              Are you sure you want to withdraw into a negative balance?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  handleWithdraw(dispatch, amount);
                  handleCloseModal();
                }}
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      )}
    </GlobalState>
  );
};

export default BalanceManager;
