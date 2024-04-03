import { FunctionComponent } from "react";

const TermsAndCondition: FunctionComponent = () => {
  return (
    <div className="privacy-policy-container">
      <header className="privacy-header">
        <h1 className="font-gilroy-bold">Terms & Condition</h1>
      </header>
      <main className="privacy-main">
        <section>
          <p>Last updated: 02/04/2024</p>
          <p>Welcome to Edulley. We are committed to protecting your terms & condition and ensuring you have a positive experience on our website and in using our products and services (collectively, "Services").</p>
          <p>This terms & condition explains how we collect, use, disclose, and safeguard your information when you visit our website <a>https://edulley.in</a>, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this terms & condition carefully. If you do not agree with the terms of this terms & condition, please do not access the Site.</p>
        </section>
      
        <section>
          <h2>Website Access and Use</h2>
          <p>As a condition of your access and use, you agree that you may use the Website only for lawful purposes and in accordance with these Terms and Conditions.</p>
        </section>
        <section>
          <h2>Intellectual Property Rights</h2>
          <p>The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Edulley, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        </section>
        <section>
          <h2>Disclaimer of Warranties</h2>
          <p>You understand that we cannot and do not guarantee or warrant that files available for downloading from the internet or the Website will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for antivirus protection and accuracy of data input and output, and for maintaining a means external to our site for any reconstruction of any lost data.</p>
        </section>
      
        {/* Additional sections as necessary */}
        <footer>
          <p>Please note that this terms & condition is subject to change, and we recommend checking our website regularly for any updates to stay informed about how we are protecting your information.</p>
        </footer>
      </main>
    </div>
  );
};

export default TermsAndCondition;
