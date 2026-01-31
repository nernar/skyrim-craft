IDRegistry.genBlockID("strangeStone");
Block.createBlock("strangeStone", [{ name: "Strange stone", texture: [["3", 0]], inCreative: false }]);
ToolAPI.registerBlockMaterial(BlockID.strangeStone, "stone");
function createstrangeStoneRender(id, idMaterial, dataMaterial) {
	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(id, 0, render);
	var model = BlockRenderer.createModel();
	model.addBox(7 / 16, 4 / 16, 6 / 16, 9 / 16, 6 / 16, 10 / 16, "36", 0);
	model.addBox(5 / 16, 0, 4 / 16, 11 / 16, 3 / 16, 12 / 16, [
		["34", 0],
		["35", 0],
		["33", 0],
		["33", 0],
		["32", 0],
		["32", 0],
	]);
	render.addEntry(model);
}
createstrangeStoneRender(BlockID.strangeStone, 49, 0);
Item.registerUseFunction(ItemID.strangeStone, function (coords, item, block) {
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.strangeStone);
	Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("strangeStone", function (coords, id, data, diggingLevel, toolLevel) {
	return [[ItemID.strangeStone, 1, data]];
});
