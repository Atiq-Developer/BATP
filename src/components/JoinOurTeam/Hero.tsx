import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="px-7 max-w-[9xl] mx-auto">

    <h2 className="text-2xl text-center pt-[190px] lg:pt-[200px] md:text-4xl font-bold text-black">Join Our Team</h2>
  
    <div className="flex flex-col lg:flex-row gap-9 mt-11 ">
      {/* Column 1 */}
      <div className="flex-1 text-lg text-gray-600">
        <p>
          At Behaviour Analysis & Therapy Partners (BATP), we are dedicated to making a positive impact in the lives of children, youth, and young adults. We’re looking for compassionate and skilled individuals to join our team in providing high-quality behavioral health services.
        </p>
      </div>
  
      {/* Column 2 */}
      <div className="flex-1 text-lg text-gray-600">
        <p>
          We have positions in South Philadelphia, as well as throughout Montgomery, Bucks, and Delaware counties. We are an Equal Opportunity Employer.
        </p>
        <p className="mt-4">
          We will review your qualifications when you send us your information.  <br />
          
          <Link href="/job-application" className="text-blue-500 text-lg underline underline-offset-4"> We are hiring now!</Link>
        </p>
      </div>
    </div>
  
  </div>
  
  );
}