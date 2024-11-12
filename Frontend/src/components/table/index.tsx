import React from "react";

interface TableProps {
  className?: string;
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ className, children }) => {
  return (
    <table
      className={`border-collapse border text-center border-gray-300 ${className}`}
    >
      {children}
    </table>
  );
};

interface TableRowProps {
  className?: string;
  children: React.ReactNode;
}

export const TableRow: React.FC<TableRowProps> = ({ className, children }) => {
  return (
    <tr className={`border border-gray-300 p-2 ${className}`}>{children}</tr>
  );
};

interface TableHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  className,
  children,
}) => {
  return <thead className={` ${className}`}>{children}</thead>;
};

interface TabelCellProps {
  className?: string;
  children: React.ReactNode;
}

export const TabelCell: React.FC<TabelCellProps> = ({
  className,
  children,
}) => {
  return (
    <td className={`border border-gray-300 p-2 ${className}`}>{children}</td>
  );
};

interface TableBodyProps {
  className?: string;
  children: React.ReactNode;
}

export const TableBody: React.FC<TableBodyProps> = ({
  className,
  children,
}) => {
  return <tbody className={`${className}`}>{children}</tbody>;
};

interface TableHeaderCellProps {
  className?: string;
  children: React.ReactNode;
}

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({
  className,
  children,
}) => {
  return (
    <th
      className={`py-2 border border-gray-300 min-w-[76px] min-h-10 ${className}`}
    >
      {children}
    </th>
  );
};
