import Image from "next/image";
import {ReactNode} from "react";
import {Text} from "./Text";

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
        <footer className="container mx-auto mt-28 flex flex-col justify-between py-12 px-8 lg:flex-row lg:gap-0">
            <div className="flex flex-col justify-between md:gap-0">
                <Image src="/logo-white.png" width="80" height="24" alt="Lagon Logo"/>
                <Text>Copyright © {new Date().getFullYear()} GMonStage</Text>
            </div>
            <div className="flex flex-wrap justify-between gap-12 md:gap-32">
                <FooterSection title="A propos">
                    <Text>Qui sommes-nous ?</Text>
                    <Text>Notre mission</Text>
                    <Text>Notre équipe</Text>
                </FooterSection>
            </div>
        </footer>
    );
};
