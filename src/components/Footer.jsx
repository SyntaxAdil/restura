import { SOCIAL_MEDIA_LINKS } from "../constants/index";

export const Footer = () => {
  return (
    <footer className="mt-20 mb-8 py-16">
      <div className="flex gap-8 items-center justify-center ">
        {SOCIAL_MEDIA_LINKS.map((links, index) => {
          return (
            <a href={links.href} key={index} target="_blank">
              {links.icon}
            </a>
          );
        })}
      </div>

      <seciton className="text-center ">
        <p className="text-neutral-500 mt-10 tracking-tighter text-md">
          &copy;2026 Abdur Rahman Adil. All rights reserved.
        </p>
      </seciton>
    </footer>
  );
};
