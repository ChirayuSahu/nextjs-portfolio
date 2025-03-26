import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import Squares from "./ui/Squares/Squares";

import { gridData } from "@/data/aboutData";

export function Grid() {
  return (
    <>
      <div className="bg-black h-full">
        <div className="absolute z-0 w-full">
          <Squares
            speed={0.4}
            squareSize={50}
            direction='diagonal' // up, down, left, right, diagonal
            borderColor='#FFFFFF'
            hoverFillColor='#393BB2'
          />
        </div>
        <div className="relative z-50">
          <BentoGrid className="max-w-7xl p-10 h-full">
            {gridData.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                url={item.url || '#'}
                source={item.source}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </>
  );
}