IDRegistry.genBlockID("chair");
Block.createBlockWithRotation("chair", [{ name: "Chair", texture: [["24", 0]], inCreative: false }]);

ToolAPI.registerBlockMaterial(BlockID.chair, "wood");

function chairRender(data) {
	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(BlockID.chair, data, render);
	var model = BlockRenderer.createModel();
	switch (data) {
		case 0:
			model.addBox(3 / 16, 0 / 16, 3 / 16, 4 / 16, 23 / 16, 4 / 16, "24", 0);
			model.addBox(3 / 16, 0 / 16, 12 / 16, 4 / 16, 23 / 16, 13 / 16, "24", 0);
			model.addBox(12 / 16, 0 / 16, 12 / 16, 13 / 16, 7 / 16, 13 / 16, "24", 0);
			model.addBox(12 / 16, 0 / 16, 3 / 16, 13 / 16, 7 / 16, 4 / 16, "24", 0);

			model.addBox(3 / 16, 7 / 16, 3 / 16, 13 / 16, 8 / 16, 13 / 16, "24", 0);

			model.addBox(3 / 16, 23 / 16, 3 / 16, 4 / 16, 24 / 16, 13 / 16, "24", 0);

			model.addBox(3 / 16, 8 / 16, 6 / 16, 4 / 16, 23 / 16, 7 / 16, "24", 0);
			model.addBox(3 / 16, 8 / 16, 9 / 16, 4 / 16, 23 / 16, 10 / 16, "24", 0);
			break;
		case 1:
			model.addBox(3 / 16, 0 / 16, 3 / 16, 4 / 16, 23 / 16, 4 / 16, "24", 0);
			model.addBox(3 / 16, 0 / 16, 12 / 16, 4 / 16, 7 / 16, 13 / 16, "24", 0);
			model.addBox(12 / 16, 0 / 16, 12 / 16, 13 / 16, 7 / 16, 13 / 16, "24", 0);
			model.addBox(12 / 16, 0 / 16, 3 / 16, 13 / 16, 23 / 16, 4 / 16, "24", 0);

			model.addBox(3 / 16, 7 / 16, 3 / 16, 13 / 16, 8 / 16, 13 / 16, "24", 0);

			model.addBox(3 / 16, 23 / 16, 3 / 16, 13 / 16, 24 / 16, 4 / 16, "24", 0);

			model.addBox(6 / 16, 8 / 16, 3 / 16, 7 / 16, 23 / 16, 4 / 16, "24", 0);
			model.addBox(9 / 16, 8 / 16, 3 / 16, 10 / 16, 23 / 16, 4 / 16, "24", 0);
			break;
		case 2:
			model.addBox(3 / 16, 0 / 16, 3 / 16, 4 / 16, 7 / 16, 4 / 16, "24", 0);
			model.addBox(3 / 16, 0 / 16, 12 / 16, 4 / 16, 7 / 16, 13 / 16, "24", 0);
			model.addBox(12 / 16, 0 / 16, 12 / 16, 13 / 16, 23 / 16, 13 / 16, "24", 0);
			model.addBox(12 / 16, 0 / 16, 3 / 16, 13 / 16, 23 / 16, 4 / 16, "24", 0);

			model.addBox(3 / 16, 7 / 16, 3 / 16, 13 / 16, 8 / 16, 13 / 16, "24", 0);

			model.addBox(12 / 16, 23 / 16, 3 / 16, 13 / 16, 24 / 16, 13 / 16, "24", 0);

			model.addBox(12 / 16, 8 / 16, 6 / 16, 13 / 16, 23 / 16, 7 / 16, "24", 0);
			model.addBox(12 / 16, 8 / 16, 9 / 16, 13 / 16, 23 / 16, 10 / 16, "24", 0);
			break;
		case 3:
			model.addBox(3 / 16, 0 / 16, 3 / 16, 4 / 16, 7 / 16, 4 / 16, "24", 0);
			model.addBox(3 / 16, 0 / 16, 12 / 16, 4 / 16, 23 / 16, 13 / 16, "24", 0);
			model.addBox(12 / 16, 0 / 16, 12 / 16, 13 / 16, 23 / 16, 13 / 16, "24", 0);
			model.addBox(12 / 16, 0 / 16, 3 / 16, 13 / 16, 7 / 16, 4 / 16, "24", 0);

			model.addBox(3 / 16, 7 / 16, 3 / 16, 13 / 16, 8 / 16, 13 / 16, "24", 0);

			model.addBox(3 / 16, 23 / 16, 12 / 16, 13 / 16, 24 / 16, 13 / 16, "24", 0);

			model.addBox(6 / 16, 8 / 16, 12 / 16, 7 / 16, 23 / 16, 13 / 16, "24", 0);
			model.addBox(9 / 16, 8 / 16, 12 / 16, 10 / 16, 23 / 16, 13 / 16, "24", 0);
			break;
	}
	render.addEntry(model);
}

for (var i = 0; i < 4; i++) {
	chairRender(i);
}

Item.registerUseFunction(ItemID.chair, function (coords, item, block) {
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.chair);
	Player.decreaseCarriedItem(1);
});

Block.registerDropFunction("chair", function (coords, id, data, diggingLevel, toolLevel) {
	return [[ItemID.chair, 1, data]];
});
