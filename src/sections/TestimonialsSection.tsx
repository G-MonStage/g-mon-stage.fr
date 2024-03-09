import { Testimonial } from "@/components/Testimonial";

export const TestimonialsSection = () => {
  return (
      <section id='testimonials'>
          <h1 className="text-zinc-200 text-5xl mb-14 text-center font-bold">
              Temoignages
          </h1>
          <div className="flex flex-wrap justify-center text-center rounded-2xl border border-slate-400">
              <Testimonial/>
              <Testimonial/>
              <Testimonial/>
          </div>
      </section>
  );
};
