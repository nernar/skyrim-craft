IDRegistry.genBlockID("box");
Block.createBlock("box", [{ name: "Box", texture: [["box", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.box, "wood");

Item.registerUseFunction(ItemID.box, function (coords, item, block) {
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.box);
	Player.decreaseCarriedItem(1);
});

Block.registerDropFunction("box", function (coords, id, data, diggingLevel, toolLevel) {
	return [[ItemID.box, 1, data]];
});
