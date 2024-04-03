import { FunctionComponent } from "react";
import './refund-policy.css'; // Ensure to create a corresponding CSS file for styling

const RefundPolicy: FunctionComponent = () => {
  return (
    <div className="refund-policy-container">
      <main className="refund-main">
      <header className="refund-header">
        <h1 className="font-gilroy-bold">Refund Policy</h1>
      </header>
        <section>
          <p>Last updated: 02/04/2024</p>
          <p>Thank you for choosing Study Abroad for your educational journey. We understand that sometimes, plans change, and you may need to cancel your application or services with us. Below are the terms and conditions that constitute our Refund Policy.</p>
        </section>
        <section>
          <h2>Cancellation & Refunds of Digital Products</h2>
          <p>We offer digital products and services tailored to assist you in your study abroad applications. Due to the nature of our digital products, a refund will be considered only under the following conditions:</p>
          <ul>
            <li>If the digital product has not been accessed or downloaded by you within 7 days of purchase.</li>
            <li>If the services or information provided were not as described.</li>
          </ul>
          <p>For any refund requests, please contact us at [insert contact information] with your order number and reasons for the request.</p>
        </section>
        <section>
          <h2>Service Cancellation</h2>
          <p>If you wish to cancel a service, including consultation appointments, you must do so within 24 hours before the scheduled time to be eligible for a full refund. Cancellations made later than this period will not be refunded.</p>
        </section>
        <section>
          <h2>Changes to Our Refund Policy</h2>
          <p>We reserve the right to modify this refund policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated.</p>
        </section>
        <footer>
          <p>If you have any questions about our Refund Policy, please contact us at edulley@contact.com.</p>
        </footer>
      </main>
    </div>
  );
};

export default RefundPolicy;
