"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";

type ScrollToTopLinkProps = ComponentProps<typeof Link>;

export default function ScrollToTopLink({
  href,
  onClick,
  ...props
}: ScrollToTopLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    
    router.push(href.toString());
    
    if (onClick) {
      onClick(e);
    }
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
