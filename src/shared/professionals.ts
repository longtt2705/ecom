export type Product = {
    id: number,
    image: string,
    name: string,
    description: string,
    specialty: string
}

const items: Product[] = [
        {
            id: 1,
            image: '/images/doctor1.png',
            name: 'Hai Pham',
            specialty: 'Cosmetic Dentistry Specialist',
            description: 'Dr. Hai specializes in enhancing smiles through veneers, teeth whitening, and bonding. With over 10 years of experience, he is passionate about providing patients with natural-looking and beautiful results.',
        },
        {
            id: 2,
            image: '/images/doctor2.png',
            name: 'Dat Bui',
            description: 'Dr. Dat has a strong focus on dental implantology, restoring missing teeth with precision and care. He has performed hundreds of successful implant surgeries, ensuring both function and aesthetics are seamlessly restored.',
            specialty: 'Teeth Whitening Specialist'
        },
        {
            id: 3,
            image: '/images/doctor3.png',
            name: 'Nhi Nguyen',
            description: 'With a keen expertise in braces and Invisalign, Dr. Pham has helped countless patients achieve straight and healthy smiles. She brings over 12 years of orthodontic experience, treating both children and adults.',
            specialty: 'Orthodontics'
        },
        {
            id: 4,
            image: '/images/doctor4.png',
            name: 'Vy Khanh',
            description: 'Dr. Vy is highly skilled in complex extractions, wisdom teeth removal, and surgical procedures. With over 15 years of surgical experience, he ensures safe, comfortable, and effective oral surgery for all patients.',
            specialty: 'Oral Surgery'
        }
    ]

export default items;