// radslime_mod.js

// Add new element: Radioactive Slime
elements.radslime = {
    name: "Radioactive Slime", // Pretty display name
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
elements.water.reactions.radslime = { elem1: "radslime", elem2: "radslime" };

// Tool to spread radioactive slime instantly
elements.slimespreader = {
    name: "Slime Spreader",
    color: "#55ff55",
    tool: function(pixel) {
        pixel.element = "radslime";
    },
    category: "tools",
};

// After mods are loaded
runAfterLoad(function() {
    console.log("Radioactive Slime mod loaded!");
});
