/*да я дебил, но я не умею по другому делать анимацию*/
IDRegistry.genBlockID("fire");
Block.createBlock("fire", [{ name: "fire", texture: [["47", 0]], inCreative: false }]);
IDRegistry.genBlockID("campfire");
Block.createBlock("campfire", [{ name: "Campfire", texture: [["46", 0]], inCreative: false }]);
ToolAPI.registerBlockMaterial(BlockID.campfire, "wood");
function createCampfireRender(id, idMaterial, dataMaterial) {
	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(id, 0, render);
	var model = BlockRenderer.createModel();
	model.addBox(3 / 16, 0 / 16, 2 / 16, 5 / 16, 2 / 16, 14 / 16, "46", 0);
	model.addBox(11 / 16, 0 / 16, 2 / 16, 13 / 16, 2 / 16, 14 / 16, "46", 0);
	model.addBox(2 / 16, 2 / 16, 3 / 16, 14 / 16, 4 / 16, 5 / 16, "46", 0);
	model.addBox(2 / 16, 2 / 16, 11 / 16, 14 / 16, 4 / 16, 13 / 16, "46", 0);
	model.addBox(4 / 16, 0 / 16, 4 / 16, 12 / 16, 1 / 16, 12 / 16, "gray", 0);
	model.addBox(0, 0, 8 / 16, 1, 1, 8 / 16, BlockID.fire, 0);
	model.addBox(8 / 16, 0, 1, 8 / 16, 1, 0, BlockID.fire, 0);
	render.addEntry(model);
}
createCampfireRender(BlockID.campfire, 49, 0);
Block.setShape(BlockID.campfire, 0.1, 0, 0.1, 0.9, 0.3, 0.9);
Item.registerUseFunction(ItemID.campfire, function (coords, item, block) {
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.campfire);
	Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("campfire", function (coords, id, data, diggingLevel, toolLevel) {
	return [[ItemID.campfire, 1, data]];
});
