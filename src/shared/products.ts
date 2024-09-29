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
            image: '/images/hoha.png',
            title: 'H.O.H.A',
            description: 'A disposable dental diagnostics product with sensors to collect data including tooth shade, surface conditions, and signs of enamel erosion or sensitivity.',
            price: 99.99
        },
        {
            id: 2,
            image: '/images/kit.png',
            title: 'Teeth Whitening Kit',
            description: 'Brighten your smile with our Teeth Whitening Kit. Designed to safely and effectively whiten your teeth, this kit removes stains and restores the natural brightness of your teeth, giving you a radiant smile.',
            price: 29.99
        },
        {
            id: 3,
            image: '/images/floss.png',
            title: 'Dental Floss',
            description: 'Keep your teeth clean and your gums healthy with our Dental Floss. It reaches deep between teeth and below the gumline to remove plaque and food particles, promoting better oral hygiene.',
            price: 2.99
        },
        {
            id: 4,
            image: '/images/toothbrush.png',
            title: 'Electric Toothbrush',
            description: 'This high-powered toothbrush offers deep cleaning for hard-to-reach areas, ensuring a superior clean and helping maintain bright, healthy teeth.',
            price: 34.99
        },
        {
            id: 5,
            image: '/images/strip.png',
            title: 'Whitening Strips',
            description: 'Easy-to-use strips that gently whiten teeth over time, perfect for customers looking for a simple, at-home solution to brighten their smiles.',
            price: 19.99
        },
        {
            id: 6,
            image: '/images/stray.png',
            title: 'Custom Whitening Trays',
            description: 'Professional-grade whitening trays molded to fit your teeth perfectly, offering a more even and effective whitening experience.',
            price: 49.99
        },
    ]

export default items;