// ─── Demo Section Components ────────────────────────────────────────────
function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">{children}</h2>
    );
}

export default SectionTitle