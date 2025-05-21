import Contact from "@/components/Contact/Contact";
import FullWidthBanner from "@/components/Contact/FullWidthBanner";
import Location1 from "@/components/Home/Location/Location1";

export default function ContactPage() {
  return (
    <div className="pt-[120px] md:pt-[120px]">
        <FullWidthBanner imageUrl="/images/contact1.jpg" text="Contact Us" />
      <Contact/>
      <Location1/>
    </div>
  );
}
