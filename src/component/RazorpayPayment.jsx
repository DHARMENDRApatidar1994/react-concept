import React, { useState } from "react";
import axios from "axios";
import './Razorpay.css'


const RazorpayPayment = () => {

  const [paymentSuccess, setPaymentSuccess] = useState(false);



  const [orderId, setOrderId] = useState("");

  const handlePaymentResponse = (response) => {
    console.log("Enter in handle Response");
    axios
      .post("https://singer.boostupdigital.in/api/payment/validate-payment", { response })
      .then((res) => {
        console.log(res.data);
        setPaymentSuccess(true);
        const razorpayOrderID = response.razorpay_order_id;
        setOrderId(razorpayOrderID);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleOpenRazorpay = async () => {
    try {
      const send = {
        amount: parseInt(50, 10),
        currency: "INR",
      };
      const response = await axios.post(
        "https://singer.boostupdigital.in/api/payment/create-order",
        { send }
      );
      

      const options = {
        key: "rzp_test_owBIcrV3hgTAVy",
        amount: Number(send.amount),
        currency: send.currency,
        name: "Acme Corp",
        description: "Test Transaction",
        order_id: response.data.data.id,
        handler: function (response) {
          console.log("response", response);
          handlePaymentResponse(response);
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error(error);
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    handleOpenRazorpay();
  };

  return (
    <div>
      <form
        className="form bg-dark text-light"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="box form-control mb-5 mt-5 bg-dark text-light ">
          <div>
            <h2 className="text-center mt-1">Book Your Event</h2>
            <hr />
            <div className="">
              <label className="form-label">Event Name</label>
              <h4 className="col">Bhopal Event</h4>
            </div>
          </div>

          <div className=" d-flex justify-content-evenly align-items-center">
            <div className="bg-danger p-1 rounded">
              <label className="form-label">Event Date</label>
              <h5 className="col">25</h5>
              <label className="form-label">Event Time</label>
              <h5 className="col">30</h5>
            </div>
            <div
              className="bg-danger rounded"
              style={{ padding: "0.3vmax 2.5vmax" }}
            >
              <label className="form-label">Price</label>
              <h5 className="col">$100</h5>
            </div>
          </div>
          <div>
            <label className="form-label">Your Name</label>
            <input type="text" className="form-control" />
          </div>

          <div className="">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>

          <div className="">
            <label className="form-label">Contact</label>
            <input type="" className="form-control" />
          </div>

          <div className="">
            <label className="form-label"> Booking Date</label>
            <input type="date" className="form-control" />
          </div>

          <div className="text-center">
            <button
              className="mb-2 mt-4 btn btn-primary"
              onClick={handlePayment}
            >
              PROCEED TO PAY
            </button>
          </div>
        </div>
      </form>
     
      {paymentSuccess && (
        <div className="receipt text-light">
          <h3>Payment Receipt</h3>
          <p>Event Name: Bhopal Event</p>
          <p>Event Date: 12/04/2023</p>
          <p>Price: $100</p>
          <p>Razorpay Order ID: {orderId}</p>
          {/* Add more receipt details as needed */}
          <button className="btn btn-primary" onClick={() => window.print()}>
            Print Receipt
          </button>
        </div>
      )}
     
    </div>
  );
};

export default RazorpayPayment;