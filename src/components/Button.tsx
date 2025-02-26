export default function Button({
    onClick,
    children,
    color,
}: {
    onClick: () => void;
    children: React.ReactNode;
    color: 'blue' | 'green';
}) {
    return (
        <button
            onClick={onClick}
            className={`text-white text-lg px-6 py-3 rounded-lg transition ${color === 'blue'
                ? 'bg-blue-400 hover:bg-blue-500'
                : 'bg-green-400 hover:bg-green-500'
                }`}
        >
            {children}
        </button>
    );
}