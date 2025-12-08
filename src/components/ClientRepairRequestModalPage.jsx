import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import RepairRequestModal from "./RepairRequestModal";

const API_BASE = import.meta.env.VITE_API_URL;

export default function ClientRepairRequestModalPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const shop_id = location.state?.shop_id;  // <-- ONLY getting ID now

  const [shop, setShop] = useState(null);
  const [devices, setDevices] = useState([]);
  const [addresses, setAddresses] = useState([]);

  // If no shop ID, go back
  useEffect(() => {
    if (!shop_id) {
      console.error("No shop_id passed!");
      navigate(-1);
    }
  }, [shop_id]);

  // Load shop by ID
  useEffect(() => {
    if (!shop_id) return;

    axios
      .get(`${API_BASE}/api/shops/${shop_id}`)
      .then((res) => setShop(res.data.shop))
      .catch((err) => {
        console.error(err);
        navigate(-1);
      });
  }, [shop_id]);

  // Load devices + addresses
// Load devices + addresses
useEffect(() => {
  const loadData = async () => {
    try {
      const token = localStorage.getItem("token");

      const devRes = await axios.get(`${API_BASE}/api/devices`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log("Loaded devices:", devRes.data);
      

      setDevices(devRes.data.devices || []);

      const addrRes = await axios.get(`${API_BASE}/api/addresses`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log("Loaded addresses:", addrRes.data);

      setAddresses(addrRes.data.addresses || []);

    } catch (error) {
      console.error("Failed loading user data:", error);
    }
  };

  loadData();
}, []);



  if (!shop) return null; // Wait for loaded shop

  return (
    <RepairRequestModal
      shop={shop}
      userDevices={devices}
      userAddresses={addresses}
      onAddressAdded={setAddresses}
      onClose={() => navigate(-1)}
    />
  );
}
