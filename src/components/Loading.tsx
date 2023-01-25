import React from "react";

export const SkeletonLoading = () => {
  return (
    <div className="flex grow flex-col justify-between p-3">
      <div className="flex animate-pulse space-x-4">
        <div className="flex-1 space-y-5 py-1">
          <div className="h-52 rounded bg-green-400" />
          <div className="space-y-2">
            <div className="h-6 rounded bg-green-400" />
            <div className="h-6 rounded bg-green-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
