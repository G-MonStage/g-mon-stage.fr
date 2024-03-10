import {motion} from "framer-motion";
import {ReactElement, ReactNode} from "react";
import {Card} from "@/components/Card";
import {Text} from "@/components/Text";
import {WorldIcon} from "@/components/icons/features/WorldIcon";
import {RollbackIcon} from "@/components/icons/features/RollbackIcon";
import {StatsIcon} from "@/components/icons/features/StatsIcon";
import {APIsIcon} from "@/components/icons/features/APIsIcon";
import {DollarIcon} from "@/components/icons/features/DollarIcon";
import {HeartIcon} from "@/components/icons/features/HeartIcon";

type CustomCardProps = {
  icon: ReactElement;
  title: string;
  description: ReactNode;
  delay: number;
};

const CustomCard = ({ icon, title, description, delay }: CustomCardProps) => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, top: 20 }}
    whileInView={{ opacity: 1, top: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
  >
    <Card lineAnimation className="flex flex-col gap-4 rounded-2xl p-6 md:p-12">
      {icon}
      <Text size="h3">{title}</Text>
      <Text className="justify-self-end">{description}</Text>
    </Card>
  </motion.div>
);

export const CardsSection = () => {
  return (
    <section className="flex flex-col items-center gap-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Text size="h2">Emballé avec des fonctionnalités</Text>
      </motion.div>
      <div className="grid grid-cols-1 grid-rows-6 gap-4 sm:grid-cols-2 sm:grid-rows-3 md:gap-6 lg:grid-cols-3 lg:grid-rows-2">
        <CustomCard
          icon={
            <div className="h-16 w-16 rounded-full bg-gradient-to-b from-[#8dc2fb] to-[#446EFF] p-[1px]">
              <div className="from-blue-1 flex h-full items-center justify-center rounded-full bg-gradient-to-b to-[#446EFF]">
                <WorldIcon />
              </div>
            </div>
          }
          title="Trouver un Stage en un Clic"
          description="Fini le temps passé à chercher des stages. Un clic, et vous voilà prêt à découvrir une multitude d'opportunités."
          delay={0.2}
        />
        <CustomCard
          icon={
            <div className="h-16 w-16 rounded-full bg-gradient-to-b from-[#86fbd5] to-[#14BDB3] p-[1px]">
              <div className="from-green flex h-full items-center justify-center rounded-full bg-gradient-to-b to-[#14BDB3]">
                <RollbackIcon />
              </div>
            </div>
          }
          title="Entreprises Engagées"
          description="Nos entreprises partenaires s'engagent à recruter des stagiaires. Vous trouverez quelque chose ici."
          delay={0.4}
        />
        <CustomCard
          icon={
            <div className="h-16 w-16 rounded-full bg-gradient-to-b from-[#c797fa] to-[#6C04AC] p-[1px]">
              <div className="from-purple flex h-full items-center justify-center rounded-full bg-gradient-to-b to-[#6C04AC]">
                <StatsIcon />
              </div>
            </div>
          }
          title="Diversité des Secteurs"
          description="Peu importe votre spécialisation en Bac Pro, nous avons des stages pour tout le monde.Peu importe votre spécialisation en Bac Pro, nous avons des stages pour tout le monde."
          delay={0.6}
        />
        <CustomCard
          icon={
            <div className="h-16 w-16 rounded-full bg-gradient-to-b from-[#86fbd5] to-[#14BDB3] p-[1px]">
              <div className="from-green flex h-full items-center justify-center rounded-full bg-gradient-to-b to-[#14BDB3]">
                <APIsIcon />
              </div>
            </div>
          }
          title="Contribuez à la Planète"
          description="Chez nous, chaque abonnement aide à planter des arbres. Plus vous êtes nombreux à vous abonner, plus on fait du bien à notre Terre."
          delay={0.2}
        />
        <CustomCard
          icon={
            <div className="h-16 w-16 rounded-full bg-gradient-to-b from-[#c797fa] to-[#6C04AC] p-[1px]">
              <div className="from-purple flex h-full items-center justify-center rounded-full bg-gradient-to-b to-[#6C04AC]">
                <DollarIcon />
              </div>
            </div>
          }
          title="Abonnement Flexible"
          description="À partir de 4,99€ pour deux semaines, choisissez l'abonnement qui vous convient. Besoin de plus de temps ? C'est juste 1€ de plus par semaine."
          delay={0.4}
        />
        <CustomCard
          icon={
            <div className="h-16 w-16 rounded-full bg-gradient-to-b from-[#8dc2fb] to-[#446EFF] p-[1px]">
              <div className="from-blue-1 flex h-full items-center justify-center rounded-full bg-gradient-to-b to-[#446EFF]">
                <HeartIcon />
              </div>
            </div>
          }
          title="Recherche Rapide"
          description="Grâce à notre moteur de recherche optimisé, trouvez votre stage idéal en quelques secondes."
          delay={0.6}
        />
      </div>
    </section>
  );
};
