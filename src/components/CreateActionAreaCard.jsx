import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import {
    Link as RouterLink
  } from 'react-router-dom';
  
export default function CreateActionAreaCard(props) {
    return (
        <Card>
            <CardActionArea button component={RouterLink} to={props.to}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} minHeight={360}>
                        <Grid xs display="flex" justifyContent="center" alignItems="center">
                            <AddIcon sx={{ fontSize:120 }}/>
                        </Grid>
                    </Grid>
                </Box>
            </CardActionArea>
        </Card>

    );
}
