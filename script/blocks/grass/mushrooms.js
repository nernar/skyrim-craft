IDRegistry.genBlockID("Tomato");
Block.createBlock("Tomato", [{ name: "Tomato", texture: [["", 0]], inCreative: false }]);
ToolAPI.registerBlockMaterial(BlockID.tomato, "plant");
function createTomatoRender(id, idMaterial, dataMaterial) {
	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(id, 0, render);
	var model = BlockRenderer.createModel();
	model.addBox(2 / 16, 0 / 16, 2 / 16, 3 / 16, 16 / 16, 3 / 16, "24", 0);
	model.addBox(13 / 16, 0 / 16, 13 / 16, 14 / 16, 16 / 16, 14 / 16, "24", 0);
	model.addBox(2 / 16, 0 / 16, 13 / 16, 3 / 16, 16 / 16, 14 / 16, "24", 0);
	model.addBox(13 / 16, 0 / 16, 2 / 16, 14 / 16, 16 / 16, 3 / 16, "24", 0);
	model.addBox(3 / 32, 0 / 16, 3 / 32, 29 / 32, 16 / 16, 29 / 31, [
		["notx", 0],
		["notx", 0],
		["42", 0],
		["42", 0],
		["42", 0],
		["42", 0],
	]);
	model.addBox(5 / 32, 0 / 16, 5 / 32, 27 / 32, 16 / 16, 27 / 31, "42", 0);
	model.addBox(6 / 32, 1 / 32, 6 / 32, 26 / 32, 31 / 32, 26 / 31, "40", 0);
	model.addBox(7 / 32, 2 / 32, 7 / 32, 25 / 32, 30 / 32, 25 / 31, "41", 0);
	render.addEntry(model);
}
createTomatoRender(BlockID.Tomato, 49, 0);
Item.registerUseFunction(ItemID.tomato, function (coords, item, block) {
	World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.Tomato);
	Player.decreaseCarriedItem(1);
});
Block.registerDropFunction("Tomato", function (coords, id, data, diggingLevel, toolLevel) {
	return [[ItemID.tomato, 1, data]];
});
IDRegistry.genBlockID("Tomato1");
Block.createBlock("Tomato1", [{ name: "Tomato1", texture: [["", 0]], inCreative: false }]);
ToolAPI.registerBlockMaterial(BlockID.Tomato1, "plant");
function createTomato1Render(id, idMaterial, dataMaterial) {
	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(id, 0, render);
	var model = BlockRenderer.createModel();
	model.addBox(2 / 16, 0 / 16, 2 / 16, 3 / 16, 16 / 16, 3 / 16, "24", 0);
	model.addBox(13 / 16, 0 / 16, 13 / 16, 14 / 16, 16 / 16, 14 / 16, "24", 0);
	model.addBox(2 / 16, 0 / 16, 13 / 16, 3 / 16, 16 / 16, 14 / 16, "24", 0);
	model.addBox(13 / 16, 0 / 16, 2 / 16, 14 / 16, 16 / 16, 3 / 16, "24", 0);
	model.addBox(3 / 32, 0 / 16, 3 / 32, 29 / 32, 16 / 16, 29 / 31, [
		["notx", 0],
		["notx", 0],
		["43", 0],
		["43", 0],
		["43", 0],
		["43", 0],
	]);
	model.addBox(5 / 32, 0 / 16, 5 / 32, 27 / 32, 16 / 16, 27 / 31, "43", 0);
	model.addBox(6 / 32, 1 / 32, 6 / 32, 26 / 32, 31 / 32, 26 / 31, "40", 0);
	model.addBox(7 / 32, 2 / 32, 7 / 32, 25 / 32, 30 / 32, 25 / 31, "41", 0);
	render.addEntry(model);
}
createTomato1Render(BlockID.Tomato1, 49, 0);
Block.registerDropFunction("Tomato1", function (coords, id, data, diggingLevel, toolLevel) {
	return [[ItemID.tomato, 3, 0]];
});
Block.setRandomTickCallback(BlockID.Tomato, function (x, y, z, id, data) {
	const rarity = __config__.access("plant_growth_time");
	if (Math.random() < rarity) {
		World.setBlock(x, y, z, BlockID.Tomato1, 0);
	}
});
Callback.addCallback("ItemUse", function (coords, item, block) {
	if (block.id == BlockID.Tomato1 && item.id == ItemID.secateurs) {
		const c = Player.getPosition();
		World.drop(c.x + 0.5, c.y, c.z + 0.5, ItemID.tomato, random(5, 9));
		World.setBlock(coords.x, coords.y, coords.z, BlockID.Tomato, 0);
		if (item.data + 1 >= Item.getMaxDamage(item.id)) Player.decreaseCarriedItem(1);
		else Player.setCarriedItem(item.id, item.count, item.data + 1);
	}
});
