"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";


const PrivacyPolicy: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row p-3 md:p-7">
      {/* Left Image: Stays fixed as you scroll */}
      <div className="w-full md:w-1/2 hidden md:block">
        <div className="sticky top-0 h-screen">
          <Image
            src="/images/privacy1.jpg" // Ensure this image exists in /public/images/
            alt="Privacy Image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Content: Scrollable text */}
      <div className="flex-1 p-8 overflow-y-auto pt-[170px] lg:pt-[170px] space-y-3">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">
            Website Privacy Policy
          </h1>
          <div className="h-[3px] bg-blue-500 w-[69%] my-4 pl-9" />
          <h2 className="text-2xl -mt-[20px] lg:-mt-0 md:text-3xl text-black font-bold mb-4">Introduction</h2>
          <p className="text-lg text-black">
          Behavior Analysis & Therapy Partners BATP (“Company” or “we/us/our”) respect your privacy and are committed to protecting it through our compliance with this policy.
        </p>
        <p className="text-lg text-black">
  This policy describes the types of information we may collect from you or that you may provide when you visit the website{" "}
  <Link href="https://BATP.org" className="text-blue-500 underline underline-offset-4 hover:text-blue-600">
    https://BATP.org
  </Link>{" "}
  (our “Website”) and our practices for collecting, using, maintaining, protecting, and disclosing that information.
</p>
        </div>
        <p className="text-lg text-black">
        This policy applies to information we collect:
        </p>
        <ul className="list-disc list-inside text-lg text-black">
          <li>On this Website</li>
          <li>In email, text, and other electronic messages between you and this Website.
          </li>
        </ul>
        <p className="text-lg text-black">
        It does not apply to information collected by:
        </p>
        <ul className="list-disc list-inside text-lg text-black">
          <li>Us offline or through any other means, including on any other website operated by Company or any third party; or </li>
          <li>Any third party, including through any application or content (including advertising) that may link to or be accessible from or through the Website.
          </li>
        </ul>
        <p className="text-lg text-black">
        Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. By accessing or using this Website, you agree to this privacy policy. This policy may change from time to time (see{" "}
  <Link href="/legal-/-privacy" className="text-blue-500 underline underline-offset-4 hover:text-blue-600">
  Changes to Our Privacy Policy
  </Link>{" "}
        ).Your continued use of this Website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates. 

</p>
        <h2 className="text-2xl -mt-[20px] lg:-mt-0 md:text-3xl text-black font-bold mb-4">Information We Collect About You and How We Collect It</h2>
        <p className="text-lg text-black">
        We collect several types of information from and about users of our Website, including information:
        </p>
        <ul className="list-disc list-inside text-lg text-black">
          <li>By which you may be personally identified, such as name, postal address, email address, telephone number, or any other identifier by which you may be contacted online or offline (“personal information”);</li>
          <li>That is about you but individually does not identify you; and/or
</li>
<li>About your internet connection, the equipment you use to access our Website, and usage details.
</li>
        </ul>
        <p className="text-lg text-black">
        We collect this information:
        </p>
        <ul className="list-disc list-inside text-lg text-black">
          <li>Directly from you when you provide it to us.
          </li>
          <li>Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies.
          </li>
        </ul>
        {/* -------------------- */}
        <h2 className="text-2xl -mt-[20px] lg:-mt-0 md:text-3xl text-black font-bold mb-4">Information You Provide to Us </h2>
        <p className="text-lg text-black">
        The information we collect on or through our Website may include:
        </p>
        <ul className="list-disc list-inside text-lg text-black">
          <li>Information that you provide by filling in forms on our Website. This includes, for example, information provided at the time of using our “Contact Us” feature to submit inquiries or request further services, or searching for and applying to potential job opportunities with the Company. We may also ask you for information when you report a problem with our Website.
          </li>
          <li>Records and copies of your correspondence (including email addresses), if you contact us.
          </li>
          <li>Your responses to surveys that we might ask you to complete for research purposes.</li>
          <li>Your search queries on the Website.
          </li>
        </ul>
        {/* -------------------- */}
        <h2 className="text-2xl -mt-[20px] lg:-mt-0 md:text-3xl text-black font-bold mb-4">Information We Collect Through Automatic Data Collection Technologies</h2>
        <p className="text-lg text-black">
        As you navigate through and interact with our Website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:
        </p>
        <ul className="list-disc list-inside text-lg text-black">
          <li>Details of your visits to our Website, including traffic data, logs, and other communication data and the resources that you access and use on the Website.
          </li>
          <li>Information about your computer and internet connection, including your IP address, operating system, and browser type.
          </li>
        </ul>
        <p className="text-lg text-black">
        The information we collect automatically is only statistical data and does not include personal information, but we may maintain it or associate it with personal information we collect in other ways. It helps us to improve our Website and to deliver a better and more personalized service, including by enabling us to:
        </p>
        <ul className="list-disc list-inside text-lg text-black">
          <li>Estimate our audience size and usage patterns.
          </li>
          <li>Store information about your preferences, allowing us to customize our Website according to your individual interests.
          </li>
          <li>Speed up your searches.
          </li>
          <li>Recognize you when you return to our Website.
          </li>
        </ul>
        <p className="text-lg text-black">
        The technologies we use for this automatic data collection may include:
</p>
        <ul className="list-disc list-inside text-lg text-black">
          <li>Cookies (or browser cookies). A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website. For information about managing your privacy and security settings for cookies, see Choices About How We Use and Disclose Your Information.</li>
          <li>Web Beacons. Pages of our Website may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity). </li>
        </ul>
        {/* -------------------- */}
        <h2 className="text-2xl -mt-[20px] lg:-mt-0 md:text-3xl text-black font-bold mb-4">How We Use Your Information</h2>
        <p className="text-lg text-black">
        We use information that we collect about you or that you provide to us, including any personal information:

        </p>
        <ul className="list-disc list-inside text-lg text-black">
          <li>To present our Website and its contents to you.
          </li>
          <li>To provide you with information, products, or services that you request from us.
          </li>
          <li>To fulfill any other purpose for which you provide it.
          </li>
          <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection</li>
          <li>To notify you about changes to our Website or any products or services we offer or provide though it.
          </li>
          <li>To allow you to participate in interactive features on our Website.
          </li>
          <li>In any other way we may describe when you provide the information.</li>
          <li>For any other purpose with your consent.
          </li>
        </ul>
        <p className="text-lg text-black">
        We may also use your information to contact you about our own goods and services that may be of interest to you. If you do not want us to use your information in this way, please contact us at [ChantelleBosier@BATP.org] For more information, see Choices About How We Use and Disclose Your Information.
        </p>
        {/* -------------------- */}
        <h2 className="text-2xl -mt-[20px] lg:-mt-0 md:text-3xl text-black font-bold mb-4">Disclosure of Your Information</h2>
        <p className="text-lg text-black">
        We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. 
        </p>
        <p className="text-lg text-black">
        We may disclose personal information that we collect or you provide as described in this privacy policy:
        </p>
        <ul className="list-disc list-inside text-lg text-black">
         <li>To contractors, service providers, and other third parties we use to support our business.
         </li>
          <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of the Company's assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by the Company about our Website users is among the assets transferred.
          </li>
          <li>To fulfill the purpose for which you provide it. For example, if you give us an email address in the “Contact US” feature of our Website, we will use that information to provide you the service you request.
          </li>
          <li>For any other purpose disclosed by us when you provide the information.
          </li>
          <li>With your consent.
          </li>
        </ul>
        <p className="text-lg text-black">
        We may also disclose your personal information:</p>
        <ul className="list-disc list-inside text-lg text-black">
          <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.
          </li>
          <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers, or others.
          </li>
        </ul>
        {/* -------------------- */}
        {/* -------------------- */}
        <h2 className="text-2xl -mt-[20px] lg:-mt-0 md:text-3xl text-black font-bold mb-4">Choices About How We Use and Disclose Your Information</h2>
        <p className="text-lg text-black">
        We strive to provide you with choices regarding the personal information you provide to us. We have created mechanisms to provide you with the following control over your information: 
        </p>
        <ul className="list-disc list-inside text-lg text-black">
          <li><span className="font-semibold">Tracking Technologies and Advertising.</span> You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of this site may then be inaccessible or not function properly. </li>
          <li>
  <span className="font-semibold">Promotional Offers from the Company.</span> 
  If you do not wish to have your contact information used by the Company to promote our own products or services, you can opt-out by sending us an email stating your request to{" "}
  <Link
    href="mailto:ChantelleBosier@BATP.org"
    className="text-blue-500 underline underline-offset-4 hover:text-blue-600 cursor-pointer"
  >
    ChantelleBosier@BATP.org
  </Link>. 
  If we have sent you a promotional email, you may send us a return email asking to be omitted from future email distributions. This opt-out does not apply to information provided to the Company as a result of a product purchase, product service experience, or other transactions.
</li>
        </ul>
        <p className="text-lg text-black">We do not control third parties' collection or use of your information to serve interest-based advertising. However these third parties may provide you with ways to choose not to have your information collected or used in this way. You can opt out of receiving targeted ads from members of the Network Advertising Initiative <span className="font-semibold">(“NAI”)</span> on the NAI's website.</p>
        <p className="text-lg text-black">Residents of certain states may have additional personal information rights and choices. Please see Your State Privacy Rights for more information.
        </p>
        {/* ---------------------------- */}
        <h2 className="text-2xl -mt-[20px] lg:-mt-0 md:text-3xl text-black font-bold mb-4">Accessing and Correcting Your Information</h2>
        <p className="text-lg text-black">
  You may also send us an email at{" "}
  <Link
    href="mailto:ChantelleBosier@BATP.org"
    className="text-blue-500 underline underline-offset-4 hover:text-blue-600 cursor-pointer"
  >
    ChantelleBosier@BATP.org
  </Link>{" "}
  to request access to, correct, or delete any personal information that you have provided to us. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.
  <br />
  Residents of certain states may have additional personal information rights and choices. Please see Your State Privacy Rights for more information.
</p>

        {/* -------------------- */}
        <h2 className="text-2xl -mt-[20px] lg:-mt-0 md:text-3xl text-black font-bold mb-4">Your State Privacy Rights
        </h2>
        <p className="text-lg text-black">State consumer privacy laws may provide their residents with additional rights regarding our use of their personal information. To learn more about consumer privacy rights in other states and how to exercise them, visit the State Attorney General’s website.  </p>
        {/* ------------------------- */}
        <h2 className="text-2xl -mt-[20px] lg:-mt-0 md:text-3xl text-black font-bold mb-4">Data Security</h2>
        <p className="text-lg text-black">We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. 
        </p>
        <p className="text-lg text-black">The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone. 
        </p>
        <p className="text-lg text-black">Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Website.
        </p>
        {/* -------------------- */}
        <h2 className="text-2xl -mt-[20px] lg:-mt-0 md:text-3xl text-black font-bold mb-4">Changes to Our Privacy Policy</h2>
        <p className="text-lg text-black">It is our policy to post any changes we make to our privacy policy on this page.  When we do, we’ll change the date noted at the top of this policy.  In some cases, we may also notify you of the relevant changes by email or within the Website. Please review this policy regularly to make sure that you understand your relationship with us and the ways we may collect, use, and share information in connection with the Product and Website.
        </p>
        <h2 className="text-2xl -mt-[20px] lg:-mt-0 md:text-3xl text-black font-bold mb-4">Contact Information</h2>
        <p className="text-lg text-black">To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
        <Link
    href="mailto:ChantelleBosier@BATP.org"
    className="text-blue-500 underline underline-offset-4 hover:text-blue-600 cursor-pointer"
  >
    ChantelleBosier@BATP.org
  </Link>.         
        <p>
          or
          <br />
          610-664-6200<br />
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;