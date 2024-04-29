import React from "react";

function Askedquestion() {
  return (
    <div className="bg-white pb-5 " id="FAQs" class="FAQs">
      <div className="mx-5 bg-white ">
        <h4 className="fw-bolder">Frequently asked questions</h4>
        <div className="mt-5 ">
          <div className="d-flex gap-5  border-top border-grey  border-bottom border-grey    flex-576 justify-content-between">
            <b className=" w-100 pt-3  pb-2">Why use InvoicePages?</b>
            <p className="pt-3 answers">
              InvoicePages allows you to create an invoice generator for your
              one-time services or products. You just need to send your clients
              the link to the generator and they can generate invoices
              themselves. No need to manually create an invoice for each client.
            </p>
          </div>
          <div className="d-flex gap-5  border-top border-grey  border-bottom border-grey    flex-576 justify-content-between">
            <b className=" w-100 pt-3  ">Who is InvoicePages suitable for?</b>
            <p className="pt-3 answers">
              InvoicePages is ideal for individuals and small businesses seeking
              a flexible and efficient way to generate invoices. If you're a
              freelancer, consultant, entrepreneur, or small business owner
              needing to create invoices for one-time projects or services
              without sharing a portion of your revenue through third-party
              platforms like Gumroad or LemonSqueezy, InvoicePages is the
              perfect solution. With InvoicePages, you can create personalized
              invoices directly and share the link with your clients, allowing
              them to generate invoices themselves hassle-free. It's a
              convenient and cost-effective option for those looking to retain
              full control over their revenue.
            </p>
          </div>{" "}
          <div className="d-flex gap-5  border-top border-grey  border-bottom border-grey    flex-576 justify-content-between">
            <b className=" w-100 pt-3  pb-2">How do I use InvoicePages?</b>
            <p className="pt-3 answers">
              Sign up for an InvoicePages account, purchase a suitable plan, and
              create your own invoice generator (fill in your necessary info
              like addresses, exchange rates etc.). Share the link to your
              invoice generator with clients. Clients can visit the link and
              generate invoices themselves.
            </p>
          </div>{" "}
          <div className="d-flex gap-5  border-top border-grey  border-bottom border-grey    flex-576 justify-content-between">
            <b className=" w-100 pt-3  pb-2">
              How are the number of invoices generated calculated?
            </b>
            <p className="pt-3 answers">
              We only count it as one invoice generated when your client clicks
              the download invoice button in the invoice generator page you
              shared.
            </p>
          </div>
          <div className="d-flex gap-5  border-top border-grey  border-bottom border-grey    flex-576 justify-content-between">
            <b className=" w-100 pt-3  pb-2">
              What will happen if the purchased invoicing quota runs out?
            </b>
            <p className="pt-3 answers">
              If your purchased invoice quota runs out, we will provide an
              additional bonus quota for 3 invoices. After the bonus quota is
              also exhausted, your client will see a notification in the invoice
              generator that no further invoices can be created.
            </p>
          </div>
          <div className="d-flex gap-5  border-top border-grey  border-bottom border-grey    flex-576 justify-content-between">
            <b className=" w-100 pt-3  pb-2">Can I try it out for free?</b>
            <p className="pt-3 answers">
              Yes, you can! After signing up for an account and before
              purchasing a plan, we offer a quota of 3 free invoices for you to
              test and try out your invoice generator.
            </p>
          </div>
          <div className="d-flex gap-5  border-top border-grey  border-bottom border-grey    flex-576 justify-content-between">
            <b className=" w-100 pt-3  pb-2">
              Can you provide different invoice templates?
            </b>
            <p className="pt-3 answers">
              Custom invoice templates are not yet supported currently.
            </p>
          </div>{" "}
          <div className="d-flex gap-5  border-top border-grey  border-bottom border-grey    flex-576 justify-content-between">
            <b className=" w-100 pt-3  pb-2">
              What file format are the generated invoices in?
            </b>
            <p className="pt-3 answers">
              The invoices we generate are in PDF file format.
            </p>
          </div>{" "}
          <div className="d-flex gap-5  border-top border-grey  border-bottom border-grey    flex-576 justify-content-between">
            <b className=" w-100 pt-3  pb-2">
              Can I get a refund after purchase?
            </b>
            <p className="pt-3 answers">No, refunds are not provided.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Askedquestion;
