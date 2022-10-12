import React, { useEffect, useState } from "react";
import { Container, Table, Form, Stack, Button } from "react-bootstrap";
import { json, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import RecordTable from "./RecordTable";
export default function FeedbackDashboard() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [toDeleteRecords, setToDeleteRecords] = useState([]);
  const naviagte = useNavigate();

  const getRecordIds = (records) => {
    setToDeleteRecords([...records]);
  };

  const deleteHandler = () => {
    if (toDeleteRecords.length == 0) {
      Swal.fire({
        icon: "warning",
        text: "Please select atleast one option to delete",
        timer: 5000,
      });
      return;
    }
    const updatedlist = feedbackData.filter(
      (elem) => !toDeleteRecords.includes(elem.id)
    );
    localStorage.setItem("feedbackDb", JSON.stringify(updatedlist));
    let feedbacklist = JSON.parse(localStorage.getItem("feedbackDb"));
    setFeedbackData([...feedbacklist]);
    Swal.fire({
      icon: "success",
      text: "Record deleted successfully.",
      timer: 5000,
    });
    setToDeleteRecords([]);
    console.log(updatedlist);
  };

  useEffect(() => {
    let feedbacklist = JSON.parse(localStorage.getItem("feedbackDb"));
    setFeedbackData([...feedbacklist]);
  }, []);

  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#f8fafb",
          height: "750px",
          padding: "40px",
        }}
      >
        <Stack direction="horizontal" gap={5}>
          <div>
            <h4 className="mb-3" style={{ fontSize: "20px" }}>
              Aromatic bar
            </h4>
            {feedbackData.length ? (
              <p style={{ fontSize: "15px", fontFamily: "sans-serif" }}>
                {feedbackData.length} Records found.
              </p>
            ) : (
              ""
            )}
          </div>
          <Stack direction="horizontal" gap={3} style={{ marginLeft: "auto" }}>
            <Form.Control type="text" style={{ width: "200px" }} />
            <i class="bi bi-search"></i>
            <Button
              style={{
                backgroundColor: "white",
                color: "black",
                marginLeft: "30px",
                border: "transparent",
                fontSize: "18px",
              }}
            >
              <i class="bi bi-arrow-clockwise"></i>
            </Button>
            <Button
              style={{
                width: "150px",
                backgroundColor: "green",
                border: "none",
              }}
            >
              Add New
            </Button>
          </Stack>
        </Stack>
        {feedbackData.length ? (
          <RecordTable data={feedbackData} getRecordIds={getRecordIds} />
        ) : (
          <img
            src="https://www.qavenue.in/lander-assets/images/tenor.gif"
            alt=""
            style={{ marginLeft: "30%", marginTop: "50px" }}
          />
        )}
        <Stack style={{ marginTop: "-20px" }}>
          {feedbackData.length && (
            <Button
              style={{
                backgroundColor: "#e84c89",
                border: "none",
                marginLeft: "auto",
              }}
              onClick={deleteHandler}
            >
              Delete
            </Button>
          )}
          {feedbackData.length == 0 && (
            <Button
              style={{
                backgroundColor: "#1ce023",
                border: "none",
                marginLeft: "auto",
              }}
              onClick={() => {
                naviagte("/");
              }}
            >
              Go Back{" "}
            </Button>
          )}
        </Stack>
      </Container>
    </>
  );
}
