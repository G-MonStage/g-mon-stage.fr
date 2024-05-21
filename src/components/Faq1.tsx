"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        section: "Recherche de Stage",
        qa: [
            {
                question: "Comment fonctionne la recherche de stage sur G mon stage?",
                answer: (
                    <span>
            Lorsque vous vous inscrivez sur notre plateforme, vous renseignez votre filière de bac professionnel et votre code postal. Ensuite, vous accédez à une liste d'entreprises correspondant à votre filière et à côté de chez vous, avec leur position géographique et leur nom. Vous pouvez alors rechercher ces entreprises par vous-même et postuler directement auprès d'elles.
          </span>
                ),
            },
            {
                question: "Comment postuler à un stage sur G mon stage ?",
                answer: (
                    <span>
            Sur notre plateforme, nous ne proposons pas d'offres de stage à proprement parler. Nous mettons à votre disposition une liste d'entreprises correspondant à votre filière de bac professionnel, avec leur position géographique et leur nom. Vous pouvez alors rechercher ces entreprises par vous-même et postuler directement auprès d'elles. Si vous optez pour la version premium de notre plateforme, nous nous chargeons de transmettre votre profil (CV et lettre de motivation) à des entreprises partenaires correspondant à votre filière, grâce à un algorithme.
          </span>
                ),
            },
            {
                question: "Comment savoir si une entreprise a accepté ma candidature ?",
                answer: (
                    <span>
            Si une entreprise est intéressée par votre profil, elle vous contactera directement pour vous proposer un entretien ou pour vous faire une proposition de stage. Nous vous conseillons donc de vérifier régulièrement vos emails et vos messages.
          </span>
                ),
            },
            {
                question: "Est-il possible de postuler à plusieurs stages en même temps sur G mon stage ?",
                answer: (
                    <span>
            Oui, il est tout à fait possible de postuler à plusieurs stages en même temps sur notre plateforme. Si vous optez pour la version premium, nous transmettons votre profil à plusieurs entreprises partenaires correspondant à votre filière. Nous vous recommandons cependant de personnaliser votre lettre de motivation en fonction de chaque entreprise, afin de maximiser vos chances d'être sélectionné. Si vous utilisez la version gratuite de notre plateforme, vous pouvez postuler auprès de plusieurs entreprises en les recherchant par vous-même à partir des informations que nous vous fournissons.
          </span>
                ),
            },
        ],
    },
    {
        section: "Version Premium",
        qa: [
            {
                question: "En quoi consiste la version premium de G mon stage ?",
                answer: (
                    <span>
            En souscrivant à la version premium de notre plateforme, nous nous chargeons de trouver un stage pour vous. Vous devrez nous fournir votre CV et votre lettre de motivation, que nous transmettrons à nos entreprises partenaires. Le coût de cette prestation dépend de votre niveau d'études : 10€ en seconde, 15€ en première et 20€ en terminale (Prix flexible en fonction de votre statut).
          </span>
                ),
            },
            {
                question: "Comment les entreprises partenaires sont-elles sélectionnées pour la version premium ?",
                answer: (
                    <span>
            Nous sélectionnons les entreprises partenaires pour la version premium en fonction de leur pertinence avec les filières de bac professionnel que nous proposons sur notre plateforme. Nous nous assurons également de leur sérieux et de leur fiabilité, afin de garantir à nos utilisateurs des stages de qualité.
          </span>
                ),
            },
        ],
    },
];

export function FAQ() {
    return (
        <section id="faq">
            <div className="py-14">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="mx-auto max-w-5xl text-center">
                        <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
                            FAQs
                        </h4>
                        <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl font-display">
                            Quelques questions ? Vous êtes au bonne endroit !
                        </h2>
                        <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
                            Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à nous contacter.
                        </p>
                    </div>
                    <div className="container mx-auto my-12 max-w-[600px] space-y-12">
                        {faqs.map((faq, idx) => (
                            <section key={idx} id={"faq-" + faq.section}>
                                <h2 className="mb-4 text-left text-base font-semibold tracking-tight text-foreground/60">
                                    {faq.section}
                                </h2>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="flex w-full flex-col items-center justify-center"
                                >
                                    {faq.qa.map((faq, idx) => (
                                        <AccordionItem
                                            key={idx}
                                            value={faq.question}
                                            className="w-full max-w-[600px]"
                                        >
                                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                                            <AccordionContent>{faq.answer}</AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
