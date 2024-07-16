import React from "react";

function Faq() {
  return (
    <div className="mr-auto ml-auto xsm:pt-32 md:pt-96 lg:pt-96 pb-40 bg-gray-50">
      <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9 pt-16 justify-items-center lg:w-3/4 md:w-11/12 mr-auto ml-auto">
        <div className="w-11/12 md:w-full">
          <h5 class="text-lg leading-6 font-medium text-gray-900">
            Can I try Updrafts before paying?
          </h5>
          <p class="mt-2 text-base text-gray-500">
            Sure! You can test out Updrafts on our free plan where you can
            experiment with 2 projects. Your projects will have a two-page
            limit.
          </p>
        </div>

        <div className="w-11/12 md:w-full">
          <h5 class="text-lg leading-6 font-medium text-gray-900">
            Can I cancel my subscription at any time?
          </h5>
          <p class="mt-2 text-base text-gray-500">
            Yes, you can cancel your account at any time. If you do, you'll be
            downgraded to the free plan, where you can manage two projects. You
            won't be locked out of any projects that have been created during
            your subscription.
          </p>
        </div>

        <div className="w-11/12 md:w-full">
          <h5 class="text-lg leading-6 font-medium text-gray-900">
            Is there a refundable trial period?
          </h5>
          <p class="mt-2 text-base text-gray-500">
            No, all sales are final. Try the free plan if you're not sure if
            it's worth paying for, or a monthly subscription to try the pro
            features for a small compensation.
          </p>
        </div>

        <div className="w-11/12 md:w-full">
          <h5 class="text-lg leading-6 font-medium text-gray-900">
            Is Updrafts production ready?
          </h5>
          <p class="mt-2 text-base text-gray-500">
            Yes. The product is stable and works as advertised. But there are
            still some rough edges on the UX and not all Tailwind options are
            configurable trough property buttons, just yet.
          </p>
        </div>

        <div className="w-11/12 md:w-full">
          <h5 class="text-lg leading-6 font-medium text-gray-900">
            Where can I find the documentation?
          </h5>
          <p class="mt-2 text-base text-gray-500">
            Documentation isn't written yet. Our focus lies on making Updrafts
            feature complete. Once that's done, we'll work on proper docs.
          </p>
        </div>

        <div className="w-11/12 md:w-full">
          <h5 class="text-lg leading-6 font-medium text-gray-900">
            What version of tailwindcss is used?
          </h5>
          <p class="mt-2 text-base text-gray-500">
            Updrafts is tailwindcss v2 compatible. We've extended the default
            theme with all available tailwindcss colors.
          </p>
        </div>

        <div className="w-11/12 md:w-full">
          <h5 class="text-lg leading-6 font-medium text-gray-900">
            What is a project?
          </h5>
          <p class="mt-2 text-base text-gray-500">
            A project is a website that you build in Updrafts. You can keep your
            projects in updrafts for free, or export the code on a paid plan.
          </p>
        </div>

        <div className="w-11/12 md:w-full">
          <h5 class="text-lg leading-6 font-medium text-gray-900">
            What kind of support do you provide?
          </h5>
          <p class="mt-2 text-base text-gray-500">
            We offer chat support on this page to all accounts, as well as fast
            email support to paid accounts.
          </p>
        </div>

        <div className="w-11/12 md:w-full">
          <h5 class="text-lg leading-6 font-medium text-gray-900">
            Can I host my site somewhere else?
          </h5>
          <p class="mt-2 text-base text-gray-500">
            On the Professional plans, you can export your website and host it
            anywhere you'd like. No attribution required.
          </p>
        </div>

        <div className="w-11/12 md:w-full">
          <h5 class="text-lg leading-6 font-medium text-gray-900">
            How long does it take to learn Updrafts?
          </h5>
          <p class="mt-2 text-base text-gray-500">
            If you're new to building websites, you'll get up and running
            quickly. If you already know concepts behind CSS and Tailwind, you
            will feel at home in Updrafts.
          </p>
        </div>

        <div className="w-11/12 md:w-full">
          <h5 class="text-lg leading-6 font-medium text-gray-900">
            Can I import my site or my code?
          </h5>
          <p class="mt-2 text-base text-gray-500">
            Yes, existing components based on Tailwind CSS can be imported.
          </p>
        </div>

        <div className="w-11/12 md:w-full">
          <h5 class="text-lg leading-6 font-medium text-gray-900">
            Do you have an affiliate program?
          </h5>
          <p class="mt-2 text-base text-gray-500">
            If you have an audience you think would enjoy Updrafts, please reach
            out to me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Faq;
