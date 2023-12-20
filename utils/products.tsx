export const products = [
  {
    id: "64a654593e91b8e73a351e9b",
    name: "Football Boots",
    description: "High-performance football boots for the best gaming experience.",
    price: 2999,
    brand: "Nike",
    category: "Football",
    inStock: true,
    images: [
      {
        color: "White",
        colorCode: "#FFFFFF",
        image:
          "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2Ffootball_boots_white.png?alt=media&token=2486cd23-8aa9-449e-8563-8c8a3278d0b4",
      },
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2Ffootball_boots_black.png?alt=media&token=ba0019e0-a6cb-4da7-b214-6252bf57f7e3",
      },
    ],
    reviews: [],
  },
  {
    id: "64a4ebe300900d44bb50628a",
    name: "Cricket Bat",
    description:
      "Top-quality cricket bat for powerful strokes and a perfect gaming experience.",
    price: 102.99,
    brand: "Reebok",
    category: "Cricket",
    inStock: true,
    images: [
      {
        color: "Wooden",
        colorCode: "#8B4513",
        image:
          "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2Fcricket_bat_wooden.png?alt=media&token=d07334d8-ab2b-4648-a38b-2a062a1a49bc",
      },
    ],
    reviews: [
      {
        id: "64a65a6158b470c6e06959ee",
        userId: "6475af156bad4917456e6e1e",
        productId: "64a4ebe300900d44bb50628a",
        rating: 5,
        comment: "Excellent cricket bat!",
        createdDate: "2023-07-06T06:08:33.067Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "648437b38c44d52b9542e340",
    name: "Basketball",
    description:
      "Official size and weight basketball for professional play and training.",
    price: 30,
    brand: "Spalding",
    category: "Basketball",
    inStock: true,
    images: [
      {
        color: "Orange",
        colorCode: "#FFA500",
        image:
          "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2Fbasketball_orange.png?alt=media&token=8fe19551-173a-4550-9d02-20afffc79b12",
      },
    ],
    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "Great basketball for playing with friends. Good grip and durability.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "649d775128b6744f0f497040",
    name: 'Tennis Racket',
    description:
      'Professional-grade tennis racket for a powerful and precise game.',
    price: 80,
    brand: 'Wilson',
    category: 'Tennis',
    inStock: true,
    images: [
      {
        color: 'Black',
        colorCode: '#000000',
        image:
          'https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2Ftennis_racket_black.png?alt=media&token=4446b901-01ab-4152-8953-e36b22608755',
      },
      {
        color: 'White',
        colorCode: '#FFFFFF',
        image:
          'https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2Ftennis_racket_white.png?alt=media&token=a76bec63-f616-4647-9dd3-b3d23407ba4f',
      },
    ],
    reviews: [],
  },
  {
    id: '649f775128b6744f0f497055',
    name: 'Volleyball',
    description:
      'Official size and weight volleyball for professional play and training.',
    price: 25,
    brand: 'Mikasa',
    category: 'Volleyball',
    inStock: true,
    images: [
      {
        color: 'White',
        colorCode: '#FFFFFF',
        image:
          'https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2Fvolleyball_white.png?alt=media&token=4446b901-01ab-4152-8953-e36b22608755',
      },
    ],
    reviews: [],
  },
];
