/*  
     ______  __  __  __  __  ______  __  __________    ______  ______  ______  _____  _______    ______  _____
    / ____/ / / / / / / / / / __  / /_/ / __  __  /   / ____/ / __  / / __  / / ___/ /__  __/   / __  / / ___/
   / /___  / /_/_/ / /_/ / / /_/ / __  / / / / / /   / /     / /_/ / / /_/ / / /__     / /     / /_/ / / /__
  /___  / /   /   /___  / /   __/ / / / / / / / /   / /     /   __/ / __  / / ___/    / /     / ____/ / ___/
 ____/ / / /\ \  ____/ / / /\ \  / / / / / / / /   / /___  / /\ \  / / / / / /       / /     / /     / /__
/_____/ /_/ /_/ /_____/ /_/ /_/ /_/ /_/ /_/ /_/   /_____/ /_/ /_/ /_/ /_/ /_/       /_/     /_/     /____/
     ______    __  __    __________  __  ______  ______  __    __  _____   ______  __  __  __  __  __  __
    / __  /   / / / /   / __  __  / /_/ / __  / / __  / /  |  / / / __  / /___  / / / / / / / / / / / / /
   / /_/ /_  / /_/ /   / / / / / / __  / /_/ / / / / / /   | / / /_/ / /   __/ / / /_/_/ / /_/ / / / / /
  / ____  / /___  /   / / / / / / / / /   __/ / / / / / /| |/ /   __/_/   /_  / /   /   / __  / / / / /
 / /___/ / ____/ /   / / / / / / / / / /\ \  / /_/ / / / |   / __/ /_      / / / /\ \  / / / / /_/_/_/
/_______/ /_____/   /_/ /_/ /_/ /_/ /_/ /_/ /_____/ /_/  |__/ /_____/     /_/ /_/ /_/ /_/ /_/   /_/

*/
//lib
IMPORT("GUILib");
IMPORT("ToolType");
IMPORT("BackpackAPI");
IMPORT("MobLib");
IMPORT("ShootLib", "ShootLib");
IMPORT("SoundAPI");
IMPORT("AdvancedEvents");

//const
const GUI_SCALE = 3.2;

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//block type
var BLOCK_TYPE_STONE = Block.createSpecialType({
	opaque: false,
	destroytime: 3,
	lightopacity: 15,
});
var BLOCK_TYPE_WOOD = Block.createSpecialType({
	opaque: false,
	destroytime: 3,
	lightopacity: 15,
});
var BLOCK_TYPE_LIGHT = Block.createSpecialType({
	opaque: false,
	lightlevel: 15,
	destroytime: 3,
	lightopacity: 15,
});
var BLOCK_TYPE_LEAVES = Block.createSpecialType({
	opaque: true,
	lightopacity: 0,
});
var BLOCK_TYPE_FENCE = Block.createSpecialType({
	base: 101,
	opaque: false,
	lightopacity: 0,
});

//game message
Callback.addCallback("LevelLoaded", function () {
	Game.message("§dCreated by: §5Miron Popov. §9Helpers in code: §1MyzicCotic666 and 80LK");
});

//config
var debugMode = __config__.getBool("debug_mode");
Callback.addCallback("DestroyBlock", function (c, block, player) {
	if (debugMode) Debug.m(ToolAPI.getBlockMaterial(block.id));
	Debug.m(block);
});

//ShootLibSettings

var ShotType = ShootLib.ShotType;
var ButtonType = ShootLib.ButtonType;

ShootLib.init({
	image_button: true,
	left_handed: true,
	fire: {
		text: {
			content: "FIRE",
			size: 18,
		},
		bitmap: {
			name: "ui",
			coords: {
				x: 544,
				y: 0,
				width: 544,
				height: 544,
			},
			size: {
				width: 60,
				height: 60,
			},
		},
	},
	aim: {
		text: {
			content: "AIM",
			size: 18,
		},
		bitmap: {
			name: "ui",
			coords: {
				x: 0,
				y: 0,
				width: 544,
				height: 544,
			},
			size: {
				width: 69,
				height: 60,
			},
		},
	},
	crosshair: {
		bitmap: {
			name: "ui",
			coords: {
				x: 1088,
				y: 0,
				width: 64,
				height: 64,
			},
			size: {
				width: 60,
				height: 60,
			},
		},
	},
	reload: {
		text: {
			content: "8/8",
			size: 16,
		},
	},
});
