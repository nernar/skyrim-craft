//wood

IDRegistry.genBlockID("columnT");
Block.createBlock("columnT", [{ name: "Column top", texture: [["44", 2]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.columnT, "wood");
Block.setShape(BlockID.columnT, 0.3, 0, 0.3, 0.7, 1, 0.7);

IDRegistry.genBlockID("column");
Block.createBlock("column", [{ name: "Column", texture: [["44", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.column, "wood");
Block.setShape(BlockID.column, 0.35, 0, 0.35, 0.65, 1, 0.65);

IDRegistry.genBlockID("columnF");
Block.createBlock("columnF", [{ name: "Column fat", texture: [["44", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.columnF, "wood");
Block.setShape(BlockID.columnF, 0.3, 0, 0.3, 0.7, 1, 0.7);

IDRegistry.genBlockID("columnD");
Block.createBlock("columnD", [{ name: "Column down", texture: [["44", 1]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.columnD, "wood");
Block.setShape(BlockID.columnD, 0.3, 0, 0.3, 0.7, 1, 0.7);

ToolAPI.registerBlockMaterial(BlockID.columnT, "wood");
ToolAPI.registerBlockMaterial(BlockID.column, "wood");
ToolAPI.registerBlockMaterial(BlockID.columnF, "wood");
ToolAPI.registerBlockMaterial(BlockID.columnD, "wood");

//bricks

IDRegistry.genBlockID("columnB");
Block.createBlock("columnB", [{ name: "Bricks column", texture: [["shoutWallEmpty", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.columnB, "stone");
Block.setShape(BlockID.columnB, 0.35, 0, 0.35, 0.65, 1, 0.65);

IDRegistry.genBlockID("columnBF");
Block.createBlock("columnBF", [{ name: "Bricks column fat", texture: [["shoutWallEmpty", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.columnBF, "stone");
Block.setShape(BlockID.columnBF, 0.3, 0, 0.3, 0.7, 1, 0.7);

IDRegistry.genBlockID("columnB1");
Block.createBlock("columnB1", [{ name: "Bricks column", texture: [["MessyBricks", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.columnB1, "stone");
Block.setShape(BlockID.columnB1, 0.35, 0, 0.35, 0.65, 1, 0.65);

IDRegistry.genBlockID("columnBF1");
Block.createBlock("columnBF1", [{ name: "Bricks column fat", texture: [["MessyBricks", 0]], inCreative: true }]);
ToolAPI.registerBlockMaterial(BlockID.columnBF1, "stone");
Block.setShape(BlockID.columnBF1, 0.3, 0, 0.3, 0.7, 1, 0.7);

ToolAPI.registerBlockMaterial(BlockID.columnB, "stone");
ToolAPI.registerBlockMaterial(BlockID.columnBF, "stone");
ToolAPI.registerBlockMaterial(BlockID.columnB1, "stone");
ToolAPI.registerBlockMaterial(BlockID.columnBF1, "stone");
