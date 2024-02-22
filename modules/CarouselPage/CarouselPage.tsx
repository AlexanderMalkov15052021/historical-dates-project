'use client';

import { Dates } from "@/shared";
import { CarouselWrapper } from "features";

export const CarouselPage = (props: Dates[]) => {
    //*▼*// раскоментируйте чтобы продублировать //*▼*//
    return (
        <div>
            <CarouselWrapper {...props} />
            {/* <CarouselWrapper {...props} /> */}
        </div>
    )
}