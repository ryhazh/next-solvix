// components/FaqItem.tsx
type FaqItemProps = {
  question: string;
  answer: string;
};

export default function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="pb-4 border-b border-gray-200">
      <h3 className="text-xl font-semibold text-lime-700 mb-2">
        {question}
      </h3>
      <p className="text-gray-600 text-base">{answer}</p>
    </div>
  );
}
