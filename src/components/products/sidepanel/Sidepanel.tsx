import Categories from './Categories';
type SidepanelProps = {
  setSelectedCategory: (category: string) => void;
};
const Sidepanel = ({ setSelectedCategory }: SidepanelProps) => {
  return (
    <aside>
      <Categories setSelectedCategory={setSelectedCategory} />
    </aside>
  );
};

export default Sidepanel;
