import React from "react";
import Avatar from "../images/profile.png";

const orders = [
  {
    id: 1,
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    id: 2,
    customer: "Jane Cooper",
    orderNo: "48967586",
    amount: "$305.02",
    status: "Delivered",
  },
  {
    id: 3,
    customer: "Guy Hawkins",
    orderNo: "78985215",
    amount: "$45.88",
    status: "Cancelled",
  },
  {
    id: 4,
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: "$65.00",
    status: "Pending",
  },
  {
    id: 5,
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    id: 6,
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
  },
];

function Orders() {
  return (
    <section className="orders">
      <h3>Recent Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td style={{display:"flex",alignItems:"center"}}>
                <img src={Avatar} alt="avatar" width="40px" />
                <span style={{marginLeft:"6px"}}>{order.customer}</span>
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td>
                <span style={{
                  color: order.status === "Delivered" ? "#21A27F" : "orangeRed",
                  backgroundColor: order.status === "Delivered" ? "#105748" : "#603439",
                  padding:"8px",
                  borderRadius:"20px"
                }}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Orders;
