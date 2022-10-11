import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Checkbox } from '@mui/material';
import { Box } from '@mui/system';


export default function RecordTable({data}) {


  return (
    <Paper sx={{ width: '100%', height:"570px", overflow: 'hidden'  ,margin:"auto", marginTop:"20px", marginBottom:"50px"}}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
            <TableCell><Checkbox /></TableCell>
            <TableCell sx={{fontWeight:"600"}}>Form Details</TableCell>
              <TableCell  sx={{fontWeight:"600"}}>Customer Name</TableCell>
              <TableCell  sx={{fontWeight:"600"}}>Email</TableCell>
              <TableCell  sx={{fontWeight:"600"}}>Phone</TableCell>
              <TableCell  sx={{fontWeight:"600"}}>Please rate the quality of the service you recieved from the
                host</TableCell>
                <TableCell  sx={{fontWeight:"600"}}>Please rate the quality of your beverage.</TableCell>
                <TableCell  sx={{fontWeight:"600"}}>Was our restaurant clean?</TableCell>
                <TableCell  sx={{fontWeight:"600"}}>Please rate your overall dining experience.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data

              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                     <TableCell><Checkbox/></TableCell>
                     <TableCell>View Details</TableCell>
                 <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.serviceRating}</TableCell>
              <TableCell>{row.beverageRating}</TableCell>
              <TableCell>{row.cleaningRating}</TableCell>
              <TableCell>{row.overallRating}</TableCell>
           
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
     <Box sx={{marginLeft:"auto" , width:"100px" , marginTop:"20px"}}>
     <Button variant='contained' sx={{backgroundColor:"#e84c89"}}>Delete </Button>
     </Box>
    </Paper>
  );
}