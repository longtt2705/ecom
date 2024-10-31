export type Service = {
    id: number,
    image: string,
    title: string,
    description: string,
}

const services: Service[] = [
        {
            id: 1,
            image: '/images/collect.jpeg',
            title: 'Dịch vụ Thu Gom Rác Thải',
            description: 'Cung cấp dịch vụ thu gom rác định kỳ với chi phí thấp cho các trường học, hộ gia đình và doanh nghiệp, đảm bảo rác thải được xử lý đúng cách và hiệu quả.',
        },
        {
            id: 2,
            image: '/images/sell_buy.jpeg',
            title: 'Nền Tảng Thương Mại Điện Tử Xanh',
            description: 'Cho phép người dùng mua bán các sản phẩm tái chế độc đáo và thân thiện với môi trường, góp phần xây dựng lối sống xanh và bền vững.',
        },
        {
            id: 3,
            image: '/images/green_gift.jpeg',
            title: 'Hệ Thống Nhiệm Vụ và Phần Thưởng Xanh',
            description: 'Khuyến khích người dùng tham gia các hoạt động bảo vệ môi trường thông qua hệ thống nhiệm vụ hàng ngày, tích điểm thưởng để đổi lấy quà tặng và sản phẩm tái chế.',
        },
    ]

export default services;