IDRegistry.genBlockID("barrel1");
Block.createBlock("barrel1", [{ name: "barrel", texture: [["1", 0]], inCreative: false }]);

ToolAPI.registerBlockMaterial(BlockID.barrel1, "wood");

function createBarrelRender(id, idMaterial, dataMaterial) {
	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(id, 0, render);
	var model = BlockRenderer.createModel();

	model.addBox(2 / 16, 2 / 16, 2 / 16, 14 / 16, 14 / 16, 14 / 16, [
		["2", 0],
		["2", 0],
		["1", 0],
		["1", 0],
		["1", 0],
		["1", 0],
	]);
	model.addBox(1 / 16, 2 / 16, 3 / 16, 15 / 16, 14 / 16, 13 / 16, [
		["2", 0],
		["2", 0],
		["1", 0],
		["1", 0],
		["1", 0],
		["1", 0],
	]);
	model.addBox(3 / 16, 2 / 16, 1 / 16, 13 / 16, 14 / 16, 15 / 16, [
		["2", 0],
		["2", 0],
		["1", 0],
		["1", 0],
		["1", 0],
		["1", 0],
	]);
	model.addBox(2 / 16, 0, 4 / 16, 14 / 16, 1, 12 / 16, [
		["2", 0],
		["2", 0],
		["1", 0],
		["1", 0],
		["1", 0],
		["1", 0],
	]);
	model.addBox(4 / 16, 0, 2 / 16, 12 / 16, 1, 14 / 16, [
		["2", 0],
		["2", 0],
		["1", 0],
		["1", 0],
		["1", 0],
		["1", 0],
	]);
	model.addBox(3 / 16, 0, 3 / 16, 13 / 16, 1, 13 / 16, [
		["2", 0],
		["2", 0],
		["1", 0],
		["1", 0],
		["1", 0],
		["1", 0],
	]);

	render.addEntry(model);
}

createBarrelRender(BlockID.barrel1, 49, 0);

Item.registerUseFunction(ItemID.barrel1, function (coords, item, block) {
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.barrel1);
	Player.decreaseCarriedItem(1);
});

Block.registerDropFunction("barrel1", function (coords, id, data, diggingLevel, toolLevel) {
	return [[ItemID.barrel1, 1, data]];
});
