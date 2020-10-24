const Clothes = require('../database/ClothingModels')

const seedJumpers = [{
  title: 'adidas Originals sweatshirt with 3 stripes in navy',
  description: 'adidas needs no introduction. The brand’s famous 3-Stripes can be seen on the track, field and in the latest streetwear trends.',
  price: 42.95,
  image: 'https://images.asos-media.com/products/adidas-originals-sweatshirt-with-3-stripes-in-navy/20050362-1-navy?$XXL$&wid=513&fit=constrain',
  colour: 'navy',
  size: 'S/M/L',
  material: 'cotton',
  weather: [3,5,6,8],
  category: 'jumper',
  site: 'Asos',
  link: 'https://www.asos.com/adidas-originals/adidas-originals-sweatshirt-with-3-stripes-in-navy/prd/20050362?colourwayid=60004270&SearchQuery=&cid=5668'
},
{
  title: 'Nike Plus Club crew neck sweat in stone',
  description: 'when it comes to innovative sportswear, no brand does it better than Nike. Discover the best-selling trainers in the game in our Nike at ASOS edit.',
  price: 37.95,
  image: 'https://images.asos-media.com/products/nike-plus-club-crew-neck-sweat-in-stone/14826696-1-stone?$XXL$&wid=513&fit=constrain',
  colour: 'stone',
  size: 'S/M/L',
  material: 'cotton',
  weather: [3,5,6,8],
  category: 'jumper',
  site: 'Asos',
  link: 'https://www.asos.com/nike/nike-plus-club-crew-neck-sweat-in-stone/prd/14826696?colourwayid=16647172&SearchQuery=&cid=5668'
},
{
  title: 'Edwin Katakana embroidered logo crew neck sweat in auburn',
  description: 'established in Japan in 1947, Edwin pride themselves on a rich history of innovation and quality craftsmanship.',
  price: 80.00,
  image: 'https://images.asos-media.com/products/edwin-katakana-embroidered-logo-crew-neck-sweat-in-auburn/20720630-1-black?$XXL$&wid=513&fit=constrain',
  colour: 'red',
  size: 'S/M/L',
  material: 'cotton',
  weather: [3,5,6,8],
  category: 'jumper',
  site: 'Asos',
  link: 'https://www.asos.com/edwin/edwin-katakana-embroidered-logo-crew-neck-sweat-in-auburn/prd/20720630?colourwayid=60082390&SearchQuery=&cid=5668'
},
{
  title: 'ASOS DESIGN co-ord oversized half zip sweatshirt with contrast panels & piping in navy',
  description: 'This is ASOS DESIGN – your go-to for all the latest trends, no matter who you are, where you’re from and what you’re up to.',
  price: 25.00,
  image: 'https://images.asos-media.com/products/asos-design-co-ord-oversized-half-zip-sweatshirt-with-contrast-panels-piping-in-navy/20976382-1-navy?$XXL$&wid=513&fit=constrain',
  colour: 'navy',
  size: 'S/M/L',
  material: 'cotton',
  weather: [3,5,6,8],
  category: 'jumper',
  site: 'Asos',
  link: 'https://www.asos.com/asos-design/asos-design-co-ord-oversized-half-zip-sweatshirt-with-contrast-panels-piping-in-navy/prd/20976382?colourwayid=60130984&SearchQuery=&cid=5668'
},
{
  title: 'Fred Perry embroidered logo sweat in blue',
  description: 'Founded by triple Wimbledon champion Fred Perry in 1952, the eponymous clothing brand blends classic British street style with an athletic twist. ',
  price: 63.00,
  image: 'https://images.asos-media.com/products/fred-perry-embroidered-logo-sweat-in-blue/21417864-1-nauticalblue?$XXL$&wid=513&fit=constrain',
  colour: 'nautical blue',
  size: 'S/M/L',
  material: 'cotton',
  weather: [3,5,6,8],
  category: 'jumper',
  site: 'Asos',
  link: 'https://www.asos.com/nike/nike-plus-club-crew-neck-sweat-in-stone/prd/14826696?colourwayid=16647172&SearchQuery=&cid=5668'
},
{
  title: 'Y.A.S knitted pullover with high neck in pink',
  description: 'Putting a clean twist on everyday essentials, Danish label Y.A.S packs its understated-cool style into dresses',
  price: 55.00,
  image: 'https://images.asos-media.com/products/yas-knitted-pullover-with-high-neck-in-pink/20816838-1-woodrose?$XXL$&wid=513&fit=constrain',
  colour: 'woodrose',
  size: 'S/M/L',
  material: 'cotton',
  weather: [3,5,6,8],
  category: 'jumper',
  site: 'Asos',
  link: 'https://www.asos.com/yas/yas-knitted-pullover-with-high-neck-in-pink/prd/20816838?colourwayid=60091107&SearchQuery=&cid=2637'
},
{
  title: 'ASOS DESIGN oversized jumper in brushed yarn in red',
  description: 'Putting a clean twist on everyday essentials, Danish label Y.A.S packs its understated-cool style into dresses',
  price: 30.00,
  image: 'https://images.asos-media.com/products/asos-design-oversized-jumper-in-brushed-yarn-in-red/21043947-1-red?$XXL$&wid=513&fit=constrain',
  colour: 'red',
  size: 'S/M/L',
  material: 'acrylic',
  weather: [3,5,6,8],
  category: 'jumper',
  site: 'Asos',
  link: 'https://www.asos.com/asos-design/asos-design-oversized-jumper-in-brushed-yarn-in-red/prd/21043947?colourwayid=60136201&SearchQuery=&cid=2637'
},
{
  title: 'New Look slouchy roll neck jumper in camel',
  description: 'Since setting up shop in the 60s, New Look has become a high-street classic known for creating universally loved',
  price: 22.99,
  image: 'https://images.asos-media.com/products/asos-design-oversized-jumper-in-brushed-yarn-in-red/21043947-1-red?$XXL$&wid=513&fit=constrain',
  colour: 'camel',
  size: 'S/M/L',
  material: 'polyester',
  weather: [3,5,6,8],
  category: 'jumper',
  site: 'Asos',
  link: 'https://www.asos.com/new-look/new-look-slouchy-roll-neck-jumper-in-camel/prd/21476010?colourwayid=60170132&SearchQuery=&cid=2637'
},
{
  title: 'Bershka knitted jumper and wide leg trouser co-ord in grey',
  description: 'Since setting up shop in the 60s, New Look has become a high-street classic known for creating universally loved',
  price: 19.99,
  image: 'https://images.asos-media.com/groups/bershka-knitted-jumper-and-wide-leg-trouser-co-ord-in-grey/31000-group-1?$XXL$&wid=513&fit=constrain',
  colour: 'grey',
  size: 'S/M/L',
  material: 'polyester',
  weather: [3,5,6,8],
  category: 'jumper',
  site: 'Asos',
  link: 'https://www.asos.com/bershka/bershka-knitted-jumper-and-wide-leg-trouser-co-ord-in-grey/grp/31000?colourwayid=60155700&SearchQuery=&cid=2637'
},
{
  title: 'ASOS DESIGN crew neck fluffy jumper with balloon sleeve',
  description: 'This is ASOS DESIGN – your go-to for all the latest trends, no matter who you are, where you’re from and what you’re up to.',
  price: 22.00,
  image: 'https://images.asos-media.com/products/asos-design-crew-neck-fluffy-jumper-with-balloon-sleeve/14772380-1-oatmeal?$XXL$&wid=513&fit=constrain',
  colour: 'oatmeal',
  size: 'S/M/L',
  material: 'polyester',
  weather: [3,5,6,8],
  category: 'jumper',
  site: 'Asos',
  link: 'https://www.asos.com/asos-design/asos-design-crew-neck-fluffy-jumper-with-balloon-sleeve/prd/14772380?colourwayid=16642888&SearchQuery=&cid=2637'
}
]


const seedTshirts = [
  {
    title: 'Simply Be positive tee slogan t-shirt in white',
    description: 'Celebrating women of all shapes and sizes, Simply Be makes a serious case for plus-size style. Inspired by international trends',
    price: 14.00,
    image: 'https://images.asos-media.com/products/simply-be-positive-tee-slogan-t-shirt-in-white/22061167-1-white?$XXL$&wid=513&fit=constrain',
    colour: 'white',
    size: 'S/M/L',
    material: 'cotton',
    weather: [3,7,8],
    category: 'tshirts',
    site: 'Asos',
    link: 'https://www.asos.com/simply-be/simply-be-positive-tee-slogan-t-shirt-in-white/prd/22061167?colourwayid=60346700&SearchQuery=tshirt'
  },
  {
    title: 'ASOS DESIGN ultimate organic cotton long sleeve crew neck t-shirt in white',
    description: 'This is ASOS DESIGN – your go-to for all the latest trends, no matter who you are, where you’re from and what you’re up to. ',
    price: 10.00,
    image: 'https://images.asos-media.com/products/asos-design-ultimate-organic-cotton-long-sleeve-crew-neck-t-shirt-in-white/12451975-1-white?$XXL$&wid=513&fit=constrain',
    colour: 'white',
    size: 'S/M/L',
    material: 'cotton',
    weather: [3,7,8],
    category: 'tshirts',
    site: 'Asos',
    link: 'https://www.asos.com/asos-design/asos-design-ultimate-organic-cotton-long-sleeve-crew-neck-t-shirt-in-white/prd/12451975?colourwayid=16457815&SearchQuery=tshirt'
  },
  {
    title: 'COLLUSION Unisex long sleeve organic cotton t-shirt in black',
    description: 'A new brand for the coming-of-age generation that refuses to compromise on principle or style, COLLUSION believes',
    price: 6.00,
    image: 'https://images.asos-media.com/products/collusion-unisex-long-sleeve-organic-cotton-t-shirt-in-black/14915502-3?$XXL$&wid=513&fit=constrain',
    colour: 'black',
    size: 'S/M/L',
    material: 'cotton',
    weather: [3,7,8],
    category: 'tshirts',
    site: 'Asos',
    link: 'https://www.asos.com/collusion/collusion-unisex-long-sleeve-organic-cotton-t-shirt-in-black/prd/14915502?colourwayid=16654464&SearchQuery=tshirt'
  },
  {
    title: 'Selected Homme The Perfect Tee pima cotton t-shirt in black',
    description: 'A staple wardrobe doesn’t have to be basic, so upgrade your everyday edit with Selected Homme. ',
    price: 16.00,
    image: 'https://images.asos-media.com/products/selected-homme-the-perfect-tee-pima-cotton-t-shirt-in-black/20433128-1-black?$XXL$&wid=513&fit=constrain',
    colour: 'black',
    size: 'S/M/L',
    material: 'cotton',
    weather: [3,7,8],
    category: 'tshirts',
    site: 'Asos',
    link: 'https://www.asos.com/selected-homme/selected-homme-the-perfect-tee-pima-cotton-t-shirt-in-black/prd/20433128?colourwayid=60053328&SearchQuery=tshirt'
  },
  {
    title: 'BOSS Athleisure Tee Curved small logo t-shirt in khaki',
    description: 'With a focus on quality craftsmanship and impeccable design, the BOSS collection offers a premium range of tailoring, athleisure and refined casualwear.',
    price: 45.00,
    image: 'https://images.asos-media.com/products/boss-athleisure-tee-curved-small-logo-t-shirt-in-khaki/21098186-1-darkgreen?$XXL$&wid=513&fit=constrain',
    colour: 'dark green',
    size: 'M/L',
    material: 'cotton',
    weather: [3,7,8],
    category: 'tshirts',
    site: 'Asos',
    link: 'https://www.asos.com/boss-athleisure/boss-athleisure-tee-curved-small-logo-t-shirt-in-khaki/prd/21098186?colourwayid=60140173&SearchQuery=tshirt'
  },
  {
    title: 'Selected Homme the perfect tee t-shirt in burgundy',
    description: 'With a focus on quality craftsmanship and impeccable design, the BOSS collection offers a premium range of tailoring, athleisure and refined casualwear.',
    price: 18.00,
    image: 'https://images.asos-media.com/products/selected-homme-the-perfect-tee-t-shirt-in-burgundy/21250137-1-smokedpaprika?$XXL$&wid=513&fit=constrain',
    colour: 'paprika',
    size: 'M/L',
    material: 'cotton',
    weather: [3,7,8],
    category: 'tshirts',
    site: 'Asos',
    link: 'https://www.asos.com/selected-homme/selected-homme-the-perfect-tee-t-shirt-in-burgundy/prd/21250137?colourwayid=60150782&SearchQuery=tshirt'
  },
  {
    title: 'ASOS DESIGN Curve t-shirt with spiral teal tie dye',
    description: 'This is ASOS DESIGN – your go-to for all the latest trends, no matter who you are, where you’re from and what you’re up to',
    price: 18.00,
    image: 'https://images.asos-media.com/products/asos-design-curve-t-shirt-with-spiral-teal-tie-dye/20814810-1-sagegreen?$XXL$&wid=513&fit=constrain',
    colour: 'sage green',
    size: 'S/M/L',
    material: 'cotton',
    weather: [3,7,8],
    category: 'tshirts',
    site: 'Asos',
    link: 'https://www.asos.com/asos-curve/asos-design-curve-t-shirt-with-spiral-teal-tie-dye/prd/20814810?colourwayid=60090923&SearchQuery=tshirt'
  },
  {
    title: 'ASOS DESIGN super oversized cut off t-shirt with wide sleeve in orange',
    description: 'This is ASOS DESIGN – your go-to for all the latest trends, no matter who you are, where you’re from and what you’re up to.',
    price: 14.00,
    image: 'https://images.asos-media.com/products/asos-design-super-oversized-cut-off-t-shirt-with-wide-sleeve-in-orange/20762651-1-orange?$XXL$&wid=513&fit=constrain',
    colour: 'orange',
    size: 'S/M/L',
    material: 'cotton',
    weather: [3,7,8],
    category: 'tshirts',
    site: 'Asos',
    link: 'https://www.asos.com/asos-design/asos-design-super-oversized-cut-off-t-shirt-with-wide-sleeve-in-orange/prd/20762651?colourwayid=60085876&SearchQuery=tshirt'
  },
  {
    title: 'BOSS Athleisure Tee 6 small logo contrast t-shirt in black/ white',
    description: 'With a focus on quality craftsmanship and impeccable design, the BOSS collection offers a premium range of tailoring, athleisure and refined casualwear.',
    price: 65.00,
    image: 'https://images.asos-media.com/products/boss-athleisure-tee-6-small-logo-contrast-t-shirt-in-black-white/21098182-1-black?$XXL$&wid=513&fit=constrain',
    colour: 'black',
    size: 'S/M/L',
    material: 'cotton',
    weather: [3,7,8],
    category: 'tshirts',
    site: 'Asos',
    link: 'https://www.asos.com/boss-athleisure/boss-athleisure-tee-6-small-logo-contrast-t-shirt-in-black-white/prd/21098182?colourwayid=60140169&SearchQuery=tshirt'
  }
]



const seedJoggers = [
  {
    title: 'adidas Originals monogram trefoil joggers in black',
    description: 'adidas needs no introduction. The brand’s famous 3-Stripes can be seen on the track, field and in the latest streetwear trends. ',
    price: 54.95,
    image: 'https://images.asos-media.com/products/adidas-originals-monogram-trefoil-joggers-in-black/21748398-1-black?$XXL$&wid=513&fit=constrain',
    colour: 'black',
    size: 'S/M',
    material: 'cotton',
    weather: [3,7,8],
    category: 'joggers',
    site: 'Asos',
    link: 'https://www.asos.com/adidas-originals/adidas-originals-monogram-trefoil-joggers-in-black/prd/21748398?colourwayid=60219651&SearchQuery=&cid=14274'
  },
  {
    title: 'Nike logo woven joggers in stone',
    description: 'when it comes to innovative sportswear, no brand does it better than Nike. Discover the best-selling trainers in the game in our Nike at ASOS edit',
    price: 69.95,
    image: 'https://images.asos-media.com/products/nike-logo-woven-joggers-in-stone/22292624-1-stone?$XXL$&wid=513&fit=constrain',
    colour: 'stone',
    size: 'S/M',
    material: 'nylon',
    weather: [2,3,5,6,7,8],
    category: 'joggers',
    site: 'Asos',
    link: 'https://www.asos.com/nike/nike-logo-woven-joggers-in-stone/prd/22292624?colourwayid=60387552&SearchQuery=&cid=14274'
  },
  {
    title: 'Nike Club casual fit cuffed joggers in dark grey',
    description: 'when it comes to innovative sportswear, no brand does it better than Nike. Discover the best-selling trainers in the game in our Nike at ASOS edit',
    price: 37.95,
    image: 'https://images.asos-media.com/products/nike-club-casual-fit-cuffed-joggers-in-dark-grey/14798137-1-darkgrey?$XXL$&wid=513&fit=constrain',
    colour: 'dark grey',
    size: 'S/M',
    material: 'cotton',
    weather: [2,3,5,6,7,8],
    category: 'joggers',
    site: 'Nike',
    link: 'https://www.asos.com/nike/nike-club-casual-fit-cuffed-joggers-in-dark-grey/prd/14798137?colourwayid=16644755&SearchQuery=&cid=14274'
  },
  {
    title: 'adidas Originals jersey joggers with 3 stripes in black',
    description: 'adidas needs no introduction. The brand’s famous 3-Stripes can be seen on the track, field and in the latest streetwear trends.',
    price: 49.95,
    image: 'https://images.asos-media.com/products/adidas-originals-jersey-joggers-with-3-stripes-in-black/20519670-1-black?$XXL$&wid=513&fit=constrain',
    colour: 'black',
    size: 'S/M',
    material: 'cotton',
    weather: [2,3,5,6,7,8],
    category: 'joggers',
    site: 'Asos',
    link: 'https://www.asos.com/adidas-originals/adidas-originals-jersey-joggers-with-3-stripes-in-black/prd/20519670?colourwayid=60060911&SearchQuery=&cid=14274'
  },
  {
    title: 'Lacoste croc detail cuffed joggers in black',
    description: 'Famed for their iconic crocodile emblem, Lacoste was founded by tennis superstar René Lacoste in 1933 and was first to introduce the pique polo shirt.',
    price: 90.00,
    image: 'https://images.asos-media.com/products/lacoste-croc-detail-cuffed-joggers-in-black/20834677-1-black?$XXL$&wid=513&fit=constrain',
    colour: 'black',
    size: 'S/M',
    material: 'cotton',
    weather: [2,3,5,6,7,8],
    category: 'joggers',
    site: 'Asos',
    link: 'https://www.asos.com/lacoste/lacoste-croc-detail-cuffed-joggers-in-black/prd/20834677?CTAref=We+Recommend+Carousel_4&featureref1=we+recommend+pers'
  },
  {
    title: 'Criminal Damage bandana co-ord joggers',
    description: 'Established in 1991, East London label Criminal Damage put their unique take on streetwear with their own trend-led influences',
    price: 38.50,
    image: 'https://images.asos-media.com/products/criminal-damage-bandana-co-ord-joggers/20731553-1-black?$XXL$&wid=513&fit=constrain',
    colour: 'black',
    size: 'S/M',
    material: 'cotton',
    weather: [2,3,5,6,7,8],
    category: 'joggers',
    site: 'Asos',
    link: 'https://www.asos.com/criminal-damage/criminal-damage-bandana-co-ord-joggers/prd/20731553?CTAref=We+Recommend+Carousel_1&featureref1=we+recommend+pers'
  },
  {
    title: 'ASOS DESIGN organic super skinny joggers in khaki with silver zip pockets',
    description: 'This is ASOS DESIGN – your go-to for all the latest trends, no matter who you are, where you’re from and what you’re up to.',
    price: 20.00,
    image: 'https://images.asos-media.com/products/asos-design-organic-super-skinny-joggers-in-khaki-with-silver-zip-pockets/13853127-1-fourleafclover?$XXL$&wid=513&fit=constrain',
    colour: 'four leaf clover',
    size: 'S/M',
    material: 'cotton',
    weather: [2,3,5,6,7,8],
    category: 'joggers',
    site: 'Asos',
    link: 'https://www.asos.com/asos-design/asos-design-organic-super-skinny-joggers-in-khaki-with-silver-zip-pockets/prd/13853127?CTAref=We+Recommend+Carousel_5&featureref1=we+recommend+pers'
  },
  {
    title: 'New Balance small logo sweatpants in navy',
    description: 'For more than 100 years, New Balance has made it its goal to help people achieve theirs.',
    price: 40.00,
    image: 'https://images.asos-media.com/products/new-balance-small-logo-sweatpants-in-navy/21075706-1-navy?$XXL$&wid=513&fit=constrain',
    colour: 'four leaf clover',
    size: 'S/M',
    material: 'cotton',
    weather: [2,3,5,6,7,8],
    category: 'joggers',
    site: 'Asos',
    link: 'https://www.asos.com/new-balance/new-balance-small-logo-sweatpants-in-navy/prd/21075706?CTAref=We+Recommend+Carousel_4&featureref1=we+recommend+pers'
  }
]



const seedHats = [
  {
    title: 'ASOS DESIGN faux fur bucket hat in pale blue',
    description: 'This is ASOS DESIGN – your go-to for all the latest trends, no matter who you are, where you’re from and what you’re up to. ',
    price: 16.00,
    image: 'https://images.asos-media.com/products/adidas-originals-monogram-trefoil-joggers-in-black/21748398-1-black?$XXL$&wid=513&fit=constrain',
    colour: 'blue',
    size: 'one size',
    material: 'polyester',
    weather: [2,3,5,6,7,8],
    category: 'hats',
    site: 'Asos',
    link: 'https://www.asos.com/asos-design/asos-design-faux-fur-bucket-hat-in-pale-blue/prd/20869451?colourwayid=60095747&SearchQuery=hats'
  },
  {
    title: 'Kangol rain hat in red',
    description: 'Mixing heritage with hip-hop influences, British brand Kangol was founded in 1938 with a nod to New York',
    price: 60.00,
    image: 'https://images.asos-media.com/products/kangol-rain-hat-in-red/21934559-1-red?$XXL$&wid=513&fit=constrain',
    colour: 'red',
    size: 'one size',
    material: 'cotton',
    weather: [2,3,5,6,7,8],
    category: 'hats',
    site: 'Asos',
    link: 'https://www.asos.com/kangol/kangol-rain-hat-in-red/prd/21934559?colourwayid=60310512&SearchQuery=hats'
  },
  {
    title: 'ASOS DESIGN daisy borg roll back bucket hat',
    description: 'This is ASOS DESIGN – your go-to for all the latest trends, no matter who you are, where you’re from and what you’re up to. ',
    price: 16.00,
    image: 'https://images.asos-media.com/products/asos-design-daisy-borg-roll-back-bucket-hat/20831568-1-multi?$XXL$&wid=513&fit=constrain',
    colour: 'multi',
    size: 'one size',
    material: 'polyester',
    weather: [2,3,5,6,7,8],
    category: 'hats',
    site: 'Asos',
    link: 'https://www.asos.com/asos-design/asos-design-daisy-borg-roll-back-bucket-hat/prd/20831568?colourwayid=60092521&SearchQuery=hats'
  },
  {
    title: 'Dickies Bogalusa bucket hat in light pink',
    description: 'With over 90 years of manufacturing experience, Dickies traces its reputation for durability and performance back to its workwear roots.',
    price: 30.00,
    image: 'https://images.asos-media.com/products/dickies-bogalusa-bucket-hat-in-light-pink/21332528-1-lightpink?$XXL$&wid=513&fit=constrain',
    colour: 'light pink',
    size: 'one size',
    material: 'polyester',
    weather: [2,3,5,6,7,8],
    category: 'hats',
    site: 'Asos',
    link: 'https://www.asos.com/dickies/dickies-bogalusa-bucket-hat-in-light-pink/prd/21332528?colourwayid=60158233&SearchQuery=hats'
  },
  {
    title: 'Puma logo bucket hat in white',
    description: 'Mixing the world of sports and lifestyle, PUMAs innovative products successfully fuse the creative influences from the world of sport and fashion.',
    price: 12.00,
    image: 'https://images.asos-media.com/products/puma-logo-bucket-hat-in-white/20278223-1-white?$XXL$&wid=513&fit=constrain',
    colour: 'white',
    size: 'one size',
    material: 'polyester',
    weather: [2,3,5,6,7,8],
    category: 'hats',
    site: 'Asos',
    link: 'https://www.asos.com/puma/puma-logo-bucket-hat-in-white/prd/20278223?CTAref=We+Recommend+Carousel_1&featureref1=we+recommend+pers'
  },
  {
    title: 'Bershka reversible leopard print bucket hat in multi',
    description: 'Bershka has been dressing the young and adventurous since 1998. Influenced by the latest music, technology and social media',
    price: 12.99,
    image: 'https://images.asos-media.com/products/bershka-reversible-leopard-print-bucket-hat-in-multi/22141256-1-multi?$XXL$&wid=513&fit=constrain',
    colour: 'multi',
    size: 'one size',
    material: 'polyester',
    weather: [2,3,5,6,7,8],
    category: 'hats',
    site: 'Asos',
    link: 'https://www.asos.com/bershka/bershka-reversible-leopard-print-bucket-hat-in-multi/prd/22141256?CTAref=We+Recommend+Carousel_2&featureref1=we+recommend+pers'
  },
  {
    title: 'Obey rhye plaid check bucket hat in green',
    description: 'Founded in 2001, US streetwear label Obey is an extension of graffiti artist Shepard Fairey’s street and fine art campaign',
    price: 40.00,
    image: 'https://images.asos-media.com/products/obey-rhye-plaid-check-bucket-hat-in-green/20704126-1-green?$XXL$&wid=513&fit=constrain',
    colour: 'green',
    size: 'one size',
    material: 'polyester',
    weather: [2,3,5,6,7,8],
    category: 'hats',
    site: 'Asos',
    link: 'https://www.asos.com/obey/obey-rhye-plaid-check-bucket-hat-in-green/prd/20704126?colourwayid=60080919&SearchQuery=hats'
  },
  {
    title: 'New Era NY 9Forty cap in tan with contrast panel',
    description: 'American label New Era have long enjoyed a relationship with the world of baseball, manufacturing baseball hats for teams since the 1930s.',
    price: 23.00,
    image: 'https://images.asos-media.com/products/new-era-ny-9forty-cap-in-tan-with-contrast-panel/21462045-1-black?$XXL$&wid=513&fit=constrain',
    colour: 'orange',
    size: 'one size',
    material: 'cotton',
    weather: [2,3,5,6,7,8],
    category: 'hats',
    site: 'Asos',
    link: 'https://www.asos.com/new-era/new-era-ny-9forty-cap-in-tan-with-contrast-panel/prd/21462045?CTAref=We+Recommend+Carousel_2&featureref1=we+recommend+pers'
  },
  {
    title: 'French Connection soft knit beanie mix and match',
    description: 'Founded in 1972 by Stephen Marks and driven by innovation, French Connection is known for its wearable, intelligent collections and off-beat advertising campaigns.',
    price: 10.00,
    image: 'https://images.asos-media.com/products/french-connection-soft-knit-beanie-mix-and-match/21255497-1-lgm?$XXL$&wid=513&fit=constrain',
    colour: 'grey',
    size: 'one size',
    material: 'acrylic',
    weather: [2,3,5,6,7,8],
    category: 'hats',
    site: 'Asos',
    link: 'https://www.asos.com/french-connection/french-connection-soft-knit-beanie-mix-and-match/prd/21255497?CTAref=We+Recommend+Carousel_2&featureref1=we+recommend+pers'
  }
]

const seedShirts = [
  {
    title: 'Polo Ralph Lauren oxford shirt in slim fit white',
    description: 'Naming his brand after a game that embodies classic style, Ralph Lauren created Polo Ralph Lauren in 1967 initially selling mens ties.',
    price: 95.00,
    image: 'https://images.asos-media.com/products/polo-ralph-lauren-oxford-shirt-in-slim-fit-white/8404176-1-white?$XXL$&wid=513&fit=constrain',
    colour: 'white',
    size: 'S/M/L',
    material: 'cotton',
    weather: [3,7,8],
    category: 'shirts',
    site: 'Asos',
    link: 'https://www.asos.com/polo-ralph-lauren/polo-ralph-lauren-oxford-shirt-in-slim-fit-white/prd/8404176?colourwayid=15173208&SearchQuery=&cid=3602'
  },
  {
    title: 'SikSilk high collar resort shirt in bird print',
    description: 'The guys behind SikSilk are obsessed with American, Japanese and Brit street culture. OK, so that’s quite a lot of influences',
    price: 20.25,
    image: 'https://images.asos-media.com/products/siksilk-high-collar-resort-shirt-in-bird-print/21258655-1-multi?$XXL$&wid=513&fit=constrain',
    colour: 'multi',
    size: 'S/M/L',
    material: 'viscose',
    weather: [3,7,8],
    category: 'shirts',
    site: 'Asos',
    link: 'https://www.asos.com/siksilk/siksilk-high-collar-resort-shirt-in-bird-print/prd/21258655?CTAref=We+Recommend+Carousel_2&featureref1=we+recommend+pers'
  },
  {
    title: 'ASOS DESIGN oversized dad shirt in black and white stripe',
    description: 'This is ASOS DESIGN – your go-to for all the latest trends, no matter who you are, where you’re from and what you’re up to.',
    price: 28.00,
    image: 'https://images.asos-media.com/products/asos-design-oversized-dad-shirt-in-black-and-white-stripe/21794892-1-multi?$XXL$&wid=513&fit=constrain',
    colour: 'multi',
    size: 'S/M/L',
    material: 'polyester',
    weather: [3,7,8],
    category: 'shirts',
    site: 'Asos',
    link: 'https://www.asos.com/asos-design/asos-design-oversized-dad-shirt-in-black-and-white-stripe/prd/21794892?colourwayid=60299664&SearchQuery=shirts'
  },
  {
    title: 'Daisy Street oversized shirt in check',
    description: 'If you like your trends as fast as they come then Daisy Street is the label for you. Always up on their A-game, Daisy Streets collection of crop tops',
    price: 19.99,
    image: 'https://images.asos-media.com/products/daisy-street-oversized-shirt-in-check/21653650-1-orangecheck?$XXL$&wid=513&fit=constrain',
    colour: 'orange',
    size: 'S/M/L',
    material: 'polyester',
    weather: [3,7,8],
    category: 'shirts',
    site: 'Asos',
    link: 'https://www.asos.com/daisy-street/daisy-street-oversized-shirt-in-check/prd/21653650?CTAref=We+Recommend+Carousel_2&featureref1=we+recommend+pers'
  },
  {
    title: 'Saint Genies lace peplum sleeve detail shirt co ord in fuchsia',
    description: 'If you like your trends as fast as they come then Daisy Street is the label for you. Always up on their A-game, Daisy Streets collection of crop tops',
    price: 19.60,
    image: 'https://images.asos-media.com/products/saint-genies-lace-peplum-sleeve-detail-shirt-co-ord-in-fuchsia/21435427-1-pink?$XXL$&wid=513&fit=constrain',
    colour: 'pink',
    size: 'S/M/L',
    material: 'polyester',
    weather: [3,7,8],
    category: 'shirts',
    site: 'Asos',
    link: 'https://www.asos.com/saint-genies/saint-genies-lace-peplum-sleeve-detail-shirt-co-ord-in-fuchsia/prd/21435427?CTAref=We+Recommend+Carousel_4&featureref1=we+recommend+pers'
  },
  {
    title: 'Object shirt with diamante button detailing and deep cuff in white',
    description: 'Object is one of those clothing brands that everyone can get in on. Its mixture of boho styles and minimal designs serve up that casual-cool vibe',
    price: 45.00,
    image: 'https://images.asos-media.com/products/object-shirt-with-diamante-button-detailing-and-deep-cuff-in-white/20643848-1-white?$XXL$&wid=513&fit=constrain',
    colour: 'white',
    size: 'S/M/L',
    material: 'cotton',
    weather: [3,7,8],
    category: 'shirts',
    site: 'Asos',
    link: 'https://www.asos.com/object/object-shirt-with-diamante-button-detailing-and-deep-cuff-in-white/prd/20643848?CTAref=We+Recommend+Carousel_3&featureref1=we+recommend+pers'
  },
  {
    title: 'New Look check shirt in khaki',
    description: 'Since setting up shop in the 60s, New Look has become a high-street classic known for creating universally loved, wardrobe-ready collections',
    price: 17.99,
    image: 'https://images.asos-media.com/products/new-look-check-shirt-in-khaki/21316277-1-greenpattern?$XXL$&wid=513&fit=constrain',
    colour: 'green',
    size: 'S/M/L',
    material: 'cotton',
    weather: [3,7,8],
    category: 'shirts',
    site: 'Asos',
    link: 'https://www.asos.com/new-look/new-look-check-shirt-in-khaki/prd/21316277?colourwayid=60156642&SearchQuery=shirt'
  },
  {
    title: 'COLLUSION drop shoulder oversized shirt in check co-ord',
    description: 'A new brand for the coming-of-age generation that refuses to compromise on principle or style',
    price: 25.00,
    image: 'https://images.asos-media.com/products/collusion-drop-shoulder-oversized-shirt-in-check-co-ord/20226421-1-sagecheck?$XXL$&wid=513&fit=constrain',
    colour: 'sage',
    size: 'S/M/L',
    material: 'polyester',
    weather: [3,7,8],
    category: 'shirts',
    site: 'Asos',
    link: 'https://www.asos.com/collusion/collusion-drop-shoulder-oversized-shirt-in-check-co-ord/prd/20226421?CTAref=We+Recommend+Carousel_4&featureref1=we+recommend+pers'
  }
]




// -------  GENERATE MANY DATABASE ENTRIES (DEVELOPMNT ONLY) -------------
//  POST REQUEST - /api/clothes/seed

async function seedDatabase(req,res){
  console.log('SEEDING')
  seedJumpers.forEach(async product => {
    try {
      const newClothesItem = new Clothes(product)
      await newClothesItem.save()
    } catch (err){
      console.log(err)
    }
  })
  seedTshirts.forEach(async product => {
    try {
      const newClothesItem = new Clothes(product)
      await newClothesItem.save()
    } catch (err){
      console.log(err)
    }
  })
  seedJoggers.forEach(async product => {
    try {
      const newClothesItem = new Clothes(product)
      await newClothesItem.save()
    } catch (err){
      console.log(err)
    }
  })
  seedHats.forEach(async product => {
    try {
      const newClothesItem = new Clothes(product)
      await newClothesItem.save()
    } catch (err){
      console.log(err)
    }
  })
  seedShirts.forEach(async product => {
    try {
      const newClothesItem = new Clothes(product)
      await newClothesItem.save()
    } catch (err){
      console.log(err)
    }
  })
  res.json({ 'message': 'Successfully seeded' })
}

  

module.exports = { seedDatabase }