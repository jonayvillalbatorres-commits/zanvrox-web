export default function Card({ className = '', children }) {
  return <div className={`zx-card reveal-up ${className}`}>{children}</div>;
}
