export const products = [
  {
    id: "64a654593e91b8e73a351e9b",
    name: "Basketball",
    description: "Short description",
    price: 2999,
    brand: "apple",
    category: "Phone",
    inStock: true,
    images: [
      {
        color: "White",
        colorCode: "#FFFFFF",
        image:
          "https://media.istockphoto.com/id/183256716/photo/ball-and-basketball-court.jpg?s=2048x2048&w=is&k=20&c=LPDnwUmZp6FaxdtsY-LiWleOWDN4RklUeGifvxgibsE=",
      },
      {
        color: "Gray",
        colorCode: "#808080",
        image:
          "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2F1694245647731-iphone14-gray.png?alt=media&token=ba0019e0-a6cb-4da7-b214-6252bf57f7e3",
      },
    ],
    reviews: [],
  },
  {
    id: "64a4ebe300900d44bb50628a",
    name: "Cricket Bat (1 kg)-Pitchvision Kahuna English Willow",
    description:
      "PERFECT STROKE KEYS - Spherically-dished keys match the shape of your fingertips, offering satisfying feedback with every tap\nCOMFORT AND STABILITY - Type with confidence on a keyboard crafted for comfort, stability, and precision",
    price: 8000,
    brand: "logitech",
    category: "Accesories",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "https://media.istockphoto.com/id/177491473/photo/cricket-bat-and-ball.jpg?s=2048x2048&w=is&k=20&c=mzUG9oDRUWYfozvb4BWBFOJ55aWMIElCm0HYNJrUBWI=",
      },
    ],
    reviews: [
      {
        id: "64a65a6158b470c6e06959ee",
        userId: "6475af156bad4917456e6e1e",
        productId: "64a4ebe300900d44bb50628a",
        rating: 5,
        comment: "good",
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
    name: "NikePremier 3",
    description:
      'The Nike Premier 3 gets back to the basics with a timeless silhouette wrapped in supple synthetic leather—helping you to move confidently as an unstoppable force on the pitch.Tuned for touch synthetic leather in the upper is soft for heightened touch. The lookFold-over tongue features a cut line to let you choose between a traditional or modern look.Grip and Go conical studs provide the traction you need for high speeds.',
    price: 25000,
    brand: "Nike",
    category: "Football",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "https://media.istockphoto.com/id/671028562/photo/black-leather-football-shoes-or-soccer-boots-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=g9aEs6Zo5s8KePtJyuAX-FSJzGDtIc4BOYOuoKaphdk=",
      },
      {
        color: "Blue",
        colorCode: " #0000FF",
        image:
          "https://media.istockphoto.com/id/1384883298/photo/football-boots-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=AEA9Y9XzCDXixQlFTedEzJZyElGhpZcI5b2fsXVumAw=",
      },
      {
        color: "Yellow",
        colorCode: "#FFFF00",
        image:
          "https://media.istockphoto.com/id/1326260750/photo/yellow-soccer-shoes-on-a-white-background-sports-shoes-for-playing-football.jpg?s=2048x2048&w=is&k=20&c=rxrH_E9SNkbhlARV2G3JPBGcXp6TWePv1v9IlFcfba4=",
      },
    ],
    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
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
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
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
    id: "64a4e9e77e7299078334019f",
    name: "Badminton Racquet LI-NING G-Force 3900 Superlite White, Blue Unstrung (Pack of: 1, 79 g)",
    description:
      "Cross computer control: Game changing capacity to navigate seamlessly on 3 computers, and copy paste text, images, and files from 1 to the other using Logitech flow\nDual connectivity: Use with upto 3 Windows or Mac computers via included Unifying receiver or Bluetooth Smart wireless technology. Gesture button- Yes",
    price: 3000,
    brand: "logitech",
    category: "Accesories",
    inStock: true,
    images: [
      {
        color: "Graphite",
        colorCode: " #383838",
        image:
          "https://media.istockphoto.com/id/491525908/photo/close-up-of-a-badminton-racket.jpg?s=2048x2048&w=is&k=20&c=UdpQQOjUnIbsT95NuO2bORkGVqq9PCkTpU5EnR3k0iU=",
      },
    ],
    reviews: [],
  },
  {
    id: "649d775128b6744f0f497040",
    name: 'Cosco Hurricane Football ',
    description:
      'Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth, you can directly use the smartwatches to answer or make calls, read messages, store contacts, view call history. The smartwatch can set up more message notifications in "GloryFit" APP. You will never miss any calls and messages during meetings, workout and riding.',
    price: 1500,
    brand: "Nerunsa",
    category: "Watch",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "https://media.istockphoto.com/id/500431893/photo/soccer-ball-on-grass.jpg?s=2048x2048&w=is&k=20&c=EmOmOMaQq48iYOXCxm5bU-HEd_9jl1JFJMwmZ_mt5Fg=",
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image:
          "https://firebasestorage.googleapis.com/v0/b/e-shop-vid.appspot.com/o/products%2F1695192448311-watch-silver.jpg?alt=media&token=a76bec63-f616-4647-9dd3-b3d23407ba4f",
      },
    ],
    reviews: [],
  },
];