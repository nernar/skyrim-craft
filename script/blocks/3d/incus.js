IDRegistry.genBlockID("incus");
Block.createBlock("incus", [{ name: "incus", texture: [["13", 0]], inCreative: false }], BLOCK_TYPE_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.incus, "stone");

function createIncusRender(id, idMaterial, dataMaterial) {
	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(id, 0, render);
	var model = BlockRenderer.createModel();

	model.addBox(5 / 16, 0, 4 / 16, 11 / 16, 1 / 16, 12 / 16, "13", 0);

	render.addEntry(model);
}

createIncusRender(BlockID.incus, 49, 0);

Item.registerUseFunction(ItemID.incus, function (coords, item, block) {
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.incus);
	Player.decreaseCarriedItem(1);
});

Block.registerDropFunction("incus", function (coords, id, data, diggingLevel, toolLevel) {
	return [[ItemID.incus, 1, data]];
});
