import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

const SearchExercises = () => {
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px'}}}
      mb='50px' textAlign='center'
      >
        Awesome Exercises you <br />should know
      </Typography>
      <Box position='relative' mb='72px' display='flex' flexDirection='column' alignItems='center'>
        <TextField 
        sx={{ 
          input: { fontWeight: '700', border: 'none', borderRadius: '4px'},
          width: { lg: '1170px', xs: '350px'},
          backgroundColor: '#fff', borderRadius: '40px'
        }}
        height='76px'
        value=''
        onChange={(e) => {}}
        placeholder='Search Exercises'
        type='text'
        />
        <Button className='search-btn' sx={{ mt: '20px' }}>
          Search
        </Button>
      </Box>
    </Stack>
    // sdf
  )
}

export default SearchExercises
