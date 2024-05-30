import Image from "next/image";
import { NextImageSrc } from "@/types/common";

interface PlatformData {
  data: {
    id: number;
    imageSrc: NextImageSrc;
    altText: string;
    textContent: string;
  }[];
}

const Platform = (props: PlatformData) => {
  const { data } = props;

  const getGridItemClasses = (index: number) => {
    let classes = " basis-full shadow-lg lg:shadow-none p-5 lg:p-0";
    if (index === 0)
      classes +=
        " lg:border-r-2 lg:border-b-2 lg:pr-[10%] lg:pb-5 lg:basis-[50%]";
    if (index === 1) classes += " lg:border-b-2 lg:pl-[20%] lg:basis-[50%]";
    if (index === 2)
      classes += " lg:border-r-2 lg:border-b-2 lg:pt-28 lg:basis-[30%]";
    if (index === 3)
      classes += " lg:border-b-2 lg:pl-[20%] lg:basis-[70%] lg:pt-20";
    if (index === 4)
      classes +=
        " lg:border-r-2 lg:border-b-2 lg:basis-[50%] lg:pr-[10%] lg:pt-20";
    if (index === 5)
      classes +=
        " lg:border-b-2 lg:basis-[50%] lg:h-[500px] lg:pt-20 lg:pl-[10%]";

    return classes;
  };

  return (
    <section className="px-[10%] lg:px-[17%]">
      <p className="mx-auto text-2xl lg:text-4xl xl:text-5xl xl:max-w-[840px] text-center font-medium">
        The platform assists city managers on multiple fronts
      </p>

      <div className="flex flex-wrap gap-y-5 mt-20 ">
        {data.map((item, index) => (
          <div key={item.id} className={getGridItemClasses(index)}>
            <div className="w-[84px] h-[84px]">
              <Image
                src={item.imageSrc}
                alt={item.altText}
                width={84}
                height={84}
                className="size-full"
              />
            </div>
            <p className="text-xl xl:text-3xl mt-5">{item.textContent}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Platform;
