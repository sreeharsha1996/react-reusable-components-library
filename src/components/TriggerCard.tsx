function TriggerCard({
    emoji, title, description, onClick, color,
}: {
    emoji: string;
    title: string;
    description: string;
    onClick: () => void;
    color: string;
}) {
    return (
        <button
            onClick={onClick}
            className="group text-left flex flex-col gap-3 p-5 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 transition-all duration-200 hover:border-white/15 hover:scale-[1.02] active:scale-[0.99] cursor-pointer w-full"
        >
            <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${color}18`, border: `1px solid ${color}30` }}
            >
                {emoji}
            </div>
            <div>
                <p className="text-white font-semibold text-sm mb-1">{title}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
            </div>
            <span className="text-xs font-semibold" style={{ color }}>
                Open Modal →
            </span>
        </button>
    );
}

export default TriggerCard