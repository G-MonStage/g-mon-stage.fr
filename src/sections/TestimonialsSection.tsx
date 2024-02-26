import { Testimonial } from "@/components/Testimonial";

export const TestimonialsSection = () => {
  return (
    <section>
      <h1 className="text-white text-3xl mb-14 text-center font-bold">
        Ce que les gens ont dit :
      </h1>
      <div className="flex rounded-xl ring-1 ring-[#A0CBFF]">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </section>
  );
};
