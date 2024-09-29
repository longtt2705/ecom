import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { Box, CircularProgress, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import { useAppSelector } from '../app/hook';
import { appointmentService } from '../services';
import professionals from '../shared/professionals';
import services from '../shared/services';
import { timeShifts } from '../shared/appointment';

function emptyRows(page: number, rowsPerPage: number, arrayLength: number) {
    return page ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}

// ----------------------------------------------------------------------

const TABLE_HEAD = [
    { id: 'email', label: 'Email', },
    { id: 'phone', label: 'Phone', },
    { id: 'firstName', label: 'First Name', },
    { id: 'lastName', label: 'Last Name', },
    { id: 'address', label: 'Address', },
    { id: 'dateOfBirth', label: 'D.O.B', type: 'date' },
    { id: 'doctor', label: 'Doctor' },
    { id: 'dateOfAppointment', label: 'Date of Appointment', type: 'date' },
    { id: 'timeOfAppointment', label: 'Time of Appointment' },
    { id: 'services', label: 'Services' },
];

export default function BookingPage() {
    const user = useAppSelector((state) => state.user.user);

    const {
        isFetching,
        error,
        data: bookings
    } = useQuery({
        queryKey: ['bookings'],
        queryFn: () => appointmentService.getAppointments(user.email)
    });

    if (isFetching) return <CircularProgress />;
    if (error) return <p>Something went wrong: {error.message}</p>;

    const bookingsWithData = bookings?.map((booking) => ({
        ...booking,
        doctor: professionals.find((professional) => professional.id === booking.doctorId)?.name,
        services: booking.services.map((serviceId) => services.find((staticService) => staticService.id === +serviceId)?.title).join(', '),
        timeOfAppointment: timeShifts[+booking.timeShift],
    }));

    return (
        <Box mt={10} ml={10} mb={10} pb={10}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4">Booking History</Typography>
            </Stack>

            <Card sx={{ width: '100%' }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {TABLE_HEAD.map((headCell) => (
                                    <TableCell
                                        key={headCell.id}
                                        align={'left'}
                                    >
                                        {headCell.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookingsWithData?.map((row) => (
                                <TableRow hover tabIndex={-1} role="checkbox" >
                                    {TABLE_HEAD.map(
                                        (headCell) =>
                                            headCell.label && (
                                                <TableCell key={headCell.id} align="left">
                                                    {headCell.type === 'date'
                                                        ? dayjs(row[headCell.id]).format('DD/MM/YYYY HH:mm')
                                                        : row[headCell.id]}{' '}
                                                </TableCell>
                                            )
                                    )}
                                </TableRow>

                            ))}

                            <TableEmptyRows
                                height={77}
                                emptyRows={emptyRows(0, 5, bookings?.length || 0)}
                            />
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    );
}

const TableEmptyRows: FC<{ emptyRows: number, height: number }> = ({ emptyRows, height }) => {
    if (!emptyRows) {
        return null;
    }

    return (
        <TableRow
            sx={{
                ...(height && {
                    height: height * emptyRows
                })
            }}
        >
            <TableCell colSpan={9} />
        </TableRow>
    );
}
