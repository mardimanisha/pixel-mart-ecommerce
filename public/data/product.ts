
  const products = [
  {
    "id": 1,
    "name": "Wide-Leg Cargo Trousers",
    "color": "Brown",
    "sizes": ["S", "M", "L", "XL"],
    "description":
      "Classic wide-leg cargo trousers with a relaxed fit, designed for comfort and a vintage streetwear aesthetic. Features deep pockets and durable fabric for everyday wear.",
    "fabric": "Twill Cotton",
    "price": 24.99,
    "ratings": 4,
    "images":
      "https://images.pexels.com/photos/15647646/pexels-photo-15647646/free-photo-of-a-man-in-a-tank-top-and-pants-standing-outside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "category": "pants",
    "featured": true,
   "new": false
  },
  {
    "id": 2,
    "name": "Bohemian Flare Trousers",
    "color": "Orange with Red Embroidery",
    "sizes": ["S", "M", "L", "XL"],
    "description":
      "Vibrant bohemian-style flare trousers featuring intricate red embroidery along the sides. Crafted for comfort and style, these trousers make a bold fashion statement.",
    "fabric": "Cotton Blend",
    "price": 17.99,
    "ratings": 3,
    "images":
      "https://images.pexels.com/photos/15647579/pexels-photo-15647579.jpeg?cs=srgb&dl=pexels-ogproductionz-15647579.jpg&fm=jpg",
      "category": "pants",
    "featured": true,
    "new": false
  },
  {
    "id": 3,
    "name": "Vintage Gingham Slit Skirt",
    "color": "Yellow & White Checkered",
    "sizes": ["S", "M", "L", "XL"],
    "description":
      "Classic high-waisted gingham skirt with a side slit, perfect for a chic and timeless look. Made with breathable fabric for all-day comfort.",
    "fabric": "Cotton Blend",
    "price": 29.99,
    "ratings": 4.5,
    "images":
      "https://images.pexels.com/photos/29100030/pexels-photo-29100030/free-photo-of-fashionable-woman-in-sunglasses-posing-against-orange-wall.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "category": "skirt",
    "featured": true,
    "new": false
  },
  {
    "id": 4,
    "name": "Classic Denim Button-Up Blouse",
    "color": "Blue",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A timeless denim button-up blouse with a chest pocket. Perfect for casual and semi-formal looks.",
    "fabric": "100% Cotton",
    "price": 39.99,
    "ratings": 4.7,
    "images":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2vI8qgNmDAaP5rrWUE0dB_fzWy4i3jAU5F7HK0gRN8clnvyb",
    "category": "top",
    "featured": false,
    "new": true
  },
  {
    "id": 5,
    "name": "Pleated Brown A-Line Skirt",
    "color": "Brown",
    "sizes": ["S", "M", "L", "XL"],
    "description":
      "A stylish pleated A-line skirt with a high waist and belt detail. Perfect for a vintage-inspired look.",
    "fabric": "Polyester Blend",
    "price": 45.99,
    "ratings": 3,
    "images":
      "https://i.pinimg.com/736x/0a/27/d4/0a27d4df5cc2329b7c442855d737d421.jpg",
    "category": "skirt",
    "featured": true,
    "new": false
  },
  {
    "id": 6,
    "name": "Multicolor Flare Dress",
    "color": "Multicolor",
    "sizes": ["S", "M", "L", "XL"],
    "description":
      "A vibrant patchwork dress with bell sleeves and a flowy tiered design. Perfect for a chic and bold statement.",
    "fabric": "Chiffon Blend",
    "price": 79.99,
    "ratings": 4.8,
    "images":
      "https://i.pinimg.com/736x/2a/8c/36/2a8c36d90df6ec2b33a75cdb0278deab.jpg",
    "category": "dress",
    "featured": false,
    "new": true
  },
  {
    "id": 7,
    "name": "Sequin Glam Mini Dress",
    "color": "Multicolor",
    "sizes": ["S", "M", "L"],
    "description":
      "A dazzling sequin mini dress with a deep V-neckline, perfect for parties and glamorous nights out.",
    "fabric": "Sequin Fabric",
    "price": 89.99,
    "ratings": 3,
    "images":
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSjLijBZobt6c5Asvd7cfAhCNGgVH0xdPbsLsba5mStVw5y-BiD",
    "category": "party-wear",
    "featured": false,
    "new": false
  },
  {
    "id": 8,
    "name": "Gold Sequin Fringe Mini Dress",
    "color": "Gold",
    "sizes": ["S", "M", "L"],
    "description":
      "A shimmering gold sequin mini dress with a deep V-neck and fringe details for a glamorous party look.",
    "fabric": "Sequin Fabric",
    "price": 99.99,
    "ratings": 2,
    "images":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJeBnC-x2ZIbdh14F-8ZZw3LWbtQQ2f0vgPw7hlxPNqzTydqq",
    "category": "party-wear",
    "featured": false,
    "new": false
  },
  {
    "id": 9,
    "name": "Iridescent Sequin Slip Dress",
    "color": "Silver",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A stunning iridescent sequin slip dress with a sleek silhouette and delicate spaghetti straps, perfect for any glamorous occasion.",
    "fabric": "Sequin Mesh",
    "price": 89.99,
    "ratings": 5,
    "images":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGcDwMYgjP6lpl6D5Znig5YotwFGqYhFWlUoDPbblajmdhSGi9",
    "category": "party-wear",
    "featured": false,
    "new": true
  },
  {
    "id": 10,
    "name": "Metallic Silver Halter Jumpsuit",
    "color": "Silver",
    "sizes": ["S", "M", "L", "XL"],
    "description":
      "A bold and chic metallic silver halter jumpsuit with a sleek, wide-leg design and cinched waist for a striking party look.",
    "fabric": "Metallic Spandex Blend",
    "price": 99.99,
    "ratings": 4,
    "images":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEX55UK9U2AU-Srtg7k01bE9dbPUhRMxjlXlUoZPWxXELmjYHt",
    "category": "party-wear",
    "featured": false,
    "new": false
  },
  {
    "id": 11,
    "name": "Purple Metallic Mini Dress",
    "color": "Purple",
    "sizes": ["S", "M", "L"],
    "description":
      "A stylish and eye-catching purple metallic mini dress with structured detailing and a bold party look.",
    "fabric": "Metallic Polyester Blend",
    "price": 89.99,
    "ratings": 3,
    "images":
      "https://www.theattico.com/on/demandware.static/-/Sites-theattico-Library/default/dw0c4159f5/Lookbook%20Archive/SS22/17.jpg",
    "category": "party-wear",
    "featured": false,
    "new": false
  },
  {
    "id": 12,
    "name": "Black Glitter Halter Jumpsuit",
    "color": "Black",
    "sizes": ["S", "M", "L", "XL"],
    "description":
      "A glamorous black glitter halter jumpsuit with a plunging neckline and wide-leg silhouette, perfect for a bold party look.",
    "fabric": "Glitter Velvet Blend",
    "price": 99.99,
    "ratings": 4,
    "images":
      "https://i.pinimg.com/236x/c0/73/d7/c073d7cec030fb33eaace0ea8a104a6a.jpg",
    "category": "party-wear",
    "featured": false,
    "new": false
  },
  {
    "id": 13,
    "name": "Rust Glitter Strappy Jumpsuit",
    "color": "Rust",
    "sizes": ["S", "M", "L", "XL"],
    "description":
      "A dazzling rust-colored glitter jumpsuit featuring a strappy top and flared legs, perfect for a stylish party look.",
    "fabric": "Stretch Glitter Knit",
    "price": 89.99,
    "ratings": 5,
    "images":
      "https://img.ltwebstatic.com/images3_pi/2021/11/04/16360133397824ba033a0e2e004ef9de3efeb81738_thumbnail_720x.jpg",
    "category": "party-wear",
    "featured": false,
    "new": false
  },
  {
    "id": 14,
    "name": "Sequin High Neck Flare Dress",
    "color": "Multicolor",
    "sizes": ["S", "M", "L", "XL"],
    "description":
      "A striking high-neck flare dress adorned with multicolor sequins and long bell sleeves, designed for a bold and glamorous party look.",
    "fabric": "Sequin Fabric",
    "price": 99.99,
    "ratings": 4,
    "images":
      "https://i.pinimg.com/736x/48/26/2e/48262eca41dff060b922786aee086081.jpg",
    "category": "party-wear",
    "featured": false,
    "new": false
  },
  {
    "id": 15,
    "name": "Gold Mirror Halter Dress",
    "color": "Gold",
    "sizes": ["S", "M", "L", "XL"],
    "description":
      "A stunning halter-neck mini dress featuring reflective gold mirror tiles, perfect for making a bold and glamorous statement.",
    "fabric": "Polyester Blend with Mirror Embellishments",
    "price": 109.99,
    "ratings": 4.5,
    "images":
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQLh1Gz9_QATdRQxG6duTIDSGle_K7fgdRuKBjmO4zuGR7VjKow",
    "category": "party-wear",
    "featured": false,
    "new": false
  },
  {
    "id": 16,
    "name": "Metallic Fringe Flare Pants Outfit",
    "color": "Gold & Silver",
    "sizes": ["S", "M", "L", "XL"],
    "description":
      "A bold and glamorous two-piece outfit featuring a fitted silver mesh top and gold metallic fringe flare pants for a dazzling look.",
    "fabric": "Metallic Polyester Blend",
    "price": 129.99,
    "ratings": 4.7,
    "images":
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRpRA4j-PMHoUO1iAxDE4ZmoRIiatoEkFI3nn9xwV4bPL8cZiC5",
    "category": "party-wear",
    "featured": false,
    "new": false
  },
  {
    "id": 17,
    "name": "Metallic Silver Mini Dress with Fur Coat",
    "color": "Silver",
    "sizes": ["S", "M", "L", "XL"],
    "description":
      "A sleek metallic silver mini dress paired with a luxurious white faux fur coat for a high-fashion statement look.",
    "fabric": "Metallic Polyester Blend & Faux Fur",
    "price": 149.99,
    "ratings": 4.8,
    "images":
      "https://img-va.myshopline.com/image/store/1715339847991/coral-metallic-mini-shift-dress-sd00209281628-silver-s-sunfere-922095_416x.jpg?w=500&h=750&q=80",
    "category": "party-wear",
    "featured": false,
    "new": false
  },
  {
    "id": 18,
    "name": "Sequin Striped Flared Pants with Ruched Top",
    "color": "Silver & Pink",
    "sizes": ["S", "M", "L", "XL"],
    "description":
      "A glamorous party ensemble featuring high-waisted sequin-striped flared pants paired with a ruched off-shoulder pink top, perfect for disco-inspired looks.",
    "fabric": "Sequined Polyester & Velvet Blend",
    "price": 129.99,
    "ratings": 4.7,
    "images":
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThpDskgBSSSii1gZ4t1rP3Z78Tv58szfKcbDoOO_F4b8YSCFaF",
    "category": "party-wear",
    "featured": false,
    "new": false
  },
  {
    "id": 19,
    "name": "Turquoise Sequin Mini Dress with Puff Sleeves",
    "color": "Turquoise",
    "sizes": ["S", "M", "L", "XL"],
    "description":
      "A sparkling turquoise mini dress with puff sleeves, perfect for parties and glamorous events. Styled with white boots and a chic handbag for a trendy look.",
    "fabric": "Sequin Mesh with Polyester Lining",
    "price": 99.99,
    "ratings": 4.8,
    "images":
      "https://i.pinimg.com/236x/12/61/ec/1261ecc44dadf07386c9ec404b3db3ee.jpg",
    "category": "party-wear",
    "featured": false,
    "new": false
  },
  {
    "id": 20,
    "name": "Silver Holographic Sequin Mini Dress",
    "color": "Silver",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A stunning sleeveless mini dress covered in silver holographic sequins. High-neck design with a body-hugging silhouette perfect for glamorous nights out or New Year's Eve parties.",
    "fabric": "Holographic Sequin Mesh with Stretch Lining",
    "price": 109.0,
    "ratings": 4.9,
    "images":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-bDloFK-m-PPfR8sL8jBRzP0ib4-jTMWDzwW-2UeI4a87T0v",
    "category": "party-wear",
    "featured": false,
    "new": false
  },
  {
    "id": 21,
    "name": "Golden Satin Wide-Leg Jumpsuit",
    "color": "Gold",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A luxurious golden satin jumpsuit featuring a cowl neckline, spaghetti straps, and a wide-leg fit. Cinched at the waist with an embellished belt, making it perfect for glamorous evenings or special occasions.",
    "fabric": "Satin Blend with Metallic Finish",
    "price": 129.0,
    "ratings": 5,
    "images":
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTEC3IlIYOnhQCYA051kxoKp4DB2BzC_SOVup8JDBG4qJG7AcqF",
    "category": "party-wear",
    "featured": false,
    "new": false
  },
  {
    "id": 22,
    "name": "Gold Sequin Halter Jumpsuit",
    "color": "Gold",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A dazzling gold sequin jumpsuit featuring a deep halter neckline and a cinched waist for a figure-flattering fit. The flared pant legs add a touch of retro glamour, making it perfect for evening events and parties.",
    "fabric": "Sequin Mesh with Stretch Lining",
    "price": 149.0,
    "ratings": 4,
    "images":
      "https://n.nordstrommedia.com/it/c49090a4-ed5c-4833-b0f0-edc8e283cf63.jpeg?trim=color&width=185&height=370",
    "category": "party-wear",
    "featured": false,
    "new": false
  },
  {
    "id": 23,
    "name": "Purple Sequin Halter Mini Dress",
    "color": "Purple",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A bold and stylish purple sequin mini dress featuring a deep halter neckline with a keyhole cutout. Designed for a sleek and edgy look, perfect for night outs and special occasions.",
    "fabric": "Sequin Mesh with Stretch Lining",
    "price": 119.0,
    "ratings": 5,
    "images":
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0LQFawznBVn9cVHHIEn79cdxMn1qbGM1H9YXSEZHHgIG9VVqm",
    "category": "dress",
    "featured": false,
    "new": false
  },
  {
    "id": 24,
    "name": "Boho Floral Bell-Sleeve Mini Dress",
    "color": "Orange",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A vintage-inspired boho mini dress featuring a warm orange floral print, deep V-neckline, and flowing bell sleeves. Designed for a chic and free-spirited look, perfect for festivals and casual outings.",
    "fabric": "Lightweight Rayon Blend",
    "price": 99.0,
    "ratings": 4,
    "images":
      "https://i.pinimg.com/236x/99/6c/e7/996ce7aebe5dc776efcb077d14d6a251.jpg",
    "category": "dress",
    "featured": false,
    "new": false
  },
  {
    "id": 25,
    "name": "Vintage Boho Bell-Sleeve Mini Dress",
    "color": "Green & Orange",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A retro-inspired mini dress featuring a collared neckline, fitted silhouette, and intricate boho-style striped floral patterns. The bell sleeves add a touch of vintage elegance, making it perfect for autumn outings and casual chic looks.",
    "fabric": "Polyester Blend with Soft Lining",
    "price": 109.0,
    "ratings": 5,
    "images":
      "https://i.pinimg.com/564x/35/d8/c9/35d8c99b17a2429545e21c7a3e7aa9f7.jpg",
    "category": "dress",
    "featured": false,
    "new": false
  },
  {
    "id": 26,
    "name": "Retro Floral Mod Mini Dress",
    "color": "Orange & Yellow",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A vibrant 60s-inspired mini dress featuring a bold orange and yellow floral pattern, short sleeves, and a high neckline. The fitted silhouette gives a classic mod look, perfect for vintage lovers and retro-themed events.",
    "fabric": "Polyester Blend with Soft Lining",
    "price": 99.0,
    "ratings": 4,
    "images":
      "https://i.pinimg.com/236x/8e/0b/37/8e0b37b08e0053f4678fb7365d08e1b3.jpg",
    "category": "dress",
    "featured": false,
    "new": false
  },
  {
    "id": 27,
    "name": "Vintage Satin A-Line Mini Dress",
    "color": "Yellow",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A classic 60s-inspired satin mini dress featuring a flattering A-line silhouette, long fitted sleeves, and a deep V-neckline. The lustrous fabric adds elegance, making it perfect for evening wear and special occasions.",
    "fabric": "Satin Polyester Blend",
    "price": 119.0,
    "ratings": 5,
    "images":
      "https://i.pinimg.com/474x/da/b5/7a/dab57a8a4e452908df0d4996b327d882.jpg",
    "category": "dress",
    "featured": false,
    "new": false
  },
  {
    "id": 28,
    "name": "Bohemian Bell Sleeve Mini Dress",
    "color": "Pink & Orange",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A vibrant boho-inspired mini dress featuring a striking pink and orange floral pattern, dramatic bell sleeves, and a deep V-neckline. Perfect for festivals, beach outings, and retro-style lovers.",
    "fabric": "Lightweight Polyester Blend",
    "price": 89.0,
    "ratings": 4,
    "images":
      "https://preview.redd.it/pattern-search-70s-dress-v0-65vs93tddpu81.png?auto=webp&s=35e15677a80f8af5fa827b95f741d01fbca0a974",
    "category": "dress",
    "featured": false,
    "new": false
  },
  {
    "id": 29,
    "name": "Floral Button-Front Sundress",
    "color": "Orange",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A charming orange sundress with delicate floral prints, adjustable shoulder ties, and a stylish button-front design. Perfect for summer outings, beach vacations, and casual daywear.",
    "fabric": "Lightweight Cotton Blend",
    "price": 79.0,
    "ratings": 5,
    "images":
      "https://lafemmeapero.com/cdn/shop/products/20211120_FEMME_APERO_ECOM_0555_1000x1000.progressive.jpg?v=1640030924",
    "category": "dress",
    "featured": false,
    "new": false
  },
  {
    "id": 30,
    "name": "Boho Chic Knit Dress",
    "color": "Burgundy",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A stylish burgundy knit dress featuring a subtle zigzag pattern, long sleeves, and a front zip detail. Perfect for autumn and winter, this dress pairs effortlessly with knee-high boots and a wide-brim hat for a classic boho look.",
    "fabric": "Soft Knit Blend",
    "price": 89.0,
    "ratings": 4.8,
    "images":
      "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/superdry/W8011351A9IA/0/_b5R35kI_i-410361525001_1.jpg",
    "category": "dress",
    "featured": false,
    "new": false
  },
  {
    "id": 31,
    "name": "Vintage Floral Print Mini Dress",
    "color": "Multicolor",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A retro-inspired mini dress featuring a vibrant floral print on a black background. Designed with a classic white collar, short sleeves, and a fitted waist for a flattering silhouette. Perfect for casual outings or vintage-themed events.",
    "fabric": "Polyester Blend",
    "price": 79.0,
    "ratings": 5,
    "images":
      "https://i.etsystatic.com/12664315/r/il/b63622/941119668/il_fullxfull.941119668_l4b0.jpg",
    "category": "dress",
    "featured": false,
    "new": false
  },
  {
    "id": 32,
    "name": "Retro Green Knit Mini Dress",
    "color": "Green",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A vintage-inspired sleeveless mini dress in a soft yellow hue. Features a delicate knit pattern, an A-line silhouette, and a high neckline for a chic retro look. Perfect for casual outings or summer parties.",
    "fabric": "Cotton Knit Blend",
    "price": 85.0,
    "ratings": 4,
    "images":
      "https://i.pinimg.com/736x/92/f9/00/92f900ce941ab8ccc060512d3c309032.jpg",
    "category": "dress",
    "featured": false,
    "new": false
  },
  {
    "id": 33,
    "name": "Retro Brown Geometric Knit Dress",
    "color": "Brown",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A stylish vintage-inspired mini dress featuring a brown and beige geometric knit pattern. Designed with a deep V-neckline, bell sleeves, and a fitted silhouette for a true 70s aesthetic. Perfect for casual outings and retro-themed events.",
    "fabric": "Knit Polyester Blend",
    "price": 95.0,
    "ratings": 5,
    "images":
      "https://i.pinimg.com/236x/dd/4f/4e/dd4f4e03f935659830497ac4de4e5136.jpg",
    "category": "dress",
    "featured": false,
    "new": false
  },
  {
    "id": 34,
    "name": "Neon Zebra Print Turtleneck with Cargo Pants",
    "color": "Neon Green & Black",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A bold and edgy outfit featuring a neon green and black zebra print turtleneck paired with oversized black cargo pants. The high-neck top adds a statement touch, while the relaxed-fit cargo pants offer a modern streetwear aesthetic. Perfect for urban fashion lovers.",
    "fabric": "Polyester Blend & Cotton",
    "price": 110.0,
    "ratings": 4,
    "images":
      "https://i.pinimg.com/236x/4d/2d/0c/4d2d0cbbe951f9e555ab2d6576318686.jpg",
    "category": "modern",
    "featured": false,
    "new": false
  },
  {
    "id": 35,
    "name": "Minimalist Chocolate Brown Co-ord Set",
    "color": "Brown",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A sophisticated and modern chocolate brown co-ord set featuring a long-sleeve collared top and wide-leg trousers. Designed for effortless elegance and comfort, this versatile ensemble is perfect for both casual and semi-formal occasions.",
    "fabric": "Soft Knit Blend",
    "price": 120.0,
    "ratings": 5,
    "images": "https://i.ebayimg.com/images/g/pQUAAOSwcnhnCGxy/s-l225.jpg",
    "category": "modern",
    "featured": false,
    "new": false
  },
  {
    "id": 36,
    "name": "Casual Brown Knit Sweater with Relaxed Denim",
    "color": "Brown & Blue",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A cozy and stylish outfit featuring a soft brown knit sweater paired with relaxed-fit blue denim jeans. Perfect for casual everyday wear, this effortlessly chic look is both comfortable and trendy.",
    "fabric": "Wool Blend & Cotton Denim",
    "price": 90.0,
    "ratings": 4,
    "images":
      "https://images.fashiola.in/product-list/300x450/asos/111084905/puff-sleeve-jumper-in-chocolate.webp",
    "category": "modern",
    "featured": false,
    "new": false
  },
  {
    "id": 37,
    "name": "Classic Black Blazer & Trousers Set",
    "color": "Black & White",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A timeless and sophisticated black blazer and trousers set, paired with a crisp white button-up shirt. Designed for a polished and effortlessly chic look, perfect for professional settings or smart-casual occasions.",
    "fabric": "Polyester Blend & Cotton",
    "price": 150.0,
    "ratings": 5,
    "images":
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https://substack-post-media.s3.amazonaws.com/public/images/724fed61-3dfc-40b8-8545-f537c09e7022_976x1368.png",
    "category": "modern",
    "featured": false,
    "new": false
  },
  {
    "id": 38,
    "name": "Black & White Striped Ribbed Sweater",
    "color": "Black & White",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A stylish and versatile black and white striped ribbed sweater with long sleeves and a fitted silhouette. Designed for casual yet chic everyday wear, this classic piece pairs perfectly with high-waisted jeans or skirts.",
    "fabric": "Cotton Ribbed Knit",
    "price": 75.0,
    "ratings": 4,
    "images":
      "https://i.pinimg.com/236x/6b/78/9b/6b789b9d3d066f9a38fcbc94ef8bfcce.jpg",
    "category": "modern",
    "featured": false,
    "new": false
  },
  {
    "id": 39,
    "name": "Modern Tailored Blazer & Jogger Set",
    "color": "Maroon, Navy & White",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A trendy and sophisticated outfit featuring a maroon tailored blazer with a subtle checkered pattern, paired with navy jogger-style trousers and a white high-neck blouse. Completed with sporty white sneakers and red socks for a bold, fashion-forward statement.",
    "fabric": "Wool Blend & Cotton",
    "price": 140.0,
    "ratings": 5,
    "images":
      "https://i.pinimg.com/236x/ca/21/60/ca216044a45b4df640da9d6f154132a1.jpg",
    "category": "modern",
    "featured": false,
    "new": false
  },
  {
    "id": 40,
    "name": "Retro Striped Turtleneck & High-Waisted Trousers",
    "color": "Multicolor",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A fun and vibrant outfit featuring a retro-inspired striped turtleneck with pastel hues, paired with high-waisted yellow trousers. Styled with blue sneakers for a playful, modern look perfect for casual outings.",
    "fabric": "Cotton Blend & Polyester",
    "price": 95.0,
    "ratings": 4,
    "images":
      "https://i.pinimg.com/736x/14/df/e9/14dfe9109dfc58a43eec419d4b655ada.jpg",
    "category": "modern",
    "featured": false,
    "new": false
  },
  {
    "id": 41,
    "name": "Vintage Striped Turtleneck with Suede Button Skirt",
    "color": "Brown & Orange",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A chic vintage-inspired outfit featuring a striped turtleneck sweater paired with a high-waisted suede skirt with button detailing. Styled with knee-high leather boots, this look is perfect for a modern retro aesthetic.",
    "fabric": "Cotton Knit & Suede Blend",
    "price": 89.0,
    "ratings": 5,
    "images":
      "https://i.pinimg.com/236x/8d/f3/a0/8df3a044469be0522da869002879c867.jpg",
    "category": "skirt",
    "featured": false,
    "new": false
  },
  {
    "id": 42,
    "name": "Retro Yellow Blouse with Geometric Print Skirt",
    "color": "Yellow & Orange",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A stylish retro-inspired outfit featuring a vibrant yellow collared blouse paired with a bold geometric print mini skirt. Perfect for a vintage yet modern statement look.",
    "fabric": "Polyester Blend & Cotton",
    "price": 79.0,
    "ratings": 4,
    "images":
      "https://i.pinimg.com/736x/ba/f0/b5/baf0b55d6b71c96d27ccf068a4081dd6.jpg",
    "category": "skirt",
    "featured": false,
    "new": false
  },
  {
    "id": 43,
    "name": "Vintage Corduroy Skirt with Contrast Shirt",
    "color": "White & Blue",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A sophisticated vintage-inspired outfit featuring a burnt orange corduroy A-line skirt paired with a deep purple button-up shirt. Styled with red tights and platform heels for a bold, modern-retro aesthetic.",
    "fabric": "Corduroy & Cotton Blend",
    "price": 85.0,
    "ratings": 5,
    "images":
      "https://i.pinimg.com/236x/07/9f/07/079f07a53e25f8fb45d44caaa40ff902.jpg",
    "category": "skirt",
    "featured": false,
    "new": false
  },
  {
    "id": 44,
    "name": "Retro Yellow Plaid Skirt with Ruffled Blouse",
    "color": "Yellow",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A charming 70s-inspired outfit featuring a yellow plaid pleated skirt paired with a ruffled long-sleeve collared blouse. Perfect for a vintage aesthetic with a playful touch.",
    "fabric": "Polyester Blend & Cotton",
    "price": 75.0,
    "ratings": 4,
    "images":
      "https://i.pinimg.com/400x300/be/96/42/be9642ecccae07481623ea56f2b4091b.jpg",
    "category": "skirt",
    "featured": false,
    "new": false
  },
  {
    "id": 45,
    "name": "Striped Polo Top with Zipper Corduroy Skirt",
    "color": "Red & Yellow",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A stylish retro-inspired outfit featuring a fitted striped polo top in warm tones, paired with a high-waisted corduroy mini skirt with a front zipper. Perfect for a casual yet trendy vintage look.",
    "fabric": "Cotton Blend & Corduroy",
    "price": 82.0,
    "ratings": 4,
    "images":
      "https://i.pinimg.com/474x/ef/12/6c/ef126c67258a314373576d7b7ec3e8fc.jpg",
    "category": "skirt",
    "featured": false,
    "new": false
  },
  {
    "id": 46,
    "name": "Classic Plaid Mini Skirt with Turtleneck Sweater",
    "color": "Black & White",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A timeless 60s-inspired outfit featuring a high-neck white sweater paired with a black and white plaid mini skirt. Styled with a belt and knee-high white boots for an effortlessly chic vintage look.",
    "fabric": "Wool Blend & Cotton",
    "price": 88.0,
    "ratings": 5,
    "images":
      "https://i.pinimg.com/736x/a2/e4/aa/a2e4aa0953fc038cd34387d83fae5db6.jpg",
    "category": "skirt",
    "featured": false,
    "new": false
  },
  {
    "id": 47,
    "name": "Chic Plaid Mini Skirt with Sleeveless Turtleneck",
    "color": "Red & Black",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A stylish 60s-inspired outfit featuring a sleeveless white turtleneck top paired with a blue and beige plaid mini skirt. Styled with white knee-high boots and oversized sunglasses for a sophisticated retro vibe.",
    "fabric": "Polyester Blend & Wool",
    "price": 90.0,
    "ratings": 5,
    "images":
      "https://i.pinimg.com/474x/8c/25/cc/8c25ccf56cc9253dc6ceec05285efdb5.jpg",
    "category": "skirt",
    "featured": false,
    "new": false
  },
  {
    "id": 48,
    "name": "Striped Turtleneck with Corduroy Button-Up Skirt",
    "color": "Multicolor & Brown",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A cozy yet stylish outfit featuring a vibrant striped turtleneck sweater paired with a deep purple corduroy mini skirt. The button-up front and utility pockets add a chic vintage touch, perfect for fall and winter fashion.",
    "fabric": "Corduroy & Knit Blend",
    "price": 85.0,
    "ratings": 4,
    "images":
      "https://i.pinimg.com/236x/08/37/68/083768b5dea2a89563d9d2c6ba53eeb6.jpg",
    "category": "skirt",
    "featured": false,
    "new": false
  },
  {
    "id": 49,
    "name": "Retro Red Turtleneck with Plaid Wrap Skirt",
    "color": "Red & Black",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A classic vintage-inspired outfit featuring a bold red turtleneck sweater paired with a black and white plaid wrap skirt. Perfect for a timeless, sophisticated look with a touch of 60s nostalgia.",
    "fabric": "Cotton & Wool Blend",
    "price": 88.0,
    "ratings": 5,
    "images":
      "https://media-photos.depop.com/b1/40467199/2028122995_d9d93471e50e445b88becea8172ea112/P0.jpg",
    "category": "skirt",
    "featured": false,
    "new": false
  },
  {
    "id": 50,
    "name": "Vibrant Retro Flared Trousers Set",
    "color": "Orange",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A striking retro outfit featuring high-waisted gradient pink-to-orange flared trousers paired with a turquoise turtleneck and an embellished orange-blue jacket. A bold, glamorous 70s-inspired look.",
    "fabric": "Polyester & Spandex Blend",
    "price": 120.0,
    "ratings": 5,
    "images":
      "https://i.pinimg.com/1200x/5d/bd/77/5dbd77247d956e3f3ca19eab210bfbe0.jpg",
    "category": "trousers",
    "featured": false,
    "new": false
  },
  {
    "id": 51,
    "name": "Vintage Plaid Flared Trousers",
    "color": "Brown & Beige",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "Retro-inspired plaid flared trousers featuring a high-waisted fit and stretchy fabric for ultimate comfort. Perfect for a chic vintage street style look.",
    "fabric": "Polyester & Cotton Blend",
    "price": 85.0,
    "ratings": 4.8,
    "images":
      "https://i.pinimg.com/736x/d4/f9/68/d4f968d3bc1f239f182015192216c44f.jpg",
    "category": "trousers",
    "featured": false,
    "new": false
  },
  {
    "id": 52,
    "name": "Rust High-Waisted Flared Trousers",
    "color": "Rust Red",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A chic pair of high-waisted flared trousers in a warm rust red hue, perfect for achieving a retro 70s-inspired look. Made from soft, durable fabric for a comfortable fit.",
    "fabric": "Corduroy Cotton Blend",
    "price": 95.0,
    "ratings": 4.9,
    "images":
      "https://i.pinimg.com/736x/86/dd/4b/86dd4b6ce6acfa8fefbfac357d2f7e6c.jpg",
    "category": "trousers",
    "featured": false,
    "new": false
  },
  {
    "id": 53,
    "name": "Vibrant Orange High-Waisted Flared Trousers",
    "color": "Orange",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "These eye-catching high-waisted flared trousers in a bold orange shade bring a retro 70s disco vibe. Designed with a sleek silhouette and a statement belt detail, perfect for standout looks.",
    "fabric": "Polyester & Spandex Blend",
    "price": 100.0,
    "ratings": 5,
    "images":
      "https://i.pinimg.com/736x/78/b8/24/78b82462e4db2dcc5959eec716510789.jpg",
    "category": "trousers",
    "featured": false,
    "new": false
  },
  {
    "id": 54,
    "name": "Bohemian Sheer Flared Trousers",
    "color": "Mauve",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "Elegant and flowy, these bohemian-inspired sheer flared trousers feature layered tulle fabric with a lace waistband, offering a dreamy and ethereal look perfect for casual or festival wear.",
    "fabric": "Polyester & Lace",
    "price": 120.0,
    "ratings": 5,
    "images":
      "https://i.pinimg.com/736x/c9/bc/eb/c9bcebace584bd850d5705e3a3bf5158.jpg",
    "category": "trousers",
    "featured": false,
    "new": false
  },
  {
    "id": 55,
    "name": "Vintage Brown Suede Lace-Up Flared Trousers",
    "color": "Brown",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "Retro-inspired brown suede flared trousers featuring a lace-up front, knee panel detailing, and a bohemian Western vibe. Perfect for styling with fringe vests and flowy blouses.",
    "fabric": "Genuine Suede & Cotton Lining",
    "price": 150.0,
    "ratings": 5,
    "images":
      "https://i.pinimg.com/736x/7c/ac/94/7cac94f6c2d6acfb7861c928c79abfba.jpg",
    "category": "trousers",
    "featured": false,
    "new": false
  },
  {
    "id": 56,
    "name": "Striped Wide-Leg Trousers",
    "color": "Rust & Beige",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "A bohemian-inspired pair of rust-colored wide-leg trousers with beige stripes, high-waisted fit, and flowy silhouette. Perfect for vintage and Western-style outfits.",
    "fabric": "Cotton & Linen Blend",
    "price": 120.0,
    "ratings": 5,
    "images":
      "https://i.pinimg.com/736x/63/9d/f9/639df92362aae79f6ee35e4ab09e9d7b.jpg",
    "category": "trousers",
    "featured": false,
    "new": false
  },
  {
    "id": 57,
    "name": "Plaid Flared Trousers",
    "color": "Brown & Beige",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "Retro-inspired plaid flared trousers with a high-waisted fit. Perfect for a vintage casual look, styled effortlessly with graphic tees and boots.",
    "fabric": "Polyester & Spandex Blend",
    "price": 95.0,
    "ratings": 5,
    "images":
      "https://i.pinimg.com/564x/db/93/ec/db93ec3d0fe3968ab4bc094ae3a0c897.jpg",
    "category": "trousers",
    "featured": false,
    "new": false
  },
  {
    "id": 58,
    "name": "Flared High-Waist Trousers",
    "color": "Rust & White",
    "sizes": ["XS", "S", "M", "L"],
    "description":
      "Elegant high-waisted flared trousers in a rich rust tone, paired with a vintage-inspired white ruffled blouse. A timeless and sophisticated look for both casual and formal occasions.",
   "fabric": "Polyester & Cotton Blend",
    "price": 105.0,
    "ratings": 5,
    "images":
      "https://i.pinimg.com/236x/34/bc/cf/34bccf6a8ca0191c4de2a2a737046042.jpg",
    "category": "trousers",
    "featured": false,
    "new": false
  }
]

export default products;

