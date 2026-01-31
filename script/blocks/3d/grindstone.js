IDRegistry.genBlockID("grindstone1");
Block.createBlock("grindstone1", [{ name: "Grindstone", texture: [["28", 0]], inCreative: false }]);

ToolAPI.registerBlockMaterial(BlockID.grindstone1, "stone");

function createGrindRender(id, idMaterial, dataMaterial) {
	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(id, 0, render);
	var model = BlockRenderer.createModel();

	model.addBox(1 / 16, 0, 6 / 16, 2 / 16, 5 / 16, 7 / 16, "24", 0);
	model.addBox(1 / 16, 5 / 16, 5 / 16, 2 / 16, 6 / 16, 8 / 16, "24", 0);
	model.addBox(1 / 16, 6 / 16, 5 / 16, 2 / 16, 7 / 16, 6 / 16, "24", 0);
	model.addBox(1 / 16, 6 / 16, 7 / 16, 2 / 16, 7 / 16, 8 / 16, "24", 0);
	model.addBox(8 / 16, 0, 6 / 16, 9 / 16, 5 / 16, 7 / 16, "24", 0);
	model.addBox(8 / 16, 5 / 16, 5 / 16, 9 / 16, 6 / 16, 8 / 16, "24", 0);
	model.addBox(8 / 16, 6 / 16, 5 / 16, 9 / 16, 7 / 16, 6 / 16, "24", 0);
	model.addBox(8 / 16, 6 / 16, 7 / 16, 9 / 16, 7 / 16, 8 / 16, "24", 0);
	model.addBox(0, 6 / 16, 6 / 16, 10 / 16, 7 / 16, 7 / 16, "13", 0);
	model.addBox(10 / 16, 4 / 16, 6 / 16, 11 / 16, 7 / 16, 7 / 16, "13", 0);
	model.addBox(11 / 16, 4 / 16, 6 / 16, 14 / 16, 5 / 16, 7 / 16, "13", 0);
	model.addBox(3 / 16, 2 / 16, 4 / 16, 7 / 16, 11 / 16, 9 / 16, [
		["28", 0],
		["28", 0],
		["28", 0],
		["28", 0],
		["27", 0],
		["27", 0],
	]);
	model.addBox(3 / 16, 3 / 16, 3 / 16, 7 / 16, 10 / 16, 10 / 16, [
		["28", 0],
		["28", 0],
		["28", 0],
		["28", 0],
		["27", 0],
		["27", 0],
	]);
	model.addBox(3 / 16, 4 / 16, 2 / 16, 7 / 16, 9 / 16, 11 / 16, [
		["28", 0],
		["28", 0],
		["28", 0],
		["28", 0],
		["27", 0],
		["27", 0],
	]);

	render.addEntry(model);
}

createGrindRender(BlockID.grindstone1, 49, 0);

Item.registerUseFunction(ItemID.grindstone1, function (coords, item, block) {
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.grindstone1);
	Player.decreaseCarriedItem(1);
});

Block.registerDropFunction("grindstone1", function (coords, id, data, diggingLevel, toolLevel) {
	return [[ItemID.grindstone1, 1, data]];
});
