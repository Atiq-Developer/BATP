import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <LogoIcon />
              </div>
              {/* <div> */}
                {/* <h2 className="text-2xl font-semibold leading-tight">
                  Behavior Analysis &<br />
                  Therapy Partners
                </h2> */}
                {/* <div className="text-lg font-bold mt-1">BATP</div> */}
              {/* </div> */}
            </div>

            <div className="border-t border-white/50 max-w-xl my-4"></div>

            <p className="mb-4 max-w-xl">
              Behavior Analysis & Therapy Partners (BATP) is devoted to providing behavioral health care to those under
              21 years of age. Starting in 2006, we are now a large company with 3 offices serving families in
              Philadelphia and the 3 surrounding counties: Montgomery, Bucks and Delaware.
            </p>

            <p className="mb-2">
              If you want help for your family{" "}
              <Link href="/contact" className="underline">
                Contact Us.
              </Link>
            </p>

            <p>
              If you want to join our team{" "}
              <Link href="/careers" className="underline">
                Click Here.
              </Link>
            </p>
          </div>

          {/* Right Column - Navigation */}
          <div className="col-span-1 md:pt-20">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Explore</h3>
              <div className="border-t border-white/50 w-20 mb-4"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div>
                  <NavLink href="/" label="Home" />
                  <NavLink href="/about-us" label="About Us" />
                  <NavLink href="/services" label="Services" />
                  <NavLink href="/join-our-team" label="Join Our Team" />
                </div>
                <div>
                  <NavLink href="/legal-/-privacy" label="Legal / Privacy " />
                  {/* <NavLink href="/privacy-policy" label="Privacy Policy" /> */}
                  <NavLink href="/contact" label="Contact Us" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/20 mt-8 pt-4 flex flex-col md:flex-row justify-between text-sm">
          <div>Copyright © 2025 BATP, All Rights Reserved</div>
          <div className="mt-2 md:mt-0">
            <Link href="/legal-/-privacy" className="hover:underline">
             Legal | Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="flex items-center mb-2 hover:underline">
      <ChevronRight className="h-4 w-4 mr-1" />
      <span>{label}</span>
    </Link>
  )
}

function LogoIcon() {
  return (
   <>
    <Image
            src="/images/logo3.png"
            alt="Logo"
            className="footer-logo w-[200px] md:w-[500px] h-auto"
            height={500}
            width={500}
          />
   </>
  )
}

