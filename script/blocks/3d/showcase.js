IDRegistry.genBlockID("showcase");
Block.createBlockWithRotation("showcase", [{ name: "Showcase", texture: [["24", 0]], inCreative: false }]);
ToolAPI.registerBlockMaterial(BlockID.showcase, "wood");
function showcaseRender(data) {
	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(BlockID.showcase, data, render);
	var model = BlockRenderer.createModel();
	switch (data) {
		case 0:
			model.addBox(2 / 16, 0 / 16, 4 / 16, 14 / 16, 1 / 16, 12 / 16, "24", 0);
			model.addBox(3 / 16, 1 / 16, 5 / 16, 13 / 16, 2 / 16, 11 / 16, "carpet", 2);
			model.addBox(2 / 16, 1 / 16, 4 / 16, 14 / 16, 6 / 16, 5 / 16, "24", 0);
			model.addBox(2 / 16, 1 / 16, 11 / 16, 14 / 16, 6 / 16, 12 / 16, "24", 0);
			model.addBox(2 / 16, 1 / 16, 4 / 16, 3 / 16, 6 / 16, 11 / 16, "24", 0);
			model.addBox(13 / 16, 1 / 16, 4 / 16, 14 / 16, 6 / 16, 11 / 16, "24", 0);
			model.addBox(3 / 16, 5 / 16, 5 / 16, 13 / 16, 6 / 16, 11 / 16, "48", 0);
			break;
		case 1:
			model.addBox(4 / 16, 0 / 16, 2 / 16, 12 / 16, 1 / 16, 14 / 16, "24", 0);
			model.addBox(5 / 16, 1 / 16, 3 / 16, 11 / 16, 2 / 16, 13 / 16, "carpet", 2);
			model.addBox(4 / 16, 1 / 16, 2 / 16, 5 / 16, 6 / 16, 14 / 16, "24", 0);
			model.addBox(11 / 16, 1 / 16, 2 / 16, 12 / 16, 6 / 16, 14 / 16, "24", 0);
			model.addBox(4 / 16, 1 / 16, 2 / 16, 11 / 16, 6 / 16, 3 / 16, "24", 0);
			model.addBox(4 / 16, 1 / 16, 13 / 16, 11 / 16, 6 / 16, 14 / 16, "24", 0);
			model.addBox(5 / 16, 5 / 16, 3 / 16, 11 / 16, 6 / 16, 13 / 16, "48", 1);
			break;
		case 2:
			model.addBox(2 / 16, 0 / 16, 4 / 16, 14 / 16, 1 / 16, 12 / 16, "24", 0);
			model.addBox(3 / 16, 1 / 16, 5 / 16, 13 / 16, 2 / 16, 11 / 16, "carpet", 2);
			model.addBox(2 / 16, 1 / 16, 4 / 16, 14 / 16, 6 / 16, 5 / 16, "24", 0);
			model.addBox(2 / 16, 1 / 16, 11 / 16, 14 / 16, 6 / 16, 12 / 16, "24", 0);
			model.addBox(2 / 16, 1 / 16, 4 / 16, 3 / 16, 6 / 16, 11 / 16, "24", 0);
			model.addBox(13 / 16, 1 / 16, 4 / 16, 14 / 16, 6 / 16, 11 / 16, "24", 0);
			model.addBox(3 / 16, 5 / 16, 5 / 16, 13 / 16, 6 / 16, 11 / 16, "48", 2);
			break;
		case 3:
			model.addBox(4 / 16, 0 / 16, 2 / 16, 12 / 16, 1 / 16, 14 / 16, "24", 0);
			model.addBox(5 / 16, 1 / 16, 3 / 16, 11 / 16, 2 / 16, 13 / 16, "carpet", 2);
			model.addBox(4 / 16, 1 / 16, 2 / 16, 5 / 16, 6 / 16, 14 / 16, "24", 0);
			model.addBox(11 / 16, 1 / 16, 2 / 16, 12 / 16, 6 / 16, 14 / 16, "24", 0);
			model.addBox(4 / 16, 1 / 16, 2 / 16, 11 / 16, 6 / 16, 3 / 16, "24", 0);
			model.addBox(4 / 16, 1 / 16, 13 / 16, 11 / 16, 6 / 16, 14 / 16, "24", 0);
			model.addBox(5 / 16, 5 / 16, 3 / 16, 11 / 16, 6 / 16, 13 / 16, "48", 3);
			break;
	}
	render.addEntry(model);
}
for (var i = 0; i < 4; i++) {
	showcaseRender(i);
}
Block.setShape(BlockID.showcase, 0.2, 0, 0.2, 0.8, 0.5, 0.8);
Item.registerUseFunction(ItemID.showcase, function (coords, item, block) {
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.showcase);
	Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("showcase", function (coords, id, data, diggingLevel, toolLevel) {
	return [[ItemID.showcase, 1, data]];
});
