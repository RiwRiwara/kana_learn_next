import { KanaType } from "@/types";

export default function Checkboxes({
  types,
  setTypes,
}: {
  types: KanaType[];
  setTypes: (types: KanaType[]) => void;
}) {
  const toggleType = (type: KanaType) => {
    setTypes(
      types.includes(type) ? types.filter((t) => t !== type) : [...types, type]
    );
  };

  return (
    <div className="flex justify-center gap-6 text-lg mb-6">
      <label>
        <input
          type="checkbox"
          checked={types.includes('normal')}
          onChange={() => toggleType('normal')}
        />{' '}
        Normal
      </label>
      <label>
        <input
          type="checkbox"
          checked={types.includes('dakuon')}
          onChange={() => toggleType('dakuon')}
        />{' '}
        Dakuon
      </label>
      <label>
        <input
          type="checkbox"
          checked={types.includes('yoon')}
          onChange={() => toggleType('yoon')}
        />{' '}
        Yoon
      </label>
    </div>
  );
}