import { Card, CardContent, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { UserType } from "../../@types/user";

interface UserItemProps {
  user: UserType;
}

const UserItem: FC<UserItemProps> = (props) => {
  const { user } = props;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {user.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.email}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserItem;
