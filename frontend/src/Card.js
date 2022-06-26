import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader } from "@mui/material";

export default function BasicCard({ title, body }) {
  return (
    <Card sx={{ minWidth: 275, borderRadius: "8px" }}>
      <CardHeader title={title} className="bg-slate-200" />
      <CardContent>
        <Typography variant="body1">{body}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
