import React from "react";
import {
  TabelCell,
  Table,
  TableBody,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "../table";
import { frames } from "../../utils/util";
import { StatusType } from "../../types";

interface BowlingTableProps {
  data: StatusType;
}

const BowlingTable: React.FC<BowlingTableProps> = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {frames.map((num) => (
              <TableHeaderCell
                key={num}
                className={
                  num === data.currentFrame + 1 ? "bg-blue-500 text-white" : ""
                }
              >
                {num}
              </TableHeaderCell>
            ))}
            {(data.frames[9].isSpare || data.frames[9].isStrike) && (
              <TableHeaderCell key={10} className={"bg-blue-500 text-white"}>
                Bonus
              </TableHeaderCell>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            {data.frames.map((num, index) => (
              <TabelCell key={index} className="h-10">
                <div className="grid grid-cols-2">
                  <div className="border-r border-gray-300">
                    {num.firstRoll === 10 ? "X" : num.firstRoll}
                  </div>
                  <div className="">{num.secondRoll}</div>
                </div>
              </TabelCell>
            ))}
            {data.frames[9].isStrike && (
              <TabelCell key={10} className="h-10">
                <div className="grid grid-cols-2">
                  <div className="border-r border-gray-300">
                    {data.frames[9].finalBonus && data.frames[9].finalBonus[0]}
                  </div>
                  <div className="">
                    {data.frames[9].finalBonus && data.frames[9].finalBonus[1]}
                  </div>
                </div>
              </TabelCell>
            )}
            {data.frames[9].isSpare && (
              <TabelCell key={10} className="h-10">
                <div>
                  {data.frames[9].finalBonus !== undefined &&
                  data.frames[9].finalBonus[0] === 10
                    ? "X"
                    : data.frames[9].finalBonus !== undefined &&
                      data.frames[9].finalBonus[0]}
                </div>
              </TabelCell>
            )}
          </TableRow>
          <TableRow>
            {data.frames.map((num, index) => (
              <TabelCell key={index} className="h-10">
                {num.score === -1 ? "" : num.currentSum}
              </TabelCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default BowlingTable;
