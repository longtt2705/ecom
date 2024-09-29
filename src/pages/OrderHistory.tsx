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
import { getOrders } from '../services/products';
import { get } from 'lodash-es';

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
    { id: 'items', label: 'Items' },
    { id: 'totalAmount', label: 'Total Price' },
    { id: 'totalQuantity', label: 'Total Quantity' },
    { id: 'createdAt', label: 'Created At', type: 'date' },
];

export default function OrderPage() {
    const user = useAppSelector((state) => state.user.user);

    const {
        isFetching,
        error,
        data: orders
    } = useQuery({
        queryKey: ['orders'],
        queryFn: () => getOrders(user.email)
    });

    if (isFetching) return <CircularProgress />;
    if (error) return <p>Something went wrong: {error.message}</p>;

    const ordersWithItems = orders?.map((order) => {
        const items = order.cartItems.map((item) => `${item.title}(${item.quantity})`).join(', ');
        return { ...order, items };
    });

    return (
        <Box mt={10} ml={15}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4">Orders</Typography>
            </Stack>

            <Card>
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
                            {ordersWithItems?.map((row) => (
                                <TableRow hover tabIndex={-1} role="checkbox" >
                                    {TABLE_HEAD.map(
                                        (headCell) =>
                                            headCell.label && (
                                                <TableCell key={headCell.id} align="left">
                                                    {headCell.type === 'date'
                                                        ? dayjs(get(row, headCell.id, dayjs())).format('DD/MM/YYYY HH:mm')
                                                        : get(row, headCell.id, '')}
                                                </TableCell>
                                            )
                                    )}
                                </TableRow>

                            ))}

                            <TableEmptyRows
                                height={77}
                                emptyRows={emptyRows(0, 5, orders?.length || 0)}
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
