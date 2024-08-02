import React from "react";

const feedbacks = [
  {
    id: 1,
    name: "Jenny Wilson",
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    rating: 3,
  },
  {
    id: 3,
    name: "Prasanth",
    feedback:
      "Normally wings are wings, but theirs are lean meaty and tender, and the sauce was a perfect balance.",
    rating: 4,
  },
  {
    id: 4,
    name: "Devon Lane",
    feedback:
      "Average",
    rating: 3,
  },
  {
    id: 5,
    name: "Devon Lane",
    feedback:
      "We've noticed how focused you are lately and how well you manage your time. You're producing tremendous work; keep it up!",
    rating: 5,
  },
];

function Feedback() {
  return (
    <section className="feedback">
      <h3>Customer's Feedback</h3>
      <ul>
        {feedbacks.map((fb) => (
          <li key={fb.id}>
            <h4>{fb.name}</h4>
            <p>{fb.feedback}</p>
            <p>
              Rating: {Array(fb.rating).fill("★").join("")}{""}
              {Array(5 - fb.rating)
                .fill("☆")
                .join("")}{" "}
              stars
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Feedback;
