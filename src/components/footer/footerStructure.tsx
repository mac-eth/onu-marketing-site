import React from "react";
import { SocialIcon } from 'react-social-icons';

const FooterStructure: React.FC = () => {
    return (
      <footer className="bg-white" aria-label="footer">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <SocialIcon network="discord" className="hover:scale-110 hover:cursor-pointer" role="button"/>
            <SocialIcon network="twitter" className="hover:scale-110 hover:cursor-pointer" role="button"/>
            <SocialIcon network="github" className="hover:scale-110 hover:cursor-pointer" role="button"/>

          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-base text-gray-400">&copy; Onu, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }

  export default FooterStructure