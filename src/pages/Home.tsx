import { useState, useEffect } from "react";
import axiosInstance from "../utilities/axiosConfig";
import { UserType } from "../@types/user";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

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
    <Box sx={{ width: "100%" }}>
      <h1>User List</h1>
      <Box sx={{ m: 4 }}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          style={{ color: "black" }}
        />
      </Box>

      <Grid container spacing={3}>
        {filteredUsers.map((user) => (
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {user.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {user.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
