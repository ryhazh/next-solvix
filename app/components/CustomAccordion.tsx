"use client";

import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type CustomAccordionProps = {
  items: FAQItem[];
};

const AccordionItem = ({
  header,
  ...rest
}: { header: string } & React.ComponentProps<typeof Item>) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <div className="flex items-center w-full">
        <span>{header}</span>
        <ChevronDown
          className={`ml-auto transition-transform duration-200 ${
            isEnter ? "rotate-180" : ""
          }`}
          size={20}
        />
      </div>
    )}
    className="border-b border-gray-400"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left
        }`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);

const CustomAccordion = ({ items }: CustomAccordionProps) => {
  return (
    <div className="mx-2 my-4">
      <Accordion transition transitionTimeout={200}>
        {items.map((item, idx) => (
          <AccordionItem
            key={idx}
            header={item.question}
            initialEntered={idx === 0}
          >
            {item.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CustomAccordion;
