import { useState } from "react";
import { Box, TextField, Input } from "@mui/material";

export default function Material() {
  const [name, setName] = useState("");
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Box>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </Box>
      <Input multiline minRows={3} />
    </Box>
  );
}
