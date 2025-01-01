import { MdArrowRightAlt } from "react-icons/md";

function DataTypeTab({ setActiveTab, activeTab, data }) {
  const { id, title, desc } = data;
  return (
    <div
      onClick={() => setActiveTab(id)}
      style={{
        cursor: activeTab === id ? "auto" : "pointer",
      }}
      className={`border-b border-[#4B4B82] py-6 transition-all duration-700 cursor-pointer overflow-hidden ${
        activeTab === id ? `max-h-[210px] cursor-auto` : "max-h-[75px]"
      }`}
    >
      <div
        style={{ color: activeTab === id ? "#4ADE80" : "#fff" }}
        className={`flex gap-6 items-center transition-all  text-white`}
      >
        <MdArrowRightAlt size={24} />
        <h5
          style={{
            color: activeTab === id ? "#4ADE80" : "#fff",
          }}
          className={`text-white text-lg transition-all font-normal`}
        >
          {title}
        </h5>
      </div>
      <p className={`text-neutral mt-4 pt-2`}>{desc}</p>
    </div>
  );
}

export default DataTypeTab;
