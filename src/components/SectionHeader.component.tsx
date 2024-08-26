interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <header className="text-center pb-9">
      <h2 className="text-5xl font-bold text-gray-light">{title}</h2>
      <div className="mt-3 mb-4 w-36 h-2 bg-primary mx-auto"></div>
      <p className="text-2xl text-gray-light">{subtitle}</p>
    </header>
  );
};
