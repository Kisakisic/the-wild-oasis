import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";

function Stats({
  recentBookings,
  recentStays,
  confirmedRecentStays,
  numDays,
  cabinsCount,
}) {
  const numBookings = recentBookings.length;

  const sales = recentBookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

  const checkins = confirmedRecentStays.length;

  const occupancy =
    (confirmedRecentStays.reduce((acc, curr) => acc + curr.numNights, 0) /
      numDays) *
    cabinsCount;

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        color={"blue"}
        title={"Bookings"}
        value={numBookings}
      />
      <Stat
        icon={<HiOutlineCurrencyDollar />}
        title={"Sales"}
        color={"green"}
        value={formatCurrency(sales)}
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title={"Check ins"}
        color={"indigo"}
        value={checkins}
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title={"Occupancy rate"}
        color={"yellow"}
        value={`${Math.round(occupancy)}%`}
      />
    </>
  );
}

export default Stats;
