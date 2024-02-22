"use client"
import {Button} from "./Button";
import Image from "next/image";
import Link from "next/link";
import {GitHubIcon} from "./icons/GitHubIcon";
import {BurgerIcon} from "./icons/BurgerIcon";
import {useState} from "react";
import {CloseIcon} from "./icons/CloseIcon";
import FormationIcon from "./icons/navbar/Formation";
import PremiumIcon from "./icons/navbar/PremiumIcon";
import BlogIcon from "./icons/navbar/BlogIcon";
import {usePathname} from "next/navigation";

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathName = usePathname();

    return (
        <header
            className="bg-dark container sticky top-0 z-50 mx-auto rounded-md py-4 px-8 backdrop-blur md:rounded-[18px] outline outline-1 outline-gray-800">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Image src="/logo-white.png" width="130" height="24" alt="Lagon Logo"/>
                </Link>
                <button className="px-4 md:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
                    {open ? <CloseIcon/> : <BurgerIcon/>}
                </button>
                <div className="hidden gap-7 lg:gap-0.5 lg:flex">
                    <Button size="space" variant="danger" href="/search" leftIcon={<FormationIcon/>}
                            className={pathName === "/search" ? "text-gray-200 stroke-blue-400" : "text-gray-300 stroke-gray-500 hover:stroke-blue-400 "}> Chasse
                        aux Stages </Button>

                    <Button size="space" variant="danger" href="/premium" leftIcon={<PremiumIcon/>}
                            className={pathName === "/premium" ? "text-gray-200 stroke-blue-400" : "text-gray-300 stroke-gray-500 hover:stroke-blue-400"}> Bon
                        Plans </Button>

                    <Button size="space" variant="danger" href="/blog" leftIcon={<BlogIcon/>}
                            className={pathName === "/blog" ? "text-gray-200 stroke-blue-400" : "text-gray-300 stroke-gray-500 hover:stroke-blue-400"}> Pour
                        les Entreprises </Button>

                    {/*<Button size="space" variant="danger" href="/pricing" leftIcon={<ConferenceIcon/>}*/}
                    {/*        className={asPath === "/pricing" ? "text-gray-200 stroke-blue-400" : "text-gray-300 stroke-gray-500 hover:stroke-blue-400"}> Conférence </Button>*/}

                </div>
                <div className="hidden lg:flex items-center justify-end gap-4 lg:gap-3">
                    <div className="border-r border-gray-700 h-6"/>
                    <Button
                        variant="tertiary"
                        rightIcon={<GitHubIcon className="h-6 w-6 fill-current stroke-white"/>}
                        href="/login"
                    >
                        Connexion
                    </Button>
                    <div className="border-r border-gray-700 h-1"/>
                    <Button variant="secondary" href="/register">
                        Inscription
                    </Button>
                </div>
            </div>
            {open ? (
                <div className="text-grey flex flex-col gap-4 pt-12 text-lg">
                    <Link href="/search" scroll={false}>
                        Chasse aux Stages
                    </Link>
                    <div className="border-b-grey/20 border-b"/>
                    <Link href="/premium">Bon Plans</Link>
                    <div className="border-b-grey/20 border-b"/>
                    <Link href="/premium" className={pathName.startsWith('/pricing') ? '!text-white' : undefined}>
                        Pour les Entreprises
                    </Link>
                    <div className="mt-6 flex justify-between gap-12">
                        <Button
                            variant="tertiary"
                            leftIcon={<GitHubIcon className="h-6 w-6 fill-current"/>}
                            href="/login"
                            target="_blank"
                            className="flex-1"
                        >
                            Connexion
                        </Button>
                        <Button variant="secondary" href="/register" className="flex-1">
                            Inscription
                        </Button>
                    </div>
                </div>
            ) : null}
        </header>
    );
};
