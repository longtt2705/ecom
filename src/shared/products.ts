export type Product = {
    id: number,
    image: string,
    title: string,
    description: string,
    price: number
}

const items: Product[] = [
        {
            id: 1,
            image: '/images/glass.jpeg',
            title: 'Ly Thủy Tinh',
            description: 'Ly thủy tinh được làm từ vật liệu tái chế với độ bền cao, thiết kế đẹp và phù hợp cho sử dụng cá nhân hàng ngày, góp phần giảm thiểu sử dụng sản phẩm nhựa.',
            price: 99.99
        },
        {
            id: 2,
            image: '/images/bag.jpeg',
            title: 'Túi Đan',
            description: 'Túi đan thủ công bền vững, là giải pháp thay thế tuyệt vời cho túi ni lông khi đi chợ hoặc mua sắm, giúp giảm thiểu rác thải nhựa.',
            price: 29.99
        },
        {
            id: 3,
            image: '/images/green_gift.jpeg',
            title: 'Chuông gió màu sắc',
            description: 'Chuông gió được làm thủ công từ chai nhựa tái chế, không chỉ mang lại âm thanh thư giãn mà còn tạo điểm nhấn độc đáo cho không gian sống',
            price: 2.99
        },
        {
            id: 4,
            image: '/images/bottle.jpeg',
            title: 'Bình Nước Cá Nhân',
            description: 'Bình nước cá nhân nhẹ, bền, được sản xuất từ nhựa tái chế, là lựa chọn hoàn hảo để thay thế các chai nhựa dùng một lần, thích hợp mang theo khi đi học, làm việc hay du lịch.',
            price: 2.99
        },
    ]

export default items;