var structure_data={
  "lumina": {
    "Porcelain": {
      "id": "0101",
      "info": "1 Bedroom + Den | Living Space 531 SF | Balcony 92 SF",
      "structure": "http://res.cloudinary.com/wbsxby/image/upload/v1520536573/Savvy%20Home/lumina/porcelain/structure.png",
      "position": "http://res.cloudinary.com/wbsxby/image/upload/v1520536573/Savvy%20Home/lumina/porcelain/position.png"
    },
    "Daisy": {
      "id": "0102",
      "info": "1 Bedroom + Flex | Living Space 596 SF | Balcony 107 SF",
      "structure": "http://res.cloudinary.com/wbsxby/image/upload/v1520536498/Savvy%20Home/lumina/daisy/structure.png",
      "position": "http://res.cloudinary.com/wbsxby/image/upload/v1520536498/Savvy%20Home/lumina/daisy/position.png"
    },
    "Pearl": {
      "id": "0103",
      "info": "1 Bedroom + Den | Living Space 598 SF | Balcony 98 SF",
      "structure": "http://res.cloudinary.com/wbsxby/image/upload/v1520536539/Savvy%20Home/lumina/pearl/structure.png",
      "position": "http://res.cloudinary.com/wbsxby/image/upload/v1520536539/Savvy%20Home/lumina/pearl/position.png"
    },
    "Swan": {
      "id": "0104",
      "info": "1 Bedroom + Flex | Living Space 603 SF | Balcony 92 SF",
      "structure": "http://res.cloudinary.com/wbsxby/image/upload/v1520536606/Savvy%20Home/lumina/swan/structure.png",
      "position": "http://res.cloudinary.com/wbsxby/image/upload/v1520536606/Savvy%20Home/lumina/swan/position.png"
    }
  },
  "era2": {
    "1A+D": {
      "id": "0201",
      "info": "1 BEDROOM + DEN, 655 SQ.FT. TOWER C",
      "structure": "http://res.cloudinary.com/wbsxby/image/upload/v1520536698/Savvy%20Home/era2/1A%2BD/structure.png",
      "position": "http://res.cloudinary.com/wbsxby/image/upload/v1520536697/Savvy%20Home/era2/1A%2BD/position.png",
      "balcony": "http://res.cloudinary.com/wbsxby/image/upload/v1520536697/Savvy%20Home/era2/1A%2BD/balcony.png"
    },
    "1B+D": {
      "id": "0202",
      "info": "1 BEDROOM + DEN, 665 SQ.FT. TOWER C",
      "structure": "http://res.cloudinary.com/wbsxby/image/upload/v1520536725/Savvy%20Home/era2/1B%2BD/structure.png",
      "position": "http://res.cloudinary.com/wbsxby/image/upload/v1520536725/Savvy%20Home/era2/1B%2BD/position.png",
      "balcony": "http://res.cloudinary.com/wbsxby/image/upload/v1520536725/Savvy%20Home/era2/1B%2BD/balcony.png"
    },
    "1C+D": {
      "id": "0203",
      "info": "1 BEDROOM + DEN, 640 SQ.FT. TOWER C (655 SQ.FT. AT 2ND FLOOR ONLY)",
      "structure": "http://res.cloudinary.com/wbsxby/image/upload/v1520536749/Savvy%20Home/era2/1C%2BD/structure.png",
      "position": "http://res.cloudinary.com/wbsxby/image/upload/v1520536749/Savvy%20Home/era2/1C%2BD/position.png",
      "balcony": "http://res.cloudinary.com/wbsxby/image/upload/v1520536749/Savvy%20Home/era2/1C%2BD/balcony.png"
    },
    "2A": {
      "id": "0204",
      "info": "2 BEDROOM, 770 SQ.FT. TOWER C",
      "structure": "http://res.cloudinary.com/wbsxby/image/upload/v1520536766/Savvy%20Home/era2/2A/structure.png",
      "position": "http://res.cloudinary.com/wbsxby/image/upload/v1520536766/Savvy%20Home/era2/2A/position.png",
      "balcony": "http://res.cloudinary.com/wbsxby/image/upload/v1520536766/Savvy%20Home/era2/2A/balcony.png"
    }
  }
}

function getStructure() {
  return structure_data;
}

module.exports = {
  getStructure: getStructure
}