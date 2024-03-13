import Image from "next/image";
import {ReactNode} from "react";
import {Text} from "./Text";
import Link from "next/link";

type FooterSectionProps = {
    title: string;
    children: ReactNode;
};

const FooterSection = ({title, children}: FooterSectionProps) => {
    return (
        <div className="flex flex-col gap-2 md:gap-4">
            <Text variant="bold">{title}</Text>
            {children}
        </div>
    );
};

export const Footer = () => {
    return (
        <footer className="container border-t-[1px] border-gray-600 mt-28 flex items-center py-12 px-8 lg:gap-0">
            <div className="flex justify-start">
                <Text>Copyright © {new Date().getFullYear()} GMonStage</Text>
            </div>
            <div className="flex justify-end gap-8 ml-auto">
                <Link target="_blank" href="https://www.instagram.com/g_mon_stage/"
                      className=" bg-[#252134] rounded-2xl py-1 px-1">
                    <Image className="hover:scale-110 transition-all ease-in-out" src={"/Instagram.png"} width={34}
                           height={34} alt={"Phone"}/>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/company/g-mon-stage/mycompany/"
                      className=" bg-[#252134] rounded-2xl py-1 px-1">
                    <Image className="hover:scale-110 transition-all ease-in-out" src={"/Linkedin.png"} width={34}
                           height={34} alt={"Phone"}/>
                </Link>
                <Link target="_blank" href="https://www.tiktok.com/@gmonstage"
                      className=" bg-[#252134] rounded-2xl py-1 px-1">
                    <Image className="hover:scale-110 transition-all ease-in-out" src={"/Tiktok.png"} width={34}
                           height={34} alt={"Phone"}/>
                </Link>
            </div>
        </footer>

    );
};
