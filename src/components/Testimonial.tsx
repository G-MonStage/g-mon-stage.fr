import { ReactNode } from "react";

type TestimonialProps = {};

export const Testimonial = ({}: TestimonialProps) => {
  return (
      <div
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-6 py-6 rounded-lg flex-col justify-center items-start gap-[19px] inline-flex">
        <div className="justify-center items-center gap-4 inline-flex">
          <img alt='Avatar' className="w-[60px] h-[60px] rounded-[45px]" src="https://via.placeholder.com/60x60"/>
          <div className="flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-center text-zinc-200 text-xl font-bold font-['Inter'] leading-normal">Rai Raksa
              Muhamad
            </div>
            <div className="text-center text-neutral-400 text-base font-normal font-['Inter'] leading-normal">Fullstack
              PHP Developer
            </div>
          </div>
        </div>
        <div className="w-full text-stone-300 text-base font-normal font-['Inter'] leading-normal">“Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nunc placerat enim et pretium hendrerit. Fusce lacus augue, feugiat
          quis sapien vel, pretium porta tortor.“
        </div>
      </div>
  );
};
