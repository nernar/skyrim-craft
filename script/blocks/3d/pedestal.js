IDRegistry.genBlockID("pedestal");
Block.createBlockWithRotation("pedestal", [{ name: "Pedestal", texture: [["24", 0]], inCreative: false }]);
ToolAPI.registerBlockMaterial(BlockID.pedestal, "wood");
function pedestalRender(data) {
	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(BlockID.pedestal, data, render);
	var model = BlockRenderer.createModel();
	switch (data) {
		case 0:
			model.addBox(0 / 16, 0 / 16, 0 / 16, 16 / 16, 1 / 16, 16 / 16, "24", 0);
			model.addBox(0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, "24", 0);
			model.addBox(0 / 16, 1 / 16, 0 / 16, 15 / 16, 15 / 16, 16 / 16, [
				["24", 0],
				["24", 0],
				["24", 0],
				["24", 0],
				["24", 0],
				["45", 0],
			]);
			break;
		case 1:
			model.addBox(0 / 16, 0 / 16, 0 / 16, 16 / 16, 1 / 16, 16 / 16, "24", 0);
			model.addBox(0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, "24", 0);
			model.addBox(0 / 16, 1 / 16, 0 / 16, 16 / 16, 15 / 16, 15 / 16, [
				["24", 0],
				["24", 0],
				["24", 0],
				["45", 0],
				["24", 0],
				["24", 0],
			]);
			break;
		case 2:
			model.addBox(0 / 16, 0 / 16, 0 / 16, 16 / 16, 1 / 16, 16 / 16, "24", 0);
			model.addBox(0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, "24", 0);
			model.addBox(1 / 16, 1 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, [
				["24", 0],
				["24", 0],
				["24", 0],
				["24", 0],
				["45", 0],
				["24", 0],
			]);
			break;
		case 3:
			model.addBox(0 / 16, 0 / 16, 0 / 16, 16 / 16, 1 / 16, 16 / 16, "24", 0);
			model.addBox(0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, "24", 0);
			model.addBox(0 / 16, 1 / 16, 1 / 16, 16 / 16, 16 / 16, 16 / 16, [
				["24", 0],
				["24", 0],
				["45", 0],
				["24", 0],
				["24", 0],
				["24", 0],
			]);
			break;
	}
	render.addEntry(model);
}
for (var i = 0; i < 4; i++) {
	pedestalRender(i);
}
Item.registerUseFunction(ItemID.pedestal, function (coords, item, block) {
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.pedestal);
	Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("pedestal", function (coords, id, data, diggingLevel, toolLevel) {
	return [[ItemID.pedestal, 1, data]];
});
