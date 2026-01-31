IDRegistry.genBlockID("table");
Block.createBlock("table", [{ name: "table", texture: [["24", 0]], inCreative: false }]);
ToolAPI.registerBlockMaterial(BlockID.table, "wood");
function createTableRender(id, idMaterial, dataMaterial) {
	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(id, 0, render);
	var model = BlockRenderer.createModel();
	model.addBox(1 / 16, 0 / 16, 1 / 16, 2 / 16, 15 / 16, 2 / 16, "24", 0);
	model.addBox(14 / 16, 0 / 16, 14 / 16, 15 / 16, 15 / 16, 15 / 16, "24", 0);
	model.addBox(1 / 16, 0 / 16, 14 / 16, 2 / 16, 15 / 16, 15 / 16, "24", 0);
	model.addBox(14 / 16, 0 / 16, 1 / 16, 15 / 16, 15 / 16, 2 / 16, "24", 0);
	model.addBox(0 / 16, 15 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, "24", 0);
	render.addEntry(model);
}
createTableRender(BlockID.table, 49, 0);
Item.registerUseFunction(ItemID.table, function (coords, item, block) {
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.table);
	Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("table", function (coords, id, data, diggingLevel, toolLevel) {
	return [[ItemID.table, 1, data]];
});
