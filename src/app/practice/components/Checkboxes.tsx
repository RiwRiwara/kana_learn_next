import { KanaType } from "@/types";

export default function Checkboxes({
  types,
  setTypes,
  soundEnabled,
  setSoundEnabled,
}: {
  types: KanaType[];
  setTypes: (types: KanaType[]) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
}) {
  const toggleType = (type: KanaType) => {
    setTypes(
      types.includes(type) ? types.filter((t) => t !== type) : [...types, type]
    );
  };

  const handleSoundToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSoundState = event.target.checked;
    setSoundEnabled(newSoundState);
  };

  return (
    <div className="flex justify-center gap-6 text-lg mb-6 flex-wrap">
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
      <label>
        <input
          type="checkbox"
          checked={soundEnabled}
          onChange={handleSoundToggle}
        />{' '}
        Sound <span className="text-xs text-gray-300">(beta)</span>
      </label>
    </div>
  );
}