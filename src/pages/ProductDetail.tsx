import CheckIcon from '@mui/icons-material/Check'
import CleanHandsIcon from '@mui/icons-material/CleanHands'
import PersonIcon from '@mui/icons-material/Person'
import SensorsIcon from '@mui/icons-material/Sensors'
import { Box, Button, Chip, Container, Grid, lighten, Stack, styled, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Navigate, useParams } from 'react-router'
import { useAppDispatch } from '../app/hook'
import items from '../shared/products'
import { addItemToCart, setItemToCheckout } from '../slices/cart'

const StyledButton = styled(Button)({
    padding: '20px 30px',
    borderRadius: '20px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    // Change the color of the button to white
    // Change the background color of the button to primary
    // Change the hover color of the button to a darker shade of primary
    '&:hover': {
        backgroundColor: '#115293',
    },
});


export default function Component() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const id = useParams<{ id: string }>().id || ''
    const item = items.find((item) => item.id === +id)
    const dispatch = useAppDispatch()

    if (!item) {
        return <Navigate to="/404" />
    }

    const addToCartHandler = () => {
        dispatch(addItemToCart(item));
    };

    const handleSetItemToCheckout = () => {
        dispatch(setItemToCheckout([{ ...item, quantity: 1, totalPrice: item.price }]));
    }


    return (
        <Container maxWidth='xl' sx={{ overflow: 'hidden', my: 10 }}>
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4">
                    <a href="/#products" style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
                        &larr; Back to Products
                    </a>
                </Typography>
            </Box>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            backgroundColor: (theme) => lighten(theme.palette.primary.main, 0.6),
                            color: 'primary.contrastText',
                            p: 10,
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            borderRadius: { xs: '0 0 40px 40px', md: '40px 0 0 40px' },
                            boxShadow: { xs: '0 0 10px 2px rgba(0,0,0,0.1)', md: 'none' },
                        }}
                    >
                        <Box>
                            <Chip label={item.title} sx={{ mb: 2, color: 'primary.main', backgroundColor: 'primary.contrastText' }} />
                            <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
                                ${item.price}
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4 }}>
                                {item.description}
                            </Typography>
                        </Box>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <FeatureItem icon={<PersonIcon />} title="Comfort" description="Gentle" />
                            </Grid>
                            <Grid item xs={6}>
                                <FeatureItem icon={<CheckIcon />} title="Technology" description="Advanced" />
                            </Grid>
                            <Grid item xs={6}>
                                <FeatureItem icon={<SensorsIcon />} title="Sensors" description="Precise" />
                            </Grid>
                            <Grid item xs={6}>
                                <FeatureItem icon={<CleanHandsIcon />} title="Hygiene" description="Effective" />
                            </Grid>
                        </Grid>
                        <Stack direction="row" spacing={2} mt={5}>
                            <StyledButton variant="contained" onClick={addToCartHandler}>
                                Add to Cart
                            </StyledButton>
                            <StyledButton variant="outlined" onClick={handleSetItemToCheckout}>
                                Buy Now
                            </StyledButton>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            height: isMobile ? '300px' : '100%',
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: { xs: '40px 40px 0 0', md: '0 40px 40px 0' },
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

const FeatureItem: React.FC<{ icon: any, title: string, description: string }> = ({ icon, title, description }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box
                sx={{
                    backgroundColor: 'primary.contrastText',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mr: 2,
                }}
            >
                {React.cloneElement(icon, { sx: { color: 'primary.main' } })}
            </Box>
            <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
                <Typography variant="body2">{description}</Typography>
            </Box>
        </Box>
    )
}