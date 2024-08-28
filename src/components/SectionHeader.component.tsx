interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <header className="pb-9 text-center">
      <h2 className="text-5xl font-bold text-gray-light">{title}</h2>
      <div className="mx-auto mb-4 mt-3 h-2 w-36 bg-primary"></div>
      <p className="text-2xl text-gray-light">{subtitle}</p>
    </header>
  );
};
