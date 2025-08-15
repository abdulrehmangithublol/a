// radioactive_slime.js

// Add new element: Radioactive Slime
elements.radioactive_slime = {
    color: "#00ff00",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 2000,
    state: "liquid",
    density: 1200,
    glow: true,
    tick: function(pixel) {
        // Slowly vanish over time
        if (Math.random() < 0.001) {
            deletePixel(pixel.x, pixel.y);
        }
    }
};

// Create reaction: Water + Radioactive Slime → More Slime
if (!elements.water.reactions) {
    elements.water.reactions = {};
}
elements.water.reactions.radioactive_slime = { elem1: "radioactive_slime", elem2: "radioactive_slime" };

// Tool to spread radioactive slime instantly
elements.slime_spreader = {
    color: "#55ff55",
    tool: function(pixel) {
        pixel.element = "radioactive_slime";
    },
    category: "tools",
};

// After mods are loaded
runAfterLoad(function() {
    console.log("Radioactive Slime mod loaded!");
});
