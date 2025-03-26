import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import Squares from "./ui/Squares/Squares";

import { gridData } from "@/data/aboutData";

export function Grid() {
  return (
    <>
      <div className="bg-black h-full relative">
        <div className="absolute z-0 bottom-0 top-0 w-full">
          <Squares
            speed={0.2}
            squareSize={50}
            direction='down' // up, down, left, right, diagonal
            borderColor='#FFFFFF'
            hoverFillColor='#393BB2'
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none"></div>
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