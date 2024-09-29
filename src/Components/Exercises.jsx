/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentpage] = useState(1)
  const exercisesPerPage = 9

  const paginate = (e, value) => {
    setCurrentpage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

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
    <Box id="exercises" sx={{ mt: { lg: '110px' }}}
    mt='50px' p='20px'>
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '100px', xs: '50px' }, flexWrap: 'wrap', justifyContent: 'center' }}>
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} /> // Pass the whole exercise object to the ExerciseCard
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination 
          color='standard'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
