// Parallel arrays for sand type
let sand = [
    "fiji-pink",
    "special-grade",
    "bahamas-oolite",
    "indo-black",
    "caribbean-reef",
    "hawaiian-black",
    "bimini-pink",
    "natural-reef",
    "crushed-coral"
]
let volumePerPound = [
    19.2,
    20.4,
    18.0,
    19.2,
    19.2,
    21.6,
    19.2,
    20.4,
    24.0
]

function calcVolume() {

    // Collect the form values once submitted
    let width = document.getElementById("width").value;
    let length = document.getElementById("length").value;
    let depth = document.getElementById("height").value;
    let sandType = document.getElementById("sand").value;

    sandVolume = volumePerPound[getIndex(sandType)];
    // Get the volume of the entered values
    let volume = width * length * depth;

    let totalPounds = volume / sandVolume;
    totalPounds = totalPounds.toFixed(2);
    document.getElementById("result").innerHTML = "Estimated sand bed: <strong>" + totalPounds + "lbs<strong> of sand.";
}

function getIndex(type) {
    for (let i = 0; i < sand.length; i++) {
        if (sand[i] === type) {
            return i;
        }
    }
    // In case the values don't match send the first index
    return 0;
}
