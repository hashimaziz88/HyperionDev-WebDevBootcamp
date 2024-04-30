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
import CustomButton from "./Button";
import GlobalState from "../store/GlobalState";
import "./BalanceManager.css";

const BalanceManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleWithdraw = (dispatch, amount) => {
    const withdrawAmount = parseFloat(amount);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
      dispatch({ type: "WITHDRAW", payload: withdrawAmount });
      setAmount("");
    }
  };

  const handleInterest = (dispatch, state) => {
    if (state.balance < 0) {
      setErrorMessage("Cannot apply interest to a negative balance.");
      return;
    }
    dispatch({ type: "ADD_INTEREST" });
  };

  const handleCharges = (dispatch, state) => {
    if (state.balance < 0) {
      setErrorMessage("Cannot apply charges to a negative balance.");
      return;
    }
    dispatch({ type: "CHARGES" });
  };

  return (
    <GlobalState>
      {({ state, dispatch }) => (
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
              {errorMessage && <div className="error-message">{errorMessage}</div>}
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
                        handleShowModal();
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
              <CustomButton
                variant="primary"
                onClick={() => handleInterest(dispatch, state)}
                text="Add Interest (5%)"
              />
              <CustomButton
                variant="primary"
                onClick={() => handleCharges(dispatch, state)}
                text="Apply Charges (15%)"
              />
            </Card.Footer>
          </Card>

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
