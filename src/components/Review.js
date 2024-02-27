import React from "react";

function Review() {
  return (
    <div>
      <section className="my-5 py-5 px-5">
        <div className="mt-5  font-weight-bold px-lg-5 lh-base h4 fw-bolder ">
          <div className="text-primary pb-4 h3   ">★ ★ ★ ★ ★ ★</div>
          “I am very grateful that finally there is an invoice maker that I can
          use online directly. This will be very helpful in my work, and it's
          very easy to create an invoice. Just a few steps, and I can already
          bill my clients even on the spot. Very professional.”
          <div className="pt-5 d-flex">
            <img
              style={{ height: "3rem", width: "3rem" }}
              className="rounded-circle"
              src="https://pbs.twimg.com/profile_images/1659202575298883584/RoKMMsag.jpg"
            ></img>
            <h6 className="pt-3 px-1">Adi | Talentpreneur</h6>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Review;
