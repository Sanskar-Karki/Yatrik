import { useState } from "react";
import { TrekkingList } from "./TrekkingList";
import Props from "../Mountaineering/Props"; // Updated import
import styles from "../Treaking/Treaking.module.css";
import Navbar from '../../../Home/Navbar/Navbar'
import Footer from '../../../Home/Footer/Footer' // Import module CSS

function Trekking() {
  const [sortOrder, setSortOrder] = useState("");
  const [provinceFilter, setProvinceFilter] = useState("all");
  const [budgetFilter, setBudgetFilter] = useState("all");

  const sortByProvince = (event) => {
    setProvinceFilter(event.target.value);
    setSortOrder(""); // Reset sort order when changing province filter
  };

  const sortByBudget = (event) => {
    setBudgetFilter(event.target.value);
    setSortOrder(""); // Reset sort order when changing budget filter
  };

  let filteredList = TrekkingList;

  if (provinceFilter !== "all") {
    filteredList = filteredList.filter(
      (property) =>
        property.province.toLowerCase() === provinceFilter.toLowerCase()
    );
  }

  if (budgetFilter !== "all") {
    const [minBudget, maxBudget] = budgetFilter.split("-");
    filteredList = filteredList.filter(
      (property) =>
        parseInt(property.price.replaceAll(",", "")) >= parseInt(minBudget) &&
        parseInt(property.price.replaceAll(",", "")) <= parseInt(maxBudget)
    );
  }

  let sortedList = filteredList;

  if (sortOrder === "lowToHigh") {
    sortedList = [...filteredList].sort(
      (a, b) =>
        parseInt(a.price.replaceAll(",", "")) -
        parseInt(b.price.replaceAll(",", ""))
    );
  } else if (sortOrder === "highToLow") {
    sortedList = [...filteredList].sort(
      (a, b) =>
        parseInt(b.price.replaceAll(",", "")) -
        parseInt(a.price.replaceAll(",", ""))
    );
  } else if (sortOrder === "lowerToHigherDays") {
    sortedList = [...filteredList].sort((a, b) => a.days - b.days);
  } else if (sortOrder === "higherToLowerDays") {
    sortedList = [...filteredList].sort((a, b) => b.days - a.days);
  }

  return (
    <>
      <Navbar />
      <div className={styles.property1}>
        <h1 className={styles.propertyTitle}>Trending Treks</h1>
        <div className={styles.sortButtons}>
          <label htmlFor="province-select">Sort by Province:</label>
          <select id="province-select" onChange={sortByProvince}>
            <option value="all">All Provinces</option>
            <option value="Province 1">Province 1</option>
            <option value="Province 2">Province 2</option>
            <option value="Province 3">Province 3</option>
            <option value="Province 4">Province 4</option>
            <option value="Province 5">Province 5</option>
            <option value="Province 6">Province 6</option>
            <option value="Province 7">Province 7</option>
          </select>
          <label htmlFor="budget-select">Sort by Budget:</label>
          <select id="budget-select" onChange={sortByBudget}>
            <option value="all">All Budgets</option>
            <option value="10000-15000">10k - 15k</option>
            <option value="16000-21000">16k - 21k</option>
            <option value="22000-30000">22k - 30k</option>
            <option value="30000">Above 20k</option>
          </select>
        </div>
        {sortedList && sortedList.length === 0 ? (
          <div className={styles.noPropertiesMessage}>
            No Trekking destinations are listed based on your interest.
          </div>
        ) : (
          <div className={styles.propertyList}>
            {sortedList.map((prop, key) => (
              <Props
                key={key}
                id={key}
                image={prop.image}
                name={prop.name}
                price={prop.price}
                province={prop.province}
                days={prop.days}
                buyrent={prop.buyrent}
              />
            ))}
          </div>
        )}

      </div>
      <Footer />
    </>
  );
}

export default Trekking;
