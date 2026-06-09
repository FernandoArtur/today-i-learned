import type { Fact } from "../types";
import { CATEGORIES } from "../constants";

interface FactItemProps {
    fact: Fact
};

export default function FactItem( {fact}: FactItemProps ) {
const category = CATEGORIES.find((category) => {
  return fact.category === category.value;
});

  return (
    <>
      <li className="bg-stone-700 py-4 px-6 flex gap-6 items-center justify-between rounded-2xl">
        <div className="flex gap-3">
          <p>{fact.text}</p>
          <a href={fact.source} 
          target= "_blank"
          className="text-stone-400 capitalize hover:text-sky-600 transition duration-300"
          >(fonte)</a>
        </div>
        <span>{category?.label}</span>
      </li>
    </>
  )
};