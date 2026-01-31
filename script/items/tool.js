IDRegistry.genItemID("secateurs");
Item.createItem("secateurs", "Secateurs", { name: "secateurs", meta: 0 }, { stack: 1 });
Item.setMaxDamage(ItemID.secateurs, 150);

IDRegistry.genItemID("rotater");
Item.createItem("rotater", "Rotater", { name: "rotater", meta: 0 }, { stack: 1 });

Callback.addCallback("ItemUse", function (c, i, b) {
	if (i.id == ItemID.rotater) {
		if (b.id == BlockID.chair) {
			var data = b.data + 1 <= 3 ? b.data + 1 : 0;
			World.setBlock(c.x, c.y, c.z, b.id, data);
		}
	}
});

Callback.addCallback("ItemUse", function (c, i, b) {
	if (i.id == ItemID.rotater) {
		if (b.id == BlockID.wardrobe) {
			var data = b.data + 1 <= 3 ? b.data + 1 : 0;
			World.setBlock(c.x, c.y, c.z, b.id, data);
		}
	}
});

Callback.addCallback("ItemUse", function (c, i, b) {
	if (i.id == ItemID.rotater) {
		if (b.id == BlockID.pedestal) {
			var data = b.data + 1 <= 3 ? b.data + 1 : 0;
			World.setBlock(c.x, c.y, c.z, b.id, data);
		}
	}
});

Callback.addCallback("ItemUse", function (c, i, b) {
	if (i.id == ItemID.rotater) {
		if (b.id == BlockID.showcase) {
			var data = b.data + 1 <= 3 ? b.data + 1 : 0;
			World.setBlock(c.x, c.y, c.z, b.id, data);
		}
	}
});
