import { ReactNode } from "react";

type TestimonialProps = {};

export const Testimonial = ({}: TestimonialProps) => {
  return (
    <div className="py-10 flex flex-col items-center justify-center gap-8">
      <h1 className="text-xl text-[#F9F9FA] leading-relaxed text-center w-4/5">
        "Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s"
      </h1>
      <div className="flex items-center gap-4">
        <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
          <img src="https://rairaksa.github.io/assets/img/rai.jpg" />
        </div>
        <div className="flex flex-col tracking-wider">
          <label className="text-[#F9F9FA] font-bold text-base">
            Rai Raksa Muhamad
          </label>
          <label className="text-gray-400 font-normal text-sm">
            Fullstack PHP Developer
          </label>
        </div>
      </div>
    </div>
  );
};