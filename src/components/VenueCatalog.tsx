import { Link } from "@mui/material";
import Card from "./Card";

interface VenueItem {
  _id: string;
  name: string;
  address: string;
  district: string;
  province: string;
  postalcode: string;
  tel: string;
  picture: string;
  dailyrate: number;
  __v: number;
  id: string;
}

interface VenueJson {
  success: boolean;
  count: number;
  data: VenueItem[];
}

interface VenueCatalogProps {
  venuesJson: Promise<VenueJson>;
}

async function VenueCatalog({ venuesJson }: VenueCatalogProps) {
  const venueData = await venuesJson;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {venueData.data.map((venue) => (
        <Link href={`/venue/${venue._id}`}>
          <Card key={venue._id} venueName={venue.name} imgSrc={venue.picture} />
        </Link>
      ))}
    </div>
  );
}

export default VenueCatalog;
