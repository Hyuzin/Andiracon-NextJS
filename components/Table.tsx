type tableProps = {
  children: React.ReactNode;
  title: String;
};

const TableComponent = ({ children, title }: tableProps) => {
  return (
    <>
      <p className="text-center py-10 font-semibold">{title}</p>
      <div className="relative overflow-x-auto">
        <table>{children}</table>
      </div>
    </>
  );
};

export default TableComponent;
