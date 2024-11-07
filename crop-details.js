document.addEventListener('DOMContentLoaded', function() {
    // Function to extract query parameter from URL
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Get the crop name from the query parameter
    const cropName = getQueryParam('crop');

    // Update the crop name in the HTML
    const cropNameElement = document.getElementById('crop-name');
    cropNameElement.textContent = cropName;

    // Define crop details (replace with actual values)
    const cropDetails = {
        'Tomato': {
            
            description: 'Tomato is a widely grown vegetable with various culinary uses. ',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'tomato.jpg',
            fertilizers: 'NPK (10-26-26), Urea, DAP',
            disease: 'Tomato Blight,',
            fertilizers1: 'nitrogen,phasphorus',
            diseasePhoto: 'tomato_blight.jpeg',
            disease1: 'Tomato leaf curl disease,',
            fertilizers2: 'Organic fertilizers or Foilar sprays',
            diseasePhoto1: 'tamato leaf curl.JPEG',
            diseasevideo:'https://www.youtube.com/watch?v=8UsbLG64Jt8&pp=ygUMY3JvcCBkZXRhaWxz ',
            marketPrice: '₹17000.00 per ton'
        },
        'Sugarcane': {
            description: 'Sugarcane is a tall perennial grass widely cultivated for its sweet juice.',
            description1:'this crop can be grown between 12-18 month',
            cropPhoto: 'sugarcane.jpg',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'Red Rot',
            fertilizers1: 'nitrogen,potassium ',
            diseasePhoto: 'red_rot.jpg',
            
            disease1: 'sugarcane smut ',
            fertilizers2: 'potassium,calcium',
            diseasePhoto1: 'sugercane smut.jpg',
            diseasevideo:'https://www.youtube.com/watch?v=wougJaN_Ha0&pp=ygUmYWxsIGNyb3AgaGFydmVzdGluZyBrbm93bGVkZ2UgaW4gaGluZGk%3D',
            marketPrice: '₹3050.00 per ton'
        },
        'Rice': {
            description: 'Rice is a cereal grain, the most widely consumed staple food for a large part of the world.',
            description1:'this crop can be grown between  110-120 days',
            cropPhoto: 'rice.jpg',
            fertilizers: 'Urea, DAP, Potash',
            disease: 'Blast',
            fertilizers1: ' azoxystrobin,tricycllzole ',
            diseasePhoto: 'rice_blast.jpeg',
            disease1: 'Sheath Blight',
            fertilizers2: 'fluazinam spray',
            diseasePhoto1: 'sheatblight.jpeg',
            marketPrice: '₹27500.00 per ton'
        },
        'Turmeric': {
            description: 'Turmeric is a flowering plant of the ginger family, commonly used as a spice in cooking.',
            description1:'this crop can be grown between 7-9 months ',
            cropPhoto: 'turmeric.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Rhizome Rot',
            fertilizers1: 'organic fertilizers',
            diseasePhoto: 'turmeric_rhizome_rot.jpeg',
            disease1: 'leaf spot,',
            fertilizers2: 'potassium rich fertilizer',
            diseasePhoto1: 'leaf spot.jpeg',
            marketPrice: '₹150570.00 per ton'
        },
        'Ginger': {
            description: 'Ginger is a flowering plant whose rhizome is widely used as a spice and a folk medicine.',
            description1:'this crop can be grown between   210-240 days',
            cropPhoto: 'ginger.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Bacterial Wilt',
            fertilizers1: 'disease free seed rhizome ',
            diseasePhoto: 'ginger_bacterial_wilt.jpeg',
            disease1: 'soft rot',
            fertilizers2: 'phosphrous,potassium ',
            diseasePhoto1: 'softrot.jpeg',
            marketPrice: '₹130000 per ton'
        },
        'Cotton': {
            description: 'Cotton is a soft, fluffy staple fiber that grows in a boll, or protective case, around the seeds of the cotton plants of the genus Gossypium.',
            description1:'this crop can be grown between  6-8 months ',
            cropPhoto: 'cotton.jpg',
            fertilizers: 'NPK (12-24-12), Urea, Potash',
            disease: 'Cotton Wilt',
            fertilizers1: 'urea(nitrogen fertilizer)',
            diseasePhoto: 'cotton_wilt.jpg',
            disease1: 'boll rot',
            fertilizers2: 'triple super phosphate(TSP)',
            diseasePhoto1: 'boll rot.jpg',
            marketPrice: '₹45000 per ton'
        },
        'Toor Dal': {
            description: 'Toor dal, also known as pigeon pea, is a perennial legume from the family Fabaceae.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'toor.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Fusarium Wilt',
            fertilizers1: ' nitrogen,phosphrous',
            diseasePhoto: 'toor_dal_fusarium_wilt.jpg',
            disease1: 'pod borer',
            fertilizers2: 'bacillus thuringiensis(prevention)',
            diseasePhoto1: 'pod borer.jpg',
            marketPrice: '₹116000 per ton'
        },
        'Moong Dal': {
            description: 'Moong dal, also known as mung bean, is a plant species in the legume family.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'moong.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Yellow Mosaic Virus',
            fertilizers1: 'rhizobium bio fertilizer',
            diseasePhoto: 'moong_dal_yellow_mosaic_virus.webp',
            disease1: 'powdery mildew',
            fertilizers2: 'diammonium phosphate(DAP)',
            diseasePhoto1: 'powdery mildew.jpg',
            marketPrice: '₹102,166.67 per ton'
        },
        'Urad Dal': {
            description: 'Urad dal, also known as black gram, is a bean grown in the Indian subcontinent.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'urad.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Powdery Mildew',
            fertilizers1: 'sulfur,potassium bicarbonate',
            diseasePhoto: 'urad_dal_powdery_mildew.jpg',
            disease1: 'urd bean leaf crinkle virus',
            fertilizers2: 'impliment integrated pest managment(prevention)',
            diseasePhoto1: 'urd bean leaf crinkle virus.webp',
            marketPrice: '₹103,054.55 per ton'
        },
        'Coffee': {
            description: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'coffee.jpg',
            fertilizers: 'NPK (12-24-12), Urea, Potash',
            disease: 'Coffee Leaf Rust',
            fertilizers1: 'NPK (20-10-10 or 18-18-18)',
            diseasePhoto: 'coffee_leaf_rust.jpg',
            disease1: 'coffee berry disease(CBD)',
            fertilizers2: 'urea(nitrogen fertilizer)',
            diseasePhoto1: 'coffee berry disease(CBD).jpg',
            marketPrice: '₹221000 per ton'
        },
        'Coconut': {
            description: 'Coconut is a mature fruit of the cocos nucifera palm.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'coconut.jpg',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'Lethal Yellowing Disease',
            fertilizers1: 'systematic insecticides',
            diseasePhoto: 'coconut_lethal_yellowing_disease.jpg',
            disease1: 'bud rot',
            fertilizers2: 'metalaxyl spray',
            diseasePhoto1: 'bud rot.jpg',
            marketPrice: '₹26500 per ton'
        },
        'Jackfruit': {
            description: 'Jackfruit is a species of tree in the fig, mulberry, and breadfruit family.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'jackfruit.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Pink Disease (Corticium salmonicolor)',
            fertilizers1: 'NPK (10-10-10 or 8-3-9)',
            diseasePhoto: 'jackfruit_anthracnose.jpg',
            disease1: 'Stem and Root Rot (Phytophthora spp.)',
            fertilizers2: 'Organic compost',
            diseasePhoto1: 'Stem and Root Rot.jpg',
            marketPrice: '₹22900.00 per ton'
        },
        'Cashew': {
            description: 'Cashew is a kidney-shaped seed sourced from the cashew tree.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'cashew.jpg',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'Cashew Nut Borer',
            fertilizers1: 'copper-based compounds or mancozeb.',
            diseasePhoto: 'cashew_nut_borer.png',
            disease1: 'Powdery Mildew:',
            fertilizers2: 'Organic fertilizers or Foilar sprays',
            diseasePhoto1: 'powdery mildew cashew.jpg',
            marketPrice: '₹120000.00 per ton'
        },
        'Beetroot': {
            description: 'Beetroot is the taproot portion of the beet plant, usually known in Canada and the USA as beets.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'beetroot.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Cercospora Leaf Spot (Cercospora beticola)',
            fertilizers1: 'NPK (10-10-10 or 5-10-10)',
            diseasePhoto: 'beetroot_cercospora_leaf_spot.jpeg',
            disease1: 'Downy Mildew (Peronospora farinosa)',
            fertilizers2: 'bone meal(phasphorus and calcium)',
            diseasePhoto1: 'Downy Mildew.jpg',
            marketPrice: '₹24000 per ton'
        },
        'Cauliflower': {
            description: 'Cauliflower is one of several vegetables in the species Brassica oleracea in the genus Brassica.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'cauliflower.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Downy Mildew',
            fertilizers1: 'copper-based compounds or mancozeb.',
            diseasePhoto: 'cauliflower_downy_mildew.jpg',
            disease1: 'Clubroot',
            fertilizers2: 'practice crop rotation with non-cruciferous crops',
            diseasePhoto1: 'clubroot.jpg',
            marketPrice: '₹25200.00 per ton'
        },
        'Cowpea': {
            description: 'Cowpea, commonly referred to as southern peas, black-eyed peas, or field peas, is a legume.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'cowpea.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Cowpea Aphid-borne Mosaic Virus',
            fertilizers1: 'Phosphorus-Based Fertilizers',
            diseasePhoto: 'cowpea_aphid_borne_mosaic_virus.jpg',
            disease1: 'Fusarium Wilt:',
            fertilizers2: 'Potassium-Based Fertilizers:',
            diseasePhoto1: 'Fusarium_wilt.jpg',
            marketPrice: '₹96000 per ton'
        },
        'Soybean': {
            description: 'Soybean, also called soya bean, is an annual leguminous plant grown for its edible bean.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'soybean.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Soybean Rust',
            fertilizers1: 'farmers can use fungicides containing active ingredients like azoxystrobin, pyraclostrobin',
            diseasePhoto: 'soybean_rust.png',
            disease1: 'Soybean Cyst Nematode (SCN)',
            fertilizers2: 'Soybean Cyst Nematode (SCN).jpg',
            marketPrice: '₹47000.00 per ton'
        },
        'Maize': {
            description: 'Maize, also known as corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'maize.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Corn Smut',
            fertilizers1: 'NPK (10-26-26), Urea, DAP',
            diseasePhoto: 'maize_corn_smut.jpeg',
            disease1: 'Maize Leaf Blight',
            fertilizers2: ' Copper fertilizers,',
            diseasePhoto1: 'maize leaf blight.jpg',
            marketPrice: '₹21,487.91 per ton'
        },
        'Groundnut': {
            description: 'Groundnut, also known as peanut, is a legume crop grown mainly for its edible seeds.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'groundnut.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Peanut Bud Necrosis',
            fertilizers1: 'NPK (10-26-26), Urea, DAP',
            diseasePhoto: 'groundnut_peanut_bud_necrosis.jpeg',
            disease1: 'Early Leaf Spot ',
            fertilizers2: 'Fungicides containing chlorothalonil or mancozeb',
            diseasePhoto1: 'Early Leaf Spot.jpg',
            marketPrice: '₹61800.00 per ton'
        },
        'Jowar': {
            description: 'Jowar, also known as sorghum, is a cereal grain that is widely cultivated in warm regions of the world.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'jowar.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Sorghum Downy Mildew',
            fertilizers1: 'NPK (10-26-26), Urea, DAP',
            diseasePhoto: 'jowar_sorghum_downy_mildew.jpg',
            disease1: 'Anthracnose',
            fertilizers2: 'Organic fertilizers or Foilar sprays',
            diseasePhoto1: 'jowar1.jpg',
            marketPrice: '₹33000.00 per ton'
        },
        'Castor': {
            description: 'Castor is a species of perennial flowering plant in the spurge family, Euphorbiaceae.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'castor.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Botrytis Gray Mold (Botrytis ricini)',
            fertilizers1: 'NPK (20-10-10)',
            diseasePhoto: 'castor_leaf_spot.jpeg',
            disease1: 'Phytophthora Blight (Phytophthora nicotianae)',
            fertilizers2: 'Well-decomposed farmyard manure (FYM), compost, or vermicompost.',
            diseasePhoto1: 'castor1.jpg',
            marketPrice: '₹53,576.25 per ton'
        },
        'Ragi': {
            description: 'Ragi, also known as finger millet, is a widely grown annual plant in the genus Eleusine.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'ragi.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Blast Disease (Pyricularia grisea)',
            fertilizers1: 'Nitrogen(N)',
            diseasePhoto: 'ragi_blast.jpg',
            disease1: 'Downy Mildew (Sclerospora graminicola)',
            fertilizers2: 'Phosphrous(P)',
            diseasePhoto1: 'ragi1.jpg',
            marketPrice: '₹30000 per ton'
        },
        'Bajra': {
            description: 'Bajra, also known as pearl millet, is a cereal grain that is widely grown in arid and semi-arid regions of Africa and Asia.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'bajra.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Downy Mildew (Green Ear Disease)',
            fertilizers1: 'Nitrogen Fertilizer (e.g., Urea, Ammonium Nitrate)',
            diseasePhoto: 'bajra_ergot.png',
            disease1: 'Ergot',
            fertilizers2: 'Phosphorus Fertilizer (e.g., Single Super Phosphate, DAP)',
            diseasePhoto1: 'bajra1.jpg',
            marketPrice: '₹21,930.80 per ton'
        },
        'Banana': {
            description: 'Banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'banana.jpg',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'Panama Disease (Fusarium Wilt)',
            fertilizers1: 'Nitrogen Fertilizer (e.g., Urea, Ammonium Sulfate)',
            diseasePhoto: 'banana_panama_disease.jpg',
            disease1: 'Black Sigatoka (Black Leaf Streak)',
            fertilizers2: 'Potassium Fertilizer (e.g., Muriate of Potash, Sulfate of Potash)',
            diseasePhoto1: 'banana1.jpg',
            marketPrice: '₹65000 per ton'
        },
        'Pulp': {
            description: 'Pulp is a soft, moist, shapeless mass of matter.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'pulp.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Myrtle Rust (Puccinia psidii)',
            fertilizers1: 'Nitrogen Fertilizer (e.g., Urea, Ammonium Nitrate) ',
            diseasePhoto: 'no_image_available.jpg',
            disease1: 'Leaf Blight (Teratosphaeria spp.)',
            fertilizers2: 'Phosphorus Fertilizer (e.g., Single Super Phosphate, Triple Super Phosphate)',
            diseasePhoto1: 'pulp1.jpg',
            marketPrice: 'Varies'
        },
        'Wheat': {
            description: 'Wheat is a cereal grain, originally from the Levant region of Western Asia, now cultivated worldwide.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'wheat.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Rust (Puccinia spp.)',
            fertilizers1: 'Nitrogen Fertilizer (e.g., Urea, Ammonium Nitrate)',
            diseasePhoto: 'wheat_rust.jpeg',
            disease1: 'Powdery Mildew (Blumeria graminis f. sp. tritici)',
            fertilizers2: 'Phosphorus Fertilizer (e.g., Diammonium Phosphate (DAP), Single Super Phosphate)',
            diseasePhoto1: 'wheat1.jpg',
            marketPrice: '₹25000 per ton'
        },
        'Mustard': {
            description: 'Mustard is a condiment made from the seeds of a mustard plant.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'mustard.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'White Rust (Albugo candida)',
            fertilizers1: 'Nitrogen Fertilizer (e.g., Urea, Ammonium Nitrate)',
            diseasePhoto: 'mustard_alternaria_blight.jpeg',
            disease1: 'Downy Mildew (Hyaloperonospora brassicae)',
            fertilizers2: 'Phosphorus Fertilizer (e.g., Diammonium Phosphate (DAP), Single Super Phosphate)',
            diseasePhoto1: 'mustard1.jpg',
            marketPrice: '₹51659.00 per ton'
        },
        'Potato': {
            description: 'Potato is a root vegetable that is part of the plant Solanum tuberosum.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'potato.webp',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'Potato Cyst Nematode (PCN): This microscopic roundworm can',
            fertilizers1: 'Nitrogen',
            diseasePhoto: 'potato_late_blight.jpeg',
            disease1: 'Blackleg',
            fertilizers2: 'Pottassium',
            diseasePhoto1: 'potato1.jpg',
            marketPrice: '₹19300.00 per ton'
        },
        'Beans': {
            description: 'Beans are seeds from the Fabaceae family, commonly eaten around the world.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'beans.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Anthracnose',
            fertilizers1: 'Nitrogen(N)',
            diseasePhoto: 'beans_common_bean_mosaic_virus.jpeg',
            disease1: 'Bean rust',
            fertilizers2: 'Phosphorus(P)',
            diseasePhoto1: 'beans1.jpg',
            marketPrice: '₹73,479.17 per ton'
        },
        'Pineapple': {
            description: 'Pineapple is a tropical plant with edible multiple fruit consisting of coalesced berries.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'pineapple.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Heart Rot (Phytophthora nicotianae)',
            fertilizers1: 'NPK (6-6-6)',
            diseasePhoto: 'pineapple_wilt.jpeg',
            disease1: 'Black Rot (Thielaviopsis paradoxa)',
            fertilizers2: 'Well-decomposed compost or manure.',
            diseasePhoto1: 'pineapple1.jpg',
            marketPrice: '₹25000.00 per ton'
        },
        'Capsicum': {
            description: 'Capsicum is a genus of flowering plants in the nightshade family Solanaceae.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'capsicum.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Bacterial Leaf Spot',
            fertilizers1: 'Calcium(ca)',
            diseasePhoto: 'capsicum_anthracnose.jpeg',
            disease1: 'Powdery Mildew',
            fertilizers2: 'Phosphorus(P)',
            diseasePhoto1: 'capsicum1.jpg',
            marketPrice: '₹33,433.10 per ton'
        },
        'Radish': {
            description: 'Radish is an edible root vegetable of the family Brassicaceae.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'radish.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Clubroot',
            fertilizers1: 'Nitrogen(N)',
            diseasePhoto: 'radish_yellows.jpeg',
            disease1: 'Downy Mildew',
            fertilizers2: 'Phosphorus(P)',
            diseasePhoto1: 'radish1.jpg',
            marketPrice: '₹21500.00 per ton'
        },
        'Watermelon': {
            description: 'Watermelon is a flowering plant species of the Cucurbitaceae family.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'watermelon.jpg',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'Fusarium Wilt:',
            fertilizers1: 'Nitrogen (N)',
            diseasePhoto: 'watermelon_mosaic_virus.jpg',
            disease1: 'Powdery Mildew',
            fertilizers2: 'Potassium (K)',
            diseasePhoto1: 'watermelon1.jpg',
            marketPrice: '₹13200.00 per ton'
        },
        'Onion': {
            description: 'Onion is a vegetable that is the most widely cultivated species of the genus Allium.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'onion.jpg',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'Pink Root',
            fertilizers1: 'Nitrogen(N)',
            diseasePhoto: 'onion_smut.jpeg',
            disease1: 'Onion Downy Mildew',
            fertilizers2: 'Phosphorus (P) and Potassium (K)',
            diseasePhoto1: 'onion1.jpg',
            marketPrice: '₹21,071.07 per ton'
        },
        'Garlic': {
            description: 'Garlic is a species in the onion genus, Allium.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'garlic.jpg',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'White Rot',
            fertilizers1: 'Nitrogen(N)',
            diseasePhoto: 'garlic_white_rot.jpeg',
            disease1: 'Purple Blotch',
            fertilizers2: 'Phosphorus(p)',
            diseasePhoto1: 'garlic1.jpg',
            marketPrice: '₹40000.00 per ton'
        },
        'Pulses': {
            description: 'Pulses are a type of leguminous crop harvested solely for the dry seed.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'pulses.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Ascochyta Blight',
            fertilizers1: 'Phosphorus(P)',
            diseasePhoto: 'pulses_ascochyta_blight.jpeg',
            disease1: 'Anthracnose',
            fertilizers2: 'Pottasium(K)',
            diseasePhoto1: 'pulses1.jpg',
            marketPrice: '₹116000.00 per kg'
        },
        'Sunflower': {
            description: 'Sunflower is an annual plant in the family Asteraceae, with a large flower head.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'sunflower.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: 'Sclerotinia Rot',
            fertilizers1: 'Phosphorus (P) and Potassium (K)',
            diseasePhoto: 'sunflower_downy_mildew.jpeg',
            disease1: 'Downy Mildew',
            fertilizers2: 'Nitrogen (N)',
            diseasePhoto1: 'sunflower1.jpg',
            marketPrice: '₹42100.00 per ton'
        },
        'Barley': {
            description: 'Barley is a member of the grass family and a major cereal grain.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'barley.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: ' Powdery Mildew',
            fertilizers1: 'Nitrogen(N)',
            diseasePhoto: 'barley_yellow_dwarf_virus.jpeg',
            disease1: 'Barley Yellow Dwarf Virus (BYDV)',
            fertilizers2: 'Phosphorus (P) and Potassium (K)',
            diseasePhoto1: 'barley1.jpg',
            marketPrice: '₹25000.00 per kg'
        },
        'Green Gram': {
            description: 'Green gram, also known as mung bean, is a plant species in the legume family.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'green.jpg',
            fertilizers: 'NPK (10-20-20), Urea, DAP',
            disease: ' Powdery Mildew',
            fertilizers1: 'Nitrogen(N)',
            diseasePhoto: 'green_gram_mungbean_yellow_mosaic_virus.jpeg',
            disease1: 'Root rot',
            fertilizers2: 'Phosphrous(P)',
            diseasePhoto1: 'green1.jpg',
            marketPrice: '₹98,390.91 per ton'
        },
        'Rubber': {
            description: 'Rubber is a hydrocarbon polymer produced from latex, a milky colloid obtained from the sap of some plants.',
            description1:'this crop can be grown between  60-80days',
            cropPhoto: 'rubber.jpg',
            fertilizers: 'NPK (16-12-12), Urea, Potash',
            disease: 'South American Leaf Blight (SALB)',
            fertilizers1: 'Pottasium(k)',
            diseasePhoto: 'rubber_phytophthora_leaf_fall.jpeg',
            disease1: 'Powdery Mildew',
            fertilizers2: 'Magnesium(Mg)',
            diseasePhoto1: 'rubber1.jpg',
            marketPrice: '₹177000 per ton'
        }
     // Add more crop details as needed
    };

    // Update the crop description, fertilizers, and disease details in the HTML
    const cropDescriptionElement = document.getElementById('crop-description');
    cropDescriptionElement.textContent = cropDetails[cropName].description;

    const cropDescription1Element = document.getElementById('crop-description1');
    cropDescription1Element.textContent = cropDetails[cropName].description1;


    const cropPhotoElement = document.getElementById('crop-photo');
    cropPhotoElement.src = 'images/' + cropDetails[cropName].cropPhoto;

    const cropFertilizersElement = document.getElementById('crop-fertilizers');
    cropFertilizersElement.textContent = 'Recommended fertilizers: ' + cropDetails[cropName].fertilizers;

    const cropDiseaseElement = document.getElementById('crop-disease');
    cropDiseaseElement.textContent = 'Common disease: ' + cropDetails[cropName].disease;

    const cropFertilizers1Element = document.getElementById('crop-fertilizers-1');
    cropFertilizers1Element.textContent = 'Recommended cure for this disease: ' + cropDetails[cropName].fertilizers1;

    const cropDiseasePhotoElement = document.getElementById('crop-disease-photo');
    cropDiseasePhotoElement.src = 'images/' + cropDetails[cropName].diseasePhoto;

   

    const cropDisease1Element = document.getElementById('crop-disease-1');
    cropDisease1Element.textContent = 'Common disease: ' + cropDetails[cropName].disease1;

    const cropFertilizers2Element = document.getElementById('crop-fertilizers-2');
    cropFertilizers2Element.textContent = 'Recommended cure for this disease:' + cropDetails[cropName].fertilizers2;



    const cropDiseasePhotoElement1 = document.getElementById('crop-disease-photo-1');
    cropDiseasePhotoElement1.src = 'images/' + cropDetails[cropName].diseasePhoto1;

    const cropDiseasevideoElement = document.getElementById('crop-disease-video');
    cropDiseasevideoElement.src =  cropDetails[cropName].diseasevideo;

    const cropMarketPriceElement = document.getElementById('crop-market-price');
    cropMarketPriceElement.textContent = 'Current market price: ' + cropDetails[cropName].marketPrice;

    

    // Redirect to crop details page when crop image is clicked
    const cropImageElement = document.getElementById('crop-image');
    cropImageElement.addEventListener('click', function() {
        // Redirect to another page when crop photo is clicked
        window.location.href = `crop-details.html?crop=${encodeURIComponent(cropName)}`;
    });
});
