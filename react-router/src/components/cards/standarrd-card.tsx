import './styles.css'

export type StandardCardProps = {
  title: string;
  content: string;
};

export function StandardCard({ title, content }: StandardCardProps) {
  return (
    <div className="standard-card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}