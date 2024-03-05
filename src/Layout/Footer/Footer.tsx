import { Box } from "@mui/material";
import { RootStyle } from "../Header/style";

export const Footer = () => {
  return (
    <RootStyle>
      <Box>
        {PaymentItemsData.map((data) => (
          <Box
            component="span"
            sx={{ fontSize: "30px", marginRight: "7px" }}
            key={data.id}
          >
            {data.icon}
          </Box>
        ))}
      </Box>
    </RootStyle>
  );
};

export default Footer;

const PaymentItemsData = [
  {
    id: "visa",
    icon: <i aria-hidden className="fab fa-cc-visa fa-sm"></i>,
  },
  {
    id: "mastercard",
    icon: <i aria-hidden className="fab fa-cc-mastercard fa-sm"></i>,
  },
];
