IDRegistry.genBlockID("wardrobe");
Block.createBlockWithRotation("wardrobe", [{ name: "Wardrobe", texture: [["24", 0]], inCreative: false }]);
ToolAPI.registerBlockMaterial(BlockID.wardrobe, "wood");
function wardrobeRender(data) {
	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(BlockID.wardrobe, data, render);
	var model = BlockRenderer.createModel();
	switch (data) {
		case 0:
			model.addBox(0 / 16, 0 / 16, 0 / 16, 16 / 16, 1 / 16, 16 / 16, "24", 0);
			model.addBox(0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, "24", 0);
			model.addBox(1 / 16, 7 / 16, 1 / 16, 15 / 16, 9 / 16, 15 / 16, "24", 0);
			model.addBox(0 / 16, 1 / 16, 0 / 16, 1 / 16, 15 / 16, 16 / 16, "24", 0);
			model.addBox(1 / 16, 1 / 16, 0 / 16, 16 / 16, 15 / 16, 1 / 16, "24", 0);
			model.addBox(1 / 16, 1 / 16, 15 / 16, 16 / 16, 15 / 16, 16 / 16, "24", 0);
			break;
		case 1:
			model.addBox(0 / 16, 0 / 16, 0 / 16, 16 / 16, 1 / 16, 16 / 16, "24", 0);
			model.addBox(0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, "24", 0);
			model.addBox(1 / 16, 7 / 16, 1 / 16, 15 / 16, 9 / 16, 15 / 16, "24", 0);
			model.addBox(0 / 16, 1 / 16, 0 / 16, 16 / 16, 15 / 16, 1 / 16, "24", 0);
			model.addBox(0 / 16, 1 / 16, 1 / 16, 1 / 16, 15 / 16, 16 / 16, "24", 0);
			model.addBox(15 / 16, 1 / 16, 1 / 16, 16 / 16, 15 / 16, 16 / 16, "24", 0);
			break;
		case 2:
			model.addBox(0 / 16, 0 / 16, 0 / 16, 16 / 16, 1 / 16, 16 / 16, "24", 0);
			model.addBox(0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, "24", 0);
			model.addBox(1 / 16, 7 / 16, 1 / 16, 15 / 16, 9 / 16, 15 / 16, "24", 0);
			model.addBox(15 / 16, 1 / 16, 0 / 16, 16 / 16, 15 / 16, 16 / 16, "24", 0);
			model.addBox(0 / 16, 1 / 16, 0 / 16, 15 / 16, 15 / 16, 1 / 16, "24", 0);
			model.addBox(0 / 16, 1 / 16, 15 / 16, 15 / 16, 15 / 16, 16 / 16, "24", 0);
			break;
		case 3:
			model.addBox(0 / 16, 0 / 16, 0 / 16, 16 / 16, 1 / 16, 16 / 16, "24", 0);
			model.addBox(0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, "24", 0);
			model.addBox(1 / 16, 7 / 16, 1 / 16, 15 / 16, 9 / 16, 15 / 16, "24", 0);
			model.addBox(0 / 16, 1 / 16, 15 / 16, 16 / 16, 15 / 16, 16 / 16, "24", 0);
			model.addBox(0 / 16, 1 / 16, 0 / 16, 1 / 16, 15 / 16, 15 / 16, "24", 0);
			model.addBox(15 / 16, 1 / 16, 0 / 16, 16 / 16, 15 / 16, 15 / 16, "24", 0);
			break;
	}
	render.addEntry(model);
}
for (var i = 0; i < 4; i++) {
	wardrobeRender(i);
}
Item.registerUseFunction(ItemID.wardrobe, function (coords, item, block) {
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.wardrobe);
	Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("wardrobe", function (coords, id, data, diggingLevel, toolLevel) {
	return [[ItemID.wardrobe, 1, data]];
});
