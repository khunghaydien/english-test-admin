const getDate = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("data");
    }, 1000);
  });
};
const Toeic = async () => {
  const data: string = await getDate();
  return <>{data}</>;
};
export default Toeic;
