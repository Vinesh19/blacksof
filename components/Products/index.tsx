"use client";

import Image from "next/image";
import { useState } from "react";

type ProductDataProps = {
  data: {
    title: string;
    subtitle: string;
    description: string;
    cardData: CardData[];
  };
};

type CardData = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
};

const Products = (props: ProductDataProps) => {
  const { data } = props;
  const { title, subtitle, description, cardData } = data;

  const [selectedCard, setSelectedCard] = useState(cardData[0]);

  const handleButtonClick = (card: CardData) => {
    setSelectedCard(card);
  };

  const handlePrevious = () => {
    const currentIndex = cardData.findIndex(
      (card) => card.id === selectedCard.id
    );
    const previousIndex =
      (currentIndex - 1 + cardData.length) % cardData.length;
    setSelectedCard(cardData[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = cardData.findIndex(
      (card) => card.id === selectedCard.id
    );
    const nextIndex = (currentIndex + 1) % cardData.length;
    setSelectedCard(cardData[nextIndex]);
  };

  return (
    <section className="bg-[#e4eff7] px-[10%] xl:px-[14%] py-24 my-32">
      <div>
        <h2 className="bg-gradient-to-r from-[#f5f3f3] text-[#00386B] w-12 h-12 text-2xl py-2 px-8 font-semibold">
          {title}
        </h2>
        <h3 className="text-xl sm:text-3xl xl:text-5xl max-w-[860px] xl:leading-tight mt-5">
          <span className="font-medium">{subtitle}</span>
          {description}
        </h3>
      </div>

      <div className="mt-12 lg:mt-24">
        <div className="flex flex-wrap gap-6">
          {cardData?.map((item) => (
            <button
              key={item?.id}
              className={`text-sm lg:text-base text-[#797979] border border-[#797979] px-4 py-1 ${
                selectedCard.id === item.id
                  ? "text-[#476bd7] border-[#00386B] bg-gradient-to-r from-[#eaf5f5] via-white to-[#eaf5f5]"
                  : ""
              }`}
              onClick={() => handleButtonClick(item)}
            >
              {item?.title}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <div className="flex">
            <div className="hidden lg:block basis-1/2 w-full relative">
              <Image
                src={selectedCard.imageSrc}
                alt={selectedCard.title}
                fill={true}
                objectFit="cover"
              />
              <button
                className="absolute bottom-0 right-0 bg-[#d1f0f0b7] rotate-180"
                onClick={handlePrevious}
              >
                <Image
                  src="/right-arrow.png"
                  width={40}
                  height={40}
                  alt="Left Arrow"
                />
              </button>
            </div>

            <div className="basis-full lg:basis-1/2 px-10 py-12 md:py-24 md:pl-12 md:pr-32 max-w-[600px] bg-gradient-to-b from-[#fcfeff] to-[#c1d0ef] relative">
              <p className="text-[#818181]">Product {selectedCard.id}/5</p>
              <h2 className="text-2xl md:text-3xl md:leading-10 my-3">
                {selectedCard.title}
              </h2>
              <p>{selectedCard.description}</p>
              <a
                href="https://www.blacksof.com/"
                target="_blank"
                className="flex gap-2 text-[#3661FF] text-xl mt-5"
              >
                Know More
                <Image
                  src="/button-icon.png"
                  width={28}
                  height={28}
                  alt="Link Arrow"
                />
              </a>
              <button
                className="hidden lg:block absolute bottom-0 left-0 bg-slate-200"
                onClick={handleNext}
              >
                <Image
                  src="/right-arrow.png"
                  width={40}
                  height={40}
                  alt="Right Arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
