import React from 'react'
import { Grid } from "@chakra-ui/react";


const UserGrid = ({users}) => {
  return (
   <Grid
    templateColumns={{
      base: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
    }}
    gap={4}
  >

    
   </Grid>
  )
}

export default UserGrid