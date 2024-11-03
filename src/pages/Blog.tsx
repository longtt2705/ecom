import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
  Link,
  Button,
} from '@mui/material'

const blogPosts = [
  {
    title: 'Công thức làm salad đơn giản nhất từ ​​trước đến nay',
    image: '/images/salad.jpg?height=200&width=400',
    timeAgo: '6 phút trước',
    comments: 39,
    description: 'Khám phá công thức làm salad dễ nhất và lành mạnh nhất để làm tại nhà! Chỉ với một vài nguyên liệu tươi, bạn có thể làm một món salad ngon trong vài phút. Hoàn hảo cho bữa trưa nhẹ hoặc như một món ăn kèm tươi mát, công thức này kết hợp rau xanh giòn, cà chua mọng nước và nước sốt cay nồng giúp kết hợp mọi thứ lại với nhau. Hãy thử ngay hôm nay và tăng thêm hương vị cho bữa ăn của bạn!'
  },
  {
    title: 'Ý tưởng thức ăn chay ngon nhất',
    image: '/images/vege.jpg?height=200&width=400',
    timeAgo: '10 giờ trước',
    comments: 23,
    description: 'Cùng khám phá những ý tưởng thức ăn chay ngon nhất từ trước đến nay. Với những công thức đơn giản, dễ làm, bạn sẽ có những bữa ăn chay ngon miệng, bổ dưỡng và đầy hương vị. Hãy thử ngay hôm nay và tận hưởng những bữa ăn chay ngon miệng!'
  },
  {
    title: 'Tại sao nên ăn sa lát?',
    image: '/images/salad-hoa-qua-tuoi.webp?height=200&width=400',
    timeAgo: '16 giờ trước',
    comments: 9,
    description: 'Sa lát không chỉ giúp bạn giảm cân mà còn cung cấp nhiều dưỡng chất cần thiết cho cơ thể. Hãy cùng khám phá những lợi ích tuyệt vời mà sa lát mang lại cho sức khỏe của bạn. Hãy thử ngay hôm nay và cảm nhận sự khác biệt!'
  }
]

export default function Component() {

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box component="span" sx={{ transform: 'rotate(-45deg)' }}>
            🏷️
          </Box>
          <Typography
            variant="h6"
            component="h1"
            sx={{ color: 'primary.main', fontWeight: 'medium' }}
          >
            BLOGS
          </Typography>
        </Box>
        <Link
          href="#"
          underline="none"
          sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}
        >
          <Button variant="outlined" color="primary">
            Đăng bài mới
          </Button>
        </Link>
      </Box>

      <Grid container spacing={3}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                '&:hover': {
                  boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Box sx={{ position: 'relative', pt: '56.25%' }}>
                <CardMedia
                  component="img"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Chip
                  label="Nấu ăn"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    backgroundColor: '#6366f1',
                    color: 'white',
                    '&:hover': { backgroundColor: '#5558e8' },
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  sx={{ fontWeight: 'bold', mb: 1 }}
                  height={70}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign={'justify'}
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '3',
                    WebkitBoxOrient: 'vertical',
                    mb: 2,
                  }}
                >
                  {post.description}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 'auto',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography variant="caption" color="text.secondary">
                      {post.timeAgo}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography variant="caption" color="text.secondary">{post.comments} bình luận</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container >
  )
}