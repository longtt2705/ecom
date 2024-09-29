export type Service = {
    id: number,
    image: string,
    title: string,
    description: string,
    price: {
        min: number,
        max: number
        unit: string
    }
}

const services: Service[] = [
        {
            id: 1,
            image: '/images/service.examninationpng.png',
            title: 'Comprehensive Dental Examination',
            description: 'A thorough oral health check-up, including X-rays and diagnostics.',
            price: {
                min: 49.99,
                max: 299.99,
                unit: 'visit'
            }
        },
        {
            id: 2,
            image: '/images/service - white teething.png',
            title: 'Cosmetic Teeth Whitening',
            description: 'Professional teeth whitening to remove stains and brighten your smile.',
            price: {
                min: 149.99,
                max: 599.99,
                unit: 'session'
            }
        },
        {
            id: 3,
            image: '/images/service implant.png',
            title: 'Dental Implants',
            description: 'Natural-looking, durable implants to restore missing teeth.',
            price: {
                min: 2499.99,
                max: 4499.99,
                unit: 'implant'
            }
        },
        {
            id: 4,
            image: '/images/service tooth extraction.png',
            title: 'Tooth Extractions',
            description: 'Remove damaged or problematic teeth safely and comfortably with our professional extraction services.',
            price: {
                min: 74.99,
                max: 299.99,
                unit: 'tooth'
            }
        },
        {
            id: 5,
            image: '/images/service filling.png',
            title: 'Dental Fillings',
            description: 'Repair cavities with tooth-colored fillings that blend seamlessly with your natural teeth.',
            price: {
                min: 149.99,
                max: 449.99,
                unit: 'filling'
            }
        },
        {
            id: 6,
            image: '/images/service cleaning.png',
            title: 'Preventive Cleaning & Gum Care',
            description: 'Deep cleaning, scaling, and polishing to remove plaque and tartar, prevent gum disease, and keep your teeth and gums healthy year-round.',
            price: {
                min: 49.99,
                max: 149.99,
                unit: 'time'
            }
        },
    ]

export default services;