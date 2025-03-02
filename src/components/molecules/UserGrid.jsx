import React from 'react'
import { Grid } from "@chakra-ui/react";


const UserGrid = () => {
  return (
   <Grid
    templateColumns={{
      base: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
    }}
  >
    
   </Grid>
  )
}

export default UserGrid