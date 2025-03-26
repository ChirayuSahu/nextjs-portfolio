import { cn } from "@/lib/utils";
import CustomButton from "./CustomButon";
import { IconBrandGithub } from "@tabler/icons-react";
import CircularText from "./CircularText/CircularText";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  url,
  source,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  url?: string;
  source?: string;
}) => {

  return (
    <div
      className={cn(
        "dark group/bento z-20 shadow-[#393BB2] row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-black p-6 transition duration-200 hover:shadow-lg dark:border-white/[0.2] dark:bg-black dark:shadow-none backdrop-filter backdrop-blur-sm bg-opacity-30 overflow-hidden",
        className
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-y-2">
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 text-2xl dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300 line-clamp-5">
          {description}
        </div>
      </div>
      <div className="flex mt-6 md:mt-0 mb-0">
        <CustomButton text="Link" url={url} />
        {source?.trim() ? (
          <a href={source} target="_blank" className="inline-block">
            <div className="relative ml-2 flex items-center justify-center h-8 w-8 p-[1.5px] rounded-full">
              <span className="absolute inset-0 animate-[spin_2s_linear_infinite] rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>

              <div className="relative p-2 flex h-full w-full items-center justify-center bg-slate-950 rounded-full">
                <IconBrandGithub color="white" className="flex" />
              </div>
            </div>



          </a>
        ) : null}
      </div>
      <div className="absolute z-[-1] -bottom-20 -right-20">
        <CircularText
          text={`=-=-=-=-=-=-=-`}
          onHover="slowDown"
          spinDuration={10}
          className="opacity-50 uppercase"
        />
      </div>
    </div>
  );
};
