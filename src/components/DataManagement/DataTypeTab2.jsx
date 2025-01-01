function DataTypeTab2({ activeTab, setActiveTab, data }) {
  const styles = {
    divStyle: {
      borderColor: `${activeTab === data.id ? "#4ADE80" : "#4B4B82"}`,
      cursor: `${activeTab === data.id ? "auto" : "pointer"}`,
    },
    titleStyle: {
      color: `${activeTab === data.id ? "#4ADE80" : "#fff"}`,
    },
  };
  return (
    <div
      key={data.id}
      onClick={() => setActiveTab(data.id)}
      style={styles.divStyle}
      className={`text-center border-b border-red-200 pb-2 transition-all`}
    >
      <h5
        style={styles.titleStyle}
        className={`text-white text-sm py-1 transition-all`}
      >
        {data.title}
      </h5>
    </div>
  );
}

export default DataTypeTab2;
