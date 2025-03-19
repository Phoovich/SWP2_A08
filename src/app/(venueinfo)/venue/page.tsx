"use client";
import { Suspense } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import VenueCatalog from "@/components/VenueCatalog";
import { getVenues } from "@/libs/getVenues";

const VenuePage: React.FC = () => {
  const venuesPromise = getVenues();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        Venues
      </h1>
      <Suspense
        fallback={
          <div className="w-full flex flex-col items-center space-y-2">
            <div className="w-full max-w-md">
              <LinearProgress
                sx={{
                  height: 4,
                  backgroundColor: "#f3f4f6",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#3b82f6",
                  },
                }}
              />
            </div>
            <p className="text-sm text-gray-600">Loading venues...</p>
          </div>
        }
      >
        <VenueCatalog venuesJson={venuesPromise} />
      </Suspense>
    </div>
  );
};

export default VenuePage;
