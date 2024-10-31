export type Product = {
    id: number,
    image: string,
    name: string,
    description: string,
}

const items: Product[] = [
        {
            id: 1,
            image: '/images/unep.jpg',
            name: 'UNEP (Môi trường Liên Hợp Quốc)',
            description: 'UNEP hỗ trợ các dự án và chiến dịch của UNISTARS, đặc biệt là những sáng kiến nâng cao nhận thức về rác thải và tiêu dùng bền vững, góp phần bảo vệ hệ sinh thái toàn cầu.',
        },
        {
            id: 2,
            image: '/images/wwf.jpg',
            name: 'WWF (Quỹ Quốc tế Bảo vệ Thiên nhiên)',
            description: 'WWF hợp tác với UNISTARS để bảo vệ các tài nguyên thiên nhiên, đồng thời tăng cường các sáng kiến về tái chế và bảo tồn hệ sinh thái.',
        },
        {
            id: 3,
            image: '/images/dhqghn.jpg',
            name: 'Đại học Quốc gia Hà Nội',
            description: 'Trường đại học hàng đầu Việt Nam trong các chương trình bảo vệ môi trường, là đối tác quan trọng trong việc nâng cao nhận thức về tái chế và phát triển bền vững cho thế hệ sinh viên tại Việt Nam.',
        },
    ]

export default items;