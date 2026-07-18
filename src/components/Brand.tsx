export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`brand ${inverse ? "brand-inverse" : ""}`}>
      <span className="brand-mark" aria-hidden="true"><i>N</i><b>H</b></span>
      <span className="brand-copy"><strong>NexHotels</strong><small>by NexGen Consulting</small></span>
    </span>
  );
}
