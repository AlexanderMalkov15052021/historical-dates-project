
import { Dates } from "shared";
import { CarouselWrapper } from "features";

export const CarouselPage = ({ dates }: { dates: Dates[] }) => {
    //*▼*// раскоментируйте чтобы продублировать //*▼*//
    return (
        <div>
            <CarouselWrapper dates={dates} />
            {/* <CarouselWrapper dates={dates} /> */}
        </div>
    )
}