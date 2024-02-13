// import { Button, TextField } from "@mui/material";
"use client";
// import { useRouter } from "next/router";


import { Button, TextField,Grid } from "@mui/material";
import { redirect } from "next/navigation";
const SearchBar = () => {
   

    const handleSubmit=async (formData:FormData) => {
        // "use server"; 
        redirect(formData.get('company')?.toString().toLocaleUpperCase() || "");
    }

    return (
        <form action={handleSubmit}>
           <Grid container spacing={2} alignItems="center">
                <Grid item xs={9}>
                    <TextField
                        id="company"
                        name="company"
                        label="Enter company name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" type="submit" fullWidth>
                        Search
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default SearchBar;
