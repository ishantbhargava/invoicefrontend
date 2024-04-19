import React from "react";

function TermPolicy() {
  return (
    <main class="min-h-screen flex flex-col items-center">
      <main class="w-full py-12 md:py-24 lg:py-32">
        <div class="container px-4 md:px-6">
          <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8">
            Terms &amp; Conditions - InvoicePages.com
          </h1>
          <section class="mb-12">
            <p class="text-gray-500 md:text-xl dark:text-gray-400">
              This policy ("Policy") describes how InvoicePages.com
              ("InvoicePages", "we", "us" or "our") collects, protects and uses
              the personally identifiable information ("Personal Information")
              you ("User", "you" or "your") may provide through the
              InvoicePages.com website or in the course of purchasing any
              InvoicePages.com products (collectively, "Website"). The Policy
              also describes the choices available to you regarding our use of
              your Personal Information.
            </p>
          </section>
          <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Terms &amp; Conditions</h2>
            <p class="text-gray-500 md:text-xl dark:text-gray-400">
              By creating an account on InvoicePages.com, you agree to provide a
              valid email address for account login purposes. This email will be
              used as your primary form of identification within our system and
              will be necessary for account recovery.
            </p>
          </section>
          <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Privacy Policy</h2>
            <p class="text-gray-500 md:text-xl dark:text-gray-400">
              At InvoicePages.com, we collect your email for account login
              purposes. We use Paddle for payment services, which may require
              you to provide credit card information. Please refer to Paddle's
              own Privacy Policy for more information on how they handle your
              data.
            </p>
          </section>
          <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4">Refund Policy</h2>
            <p class="text-gray-500 md:text-xl dark:text-gray-400">
              InvoicePages.com does not provide refunds for any services or
              products purchased through our platform. Please ensure you have
              read and understood all terms and conditions before making a
              purchase.
            </p>
          </section>
        </div>
      </main>
    </main>
  );
}

export default TermPolicy;
