import ShareContact from "../molecules/ShareContact";
import Contact from "../molecules/Contact";
import React from "react";
import Title from "../attoms/Title";
import github_pic from "@/public/assets/images/Tools/GitHubLogo.svg";
import email_pic from "@/public/assets/images/Footer/Email.svg";
import phone_pic from "@/public/assets/images/Footer/Phone.svg";

export default function Fotter() {
  return (
    <footer className="flex justify-center py-footer gap-footer-gap flex-wrap mx-5 my-20 w-full ">
      <div className="flex flex-col items-center gap-y-Contact-gap">
        <Title className="lg:text-center">Contacts</Title>

        <div className="flex space-contay gap-Contact-gap flex-wrap justify-center">
          <div className="gap-6 flex flex-col items-center ">
            <Contact src={phone_pic} href="tel:09303331636">
              09303331636
            </Contact>
            <Contact
              src={email_pic}
              href="mailto:mahdishabi9@gmail.com?subject = Feedback&body = Message"
            >
              mahdishabi9@gmail.com
            </Contact>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
