import { Button, Typography, Box, Container } from '@mui/material'

export default function Component() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        color: 'white',
        textAlign: 'center',
        background: 'url(/images/18.png) no-repeat center center',
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h2" component="h1" gutterBottom color='white' fontWeight={'bolder'}>
          Tham gia thách thức xanh
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color='white'>
          Tạo nên sự khác biệt cho hành tinh của chúng ta, từng bước một
        </Typography>
        <Typography variant="body1" paragraph color='white'>
          Thử thách xanh của chúng tôi được thiết kế để giúp bạn giảm lượng khí thải carbon,
          bảo tồn tài nguyên và thúc đẩy lối sống bền vững. Tham gia cùng hàng ngàn
          người có cùng chí hướng để tạo ra tác động tích cực đến môi trường.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            mt: 3,
            backgroundColor: '#4caf50',
            '&:hover': { backgroundColor: '#45a049' }
          }}
        >
          Chơi ngay
        </Button>
      </Container>
    </Box>
  )
}