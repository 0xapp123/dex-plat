import { ReactNode } from "react";

export const DataTable = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table-auto w-full">
        <tbody className="divide-y divide-neutral-900">{children}</tbody>
      </table>
    </div>
  );
};
