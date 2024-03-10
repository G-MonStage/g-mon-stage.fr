import {MotionDiv} from "@/lib/motion";
import {Text} from "@/components/Text";
import {Button} from "@/components/Button";
import {DESCRIPTION} from "@/lib/constants";

export const HomeSection = () => {
    return (

        <div>


            <div className={""}>
                <div
                    className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
                    style={{
                        maskImage: "linear-gradient(to bottom, transparent, black)",
                        WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
                    }}
                />

            </div>
            <section className="relative flex flex-col items-center justify-center gap-8">

                <div className="flex flex-col items-center gap-4 text-center">

                    <MotionDiv
                        className="relative max-w-5xl"
                        initial={{opacity: 0, top: 20}}
                        animate={{opacity: 1, top: 0}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                    >

                        <Text size="h1" variant="radialGradientWhite">
                            <span
                                className="bg-gradient-to-r from-blue-600 to-indigo-900 bg-clip-text text-transparent">Trouve&nbsp;</span>
                            dès maintenant ton&nbsp;
                            <span
                                className="bg-gradient-to-r from-blue-600 to-indigo-900 bg-clip-text text-transparent">Stage&nbsp;</span>
                            avec nous !
                        </Text>
                    </MotionDiv>
                    <MotionDiv
                        className="relative max-w-2xl"
                        initial={{opacity: 0, top: 20}}
                        animate={{opacity: 1, top: 0}}
                        transition={{duration: 0.6, delay: 0.2, ease: "easeOut"}}
                    >
                        <Text>{DESCRIPTION}</Text>
                    </MotionDiv>
                </div>


                <MotionDiv
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.8, delay: 0.6}}
                >


                    <div className="flex items-center  justify-between">

                        <Button variant="secondary" size="lg" className="justify-center justify-self-end"
                                href="https://eleve.g-mon-stage.fr/dashboard">
                            Commencer ma recherche !
                        </Button>
                    </div>


                </MotionDiv>


            </section>
        </div>
    );
};