import InputSearch from "@/components/input/InputSearch";

const ToeicList = () => {
  const handleSearch = (value: string) => {
    console.log(value);
  };
  return (
    <div className="p-5">
      <InputSearch onChange={handleSearch} />
    </div>
  );
};

export default ToeicList;
