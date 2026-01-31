IDRegistry.genBlockID("carpet");
Block.createBlock("carpet", [{ name: "Carpet", texture: [["carpet", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.carpet, "stone");
Block.setShape(BlockID.carpet, 0, 0, 0, 1, 0.065, 1);

IDRegistry.genBlockID("carpet1");
Block.createBlock("carpet1", [{ name: "Carpet", texture: [["carpet", 1]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.carpet1, "stone");
Block.setShape(BlockID.carpet1, 0, 0, 0, 1, 0.065, 1);

IDRegistry.genBlockID("carpet2");
Block.createBlock("carpet2", [{ name: "Carpet", texture: [["carpet", 2]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.carpet2, "stone");
Block.setShape(BlockID.carpet2, 0, 0, 0, 1, 0.065, 1);
