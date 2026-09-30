export function SealBadge({ top, middle, bottom }: { top: string; middle: string; bottom: string }) {
  return (
    <div className="seal-badge" aria-label={`${top}, ${middle}, ${bottom}`}>
      <span>{top}</span>
      <strong>{middle}</strong>
      <span>{bottom}</span>
    </div>
  );
}
