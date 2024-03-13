"use client";
import { Button } from "./Button";
import Image from "next/image";
import Link from "next/link";
import { GitHubIcon } from "./icons/GitHubIcon";
import { BurgerIcon } from "./icons/BurgerIcon";
import { useState } from "react";
import { CloseIcon } from "./icons/CloseIcon";
import FormationIcon from "./icons/navbar/Formation";
import PremiumIcon from "./icons/navbar/PremiumIcon";
import BlogIcon from "./icons/navbar/BlogIcon";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathName = usePathname();

  return (
    <header className="bg-dark container sticky top-0 z-50 mx-auto rounded-md py-4 px-8 backdrop-blur md:rounded-[18px] outline outline-1 outline-gray-800">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo-white.png"
            width="130"
            height="24"
            alt="Lagon Logo"
          />
        </Link>
        <button
          className="px-4 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          {open ? <CloseIcon /> : <BurgerIcon />}
        </button>
        <div className="hidden gap-7 lg:gap-0.5 lg:flex">
          <Button
            size="space"
            variant="danger"
            href="#features"
            leftIcon={<FormationIcon />}
            className={
              pathName === "#features"
                ? "text-gray-200 stroke-blue-400"
                : "text-gray-300 stroke-gray-500 hover:stroke-blue-400 "
            }
          >
            {" "}
            Fonctionnalités{" "}
          </Button>
                    <Button
                        size="space"
                        variant="danger"
                        href="#testimonials"
                        leftIcon={<PremiumIcon />}
                        className={
                            pathName === "#testimonials"
                                ? "text-gray-200 stroke-blue-400"
                                : "text-gray-300 stroke-gray-500 hover:stroke-blue-400"
                        }
                    >
                        {" "}
                        Temoignages{" "}
                    </Button>

                    <Button
                        size="space"
                        variant="danger"
                        href="#faq"
                        leftIcon={<BlogIcon />}
                        className={
                            pathName === "#faq"
                                ? "text-gray-200 stroke-blue-400"
                                : "text-gray-300 stroke-gray-500 hover:stroke-blue-400"
                        }
                    >
                        {" "}
                        Des questions ?{" "}
                    </Button>

                    {/*<Button size="space" variant="danger" href="/pricing" leftIcon={<ConferenceIcon/>}*/}
                    {/*        className={asPath === "/pricing" ? "text-gray-200 stroke-blue-400" : "text-gray-300 stroke-gray-500 hover:stroke-blue-400"}> Conférence </Button>*/}
                </div>
                <div className="hidden lg:flex items-center justify-end gap-4 lg:gap-3">
          <div className="border-r border-gray-700 h-1" />
          <Button variant="secondary" href="https://eleve.g-mon-stage.fr/dashboard">
            Commencer Maintenant -{">"}
          </Button>
        </div>
      </div>
      {open ? (
          <div className="text-grey flex flex-col gap-4 pt-12 text-lg">
            <Link href="#features" scroll={false}>
              Fonctionnalités
            </Link>
            <div className="border-b-grey/20 border-b"/>
            <Link href="#testimonials">Temoignages</Link>
            <div className="border-b-grey/20 border-b"/>
            <Link href="#faq">Des questions ?</Link>
            <div className="border-b-grey/20 border-b"/>
            <div className="mt-6 flex justify-center gap-12">
              <Button variant="secondary" href="https://eleve.g-mon-stage.fr/dashboard">
                Commencer Maintenant -{">"}
              </Button>
            </div>
          </div>
      ) : null}
    </header>
  );
};
