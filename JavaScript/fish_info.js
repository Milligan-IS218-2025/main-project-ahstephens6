// Defining global variables for the fish_info.js file
let reefSafe = ["Clownfish", "Gobies", "Blennys", "Cardinals", "Royal Gramma", "Bristle-tooth Tang"]
let safeImg = [
    "https://upload.wikimedia.org/wikipedia/commons/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg",
    "https://www.liveaquaria.com/images/articles/a-336-Shrimpgoby-Stonogobiops-xanthorhinica-SWM.jpg",
    "https://www.reef2reef.com/attachments/ctenochaetus-flavicauda-jpeg.3073756/"
]
let safeImgAlt = [
    "Two clownfish in an anemone",
    "Shrimp Goby",
    "White Tail Tang"
]
let reefCaution = ["Dwarf Angelfish (coral)", "Wrasses (inverts)", "Trigger fish (coral + inverts)", "Hawkfish (inverts)"]
let cautionImg = [
    "https://www.liveaquaria.com/images/categories/large/lg_66284_Flame_Angelfish.jpg",
    "https://reefchasers.com/cdn/shop/articles/blue-throat-triggerfish-635879.jpg?v=1682979821",
    "https://absolutelyfishnaturals.com/cdn/shop/products/DSC_4339.JPG?v=1557171121"
]
let cautionImgAlt = [
    "Flame Angelfish (dwarf angelfish)",
    "Blue Jaw Trigger fish",
    "Longnose Hawkfish"
]
let notReefSafe = ["Lion fish", "Puffer fish", "Filefish", "Angelfish"]
let notImg = [
    "https://www.reef2reef.com/attachments/0bc2e4c9-74a1-41c7-a231-465996bbbcd6-jpeg.2889978/",
    "https://www.keywestaquarium.com/wp-content/uploads/2024/12/white-spotted-puffer.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/9f/Queen_Angelfish.jpg"
]
let notImgAlt = [
    "Dwarf Lionfish",
    "Dogface Pufferfish",
    "Queen Angelfish"
]

// Function for making the reef safe button display html
function makeReefSafe() {
    let html = "<h3>Reef Safe Fish</h3><ul>";
    for (let i = 0; i < reefSafe.length; i++) {
        html += "<li>" + reefSafe[i] + "</li>";
    }
    html += "</ul>";
    document.getElementById("content").innerHTML = html;

    // Add images of fish
    html = ""
    for (let i = 0; i < safeImg.length; i++) {
        html += "<img src=\"" + safeImg[i] + "\" alt=\"" + safeImgAlt[i] + "\">";
    }
    document.getElementById("images").innerHTML = html
}

// Function for making the reef caution button display html
function makeReefCaution() {
    let html = "<h3>Reef Caution Fish</h3><ul>";
    for (let i = 0; i < reefCaution.length; i++) {
        html += "<li>" + reefCaution[i] + "</li>";
    }
    html += "</ul>";
    document.getElementById("content").innerHTML = html;

    // Add images of fish
    html = ""
    for (let i = 0; i < cautionImg.length; i++) {
        html += "<img src=\"" + cautionImg[i] + "\" alt=\"" + cautionImgAlt[i] + "\">";
    }
    document.getElementById("images").innerHTML = html
}

// Function for making the not reef safe button display html
function makeNotReefSafe() {
    let html = "<h3>Not Reef Safe Fish</h3><ul>";
    for (let i = 0; i < notReefSafe.length; i++) {
        html += "<li>" + notReefSafe[i] + "</li>";
    }
    document.getElementById("content").innerHTML = html;

    // Add images of fish
    html = ""
    for (let i = 0; i < notImg.length; i++) {
        html += "<img src=\"" + notImg[i] + "\" alt=\"" + notImgAlt[i] + "\">";
    }
    document.getElementById("images").innerHTML = html
}