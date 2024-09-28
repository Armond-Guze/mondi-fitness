import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  useEffect(() => {
    const fetchExercises = async () => {
      let exercisesData = [];
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exercisesData);
    };

    fetchExercises();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' }, mt: '50px', p: '20px' }}>
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '100px', xs: '50px' }, flexWrap: 'wrap', justifyContent: 'center' }}>
        {exercises.map((exercise, index) => (
          <Typography key={index}>{exercise.name}</Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
