import Image from "next/image";
import Link from "next/link";

export default function Benefits() {
  return (
    <div>
     <div className="flex flex-col md:flex-row items-center justify-between py-11 px-6 md:pl-16">
   
   {/* Left: Image */}
   <div className="md:w-1/2 w-full max-w-[700px]  mx-auto">
   <h2 className="text-xl md:text-2xl font-bold text-blue-500    ">Benefits of Working with Us
   </h2>
     <p className="text-gray-600 text-lg mt-4">
     Opportunities for professional development and ongoing training. Expert supervision to advance your career.

     </p>   <p className="text-gray-600 text-lg mt-2">
     Supportive team environment. 

   
     </p><p className="text-gray-600 text-lg mt-2">
     Health insurance is available for employees working 35+ hours per week. 

     </p>   <p className="text-gray-600 text-lg mt-2">
     If you are passionate about helping children and young adults achieve their goals and thrive in their communities, we encourage you to apply! 

     </p>
     <h1 className="text-blue-500 text-xl sm:text-2xl md:text-4xl  font-bold pt-16">Join Our Team  <Link href="/job-application" className="texh-blue text-[16px] hover:text-gray-700 ">    Click Here </Link></h1>
  <button className="text-  px-4     rounded-md">
   
   </button>
  <p className="text-gray-600 text-lg -mt-3 mb-11">Behavior Analysis & Therapy Partners (BAPT) is devoted to providing behavioral health care to those under 21 years of age.  Founded in 2006, we are now a multi-site company with 3 offices serving families in Philadelphia and the 3 surrounding counties: Montgomery, Bucks and Delaware.
  </p>
  <p className="text-gray-600 text-lg -mt-2">If you want to get BATP’s help for your family
    
     <Link href="/contact" className="text-blue-500 -mt-2 font-bold hover:text-gray-600"> Contact Us. </Link>

</p>
<p className="text-gray-600 text-lg mt-2">To see how we protect your privacy
    
    <Link href="/legal-/-privacy" className="text-blue-500  hover:text-gray-600"> click here </Link>
    {/* <Link href="/privacy-policy" className="underline hober hover:text-gray-600">We will protect your information. Link to Privacy Policy. </Link> */}
</p>

{/* <h1 className="text-gray-700 text-md  font-bold pt-11">Employment Portal</h1>
<p className="text-gray-600 mt-2">Here we are envisioning a portal for potential employees.   Initially they upload their resume. After initial approval we can then invite them securely to upload the dozen or so documents needed for a complete HR file. </p> */}
   </div>
   {/* Right: Heading and Paragraph */}
   <div className="md:w-1/2 w-full text-left mt-8 md:mt-0 md:pl-8">
    
     <Image
        src="/images/j4.jpg" // Replace with your image path
        alt="Hero Image"
        width={800}
        height={900}
        className="object-cover rounded p-6"
        />
   </div>
 </div>
    </div>
  );
}

