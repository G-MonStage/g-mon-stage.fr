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
          title="Inscription rapide et simple"
          description="Les élèves peuvent s'inscrire en quelques clics et renseigner leur filière pour accéder à une liste d'entreprises correspondantes. Pas besoin de se prendre la tête, on va droit au but !"
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
          title="Version premium abordable"
          description="Selon ton année d'étude, tu peux choisir de passer en mode premium pour mettre toutes les chances de ton côté. Plus besoin de stresser pour trouver ton stage, on s'occupe de tout !"
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
          title="Des données d'entreprises fiables"
          description="On utilise des données provenant de l'état pour t'assurer un maximum de choix d'entreprises pour ton stage. Pas de fausses promesses, que du concret !"
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
          title="Un algorithme qui fait Mouche"
          description="Notre algorithme est conçu pour t'envoyer aux entreprises qui correspondent le mieux à ton profil. Plus de temps perdu à postuler à des offres qui ne te correspondent pas, on vise juste !"
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
          title="Une commission Minime"
          description="En choisissant la version premium, tu ne paies que 5% de ton salaire à chaque fin de stage. Pas de frais cachés, tout est transparent !"
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
          title="Envoi automatique de ton profil"
          description="Avec la version premium, ton CV et ta lettre de motivation sont envoyés directement aux entreprises partenaires qui correspondent à ta filière. Fini les heures passées à démarcher, on s'occupe de tout pour toi !"
          delay={0.6}
        />
      </div>
    </section>
  );
};
