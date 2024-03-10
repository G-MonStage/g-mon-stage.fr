import AccordionItem from "@/components/AccordionItem";

export const FaqSection = () => {
  return (
    <section id='faq' className="relative z-20 overflow-hidden pb-12 lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[720px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-stone-300">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-semibold text-stone-300 sm:text-5xl">
                Quelques questions ? Vous êtes au bonne endroit !
              </h2>
              <p className="text-stone-300">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full pr-4 lg:w-1/2 ">
            <AccordionItem
              header="Comment fonctionne la recherche de stage sur G mon stage?"
              text="Lorsque vous vous inscrivez sur notre plateforme, vous renseignez votre filière de bac professionnel et votre code postal. Ensuite, vous accédez à une liste d'entreprises correspondant à votre filière et à coter de chez vous, avec leur position géographique et leur nom. Vous pouvez alors rechercher ces entreprises par vous-même et postuler directement auprès d'elles."
            />
            <AccordionItem
              header="En quoi consiste la version premium de G mon stage ?"
              text="En souscrivant à la version premium de notre plateforme, nous nous chargeons de trouver un stage pour vous. Vous devrez nous fournir votre CV et votre lettre de motivation, que nous transmettrons à nos entreprises partenaires. Le coût de cette prestation dépend de votre niveau d'études : 10€ en seconde, 15€ en première et 20€ en terminale (Prix flexible en fonction de votre status)."
            />
            <AccordionItem
              header="Comment les entreprises partenaires sont-elles sélectionnées pour la version premium ?"
              text="Nous sélectionnons les entreprises partenaires pour la version premium en fonction de leur pertinence avec les filières de bac professionnel que nous proposons sur notre plateforme. Nous nous assurons également de leur sérieux et de leur fiabilité, afin de garantir à nos utilisateurs des stages de qualité."
            />
          </div>
          <div className="w-full lg:w-1/2">
            <AccordionItem
              header="Comment postuler à un stage sur G mon stage ?"
              text=" Sur notre plateforme, nous ne proposons pas d'offres de stage à proprement parler. Nous mettons à votre disposition une liste d'entreprises correspondant à votre filière de bac professionnel, avec leur position géographique et leur nom. Vous pouvez alors rechercher ces entreprises par vous-même et postuler directement auprès d'elles. Si vous optez pour la version premium de notre plateforme, nous nous chargeons de transmettre votre profil (CV et lettre de motivation) à des entreprises partenaires correspondant à votre filière, grâce à un algorithme."
            />
            <AccordionItem
              header="Comment savoir si une entreprise a accepté ma candidature ?"
              text="Si une entreprise est intéressée par votre profil, elle vous contactera directement pour vous proposer un entretien ou pour vous faire une proposition de stage. Nous vous conseillons donc de vérifier régulièrement vos emails et vos messages."
            />
            <AccordionItem
              header="Est-il possible de postuler à plusieurs stages en même temps sur G mon stage ?"
              text="Oui, il est tout à fait possible de postuler à plusieurs stages en même temps sur notre plateforme. Si vous optez pour la version premium, nous transmettons votre profil à plusieurs entreprises partenaires correspondant à votre filière. Nous vous recommandons cependant de personnaliser votre lettre de motivation en fonction de chaque entreprise, afin de maximiser vos chances d'être sélectionné. Si vous utilisez la version gratuite de notre plateforme, vous pouvez postuler auprès de plusieurs entreprises en les recherchant par vous-même à partir des informations que nous vous fournissons."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
