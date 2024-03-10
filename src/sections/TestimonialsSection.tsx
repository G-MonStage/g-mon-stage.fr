import { Testimonial } from "@/components/Testimonial";

export const TestimonialsSection = () => {
    return (
        <section id='testimonials'>
            <h1 className="text-zinc-200 text-5xl mb-14 text-center font-bold">
                Temoignages
            </h1>
            <div className="flex flex-wrap justify-center text-center rounded-2xl border border-slate-400">
                <Testimonial
                    name="Léa"
                    position="Bac Pro Vente"
                    avatarUrl="/charac/charac-fille-1.png"
                    testimonial="Grâce à votre plateforme, j'ai pu trouver un stage dans une boutique de vêtements. J'ai été accompagnée dans mes démarches et j'ai reçu des offres de stage correspondant à mon profil. Merci pour votre aide précieuse !"
                />
                <Testimonial
                    name="Kevin"
                    position="Bac Pro Électrotechnique"
                    avatarUrl="/charac/charac-1.png"
                    testimonial="Je tiens à remercier votre plateforme pour m'avoir aidé à trouver un stage dans une entreprise d'électricité. Les offres de stage proposées correspondaient parfaitement à mes attentes et j'ai pu trouver rapidement un stage intéressant."
                />
                <Testimonial
                    name="Sarah"
                    position="Bac Pro Services Aux Personnes et Aux Territoires"
                    avatarUrl="/charac/charac-fille-2.png"
                    testimonial="J'ai été très satisfaite de l'aide apportée par votre plateforme pour trouver un stage dans une maison de retraite. Les offres de stage étaient variées et j'ai pu trouver un stage correspondant à mon projet professionnel. Merci beaucoup !"
                />
            </div>
        </section>
    );
};