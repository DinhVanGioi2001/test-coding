import { useState, useEffect } from "react";
import axiosInstance from "../utilities/axiosConfig";
import { UserType } from "../@types/user";
import { Box, Grid } from "@mui/material";
import UserItem from "../sections/user/userItem";

const Home = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("/users");
        if (response) {
          setUsers(response.data);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  if (!users) {
    return <div>Loading...</div>;
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ width: "100%", padding: "24px", marginTop: "40px" }}>
      <h1>Question 5: Frontend</h1>
      <Box sx={{ m: 4 }}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          style={{ color: "black", padding: "8px" }}
        />
      </Box>

      <Grid container spacing={3}>
        {filteredUsers.map((user) => (
          <UserItem user={user} />
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
