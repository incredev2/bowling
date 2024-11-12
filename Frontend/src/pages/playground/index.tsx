import React, { useCallback, useEffect, useMemo, useState } from "react";
import { StatusType } from "../../types";
import { calculateAvailablePins } from "../../utils/util";
import { fetchOrCreate, updateData } from "../../services/fetchDataService";
import { BowlingTable, PinsButtons, ScoreDisplay } from "../../components";

const Playground = () => {
  const userName = localStorage.getItem("name") as string;
  const [data, setData] = useState<StatusType | null>(null);

  const availablePins = useMemo(() => calculateAvailablePins(data), [data]);

  const handleClick = useCallback(
    async (number: number) => {
      try {
        const updatedData = await updateData(userName, number);
        setData(updatedData);
      } catch (error) {
        console.log(error);
      }
    },
    [userName]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchOrCreate(userName);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [userName]);

  if (!data || !data.frames) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-blue bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center flex-col gap-4 p-2 sm:p-4 md:p-6">
      <div className="w-full max-w-5xl min-h-[400px] flex md:justify-between flex-col justify-start">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
          <BowlingTable data={data} />
          <ScoreDisplay totalScore={data.totalScore} />
        </div>
        <PinsButtons availablePins={availablePins} onPinClick={handleClick} />
      </div>
    </div>
  );
};

export default Playground;
