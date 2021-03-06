const products = [
  {
    _id: '1',
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/headphone1.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Headphones',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'Bose Noise Cancelling Headphones',
    image: '/images/headphone2.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Bose',
    category: 'Headphones',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '3',
    name: 'JBL Live',
    image: '/images/headphone3.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'JBL',
    category: 'Headphones',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '4',
    name: 'Marshall Studio Headphones',
    image: '/images/headphone4.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Marshall',
    category: 'Headphones',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '5',
    name: 'Sennheiser HD Headphones',
    image: '/images/headphone5.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Sennheiser',
    category: 'Headphones',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '6',
    name: 'Sony Digital Headphones',
    image: '/images/headphone6.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Sony',
    category: 'Headphones',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '7',
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone1.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Phones',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '8',
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone2.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Phones',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '9',
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone3.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Phones',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '10',
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone4.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Phones',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '11',
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone5.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Phones',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '12',
    name: 'iPhone 11 Pro 256GB Memory',
    image: '/images/phone6.jpg',
    description:
      'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    category: 'Phones',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: '13',
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera1.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Cameras',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '14',
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera2.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Cameras',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '15',
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera3.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Cameras',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '16',
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera4.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Cameras',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '17',
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera5.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Cameras',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '18',
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera6.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Cameras',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '19',
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/gaming1.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Gaming',
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '20',
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/gaming2.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Gaming',
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '21',
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/gaming3.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Gaming',
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '22',
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/gaming4.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Gaming',
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '23',
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/gaming5.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Gaming',
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '24',
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/gaming6.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Gaming',
    price: 399.99,
    countInStock: 10,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '25',
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/monitor1.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Monitors',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '26',
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/monitor2.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Monitors',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '27',
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/monitor3.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Monitors',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '28',
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/monitor4.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Monitors',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '29',
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/monitor5.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Monitors',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '30',
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/monitor6.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Monitors',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '31',
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/speaker1.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Speakers',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '32',
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/speaker2.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Speakers',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '33',
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/speaker3.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Speakers',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '34',
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/speaker4.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Speakers',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '35',
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/speaker5.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Speakers',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '36',
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/speaker6.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Speakers',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
];

export default products;
